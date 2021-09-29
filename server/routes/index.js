import express from 'express';
import { getData } from '../controllers/index.js';
const router = express.Router();

router.get('/users/list', getData);

export default router;