import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// We don't want to throw an error immediately if URI is missing, 
// because we have a local fallback system.
// if (!MONGODB_URI) {
//     throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (!MONGODB_URI) {
        // Return null or throw specific error that our API routes can catch and ignore
        // throw new Error("No MongoDB URI provided"); 
        // Better: just return null so we can check if(conn) later
        console.warn("MONGODB_URI not defined, using local fallback.");
        return null;
    }

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        // Add error handling to the promise itself
        cached.promise = mongoose.connect(MONGODB_URI, opts)
            .then((mongoose) => {
                console.log("MongoDB Connected Successfully");
                return mongoose;
            })
            .catch(err => {
                console.error("MongoDB Connection Failed:", err.message);
                cached.promise = null; // Reset promise so we can retry later
                throw err;
            });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        // throw e; // Don't throw here if we want to allow fallback. 
        // But our API routes catch this error. So throwing is okay.
        // The user's error "querySrv ENOTFOUND" happens inside `mongoose.connect`
        // which we are now catching in the promise chain above.
        // However, 'await cached.promise' rethrows it.
        throw e;
    }

    return cached.conn;
}

export default dbConnect;
