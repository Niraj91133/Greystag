import { env } from "./env.js";

const allowedOrigins = [
    env.CLIENT_URL,
    env.CORS_ORIGIN,
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3001",
].filter(Boolean);

export const corsOptions = {
    origin: true, // This reflected origin is effectively same as '*' but allows credentials
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Cookie'],
};

