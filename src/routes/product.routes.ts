import express from 'express';
import asyncHandler from 'express-async-handler';
import * as productController from '../controllers/product.controller';
import { isAuthenticated } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/', asyncHandler(productController.getAllProducts));
router.get('/:id', asyncHandler(productController.getProductById));
router.post('/', isAuthenticated, asyncHandler(productController.createProduct));
router.put('/:id', isAuthenticated, asyncHandler(productController.updateProduct));
router.delete('/:id', isAuthenticated, asyncHandler(productController.deleteProduct));

export default router;