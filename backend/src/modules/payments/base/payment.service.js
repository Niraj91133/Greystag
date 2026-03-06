import prisma from "../../../config/db.js";

/**
 * Update order status after successful payment
 */
export const verifyPayment = async (razorpayOrderId, razorpayPaymentId) => {
    return await prisma.order.update({
        where: { razorpayOrderId },
        data: {
            status: "PAID",
            razorpayPaymentId: razorpayPaymentId,
        },
    });
};
