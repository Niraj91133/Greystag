import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import productRoutes from "../modules/product/product.routes.js";
import orderRoutes from "../modules/order/order.routes.js";
import categoryRoutes from "../modules/category/category.routes.js";
import addressRoutes from "../modules/address/address.routes.js";
import cartRoutes from "../modules/cart/cart.routes.js";
import cmsRoutes from "../modules/cms/cms.routes.js";
import paymentRoutes from "../modules/payment/payment.routes.js";
import adminRoutes from "../modules/admin/admin.routes.js";
import measurementRoutes from "../modules/measurement/measurement.routes.js";
import wishlistRoutes from "../modules/wishlist/wishlist.routes.js";

const router = Router();

// Modular Routes
router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);
router.use("/categories", categoryRoutes);
router.use("/addresses", addressRoutes);
router.use("/cart", cartRoutes);
router.use("/cms", cmsRoutes);
router.use("/payments", paymentRoutes);
router.use("/admin", adminRoutes);
router.use("/measurements", measurementRoutes);
router.use("/wishlist", wishlistRoutes);

export default router;