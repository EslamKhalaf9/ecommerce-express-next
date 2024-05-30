import bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import prisma from '../utils/db';
import { error } from 'console';
import { errors } from '../utils/errors';

export async function getAllUsers(): Promise<User[]> {
  const users = await prisma.user.findMany();
  return users;
}

export async function getUserById(id: string): Promise<User | null>{
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
}

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

async function getUserByEmail(email: string): Promise < User | null > {
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
        name: data.name,
        email: data.email,
        password:   await bcrypt.hash(data.password, 10)
      },
    });

    if (!user) {
      throw new Error(errors.user.notCreated.code);
    }
    return user;
}

export async function updateUser(id: string, name: string, email: string): Promise<User> {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      email,
    },
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