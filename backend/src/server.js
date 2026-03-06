import app from "./app.js";

/**
 * Serverless Entry Point
 * Vercel handles the invocation, so app.listen() is only for local development.
 */
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 8888;
    app.listen(PORT, () => {
        console.log(`🚀 Local Server running on port ${PORT}`);
        console.log(`🔗 Health check: http://localhost:${PORT}/health`);
    });
}

export default app;
