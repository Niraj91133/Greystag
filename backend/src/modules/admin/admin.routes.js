import { Router } from "express";
import {
    getAllUsers,
    getDashboardAnalytics,
    updateUserMeasurements
} from "./admin.controller.js";
import { protect, authorize } from "../../middleware/auth.middleware.js";

const router = Router();

router.use(protect);
router.use(authorize("ADMIN"));

router.get("/users", getAllUsers);
router.get("/analytics", getDashboardAnalytics);
router.post("/users/:id/measurements", updateUserMeasurements);

export default router;
