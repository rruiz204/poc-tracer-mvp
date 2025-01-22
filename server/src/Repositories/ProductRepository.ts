import { PrismaClient, type Product, Prisma } from "@prisma/client";

export class ProductRepository {
  constructor(
    private prisma: PrismaClient
  ) {};

  public async list(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  };

  public async find(filters: Prisma.ProductWhereInput): Promise<Product | null> {
    return await this.prisma.product.findFirst({ where: filters });
  };

  public async create(product: Prisma.ProductCreateInput): Promise<Product> {
    return await this.prisma.product.create({ data: {...product} });
  };

  public async delete(filters: Prisma.ProductWhereUniqueInput): Promise<Product> {
    return await this.prisma.product.delete({ where: filters });
  };

  public async update(filters: Prisma.ProductWhereUniqueInput, data: Prisma.ProductUpdateInput): Promise<Product> {
    return await this.prisma.product.update({ where: filters, data: data });
  };
};