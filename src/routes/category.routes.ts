import express from 'express';
import asyncHandler from 'express-async-handler';
import * as categoryController from '../controllers/category.controller';
import { isAuthenticated } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/', asyncHandler(categoryController.getAllCategories));
router.get('/:id', asyncHandler(categoryController.getCategoryById));
router.post('/', isAuthenticated, asyncHandler(categoryController.createCategory));
router.put('/:id', isAuthenticated, asyncHandler(categoryController.updateCategory));
router.delete('/:id', isAuthenticated, asyncHandler(categoryController.deleteCategory));

export default router;