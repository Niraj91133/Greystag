import { Router } from "express";
import { getAllCategories, createCategory, updateCategory, deleteCategory } from "./category.controller.js";
import { protect, authorize } from "../../../middleware/auth.middleware.js";

const router = Router();

router.get("/", getAllCategories);

// Admin-Protected Routes
router.post("/", protect, authorize("ADMIN"), createCategory);
router.put("/:id", protect, authorize("ADMIN"), updateCategory);
router.delete("/:id", protect, authorize("ADMIN"), deleteCategory);

export default router;
