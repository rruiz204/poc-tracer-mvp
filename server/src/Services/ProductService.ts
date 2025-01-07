import type { Product } from "@prisma/client";
import type { ProductRepository } from "@Repositories/ProductRepository";
import type { CreateProductCommand } from "src/CQR/ProductCQR";

export class ProductService {
  constructor(
    private repository: ProductRepository,
  ) {};

  public async list(): Promise<Product[]> {
    return await this.repository.list();
  };

  public async store(command: CreateProductCommand): Promise<Product> {
    return await this.repository.store(command);
  };
};