import { Router } from "express";
import {
    getCart,
    addToCart,
    removeFromCart,
    updateCartItem
} from "./cart.controller.js";
import { protect } from "../../../middleware/auth.middleware.js";

const router = Router();

router.use(protect);

router.route("/")
    .get(getCart)
    .post(addToCart);

router.route("/:id")
    .delete(removeFromCart)
    .put(updateCartItem);

export default router;
