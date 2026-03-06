import winston from "winston";
import "winston-daily-rotate-file";
import path from "path";
import fs from "fs";

/**
 * Enterprise Grade Logger
 * Configured for both traditional servers (File) and Serverless (Console)
 */

const logDir = "logs";
const isProduction = process.env.NODE_ENV === "production";
const isVercel = process.env.VERCEL === "1" || !!process.env.NOM_ENV; // Vercel check

// Custom format for human readability
const logFormat = winston.format.printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${stack || message}`;
});

const transports = [
    new winston.transports.Console({
        level: isProduction ? "info" : "debug",
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
            logFormat
        ),
    })
];

// ⚠️ IMPORTANT: Only use File Rotation if NOT on Vercel (Read-only System)
if (!isVercel && !isProduction) {
    try {
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir);
        }

        transports.push(
            new winston.transports.DailyRotateFile({
                filename: path.join(logDir, "error-%DATE%.log"),
                datePattern: "YYYY-MM-DD",
                zippedArchive: true,
                maxSize: "20m",
                maxFiles: "14d",
                level: "error",
            }),
            new winston.transports.DailyRotateFile({
                filename: path.join(logDir, "combined-%DATE%.log"),
                datePattern: "YYYY-MM-DD",
                zippedArchive: true,
                maxSize: "20m",
                maxFiles: "14d",
            })
        );
    } catch (e) {
        console.warn("⚠️ Logging to file system failed. Falling back to Console only.");
    }
}

export const logger = winston.createLogger({
    level: isProduction ? "info" : "debug",
    format: winston.format.combine(
        winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    transports
});

export default logger;
