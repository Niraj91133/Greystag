import { Router } from "express";
import { getCmsContent, updateCmsContent, updateCmsById } from "./cms.controller.js";
import { protect, authorize } from "../../middleware/auth.middleware.js";

const router = Router();

// Public Route
router.get("/", getCmsContent);

// Admin-Protected Routes
router.post("/", protect, authorize("ADMIN"), updateCmsContent);
router.put("/:id", protect, authorize("ADMIN"), updateCmsById);

export default router;

