import express from 'express'
import { verifyToken } from '../middleware/auth.js';
import { getUserProfile } from '../controller/userController.js';

const router = express.Router();

router.get("/perfis", verifyToken, getUserProfile)

export default router;