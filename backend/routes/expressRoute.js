import express from 'express';
import { runExpressCode } from '../controllers/expressController.js';
const router = express.Router();
router.post('/', runExpressCode);
export default router;
