import { NextFunction, Request, Response } from 'express';
import * as productService from '../services/product.service';
import { errors } from '../utils/errors';

export async function getAllProducts(req: Request, res: Response): Promise<void> {
  const products = await productService.getAllProducts();
  res.json(products);
}

export async function getProductById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const product = await productService.getProductById(id);
  if (!product) {
    throw new Error(errors.product.notFound.code);
  }

  res.json(product);
}

export async function createProduct(req: Request, res: Response): Promise<void> {
  const {
    name,
    price,
    categoryId,
    userId,
  } = req.body;

  const product = await productService.createProduct({
    name,
    price,
    categoryId,
    userId
  });
  res.json(product);
}

export async function updateProduct(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const {
    name,
    price,
    categoryId,
  } = req.body;

  const product = await productService.updateProduct(id, {
    name,
    price,
    categoryId,
  });
  res.json(product);
}

export async function deleteProduct(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const product = await productService.deleteProduct(id);
  res.json(product);
}
