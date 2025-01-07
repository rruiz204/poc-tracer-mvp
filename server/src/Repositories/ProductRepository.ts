import { PrismaClient, type Product } from "@prisma/client";
import type { CreateProductCommand } from "src/CQR/ProductCQR";

export class ProductRepository {
  constructor(
    private prisma: PrismaClient
  ) {};

  public async list(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  };

  public async store(command: CreateProductCommand): Promise<Product> {
    return await this.prisma.product.create({ data: {...command} });
  };
};