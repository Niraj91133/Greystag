import { razorpay } from "../../../config/razorpay.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";
import { ApiError } from "../../../utils/ApiError.js";
import { ApiResponse } from "../../../utils/ApiResponse.js";
import prisma from "../../../config/db.js";
import crypto from "crypto";
import { env } from "../../../config/env.js";
import { sendPaymentConfirmationEmail } from "../../../utils/email.js";


export const createRazorpayOrder = asyncHandler(async (req, res) => {
    const { orderId } = req.body;

    const order = await prisma.order.findUnique({
        where: { id: orderId }
    });

    if (!order) throw new ApiError(404, "Order not found");

    const options = {
        amount: Math.round(Number(order.total) * 100), // In paise
        currency: "INR",
        receipt: `rcpt_${order.id.substring(0, 30)}`,
    };

    const rpayOrder = await razorpay.orders.create(options);

    // Update the local order with the Razorpay Order ID
    await prisma.order.update({
        where: { id: orderId },
        data: { razorpayOrderId: rpayOrder.id }
    });

    return res.status(200).json(new ApiResponse(200, {
        ...rpayOrder,
        key: env.RAZORPAY_KEY_ID
    }, "Razorpay order created"));
});


export const verifyPayment = asyncHandler(async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        throw new ApiError(400, "Missing Razorpay payment details");
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
        .createHmac("sha256", env.RAZORPAY_KEY_SECRET)
        .update(body.toString())
        .digest("hex");

    if (expectedSignature === razorpay_signature) {
        // 1. Update order status in DB
        // If orderId is provided, use it. Otherwise find by razorpay_order_id
        const order = await prisma.order.update({
            where: orderId ? { id: orderId } : { razorpayOrderId: razorpay_order_id },
            data: {
                status: "PAID",
                razorpayPaymentId: razorpay_payment_id
            }
        });


        // 2. Send confirmation emails
        await sendPaymentConfirmationEmail(order.id);

        return res.status(200).json(new ApiResponse(200, order, "Payment successful and verified"));

    } else {
        throw new ApiError(400, "Invalid signature");
    }
});

export const handleWebhook = asyncHandler(async (req, res) => {
    // Razorpay Webhook logic
    res.status(200).send("OK");
});
