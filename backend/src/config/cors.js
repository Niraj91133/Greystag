import { env } from "./env.js";

const allowedOrigins = [
    env.CLIENT_URL,
    env.CORS_ORIGIN,
    "https://thegreystag.in",
    "https://www.thegreystag.in",
    "https://greystag-frontend-23ir.vercel.app",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3001",
].filter(Boolean);

export const corsOptions = {
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl) or if in development
        if (!origin || env.NODE_ENV === 'development') {
            return callback(null, true);
        }

        // Check if origin is in allowed list OR is a Vercel preview URL
        if (allowedOrigins.includes(origin) || origin.endsWith('.vercel.app')) {
            callback(null, true);
        } else {
            console.warn(`[CORS] Rejected origin: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Cookie'],
};

