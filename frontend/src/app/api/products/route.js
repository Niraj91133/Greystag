import dbConnect from '@/lib/db';
import Product from '@/lib/models/Product';
import { NextResponse } from 'next/server';
import { PRODUCTS } from '@/data/products';
import fs from 'fs/promises';
import path from 'path';

const LOCAL_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'products.json');

// Helper to ensure local file exists and get data
async function getLocalData() {
    try {
        const data = await fs.readFile(LOCAL_FILE_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // File doesn't exist, init with seed
        const seed = formatSeedProducts(PRODUCTS);
        await fs.writeFile(LOCAL_FILE_PATH, JSON.stringify(seed, null, 2));
        return seed;
    }
}

// Helper to format seed products to match schema structure
const formatSeedProducts = (list) => {
    return list.map(p => ({
        _id: p.id.toString(), // Mock ID
        name: p.name,
        price: typeof p.price === 'string' ? parseInt(p.price.replace(/[^0-9]/g, '')) : p.price,
        category: p.category,
        images: Array.isArray(p.image) ? p.image : [p.image],
        sizes: p.size || ['M', 'L'],
        colors: [p.color || 'Black'],
        displayLocations: ['Essential Collection', 'Featured'],
        status: 'Active',
        description: `A premium ${p.category} designed for modern needs.`,
        fabric: 'Premium Blend',
        stock: 50,
        createdAt: new Date().toISOString()
    }));
};

export async function GET() {
    try {
        await dbConnect();

        const products = await Product.find({});

        // Seed DB if empty
        if (products.length === 0) {
            console.log('Seeding DB from local data...');
            const seedDocs = formatSeedProducts(PRODUCTS);
            // Remove _id to let Mongo generate them or keep consistency? 
            // Better to let Mongo generate for real DB
            const mongoDocs = seedDocs.map(({ _id, ...rest }) => rest);
            await Product.insertMany(mongoDocs);
            return NextResponse.json(await Product.find({}));
        }

        return NextResponse.json(products);
    } catch (error) {
        console.error("DB Error (GET), using local file fallback:", error.message);
        const localData = await getLocalData();
        return NextResponse.json(localData);
    }
}

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch (e) {
        return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    try {
        await dbConnect();
        const product = await Product.create(body);
        return NextResponse.json({ success: true, data: product }, { status: 201 });
    } catch (error) {
        console.error("DB Error (POST), saving to local file:", error.message);
        try {
            const localData = await getLocalData();
            // Generate a simple ID
            const newId = Date.now().toString();
            const newProduct = {
                ...body,
                _id: newId,
                createdAt: new Date().toISOString()
            };

            // Add to local array
            localData.push(newProduct); // Add to end (or beginning?)

            // Save file
            await fs.writeFile(LOCAL_FILE_PATH, JSON.stringify(localData, null, 2));

            return NextResponse.json({ success: true, data: newProduct }, { status: 201 });
        } catch (fileError) {
            console.error("File save error:", fileError);
            return NextResponse.json({ success: false, error: 'Failed to save product locally' }, { status: 500 });
        }
    }
}
