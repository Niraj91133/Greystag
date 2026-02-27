import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import compression from "compression";

import { errorHandler } from "./middleware/error.middleware.js";
import { apiLimiter } from "./middleware/rateLimit.middleware.js";
import { env } from "./config/env.js";
import { corsOptions } from "./config/cors.js";
import router from "./routes/v1.js";

const app = express();

/* -------------------- Security -------------------- */
app.use(helmet({
    crossOriginResourcePolicy: false,
    contentSecurityPolicy: env.NODE_ENV === "production" ? undefined : false,
}));

app.use(cors({
    ...corsOptions,
    credentials: true, // 🔥 important for cookies
}));

/* -------------------- Parsers -------------------- */
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

/* -------------------- Performance -------------------- */
app.use(compression());

/* -------------------- Logging -------------------- */
if (env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

/* -------------------- Rate Limiting -------------------- */
app.use("/api", apiLimiter);

/* -------------------- Routes -------------------- */
app.use("/api/v1", router);
app.use("/", router);

/* -------------------- Health -------------------- */
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy",
    });
});

/* -------------------- 404 -------------------- */
app.use("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`,
    });
});

/* -------------------- Error Handler -------------------- */
app.use(errorHandler);

export default app;