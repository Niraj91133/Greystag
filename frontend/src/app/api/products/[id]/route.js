import dbConnect from '@/lib/db';
import Product from '@/lib/models/Product';
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const LOCAL_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'products.json');

// Helper to get local data
async function getLocalData() {
    try {
        const data = await fs.readFile(LOCAL_FILE_PATH, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

// Helper to save local data
async function saveLocalData(data) {
    await fs.writeFile(LOCAL_FILE_PATH, JSON.stringify(data, null, 2));
}

export async function PUT(request, { params }) {
    const { id } = await params;
    let body;
    try {
        body = await request.json();
    } catch (e) {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    try {
        await dbConnect();
        const product = await Product.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!product) {
            // Check if it exists in local file if not in DB? 
            // Or maybe simpler: if DB connect works but not found, return 404.
            // But if we are in hybrid mode (some in DB, some in file), we should check file too?
            // For now, let's assume if DB connects, we rely on DB. 
            // If DB FAILS, we use file.
            return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: product });
    } catch (error) {
        console.error("DB Error (PUT), using local file fallback:", error.message);
        try {
            const products = await getLocalData();
            const index = products.findIndex(p => p._id === id);

            if (index === -1) {
                return NextResponse.json({ success: false, error: 'Product not found locally' }, { status: 404 });
            }

            // Merge existing with new body
            const updatedProduct = { ...products[index], ...body };
            products[index] = updatedProduct;

            await saveLocalData(products);
            return NextResponse.json({ success: true, data: updatedProduct });
        } catch (fileError) {
            return NextResponse.json({ success: false, error: 'Failed to update local product' }, { status: 500 });
        }
    }
}

export async function DELETE(request, { params }) {
    const { id } = await params;

    try {
        await dbConnect();
        const deletedProduct = await Product.deleteOne({ _id: id });
        // If deleted count is 0, it might be in local file? 
        // If DB is up, we expect ID to be in DB. 
        // But let's stick to "If DB errors, use file".
        if (deletedProduct.deletedCount === 0) {
            return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        console.error("DB Error (DELETE), using local file fallback:", error.message);
        try {
            const products = await getLocalData();
            const filtered = products.filter(p => p._id !== id);

            if (filtered.length === products.length) {
                return NextResponse.json({ success: false, error: 'Product not found locally' }, { status: 404 });
            }

            await saveLocalData(filtered);
            return NextResponse.json({ success: true, data: {} });
        } catch (fileError) {
            return NextResponse.json({ success: false, error: 'Failed to delete local product' }, { status: 500 });
        }
    }
}
