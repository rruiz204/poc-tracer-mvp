import { PrismaClient, type Product } from "@prisma/client";

import type {
  ListProductsParams, DeleteProductParams,
  CreateProductParams, UpdateProductParams,
} from "./ProductParams";

export class ProductRepository {
  constructor(private prisma: PrismaClient) {};

  public async list(params: ListProductsParams): Promise<Product[]> {
    return await this.prisma.product.findMany({
      take: params.limit,
      skip: params.offset,
    });
  };

  public async update(params: UpdateProductParams): Promise<Product> {
    return await this.prisma.product.update({
      data: params.update,
      where: { id: params.id },
    });
  };

  public async create(params: CreateProductParams): Promise<Product> {
    return await this.prisma.product.create({ data: params.create });
  };

  public async delete(params: DeleteProductParams): Promise<Product> {
    return await this.prisma.product.delete({ where: { id: params.id } });
  };

  public async findById(id: number): Promise<Product | null> {
    return await this.prisma.product.findUnique({ where: { id } });
  };

  public async findByName(name: string): Promise<Product | null> {
    return await this.prisma.product.findUnique({ where: { name } });
  };
};