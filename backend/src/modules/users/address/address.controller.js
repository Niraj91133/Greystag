import prisma from "../../../config/db.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";
import { ApiResponse } from "../../../utils/ApiResponse.js";
import { ApiError } from "../../../utils/ApiError.js";

export const getMyAddresses = asyncHandler(async (req, res) => {
    const addresses = await prisma.address.findMany({
        where: { userId: req.user.id }
    });
    return res.status(200).json(new ApiResponse(200, addresses, "Addresses fetched"));
});

export const addAddress = asyncHandler(async (req, res) => {
    const { label, line1, line2, city, state, pincode, isDefault } = req.body;

    // If setting as default, unset others first
    if (isDefault) {
        await prisma.address.updateMany({
            where: { userId: req.user.id },
            data: { isDefault: false }
        });
    }

    const address = await prisma.address.create({
        data: {
            userId: req.user.id,
            label,
            line1,
            line2,
            city,
            state,
            pincode,
            isDefault: !!isDefault
        }
    });

    return res.status(201).json(new ApiResponse(201, address, "Address added"));
});

export const removeAddress = asyncHandler(async (req, res) => {
    const { id } = req.params;
    await prisma.address.delete({
        where: { id, userId: req.user.id }
    });
    return res.status(200).json(new ApiResponse(200, null, "Address removed"));
});

export const setDefaultAddress = asyncHandler(async (req, res) => {
    const { id } = req.params;

    await prisma.$transaction([
        prisma.address.updateMany({
            where: { userId: req.user.id },
            data: { isDefault: false }
        }),
        prisma.address.update({
            where: { id, userId: req.user.id },
            data: { isDefault: true }
        })
    ]);

    return res.status(200).json(new ApiResponse(200, null, "Default address updated"));
});
