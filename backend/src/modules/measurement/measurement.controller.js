import prisma from "../../config/db.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

/**
 * Measurement Controller - Handles user tailoring profile
 */

export const saveMeasurements = asyncHandler(async (req, res) => {
    const {
        chest, waist, shoulder, neck, sleeve, inseam,
        height, lowerBodyShape, preferredFit, shoulderType, upperBodyShape
    } = req.body;

    const data = {
        chest: chest ? parseFloat(chest) : null,
        waist: waist ? parseFloat(waist) : null,
        shoulder: shoulder ? parseFloat(shoulder) : null,
        neck: neck ? parseFloat(neck) : null,
        sleeve: sleeve ? parseFloat(sleeve) : null,
        inseam: inseam ? parseFloat(inseam) : null,
        height,
        lowerBodyShape,
        preferredFit,
        shoulderType,
        upperBodyShape
    };

    // Remove undefined
    Object.keys(data).forEach(key => data[key] === undefined && delete data[key]);

    const user = await prisma.user.update({
        where: { id: req.user.id },
        data: {
            measurement: {
                upsert: {
                    create: data,
                    update: data
                }
            }
        },
        include: { measurement: true }
    });

    return res.status(200).json(new ApiResponse(200, user, "Measurements saved successfully"));
});

