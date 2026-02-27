import prisma from "../../config/db.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

export const getCart = asyncHandler(async (req, res) => {
    const cartItems = await prisma.cart.findMany({
        where: { userId: req.user.id },
        include: { product: true }
    });
    return res.status(200).json(new ApiResponse(200, cartItems, "Cart fetched"));
});

export const addToCart = asyncHandler(async (req, res) => {
    const { productId, quantity, size, color } = req.body;

    const cartItem = await prisma.cart.upsert({
        where: {
            userId_productId_size_color: {
                userId: req.user.id,
                productId,
                size: size || 'M',
                color: color || 'Standard'
            }
        },
        update: { quantity: { increment: quantity || 1 } },
        create: {
            userId: req.user.id,
            productId,
            quantity: quantity || 1,
            size: size || 'M',
            color: color || 'Standard'
        }
    });

    return res.status(200).json(new ApiResponse(200, cartItem, "Item added to cart"));
});

export const removeFromCart = asyncHandler(async (req, res) => {
    const { id } = req.params;
    await prisma.cart.delete({
        where: { id, userId: req.user.id }
    });
    return res.status(200).json(new ApiResponse(200, null, "Item removed from cart"));
});

export const updateCartItem = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    const cartItem = await prisma.cart.update({
        where: { id, userId: req.user.id },
        data: { quantity }
    });

    return res.status(200).json(new ApiResponse(200, cartItem, "Cart updated"));
});
