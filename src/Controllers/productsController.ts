import { Request, Response } from "express";
import { ProductStore } from "../Models/products";

const store = new ProductStore();

export const all = async (_req: Request, res: Response) => {
  try {
    const result = await store.index();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ err: "Internal Server Error" });
  }
};

export const getById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const product = await store.show(id);
  if (product) {
    return res.status(200).send(product);
  }
  res.status(400).send({ err: "Bad Request" });
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, price, category } = req.body;
  if (!name || !price || !category) {
    return res.status(400).send({ err: "Invalid or missing data" });
  }
  try {
    const result = await store.create({
      name,
      price,
      category,
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(`Internal Server Error ${err}`);
  }
};

export const getByCategory = async (req: Request, res: Response) => {
  const category = req.params.category;
  const products = await store.showByCategory(category);
  if (products) {
    return res.status(200).send(products);
  }
  res.status(400).send({ err: "Bad Request" });
};
