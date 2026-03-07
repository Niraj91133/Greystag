import { uploadFile } from "./src/utils/supabase.js";
import fs from 'fs';
import path from 'path';

async function testUpload() {
    try {
        // Create a dummy file object similar to Multer's
        console.log("Starting test upload...");

        const dummyFile = {
            originalname: 'test_image.png',
            mimetype: 'image/png',
            buffer: Buffer.from('dummy data'),
        };

        const url = await uploadFile(dummyFile);
        console.log("Success! Uploaded URL:", url);
    } catch (error) {
        console.error("Upload test failed:", error);
    }
}

testUpload();
