import { PrismaClient, type Product } from "@prisma/client";

export class ProductRepository {
  constructor(
    private prisma: PrismaClient
  ) {};

  public async list(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  };
};