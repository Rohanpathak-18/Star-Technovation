import { Router } from "express";
import { createContact, subscribe } from "../controllers/contactController.js";
const router = Router();
router.post("/contact", createContact);
router.post("/newsletter", subscribe);
export default router;
