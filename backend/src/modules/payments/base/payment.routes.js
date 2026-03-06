import { Router } from "express";
import {
    createRazorpayOrder,
    verifyPayment,
    handleWebhook
} from "./payment.controller.js";
import { protect } from "../../../middleware/auth.middleware.js";

const router = Router();

router.post("/create-order", protect, createRazorpayOrder);
router.post("/verify-payment", protect, verifyPayment);
router.post("/webhook", handleWebhook); // Public for Razorpay

export default router;
