import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
export const dynamic = 'force-dynamic';
const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'cms-content.json');
export async function GET() {
    try {
        const fileContent = await fs.readFile(DATA_FILE_PATH, 'utf-8');
        const data = JSON.parse(fileContent);
        return NextResponse.json(data);
    }
    catch (error) {
        console.error('Error reading CMS content:', error);
        return NextResponse.json({ error: 'Failed to read content' }, { status: 500 });
    }
}
export async function POST(request) {
    try {
        const body = await request.json();
        await fs.writeFile(DATA_FILE_PATH, JSON.stringify(body, null, 2), 'utf-8');
        return NextResponse.json({ success: true, message: 'Content saved' });
    }
    catch (error) {
        console.error('Error saving CMS content:', error);
        return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
    }
}
