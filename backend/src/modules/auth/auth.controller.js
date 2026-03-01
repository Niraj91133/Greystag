import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../../config/db.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { env } from "../../config/env.js";
import { sendEmail } from "../../utils/email.js";

/* ==============================
   TOKEN GENERATORS
============================== */

const generateAccessToken = (user) => {
    return jwt.sign(
        { id: user.id, role: user.role },
        env.JWT_SECRET,
        { expiresIn: env.JWT_EXPIRE || "15m" }
    );
};

const generateRefreshToken = (user) => {
    return jwt.sign(
        { id: user.id, role: user.role },
        env.JWT_REFRESH_SECRET,
        { expiresIn: env.JWT_REFRESH_EXPIRE || "7d" }
    );
};

const getCookieOptions = (req) => ({
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    sameSite: env.NODE_ENV === "production" ? "none" : "lax",
    path: "/",
});



// Help helper to set cookies and return response
const sendTokenResponse = async (user, statusCode, res, message, extraData = {}) => {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Store refresh token in DB
    await prisma.refreshToken.create({
        data: { token: refreshToken, userId: user.id }
    });

    const options = getCookieOptions(res.req);

    // Set cookies
    res.cookie("token", accessToken, {
        ...options,
        maxAge: 15 * 60 * 1000 // 15 mins
    });

    res.cookie("refreshToken", refreshToken, {
        ...options,
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    return res.status(statusCode).json(
        new ApiResponse(statusCode, {
            accessToken,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
                phone: user.phone,
                isActive: user.isActive
            },
            ...extraData
        }, message)
    );
};

/* ==============================
   OTP FLOW
============================== */

export const sendOTP = asyncHandler(async (req, res) => {
    const { email } = req.body;
    if (!email) throw new ApiError(400, "Email is required");

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

    let user = await prisma.user.findUnique({ where: { email } });

    if (user) {
        await prisma.user.update({
            where: { email },
            data: { otp, otpExpires }
        });
    } else {
        user = await prisma.user.create({
            data: { email, otp, otpExpires, role: "USER" }
        });
    }

    // Send email with OTP (Parallelize - don't block the response)
    sendEmail({
        to: email,
        subject: "Your OTP for The Grey Stag",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
                <h2 style="color: #000; text-align: center;">THE GREY STAG</h2>
                <p>Hello,</p>
                <p>Your One-Time Password (OTP) for login/registration is:</p>
                <div style="background: #f4f4f4; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px; color: #C2A46D;">
                    ${otp}
                </div>
                <p>This OTP is valid for 10 minutes. Do not share it with anyone.</p>
                <p>Best regards,<br/>The Grey Stag Team</p>
            </div>
        `
    }).catch(err => console.error("OTP Email Error:", err));

    console.log(`OTP for ${email}: ${otp}`);

    return res.status(200).json(
        new ApiResponse(200, { otp: env.NODE_ENV === 'development' ? otp : 'sent' }, "OTP sent successfully")
    );
});

export const verifyOTP = asyncHandler(async (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) throw new ApiError(400, "Email and OTP are required");

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.otp !== otp || new Date() > user.otpExpires) {
        throw new ApiError(401, "Invalid or expired OTP");
    }

    // Clear OTP after successful verification
    await prisma.user.update({
        where: { id: user.id },
        data: { otp: null, otpExpires: null, isVerified: true }
    });

    // Determine if we need to ask for profile (only for NEW users who don't have a name yet)
    const needsProfileUpdate = !user.name;

    return sendTokenResponse(user, 200, res, "OTP verified successfully", { needsProfileUpdate });
});

export const completeProfile = asyncHandler(async (req, res) => {
    const { name, phone } = req.body;
    const userId = req.user.id;

    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { name, phone }
    });

    return res.status(200).json(
        new ApiResponse(200, updatedUser, "Profile updated successfully")
    );
});

/* ==============================
   MEASUREMENTS
============================== */

export const saveMeasurements = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const {
        chest, waist, shoulder, neck, sleeve, inseam,
        height, lowerBodyShape, preferredFit, shoulderType, upperBodyShape
    } = req.body;

    // Filter and Convert to Float if provided
    const numericData = {
        chest: chest ? parseFloat(chest) : null,
        waist: waist ? parseFloat(waist) : null,
        shoulder: shoulder ? parseFloat(shoulder) : null,
        neck: neck ? parseFloat(neck) : null,
        sleeve: sleeve ? parseFloat(sleeve) : null,
        inseam: inseam ? parseFloat(inseam) : null,
    };

    const textData = {
        height,
        lowerBodyShape,
        preferredFit,
        shoulderType,
        upperBodyShape
    };

    // Remove undefined fields
    const data = {};
    [...Object.entries(numericData), ...Object.entries(textData)].forEach(([key, val]) => {
        if (val !== undefined) data[key] = val;
    });

    const updatedMeasurement = await prisma.measurement.upsert({
        where: { userId },
        update: { ...data, notificationSentAt: null },
        create: {
            ...data,
            userId,
            notificationSentAt: null
        }
    });


    // Return the full user object to refresh frontend context
    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { measurement: true, addresses: true }
    });

    return res.status(200).json(
        new ApiResponse(200, user, "Measurements saved successfully")
    );
});


/* ==============================
   REGISTER
============================== */

export const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) throw new ApiError(400, "User already exists");

    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

    const user = await prisma.user.create({
        data: { name, email, password: hashedPassword, role: "USER" }
    });

    return sendTokenResponse(user, 201, res, "User registered successfully");
});

/* ==============================
   LOGIN
============================== */

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || (user.password && !(await bcrypt.compare(password, user.password)))) {
        throw new ApiError(401, "Invalid email or password");
    }

    return sendTokenResponse(user, 200, res, "Login successful");
});

/* ==============================
   REFRESH TOKEN
============================== */

export const refresh = asyncHandler(async (req, res) => {
    const { refreshToken } = req.cookies;
    console.log("[Auth] Refresh attempt with cookies:", JSON.stringify(req.cookies));

    if (!refreshToken) {
        console.warn("[Auth] No refresh token found in cookies");
        throw new ApiError(401, "No refresh token");
    }


    const stored = await prisma.refreshToken.findFirst({
        where: { token: refreshToken }
    });

    if (!stored) throw new ApiError(401, "Invalid refresh token");

    let decoded;
    try {
        decoded = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET);
    } catch {
        throw new ApiError(401, "Expired refresh token");
    }

    const user = await prisma.user.findUnique({
        where: { id: decoded.id }
    });

    const newAccessToken = generateAccessToken(user);

    const options = getCookieOptions(req);
    res.cookie("token", newAccessToken, {
        ...options,
        maxAge: 15 * 60 * 1000
    });

    return res.status(200).json(
        new ApiResponse(200, { accessToken: newAccessToken }, "Token refreshed")
    );
});

/* ==============================
   GET ME
============================== */

export const getMe = asyncHandler(async (req, res) => {
    const user = await prisma.user.findUnique({
        where: { id: req.user.id },
        include: {
            addresses: true,
            measurement: true
        }
    });

    if (!user) throw new ApiError(404, "User not found");

    return res.status(200).json(
        new ApiResponse(200, user, "User profile fetched")
    );
});

/* ==============================
   LOGOUT
============================== */

export const logout = asyncHandler(async (req, res) => {
    const { refreshToken } = req.cookies;

    if (refreshToken) {
        await prisma.refreshToken.deleteMany({
            where: { token: refreshToken }
        });
    }

    const options = getCookieOptions(req);
    res.clearCookie("token", options);
    res.clearCookie("refreshToken", options);

    return res.status(200).json(
        new ApiResponse(200, null, "Logged out successfully")
    );
});

