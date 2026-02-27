import app from "./app.js";
import prisma from "./config/db.js";
import { env } from "./config/env.js";
import logger from "./config/logger.js";
import { initCronJobs } from "./utils/cron.js";


const PORT = env.PORT || 8888;

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
