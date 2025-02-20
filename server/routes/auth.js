import express from 'express';
import { login, verify } from '../controllers/authController.js';
import authMiddleWare from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/login', login)
router.post('/verify', authMiddleWare, verify)


export default router;