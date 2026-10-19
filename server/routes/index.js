import { Router } from "express";
import contactRoutes from "./contactRoutes.js";
import authRoutes from "./authRoutes.js";
import adminRoutes from "./adminRoutes.js";
import paymentRoutes from "./paymentRoutes.js";
const router = Router();
router.get("/health", (req, res) => res.json({ ok: true }));
router.use(contactRoutes, authRoutes, adminRoutes, paymentRoutes);
export default router;
