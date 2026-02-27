import { supabase } from "../config/supabase.js";
import { v4 as uuidv4 } from "uuid";
import { ApiError } from "./ApiError.js";

/**
 * Upload a file to Supabase Storage
 * @param {Object} file - The file object from multer (memoryStorage)
 * @param {string} bucket - The bucket name (default: 'menx')
 * @returns {Promise<string>} - The public URL of the uploaded file
 */
export const uploadFile = async (file, bucket = "menx") => {
    if (!file) return null;

    const fileExt = file.originalname.split(".").pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data, error } = await supabase.storage
        .from(bucket)
        .upload(filePath, file.buffer, {
            contentType: file.mimetype,
            upsert: true,
        });

    if (error) {
        console.error("Supabase Upload Error:", error);
        throw new ApiError(500, `Failed to upload file to Supabase: ${error.message}`);
    }

    const { data: publicUrlData } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

    return publicUrlData.publicUrl;
};

/**
 * Delete a file from Supabase Storage
 * @param {string} url - The public URL of the file
 * @param {string} bucket - The bucket name
 */
export const deleteFile = async (url, bucket = "menx") => {
    if (!url) return;

    try {
        const urlObj = new URL(url);
        const pathParts = urlObj.pathname.split("/");
        const fileName = pathParts[pathParts.length - 1];

        const { error } = await supabase.storage.from(bucket).remove([fileName]);
        if (error) throw error;
    } catch (error) {
        console.error("Supabase Delete Error:", error);
    }
};
