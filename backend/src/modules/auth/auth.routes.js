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
    try {
        const { email } = req.query;
        if (!email) return res.status(400).json({ error: "Email required" });

        const info = await sendEmail({
            to: email,
            subject: "Test Email from The Grey Stag",
            text: "If you receive this, your MailBluster configuration is working!"
        });

        if (info) res.json({ success: true, message: "Email sent!", data: info });
        else res.status(500).json({ success: false, error: "MailBluster failed. Check your API KEY." });

    } catch (error) {
        console.error("❌ Email Debug Error:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Final Export
export default router;

