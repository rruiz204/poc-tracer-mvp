import type { PrismaClient } from "@prisma/client";

import { UserRepository } from "@Repositories/UserRepository";
import { ProductRepository } from "@Repositories/Product/ProductRepository";

export class UnitOfWork {
  public user: UserRepository;
  public product: ProductRepository;

  constructor(context: PrismaClient) {
    this.user = new UserRepository(context);
    this.product = new ProductRepository(context);
  };
};