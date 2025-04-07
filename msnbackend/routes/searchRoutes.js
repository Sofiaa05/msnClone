import express from 'express';
import { searchKeyword } from '../controllers/searchController.js';

const router = express.Router();

router.get('/search', searchKeyword);

export default router;