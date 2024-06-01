import type { NextFunction, Request, Response } from 'express';
import { errors } from '../utils/errors';

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.session.user) next()
  else next(new Error(errors.auth.unauthorized.code))
}