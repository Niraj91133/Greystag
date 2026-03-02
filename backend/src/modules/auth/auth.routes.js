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
import { sendEmail } from "../../utils/email.js";

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

// Debug Route: Test Email Connection
router.get("/test-email", async (req, res) => {
    const { email } = req.query;
    if (!email) return res.status(400).json({ error: "Email query param required" });

    const info = await sendEmail({
        to: email,
        subject: "Test Email from The Grey Stag",
        text: "If you receive this, your email configuration is working!"
    });

    if (info) res.json({ success: true, message: "Email sent!", messageId: info.messageId });
    else res.status(500).json({ success: false, error: "Failed to send email. Check Render logs for exact reason." });
});

export default router;

