import { Router } from "express";
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    uploadImages
} from "./product.controller.js";
import { protect, authorize } from "../../middleware/auth.middleware.js";
import multer from "multer";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/", getAllProducts);
router.get("/:id", getProductById);

router.use(protect);
router.use(authorize("ADMIN"));

router.post("/upload", upload.array('images', 4), uploadImages);
router.post("/", upload.array('images', 4), createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
