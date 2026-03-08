import { z } from "zod";

// Body Schemas
const registerBody = z.object({
    name: z.string().min(2),
    email: z.string().email(),
});

const loginBody = z.object({
    email: z.string().email(),
    otp: z.string().length(6),
});

const orderItem = z.object({
    productId: z.string(),
    quantity: z.number().int().positive(),
    size: z.string().optional(),
    color: z.string().optional(),
    customization: z.any().optional(),
});

const createOrderBody = z.object({
    items: z.array(orderItem).min(1),
    shippingAddressId: z.string().nullable().optional(),

});

const updateStatusBody = z.object({
    status: z.enum(["PENDING", "PAID", "CONFIRMED", "TAILORING", "QUALITY_CHECK", "SHIPPED", "DELIVERED", "CANCELLED"]).optional(),
    trackingId: z.string().optional(),
    courierPartner: z.string().optional(),
    productionStage: z.string().optional(),
    estimatedDelivery: z.string().optional(),
    adminNotes: z.string().optional(),
});

// Full Schemas (for middleware)
export const registerSchema = z.object({ body: registerBody });
export const loginSchema = z.object({ body: loginBody });
export const createOrderSchema = z.object({ body: createOrderBody });
export const updateStatusSchema = z.object({ body: updateStatusBody });

// Legacy exports for direct controller usage (backward compatibility)
export {
    registerBody as register,
    loginBody as login,
    createOrderBody as createOrder,
    updateStatusBody as updateStatus
};
