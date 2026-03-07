import { Router } from "express";
import { getCmsContent, updateCmsContent, updateCmsById, uploadMedia } from "./cms.controller.js";
import { protect, authorize } from "../../middleware/auth.middleware.js";
import multer from "multer";

const router = Router();

// Configure multer for large CMS files (e.g. Hero Videos)
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 50 * 1024 * 1024, // 50MB max
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = [
            'image/jpeg', 'image/png', 'image/webp', 'image/gif',
            'video/mp4', 'video/webm', 'video/quicktime'
        ];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only images and videos are allowed.'));
        }
    }
});

// Public Route
router.get("/", getCmsContent);
router.get("/behind-seams", (req, res, next) => {
    req.query.key = "behind-seams";
    getCmsContent(req, res, next);
});

// Admin-Protected Routes
router.post("/reels/upload", protect, authorize("ADMIN"), upload.single("images"), uploadMedia);
router.post("/upload", protect, authorize("ADMIN"), upload.single("images"), uploadMedia);
router.post("/", protect, authorize("ADMIN"), updateCmsContent);
router.put("/behind-seams", protect, authorize("ADMIN"), (req, res, next) => {
    req.body.key = "behind-seams";
    updateCmsContent(req, res, next);
});
router.put("/:id", protect, authorize("ADMIN"), updateCmsById);

export default router;

