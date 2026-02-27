import prisma from "../../config/db.js";

/**
 * Logs a generic user activity
 */
export const logActivity = async (userId, action, metadata = {}) => {
    try {
        return await prisma.userActivity.create({
            data: {
                userId,
                action,
                metadata
            }
        });
    } catch (error) {
        console.error(`Failed to log activity [${action}] for user [${userId}]:`, error);
    }
};

/**
 * Creates a login history record and logs the activity
 */
export const startLoginSession = async (userId, ipAddress, device) => {
    try {
        // Create login history record
        await prisma.loginHistory.create({
            data: {
                userId,
                ipAddress,
                device
            }
        });

        // Log the activity
        await logActivity(userId, "LOGIN", { ipAddress, device });
    } catch (error) {
        console.error(`Failed to start login session for user [${userId}]:`, error);
    }
};

/**
 * Updates the latest login history record with logout time and logs the activity
 */
export const endLoginSession = async (userId) => {
    try {
        // Find the latest active session (where logoutAt is null)
        const latestSession = await prisma.loginHistory.findFirst({
            where: {
                userId,
                logoutAt: null
            },
            orderBy: {
                loginAt: 'desc'
            }
        });

        if (latestSession) {
            await prisma.loginHistory.update({
                where: { id: latestSession.id },
                data: { logoutAt: new Date() }
            });
        }

        // Log the activity
        await logActivity(userId, "LOGOUT");
    } catch (error) {
        console.error(`Failed to end login session for user [${userId}]:`, error);
    }
};
