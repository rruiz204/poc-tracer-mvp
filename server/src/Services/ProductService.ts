import type { Product } from "@prisma/client";
import type { ProductRepository } from "@Repositories/ProductRepository";
import type { CreateProductCommand } from "@CQR/ProductCQR";

import { ValidationService } from "./ValidationService";
import { CreateProductSchema } from "@Schemas/ProductSchema";

export class ProductService {
  constructor(
    private repository: ProductRepository,
  ) {};

  public async list(): Promise<Product[]> {
    return await this.repository.list();
  };

  public async store(command: CreateProductCommand): Promise<Product> {
    await ValidationService.validate(CreateProductSchema, command);
    return await this.repository.store(command);
  };
};