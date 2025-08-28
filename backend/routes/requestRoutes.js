import express from 'express';
import { executeRequest } from '../controllers/requestController.js';

const router = express.Router();
router.post('/', executeRequest);

export default router;
