import express from "express";
import authMiddleWare from "../middleware/authMiddleware.js";
import {addEmployee, upload} from "../controllers/employeeController.js";


const router = express.Router();

//router.get("/", authMiddleWare, getDepartments);
router.post("/add", authMiddleWare, upload.single('image'), addEmployee);


export default router;
