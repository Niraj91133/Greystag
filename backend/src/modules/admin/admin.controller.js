import prisma from "../../config/db.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

export const getAllUsers = asyncHandler(async (req, res) => {
    const users = await prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
            isVerified: true,
            createdAt: true,
            lastLogin: true,
            phone: true,
            isActive: true,
            _count: {
                select: { orders: true }
            }
        }
    });
    return res.status(200).json(new ApiResponse(200, users, "Users list fetched"));
});

export const getFullUserProfile = asyncHandler(async (req, res) => {
    const { id: userId } = req.params;

    const userProfile = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            addresses: true,
            orders: {
                include: {
                    orderItems: { include: { product: true } }
                },
                orderBy: { createdAt: 'desc' }
            },
            measurement: true,
            cartItems: { include: { product: true } },
            wishlist: { include: { product: true } },
            loginHistories: { orderBy: { loginAt: 'desc' }, take: 10 },
            activities: { orderBy: { createdAt: 'desc' }, take: 20 }
        }
    });

    if (!userProfile) throw new ApiError(404, "User not found");

    return res.status(200).json(new ApiResponse(200, userProfile, "Full user ecosystem fetched"));
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
