import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export async function getAllUsers(req: Request, res: Response) {
  const users = await userService.getAllUsers();
  return res.json(users);
}