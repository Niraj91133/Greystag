import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');
        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }
        const buffer = Buffer.from(await file.arrayBuffer());
        // Clean filename to be safe
        const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        const filename = `${Date.now()}-${cleanName}`;
        // Ensure directory exists
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        try {
            await fs.access(uploadDir);
        }
        catch {
            await fs.mkdir(uploadDir, { recursive: true });
        }
        const filePath = path.join(uploadDir, filename);
        await fs.writeFile(filePath, buffer);
        const publicUrl = `/uploads/${filename}`;
        return NextResponse.json({ url: publicUrl });
    }
    catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
