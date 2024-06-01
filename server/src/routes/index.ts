import express from 'express';
import AuthRoutes from './auth.routes';
import UserRoutes from './user.routes';
import CategoryRoutes from './category.routes';
import ProductRoutes from './product.routes';

const router = express.Router();

router.use('/auth', AuthRoutes);
router.use('/user', UserRoutes);
router.use('/category', CategoryRoutes);
router.use('/product', ProductRoutes);

export default router;