import { z } from 'zod';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.string().transform(Number).default('8888'),
    DATABASE_URL: z.string().url(),
    JWT_SECRET: z.string().min(32, "JWT_SECRET must be at least 32 characters"),
    JWT_EXPIRE: z.string().default('15m'),
    JWT_REFRESH_SECRET: z.string().min(32, "JWT_REFRESH_SECRET must be at least 32 characters"),
    JWT_REFRESH_EXPIRE: z.string().default('7d'),
    CLIENT_URL: z.string().url(),
    CORS_ORIGIN: z.string().optional(),

    ADMIN_SECRET_PIN: z.string().min(4),
    RAZORPAY_KEY_ID: z.string(),
    RAZORPAY_KEY_SECRET: z.string(),
    RAZORPAY_WEBHOOK_SECRET: z.string(),
    EMAIL_USER: z.string().email(),
    EMAIL_PASS: z.string(),
    SUPABASE_URL: z.string().url(),
    SUPABASE_SERVICE_KEY: z.string(),
});

const validateEnv = () => {
    try {
        return envSchema.parse(process.env);
    } catch (error) {
        console.error('❌ Invalid environment variables:');
        console.error(JSON.stringify(error.format(), null, 2));
        process.exit(1);
    }
};

export const env = validateEnv();
