import { ApiError } from "../utils/ApiError.js";

export const validate = (schema) => (req, res, next) => {
    try {
        const validated = schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });

        // Replace original with validated data
        req.body = validated.body || req.body;
        req.query = validated.query || req.query;
        req.params = validated.params || req.params;

        next();
    } catch (error) {
        const errorMessage = error.errors
            ? error.errors.map((err) => `${err.path.join(".")}: ${err.message}`).join(", ")
            : error.message;

        throw new ApiError(400, errorMessage, error.errors);
    }
};
