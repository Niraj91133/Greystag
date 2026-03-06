import prisma from "../../../config/db.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";
import { ApiError } from "../../../utils/ApiError.js";
import { ApiResponse } from "../../../utils/ApiResponse.js";
import { uploadFile } from "../../../utils/supabase.js";

export const getAllProducts = asyncHandler(async (req, res) => {
    const { category, search } = req.query;

    const products = await prisma.product.findMany({
        where: {
            isActive: true,
            ...(category && { category: { slug: category } }),
            ...(search && {
                OR: [
                    { name: { contains: search, mode: 'insensitive' } },
                    { description: { contains: search, mode: 'insensitive' } }
                ]
            })
        },
        include: { category: true }
    });

    return res.status(200).json(new ApiResponse(200, products, "Products fetched"));
});

export const getProductById = asyncHandler(async (req, res) => {
    const product = await prisma.product.findUnique({
        where: { id: req.params.id },
        include: { category: true }
    });

    if (!product) throw new ApiError(404, "Product not found");

    return res.status(200).json(new ApiResponse(200, product, "Product fetched"));
});

const prepareProductData = async (data) => {
    const {
        title, name, description, price, stock, images,
        category, type, sizes, colors, fabric, details,
        videoUrl, externalLink, isActive, inStock,
        displayLocations, occasions
    } = data;

    // Find category ID if name is provided
    let categoryId = data.categoryId;
    const catName = category || type;
    if (!categoryId && catName) {
        let cat = await prisma.category.findFirst({
            where: { name: { equals: catName, mode: 'insensitive' } }
        });

        // If category doesn't exist in DB, create it
        if (!cat) {
            const slug = catName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            cat = await prisma.category.create({
                data: { name: catName, slug: slug }
            });
        }

        if (cat) categoryId = cat.id;
    }

    return {
        name: name || title,
        title: title || name,
        description,
        price,
        stock: stock ? parseInt(stock) : 0,
        images: images || [],
        categoryId,
        sizes: sizes || [],
        colors: colors || [],
        fabric,
        details: details || [],
        videoUrl,
        externalLink,
        isActive: isActive !== undefined ? isActive : true,
        inStock: inStock !== undefined ? inStock : true,
        displayLocations: displayLocations || ["Category PLP"],
        occasions: occasions || []
    };
};

export const createProduct = asyncHandler(async (req, res) => {
    const data = await prepareProductData(req.body);
    const product = await prisma.product.create({
        data,
        include: { category: true }
    });
    return res.status(201).json(new ApiResponse(201, product, "Product created"));
});

export const updateProduct = asyncHandler(async (req, res) => {
    const data = await prepareProductData(req.body);
    const product = await prisma.product.update({
        where: { id: req.params.id },
        data,
        include: { category: true }
    });
    return res.status(200).json(new ApiResponse(200, product, "Product updated"));
});


export const deleteProduct = asyncHandler(async (req, res) => {
    await prisma.product.update({
        where: { id: req.params.id },
        data: { isActive: false }
    });
    return res.status(200).json(new ApiResponse(200, null, "Product deactivated"));
});

export const uploadImages = asyncHandler(async (req, res) => {

    if (!req.files || req.files.length === 0) {
        throw new ApiError(400, "No images provided");
    }

    const uploadPromises = req.files.map(file => uploadFile(file));
    const urls = await Promise.all(uploadPromises);

    return res.status(200).json(new ApiResponse(200, urls, "Images uploaded successfully"));
});

