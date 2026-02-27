import prisma from "../../config/db.js";
import { ApiError } from "../../utils/ApiError.js";

/**
 * Robust Order Service
 */

export const createOrder = async (userId, items, shippingAddressId) => {
    return await prisma.$transaction(async (tx) => {
        let total = 0;
        const orderItemsData = [];

        for (const item of items) {
            const product = await tx.product.findUnique({
                where: { id: item.productId },
            });

            if (!product) throw new ApiError(404, `Product ${item.productId} not found`);
            if (!product.isActive) throw new ApiError(400, `Product ${product.name} is currently unavailable`);

            const itemPrice = Number(product.price);
            total += itemPrice * item.quantity;

            orderItemsData.push({
                productId: product.id,
                quantity: item.quantity,
                price: product.price,
                size: item.size || 'M',
                color: item.color || 'Standard',
                customization: item.customization || null,
            });
        }


        // Create the order
        const order = await tx.order.create({
            data: {
                userId,
                shippingAddressId,
                total,
                status: 'PENDING',
                orderItems: { create: orderItemsData },
            },
            include: {
                orderItems: { include: { product: { select: { name: true } } } },
                shippingAddress: true,
            }
        });

        // Clear user cart
        await tx.cart.deleteMany({ where: { userId } });

        return order;
    });
};

export const updateOrderStatus = async (orderId, status, trackingData = {}) => {
    const allowedStatuses = ["PENDING", "PAID", "IN_PRODUCTION", "SHIPPED", "DELIVERED", "CANCELLED"];
    if (!allowedStatuses.includes(status)) throw new ApiError(400, "Invalid status");

    const updateData = { status };

    if (trackingData.trackingId) updateData.trackingId = trackingData.trackingId;
    if (trackingData.courierPartner) updateData.courierPartner = trackingData.courierPartner;

    if (status === 'SHIPPED') updateData.shippedAt = new Date();
    if (status === 'DELIVERED') updateData.deliveredAt = new Date();

    const order = await prisma.order.update({
        where: { id: orderId },
        data: updateData,
        include: { user: { select: { email: true, name: true } } }
    });

    return order;
};

export const getOrderById = async (orderId, userId, role) => {
    const order = await prisma.order.findUnique({
        where: { id: orderId },
        include: {
            orderItems: { include: { product: true } },
            shippingAddress: true,
            user: { select: { name: true, email: true, phone: true } }
        }
    });

    if (!order) throw new ApiError(404, "Order not found");

    // Access Control
    if (role !== 'ADMIN' && order.userId !== userId) {
        throw new ApiError(403, "Access denied to this order");
    }

    return order;
};
