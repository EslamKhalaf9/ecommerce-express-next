import { NextFunction, Request, Response } from 'express';
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

export async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
    } = req.body;

    const user = await userService.createUser({
      firstName,
      lastName,
      username,
      email,
      password,
    });
    return res.json(user);
  } catch (error) {
    next(error);
  }
}

export async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    username,
    email,
    password,
  } = req.body;
  
  const user = await userService.updateUser(id, {
    firstName,
    lastName,
    username,
    email,
    password,
  });
  return res.json(user);
}

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;
  const user = await userService.deleteUser(id);
  return res.json(user);
}