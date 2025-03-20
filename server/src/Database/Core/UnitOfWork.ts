import type { PrismaClient } from "@prisma/client";
import { ProductRepository } from "@Repositories/Product/ProductRepository";

export class UnitOfWork {
  public product: ProductRepository;

  constructor(context: PrismaClient) {
    this.product = new ProductRepository(context);
  };
};