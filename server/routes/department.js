import express from 'express';
import authMiddleWare from '../middleware/authMiddleware.js'
import { addDepartment } from '../controllers/departmentController.js';


const router = express.Router()

router.post('/add', authMiddleWare, addDepartment);

export default router;