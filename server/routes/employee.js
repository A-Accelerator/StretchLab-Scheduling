import express from "express";
import authMiddleWare from "../middleware/authMiddleware.js";
import {addEmployee, upload, getEmployees, getEmployee, updateEmployee} from "../controllers/employeeController.js";


const router = express.Router();

router.get("/:id", authMiddleWare, getEmployee);
router.put("/:id", authMiddleWare, updateEmployee);
router.get("/", authMiddleWare, getEmployees);
router.post("/add", authMiddleWare, upload.single('image'), addEmployee);



export default router;
