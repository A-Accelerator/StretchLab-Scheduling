import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { addShift } from "../controllers/shiftController.js";

const router = express.Router();

router.post("/add", authMiddleware, addShift);

export default router;
