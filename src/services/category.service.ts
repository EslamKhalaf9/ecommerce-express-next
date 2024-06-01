import { Category } from "@prisma/client";
import prisma from "../utils/db";

export async function getAllCategories(): Promise<Category[]> {
  const categories = await prisma.category.findMany();
  return categories;
}

export async function getCategoryById(id: string): Promise<Category | null> {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  return category;
}

interface CreateCategoryDTO {
  name: string;
}

interface UpdateCategoryDTO {
  name: string;
}

export async function createCategory(data: CreateCategoryDTO): Promise<Category> {
  const category = await prisma.category.create({
    data: {
      name: data.name,
    },
  });
  return category;
}

export async function updateCategory(id: string, data: UpdateCategoryDTO): Promise<Category | null> {
  const category = await prisma.category.update({
    where: {
      id,
    },
    data: {
      name: data.name,
    },
  });
  return category;
}

export async function deleteCategory(id: string): Promise<Category | null> {
  const category = await prisma.category.delete({
    where: {
      id,
    },
  });
  return category;
}