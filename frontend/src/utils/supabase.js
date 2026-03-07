import { createClient } from "@supabase/supabase-js";

// Note: Use environment variables for security. 
// In Next.js, variables prefixed with NEXT_PUBLIC_ are exposed to the browser.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase credentials missing. Media uploads will not work.");
}

// Only initialize if we have a valid URL to prevent build-time crashes
export const supabase = (supabaseUrl && supabaseUrl.startsWith('http'))
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

/**
 * Uploads a file to Supabase Storage
 * @param {File} file - The file object to upload
 * @param {string} folder - Folder name in the bucket (e.g., 'hero-section', 'products')
 * @returns {Promise<string|null>} - Public URL of the uploaded file or null if failed
 */
export const uploadFile = async (file, folder = "general") => {
    if (!file || !supabase) {
        console.error("Upload failed: File or Supabase client missing", { file, hasSupabase: !!supabase });
        return null;
    }

    try {
        console.log(`[Supabase Frontend] Uploading to bucket 'menx', folder: ${folder}`);
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `${folder}/${fileName}`;

        const { data, error } = await supabase.storage
            .from("menx")
            .upload(filePath, file, {
                cacheControl: '3600',
                upsert: false
            });

        if (error) {
            console.error("[Supabase Frontend Error]:", error);
            // If bucket not found, it might be the reason
            if (error.message?.includes('bucket not found')) {
                console.warn("Bucket 'menx' not found. Please ensure it exists in Supabase storage.");
            }
            return null;
        }

        const { data: publicUrlData } = supabase.storage
            .from("menx")
            .getPublicUrl(filePath);

        console.log("[Supabase Frontend Success]:", publicUrlData.publicUrl);
        return publicUrlData.publicUrl;
    } catch (err) {
        console.error("[Supabase Frontend Unexpected Error]:", err);
        return null;
    }
};
