import { ApiError } from "../utils/ApiError.js";
import logger from "../config/logger.js";
import { env } from "../config/env.js";

const errorHandler = (err, req, res, next) => {
    let error = err;

    // Convert generic errors to ApiError if they aren't already
    if (!(error instanceof ApiError)) {
        const statusCode = error.statusCode || 500;
        const message = error.message || "Internal Server Error";
        error = new ApiError(statusCode, message, err?.errors || [], err.stack);
    }

    const response = {
        ...error,
        message: error.message,
        ...(env.NODE_ENV === "development" ? { stack: error.stack } : {}),
    };

    // Log specialized error info
    logger.error(`${req.method} ${req.url} - ${error.message}`, {
        statusCode: error.statusCode,
        errors: error.errors,
        stack: error.stack,
    });

    return res.status(error.statusCode).json(response);
};

export { errorHandler };
