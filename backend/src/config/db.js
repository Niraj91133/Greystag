import { PrismaClient } from "@prisma/client";
import { env } from "./env.js";
import logger from "./logger.js";

const prisma = new PrismaClient({
    log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});

// Middleware for logging query time in development
if (env.NODE_ENV === "development") {
    prisma.$use(async (params, next) => {
        const before = Date.now();
        const result = await next(params);
        const after = Date.now();

        // Simple query log
        // logger.debug(`Prisma Query ${params.model}.${params.action} took ${after - before}ms`);

        return result;
    });
}

export default prisma;
