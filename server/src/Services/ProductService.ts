import type { Product } from "@prisma/client";
import type { ProductRepository } from "@Repositories/ProductRepository";

export class ProductService {
  constructor(
    private repository: ProductRepository,
  ) {};

  public async list(): Promise<Product[]> {
    return await this.repository.list();
  };
};