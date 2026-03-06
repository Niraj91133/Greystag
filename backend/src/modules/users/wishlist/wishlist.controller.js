import prisma from "../../../config/db.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";
import { ApiResponse } from "../../../utils/ApiResponse.js";
import { ApiError } from "../../../utils/ApiError.js";

export const getWishlist = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const wishlist = await prisma.wishlist.findMany({
        where: { userId },
        include: {
            product: {
                select: {
                    id: true,
                    name: true,
                    price: true,
                    images: true,
                    category: true
                }
            }
        }
    });

    return res.status(200).json(new ApiResponse(200, wishlist, "Wishlist fetched"));
});

export const toggleWishlist = asyncHandler(async (req, res) => {
    const { productId } = req.body;
    const userId = req.user.id;

    if (!productId) throw new ApiError(400, "Product ID required");

    const existing = await prisma.wishlist.findFirst({
        where: { userId, productId }
    });

    if (existing) {
        await prisma.wishlist.delete({
            where: { id: existing.id }
        });
    } else {
        await prisma.wishlist.create({
            data: { userId, productId }
        });
    }

    const updatedWishlist = await prisma.wishlist.findMany({
        where: { userId },
        include: {
            product: {
                select: {
                    id: true,
                    name: true,
                    price: true,
                    images: true,
                    category: true
                }
            }
        }
    });

    return res.status(200).json(new ApiResponse(200, updatedWishlist, "Wishlist updated"));
});
