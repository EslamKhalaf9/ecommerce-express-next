import * as LoginController from '../controllers/auth.controller';
import express from 'express';

const router = express.Router();

router.post('/', LoginController.login);
router.post('/logout', LoginController.logout);

export default router;