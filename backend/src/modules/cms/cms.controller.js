import prisma from "../../config/db.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";
import { uploadFile } from "../../utils/supabase.js";

/**
 * CMS Controller - Handles dynamic content management
 */

export const getCmsContent = asyncHandler(async (req, res) => {
    const { key } = req.query;
    if (!key) throw new ApiError(400, "CMS key is required");

    const content = await prisma.cMSPage.findUnique({
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

    const cmsPage = await prisma.cMSPage.upsert({
        where: { key },
        update: { data },
        create: { key, data }
    });

    return res.status(200).json(new ApiResponse(200, cmsPage.data, "CMS content updated successfully"));
});

export const updateCmsById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;

    const cmsPage = await prisma.cMSPage.update({
        where: { id },
        data: { data }
    });

    return res.status(200).json(new ApiResponse(200, cmsPage.data, "CMS content updated by ID"));
});

export const uploadMedia = asyncHandler(async (req, res) => {
    if (!req.file) {
        throw new ApiError(400, "No media file provided");
    }

    // folder name can be passed via field, or default to cms
    const { folder = "cms" } = req.body;

    // uploadFile internally handles the Supabase interaction
    const url = await uploadFile(req.file, "cms-media"); // Dedicated bucket for CMS

    if (!url) throw new ApiError(500, "Failed to upload to Supabase");

    return res.status(200).json(new ApiResponse(200, url, "Media uploaded successfully"));
});
