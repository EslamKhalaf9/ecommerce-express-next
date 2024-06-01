import bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import prisma from '../utils/db';
import { errors } from '../utils/errors';

export async function getAllUsers(): Promise<User[]> {
  const users = await prisma.user.findMany();
  return users;
}

export async function getUserById(id: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
}

interface CreateUserDTO {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  roleId: string;
}

interface UpdateUserDTO {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  return user;
}

export async function createUser(data: CreateUserDTO): Promise<User> {
  if (await getUserByEmail(data.email)) {
    throw new Error(errors.user.alreadyExists.code);
  }

  const user = await prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      password: await bcrypt.hash(data.password, 10),
      roleId: data.roleId,
    },
  });

  if (!user) {
    throw new Error(errors.user.notCreated.code);
  }
  return user;
}

export async function updateUser(id: string, updateUserDTO: UpdateUserDTO): Promise<User> {
  const user = await prisma.user.update({
    where: { id},
    data: updateUserDTO,
  });
  return user;
}

export async function deleteUser(id: string): Promise<User> {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
}