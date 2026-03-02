import app from "./app.js";
import prisma from "./config/db.js";
import { env } from "./config/env.js";
import logger from "./config/logger.js";
import { initCronJobs } from "./utils/cron.js";

console.log("--- ENV CHECK START ---");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("PORT:", process.env.PORT);
console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);
console.log("SUPABASE_URL exists:", !!process.env.SUPABASE_URL);
console.log("RAZORPAY_KEY exists:", !!process.env.RAZORPAY_KEY_ID);
console.log("EMAIL_USER exists:", !!process.env.EMAIL_USER);
console.log("--- ENV CHECK END ---");

const PORT = process.env.PORT || 8888;
if (isNaN(PORT)) {
    console.error("❌ Invalid PORT:", process.env.PORT);
}

const startServer = async () => {
    try {
        // 1. Connect to Database
        await prisma.$connect();
        logger.info("✅ Database connection established");
        // 2. Initialize Cron Jobs
        initCronJobs();
        // 3. Start Listening
        const server = app.listen(PORT, "0.0.0.0", () => {
            logger.info(`🚀 Server running in ${env.NODE_ENV} mode on port ${PORT}`);
            logger.info(`🔗 Health check: http://localhost:${PORT}/health`);
        });

        // 3. Graceful Shutdown
        const exitHandler = () => {
            if (server) {
                server.close(() => {
                    logger.info("Server closed");
                    process.exit(1);
                });
            } else {
                process.exit(1);
            }
        };

        const unexpectedErrorHandler = (error) => {
            logger.error("Unexpected Error", error);
            exitHandler();
        };

        process.on("uncaughtException", unexpectedErrorHandler);
        process.on("unhandledRejection", unexpectedErrorHandler);

        process.on("SIGTERM", () => {
            logger.info("SIGTERM received");
            if (server) {
                server.close();
            }
        });

    } catch (error) {
        logger.error("❌ Failed to start server:", error);
        process.exit(1);
    }
};

startServer();
