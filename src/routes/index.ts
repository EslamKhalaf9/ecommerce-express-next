import express from 'express';
import AuthRoutes from './auth.routes';
import UserRoutes from './user.routes';
import CategoryRoutes from './category.routes';

const router = express.Router();

router.use('/auth', AuthRoutes);
router.use('/user', UserRoutes);
router.use('/category', CategoryRoutes);

export default router;