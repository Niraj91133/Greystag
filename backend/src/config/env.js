import { z } from 'zod';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.string().transform(Number).default('8888'),
    DATABASE_URL: z.string().url(),
    JWT_SECRET: z.string().min(32).trim(),
    JWT_EXPIRE: z.string().default('15m').trim(),
    JWT_REFRESH_SECRET: z.string().min(32).trim(),
    JWT_REFRESH_EXPIRE: z.string().default('7d').trim(),
    CLIENT_URL: z.string().url().trim(),
    CORS_ORIGIN: z.string().optional(),

    ADMIN_SECRET_PIN: z.string().min(4).trim(),
    RAZORPAY_KEY_ID: z.string().trim(),
    RAZORPAY_KEY_SECRET: z.string().trim(),
    RAZORPAY_WEBHOOK_SECRET: z.string().trim(),
    EMAIL_USER: z.string().email().trim(),
    EMAIL_PASS: z.string().trim(),
    SUPABASE_URL: z.string().url().trim(),
    SUPABASE_SERVICE_KEY: z.string().trim(),
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
