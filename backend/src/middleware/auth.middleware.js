import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import prisma from "../config/db.js";
import { env } from "../config/env.js";

export const protect = asyncHandler(async (req, res, next) => {
    let token;

    // 1. Check if token exists in cookies or headers
    if (req.cookies?.token) {
        token = req.cookies.token;
    } else if (req.headers.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        throw new ApiError(401, "Not authorized to access this route");
    }

    try {
        // 2. Verify token
        const decoded = jwt.verify(token, env.JWT_SECRET);

        // 3. Get user from database
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                isActive: true,
            }
        });

        if (!user) {
            throw new ApiError(401, "User no longer exists");
        }

        if (!user.isActive) {
            throw new ApiError(403, "Your account has been deactivated");
        }

        // 4. Attach user to request
        req.user = user;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            throw new ApiError(401, "Session expired, please login again");
        }
        throw new ApiError(401, "Invalid token");
    }
});

// Role-based authorization
export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new ApiError(
                403,
                `User role ${req.user.role} is not authorized to access this route`
            );
        }
        next();
    };
};
