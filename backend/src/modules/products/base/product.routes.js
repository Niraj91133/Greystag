import { Router } from "express";
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    uploadImages
} from "./product.controller.js";
import { protect, authorize } from "../../../middleware/auth.middleware.js";
import multer from "multer";

const router = Router();
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit for products
    fileFilter: (req, file, cb) => {
        const allowedTypes = [
            'image/jpeg', 'image/png', 'image/webp',
            'video/mp4', 'video/webm', 'video/quicktime'
        ];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only images and videos are allowed.'));
        }
    }
});

router.get("/", getAllProducts);
router.get("/:id", getProductById);

router.use(protect);
router.use(authorize("ADMIN"));

router.post("/upload", upload.array('images', 4), uploadImages);
router.post("/", upload.array('images', 4), createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
