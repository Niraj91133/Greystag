import app from "./app.js";
import prisma from "./config/db.js";
import { env } from "./config/env.js";
import logger from "./config/logger.js";
import { initCronJobs } from "./utils/cron.js";

const PORT = process.env.PORT || 8888;

const startServer = async () => {
    try {
        // 1. Connect to Database
        await prisma.$connect();
        logger.info("✅ Database connection established");

        // 2. Initialize Cron Jobs
        initCronJobs();

        // 3. Start Listening (Only for local dev or traditional servers)
        if (process.env.NODE_ENV !== 'test') {
            app.listen(PORT, "0.0.0.0", () => {
                logger.info(`🚀 Server running in ${env.NODE_ENV} mode on port ${PORT}`);
                logger.info(`🔗 Health check: http://localhost:${PORT}/health`);
            });
        }

    } catch (error) {
        logger.error("❌ Failed to start server:", error);
    }
};

startServer();

export default app;
