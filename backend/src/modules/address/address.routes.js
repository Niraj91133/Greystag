import { Router } from "express";
import {
    addAddress,
    removeAddress,
    getMyAddresses,
    setDefaultAddress
} from "./address.controller.js";
import { protect } from "../../middleware/auth.middleware.js";

const router = Router();

router.use(protect);

router.route("/")
    .get(getMyAddresses)
    .post(addAddress);

router.route("/:id")
    .delete(removeAddress)
    .patch(setDefaultAddress);

export default router;
