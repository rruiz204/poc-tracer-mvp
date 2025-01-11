import { PrismaClient, type Product, Prisma } from "@prisma/client";
import type { CreateProductCommand } from "@UseCases/Product/CreateProduct/CreateProductCommand";

export class ProductRepository {
  constructor(
    private prisma: PrismaClient
  ) {};

  public async list(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  };

  public async find(filters: Prisma.ProductWhereInput): Promise<Product | null> {
    return await this.prisma.product.findFirst({where: filters});
  };

  public async store(command: CreateProductCommand): Promise<Product> {
    return await this.prisma.product.create({ data: {...command} });
  };
};