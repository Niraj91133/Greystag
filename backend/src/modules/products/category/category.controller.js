import prisma from "../../../config/db.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";
import { ApiError } from "../../../utils/ApiError.js";
import { ApiResponse } from "../../../utils/ApiResponse.js";

export const getAllCategories = asyncHandler(async (req, res) => {
    const categories = await prisma.category.findMany({
        where: req.query.activeOnly === 'true' ? { isActive: true } : {},
        orderBy: { name: 'asc' },
        include: { _count: { select: { products: true } } }
    });
    return res.status(200).json(new ApiResponse(200, categories, "Categories fetched"));
});

export const createCategory = asyncHandler(async (req, res) => {
    const { name, description, image, isActive } = req.body;
    if (!name) throw new ApiError(400, "Category name is required");

    const slug = name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    const category = await prisma.category.create({
        data: { name, slug, description, image, isActive: isActive ?? true }
    });
    return res.status(201).json(new ApiResponse(201, category, "Category created successfully"));
});

export const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, description, image, isActive } = req.body;

    const data = { description, image, isActive };
    if (name) {
        data.name = name;
        data.slug = name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }

    const category = await prisma.category.update({
        where: { id },
        data
    });
    return res.status(200).json(new ApiResponse(200, category, "Category updated successfully"));
});

export const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const productsCount = await prisma.product.count({ where: { categoryId: id } });
    if (productsCount > 0) {
        throw new ApiError(400, "Cannot delete category with associated products. Move products first.");
    }

    await prisma.category.delete({ where: { id } });
    return res.status(200).json(new ApiResponse(200, null, "Category deleted successfully"));
});
