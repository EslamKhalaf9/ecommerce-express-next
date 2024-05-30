import bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import prisma from '../utils/db';

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
  try {
    if (await getUserByEmail(data.email)) {
      throw new Error('User already exists');
    }

    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password:   await bcrypt.hash(data.password, 10)
      },
    });
    
    if (!user) {
      throw new Error('User not created');
    }
    return user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An error occurred');
    }
  }
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