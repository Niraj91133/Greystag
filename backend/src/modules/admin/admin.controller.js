import prisma from "../../config/db.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

export const getAllUsers = asyncHandler(async (req, res) => {
    const users = await prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
        include: { measurement: true }
    });
    return res.status(200).json(new ApiResponse(200, users, "Users fetched"));
});

export const getDashboardAnalytics = asyncHandler(async (req, res) => {
    // 1. Total Revenue
    const revenue = await prisma.order.aggregate({
        _sum: { total: true },
        where: { status: 'PAID' }
    });

    // 2. Orders count by status
    const ordersByStatus = await prisma.order.groupBy({
        by: ['status'],
        _count: { id: true }
    });

    // 3. Last 30 days daily sales
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const dailySales = await prisma.order.findMany({
        where: {
            status: 'PAID',
            createdAt: { gte: thirtyDaysAgo }
        },
        select: { total: true, createdAt: true }
    });

    return res.status(200).json(new ApiResponse(200, {
        totalRevenue: Number(revenue._sum.total || 0),
        statusBreakdown: ordersByStatus,
        recentSales: dailySales
    }, "Analytics fetched"));
});

export const updateUserMeasurements = asyncHandler(async (req, res) => {
    const { id: userId } = req.params;
    const measurements = req.body;

    const savedData = await prisma.measurement.upsert({
        where: { userId },
        update: { ...measurements, notificationSentAt: null },
        create: {
            ...measurements,
            userId,
            notificationSentAt: null
        }
    });


    return res.status(200).json(new ApiResponse(200, savedData, "User measurements updated"));
});
