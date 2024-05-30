import prisma from '../utils/db';

export async function getAllUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
}

export async function createUser(name: string, email: string) {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password:  'password',
    },
  });
  return user;
}

export async function updateUser(id: string, name: string, email: string) {
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

export async function deleteUser(id: string) {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
}