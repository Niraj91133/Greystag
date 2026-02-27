import rateLimit from "express-rate-limit";
import { ApiError } from "../utils/ApiError.js";

/**
 * Standard API Rate Limiter
 */
export const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: {
        success: false,
        message: "Too many requests from this IP, please try again after 15 minutes."
    }
});

/**
 * Strict Limiter for Auth Routes (OTP Spam Protection)
 */
export const authLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 5, // Limit each IP to 5 OTP requests per 10 minutes
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res, next, options) => {
        throw new ApiError(429, options.message);
    },
    message: "Too many login attempts. Please try again after 10 minutes."
});

/**
 * Payment Route Limiter (To prevent fake order spam)
 */
export const paymentLimiter = rateLimit({
    windowMs: 30 * 60 * 1000, // 30 minutes
    max: 10,
    message: "Payment attempt limit reached. Please try again later."
});
