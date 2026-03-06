import { createClient } from "@supabase/supabase-js";
import { env } from "./env.js";

/**
 * Supabase Client Config
 * Using the validated 'env' singleton instead of raw process.env
 * to benefit from typo protection and validation.
 */
export const supabase = createClient(
    env.SUPABASE_URL,
    env.SUPABASE_SERVICE_KEY
);
