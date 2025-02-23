import express from "express";
import authMiddleWare from "../middleware/authMiddleware.js";
import {
  addEmployee
} from "../controllers/employeeController.js";

const router = express.Router();

//router.get("/", authMiddleWare, getDepartments);
router.post("/add", authMiddleWare, addEmployee);


export default router;
