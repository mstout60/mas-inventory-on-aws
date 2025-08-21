import { Request, Response } from "express";
import { Prisma, PrismaClient, Products } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const search = req.query.search?.toString();
    const products = await prisma.products.findMany({
      where: {
        name: {
          contains: search,
        },
      },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving products" });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const input: Partial<Prisma.ProductsCreateInput> = req.body;

    const product = await prisma.products.create({
      data: {
        productId: input.productId!,
        name: input.name!,
        price: input.price!,
        rating: input.rating ?? null,
        stockQuantity: input.rating!,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};
