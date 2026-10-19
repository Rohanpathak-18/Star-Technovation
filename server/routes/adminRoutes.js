import { Router } from "express";
import { getOverview } from "../controllers/adminController.js";
import { requireAdmin, requireAuth } from "../middleware/auth.js";
const router = Router();
router.get("/admin/overview", requireAuth, requireAdmin, getOverview);
export default router;
