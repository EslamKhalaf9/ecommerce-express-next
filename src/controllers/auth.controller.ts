import * as AuthService from '../services/auth.service';
import type{ NextFunction, Request, Response } from 'express';
import { errors } from '../utils/errors';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await AuthService.login({ email, password });
  
    if (!user) {
      return next(new Error(errors.auth.invalidCredentials.code));
    }
    
    req.session.user = user;
    res.json(user);
  } catch (error) {
    next(error);
  }
}

export const logout = async (req: Request, res: Response) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
}