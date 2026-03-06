import { Router } from "express";
import { getWishlist, toggleWishlist } from "./wishlist.controller.js";
import { protect } from "../../../middleware/auth.middleware.js";

const router = Router();

router.use(protect); // All wishlist routes are protected

router.get("/", getWishlist);
router.post("/toggle", toggleWishlist);

export default router;
