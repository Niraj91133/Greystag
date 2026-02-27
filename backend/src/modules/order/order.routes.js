import { Router } from "express";
import {
    createOrder,
    getMyOrders,
    getOrderById,
    getAllOrders,
    updateStatus,
    deleteOrder
} from "./order.controller.js";

import { protect, authorize } from "../../middleware/auth.middleware.js";

const router = Router();

router.use(protect);

router.post("/", createOrder);
router.get("/my-orders", getMyOrders);
router.get("/:id", getOrderById);

// Admin-Only
router.get("/", authorize("ADMIN"), getAllOrders);
router.patch("/:id/status", authorize("ADMIN"), updateStatus);
router.delete("/:id", authorize("ADMIN"), deleteOrder);

export default router;

