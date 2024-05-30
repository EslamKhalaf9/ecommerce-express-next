import { loginService } from '../services/auth.service';
import type{ NextFunction, Request, Response } from 'express';

export function loginController(req: Request, res: Response, next: NextFunction) {
  const loginRes = loginService();
  res.json(loginRes);
}