import { Router } from "express";
import { createCheckout } from "../controllers/paymentController.js";

const router = Router();

router.post("/payments/checkout", createCheckout);

export default router;
