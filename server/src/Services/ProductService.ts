import { Prisma, type Product } from "@prisma/client";
import type { ProductRepository } from "@Repositories/ProductRepository";
import type { CreateProductCommand, CreateProductResponse } from "@CQR/ProductCQR";

import { ValidationService } from "./ValidationService";
import { CreateProductSchema } from "@Schemas/ProductSchema";

export class ProductService {
  constructor(
    private repository: ProductRepository,
  ) {};

  public async list(): Promise<Product[]> {
    return await this.repository.list();
  };

  public async store(command: CreateProductCommand): Promise<CreateProductResponse> {
    await ValidationService.validate(CreateProductSchema, command);
    command.price = new Prisma.Decimal(command.price); // flag: refactor

    const existingProduct = await this.repository.find({ name: { equals: command.name } });
    if (existingProduct) throw new Error("equal code finded"); // flag: refactor

    const productStored = await this.repository.store(command)

    return { // flag: refactor
      id: productStored.id,
      name: productStored.name,
      description: productStored.description,
      price: productStored.price,
      stock: productStored.stock,
      active: productStored.active,
      createdAt: productStored.createdAt,
    };
  };
};