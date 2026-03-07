import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_KEY");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function ensureBuckets() {
    const buckets = ["menx", "website-media", "cms-media"];

    for (const bucketName of buckets) {
        console.log(`Checking bucket: ${bucketName}...`);
        const { data: bucket, error: getError } = await supabase.storage.getBucket(bucketName);

        if (getError) {
            console.log(`Bucket ${bucketName} not found, creating...`);
            const { data, error: createError } = await supabase.storage.createBucket(bucketName, {
                public: true,
                allowedMimeTypes: [
                    'image/png', 'image/jpeg', 'image/webp', 'image/gif',
                    'video/mp4', 'video/webm', 'video/quicktime'
                ],
                fileSizeLimit: 52428800 // 50MB
            });

            if (createError) {
                console.error(`Error creating bucket ${bucketName}:`, createError);
            } else {
                console.log(`Bucket ${bucketName} created successfully.`);
            }
        } else {
            console.log(`Bucket ${bucketName} already exists.`);
        }
    }
}

ensureBuckets();
