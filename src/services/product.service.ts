import { Product } from "@prisma/client";
import prisma from "../utils/db";

export async function getAllProducts(): Promise<Product[]> {
  const products = await prisma.product.findMany();
  return products;
}

export async function getProductById(id: string): Promise<Product | null> {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  return product;
}

interface CreateProductDTO {
  name: string;
  price: number;
  categoryId: string;
  userId: string;
}

interface UpdateProductDTO {
  name: string;
  price: number;
  categoryId: string;
}

export async function createProduct(data: CreateProductDTO): Promise<Product> {
  const product = await prisma.product.create({
    data: {
      name: data.name,
      price: data.price,
      categoryId: data.categoryId,
      createdById: data.userId,
    },
  });
  return product;
}

export async function updateProduct(id: string, data: UpdateProductDTO): Promise<Product | null> {
  const product = await prisma.product.update({
    where: {
      id,
    },
    data: {
      name: data.name,
      price: data.price,
      categoryId: data.categoryId,
    },
  });
  return product;
}

export async function deleteProduct(id: string): Promise<Product | null> {
  const product = await prisma.product.delete({
    where: {
      id,
    },
  });
  return product;
}