import { Router } from "express";
import { saveMeasurements } from "./measurement.controller.js";
import { protect } from "../../middleware/auth.middleware.js";

const router = Router();

router.post("/", protect, saveMeasurements);

export default router;
