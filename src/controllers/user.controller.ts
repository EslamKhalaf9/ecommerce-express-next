import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export async function getAllUsers(req: Request, res: Response) {
  const users = await userService.getAllUsers();
  return res.json(users);
}

export async function getUserById(req: Request, res: Response) {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  return res.json(user);
}

export async function createUser(req: Request, res: Response) {
  const { name, email } = req.body;
  const user = await userService.createUser(name, email);
  return res.json(user);
}

export async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = await userService.updateUser(id, name, email);
  return res.json(user);
}

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;
  const user = await userService.deleteUser(id);
  return res.json(user);
}