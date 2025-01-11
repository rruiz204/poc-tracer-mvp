import { Prisma } from "@prisma/client";

export interface CreateProductCommand {
  name: string;
  description: string;
  price: Prisma.Decimal;
  stock: number;
};