import { Prisma } from "@prisma/client";
import { ValidationService } from "@Services/ValidationService";
import type { ProductRepository } from "@Repositories/ProductRepository";

import { CreateProductSchema } from "./CreateProductSchema";
import type { CreateProductCommand } from "./CreateProductCommand";
import type { CreateProductResponse } from "./CreateProductResponse";

export class CreateProductUseCase {
  constructor(
    private repository: ProductRepository,
  ) {};

  public async use(command: CreateProductCommand): Promise<CreateProductResponse> {
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