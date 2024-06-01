import { NextFunction, Request, Response } from 'express';
import * as categoryService from '../services/category.service';
import { errors } from '../utils/errors';

export async function getAllCategories(req: Request, res: Response): Promise<void> {
  const categories = await categoryService.getAllCategories();
  res.json(categories);
}

export async function getCategoryById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const category = await categoryService.getCategoryById(id);
  if (!category) {
    throw new Error(errors.category.notFound.code);
  }

  res.json(category);
}

export async function createCategory(req: Request, res: Response): Promise<void> {
  const { name } = req.body;

  const category = await categoryService.createCategory({
    name,
  });
  res.json(category);
}

export async function updateCategory(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { name } = req.body;

  const category = await categoryService.updateCategory(id, {
    name,
  });
  res.json(category);
}

export async function deleteCategory(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const category = await categoryService.deleteCategory(id);
  res.json(category);
}
