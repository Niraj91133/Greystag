import prisma from "../../config/db.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";

/**
 * CMS Controller - Handles dynamic content management
 */

export const getCmsContent = asyncHandler(async (req, res) => {
    const { key } = req.query;
    if (!key) throw new ApiError(400, "CMS key is required");

    const content = await prisma.globalCMS.findUnique({
        where: { key }
    });

    if (!content) {
        return res.status(200).json(new ApiResponse(200, {}, "No content found for this key"));
    }

    return res.status(200).json(new ApiResponse(200, content.data, "CMS content fetched"));
});

export const updateCmsContent = asyncHandler(async (req, res) => {
    const { key, data } = req.body;
    if (!key || !data) throw new ApiError(400, "Key and Data are required");

    const cms = await prisma.globalCMS.upsert({
        where: { key },
        update: { data },
        create: { key, data }
    });

    return res.status(200).json(new ApiResponse(200, cms.data, "CMS content updated successfully"));
});

export const updateCmsById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;

    const cms = await prisma.globalCMS.update({
        where: { id },
        data: { data }
    });

    return res.status(200).json(new ApiResponse(200, cms.data, "CMS content updated by ID"));
});
