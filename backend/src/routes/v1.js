import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import productRoutes from "../modules/products/base/product.routes.js";
import orderRoutes from "../modules/orders/base/order.routes.js";
import categoryRoutes from "../modules/products/category/category.routes.js";
import addressRoutes from "../modules/users/address/address.routes.js";
import cartRoutes from "../modules/products/cart/cart.routes.js";
import cmsRoutes from "../modules/cms/cms.routes.js";
import paymentRoutes from "../modules/payments/base/payment.routes.js";
import adminRoutes from "../modules/admin/admin.routes.js";
import measurementRoutes from "../modules/users/measurement/measurement.routes.js";
import wishlistRoutes from "../modules/users/wishlist/wishlist.routes.js";

const router = Router();

// ==========================================
// PUBLIC & AUTH ROUTES
// ==========================================
router.use("/auth", authRoutes);
router.use("/cms", cmsRoutes);

// ==========================================
// COMMERCE ROUTES
// ==========================================
router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/cart", cartRoutes);
router.use("/wishlist", wishlistRoutes);

// ==========================================
// USER DOMAIN ROUTES
// ==========================================
router.use("/addresses", addressRoutes);
router.use("/measurements", measurementRoutes);

// ==========================================
// SALES & PAYMENT ROUTES
// ==========================================
router.use("/orders", orderRoutes);
router.use("/payments", paymentRoutes);

// ==========================================
// ADMIN & ANALYTICS ROUTES
// ==========================================
router.use("/admin", adminRoutes);

export default router;