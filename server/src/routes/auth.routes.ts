import express from 'express';
import asyncHandler from 'express-async-handler';

import * as LoginController from '../controllers/auth.controller';
import { isAuthenticated } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/', asyncHandler(LoginController.login));
router.post('/logout', isAuthenticated, asyncHandler(LoginController.logout));
router.get('/me', isAuthenticated, asyncHandler(LoginController.me));

export default router;