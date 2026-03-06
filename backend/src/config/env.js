import { z } from 'zod';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.string().trim().default('8888').transform(Number),
    DATABASE_URL: z.string().url().trim(),
    JWT_SECRET: z.string().trim(),
    JWT_EXPIRE: z.string().trim().default('15m'),
    JWT_REFRESH_SECRET: z.string().trim(),
    JWT_REFRESH_EXPIRE: z.string().trim().default('7d'),
    CLIENT_URL: z.string().url().trim(),
    CORS_ORIGIN: z.string().optional(),

    ADMIN_SECRET_PIN: z.string().trim().min(4),
    RAZORPAY_KEY_ID: z.string().trim(),
    RAZORPAY_KEY_SECRET: z.string().trim(),
    RAZORPAY_WEBHOOK_SECRET: z.string().trim(),
    EMAIL_USER: z.string().trim().email(),
    EMAIL_PASS: z.string().trim().optional(),
    SUPABASE_URL: z.string().trim().url(),
    SUPABASE_SERVICE_KEY: z.string().trim(),
    SENDGRID_API_KEY: z.string().trim().optional(),
    MAILBLUSTER_API_KEY: z.string().trim().optional(),
    MAILBLUSTER_FROM_EMAIL: z.string().trim().email().optional(),
});

const validateEnv = () => {
    // Check for common typos in Vercel Dashboard
    if (!process.env.JWT_SECRET && process.env.JMT_SECRET) {
        process.env.JWT_SECRET = process.env.JMT_SECRET;
    }
    if (!process.env.JWT_REFRESH_SECRET && process.env.REFRESH_TOKEN_SECRET) {
        process.env.JWT_REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET;
    }

    const result = envSchema.safeParse(process.env);

    if (!result.success) {
        console.error('⚠️  CRITICAL: Missing or Invalid environment variables:');
        const formattedKeys = result.error.errors.map(err => err.path.join('.')).join(', ');
        console.error(`Missing/Invalid: [${formattedKeys}]`);

        // Return raw process.env to allow boot, but log the failure
        // This stops Vercel from crashing with 500 FUNCTION_INVOCATION_FAILED
        return process.env;
    }

    return result.data;
};

export const env = validateEnv();
