import express from "express";
import {
    register,
    login,
    refresh,
    logout,
    getMe,
    sendOTP,
    verifyOTP,
    completeProfile,
    saveMeasurements
} from "./auth.controller.js";
import { protect } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.get("/me", protect, getMe);

// OTP Flow
router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);
router.post("/complete-profile", protect, completeProfile);
router.post("/measurements", protect, saveMeasurements);

export default router;

