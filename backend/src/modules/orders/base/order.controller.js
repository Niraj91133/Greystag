import prisma from "../../../config/db.js";
import { ApiResponse } from "../../../utils/ApiResponse.js";

import { ApiError } from "../../../utils/ApiError.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";
import * as orderService from "./order.service.js";
import { createOrder as createOrderBodySchema, updateStatus as updateStatusBodySchema } from "../../../utils/validation.js";

export const createOrder = asyncHandler(async (req, res) => {
    const result = createOrderBodySchema.safeParse(req.body);
    if (!result.success) throw new ApiError(400, "Validation failed", result.error.format());


    const order = await orderService.createOrder(
        req.user.id,
        result.data.items,
        result.data.shippingAddressId
    );

    return res.status(201).json(new ApiResponse(201, order, "Order created successfully"));
});

export const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await prisma.order.findMany({
        where: { userId: req.user.id },
        orderBy: { createdAt: 'desc' },
        include: { orderItems: { include: { product: { select: { name: true } } } } }
    });
    return res.status(200).json(new ApiResponse(200, orders, "Orders fetched"));
});

export const getOrderById = asyncHandler(async (req, res) => {
    const order = await orderService.getOrderById(req.params.id, req.user.id, req.user.role);
    return res.status(200).json(new ApiResponse(200, order, "Order fetched"));
});

export const updateStatus = asyncHandler(async (req, res) => {
    const result = updateStatusBodySchema.safeParse(req.body);

    if (!result.success) throw new ApiError(400, "Validation error", result.error.format());

    const order = await orderService.updateOrderStatus(req.params.id, result.data.status, {
        trackingId: result.data.trackingId,
        courierPartner: result.data.courierPartner,
        productionStage: result.data.productionStage,
        estimatedDelivery: result.data.estimatedDelivery,
        adminNotes: result.data.adminNotes,
    });

    return res.status(200).json(new ApiResponse(200, order, "Order status updated"));
});

export const getAllOrders = asyncHandler(async (req, res) => {
    const orders = await prisma.order.findMany({
        orderBy: { createdAt: 'desc' },
        include: {
            user: { include: { measurement: true } },
            orderItems: { include: { product: true } },
            shippingAddress: true
        }
    });

    return res.status(200).json(new ApiResponse(200, orders, "All orders fetched"));
});
export const deleteOrder = asyncHandler(async (req, res) => {
    await prisma.order.delete({
        where: { id: req.params.id }
    });
    return res.status(200).json(new ApiResponse(200, null, "Order deleted"));
});
