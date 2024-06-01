import express from 'express';
import asyncHandler from 'express-async-handler';
import * as userController from '../controllers/user.controller';
import { isAuthenticated } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/', isAuthenticated, asyncHandler(userController.getAllUsers));
router.get('/:id', isAuthenticated, asyncHandler(userController.getUserById));
router.post('/', isAuthenticated, asyncHandler(userController.createUser));
router.put('/:id',isAuthenticated, asyncHandler(userController.updateUser));
router.delete('/:id',isAuthenticated, asyncHandler(userController.deleteUser));

export default router;