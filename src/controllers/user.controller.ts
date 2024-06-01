import { NextFunction, Request, Response } from 'express';
import * as userService from '../services/user.service';
import { errors } from '../utils/errors';

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  const users = await userService.getAllUsers();
  res.json(users);
}

export async function getUserById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) {
    throw new Error(errors.user.notFound.code);
  }

  res.json(user);
}

export async function createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      roleId,
    } = req.body;

    const user = await userService.createUser({
      firstName,
      lastName,
      username,
      email,
      password,
      roleId,
    });
    res.json(user);
}

export async function updateUser(req: Request, res: Response): Promise<void> {
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
  res.json(user);
}

export async function deleteUser(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const user = await userService.deleteUser(id);
  res.json(user);
}
