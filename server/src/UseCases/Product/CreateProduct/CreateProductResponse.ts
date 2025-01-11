import { Prisma } from "@prisma/client";

export interface CreateProductResponse {
  id: number;
  name: string;
  description: string;
  price: Prisma.Decimal;
  stock: number;
  active: boolean;
  createdAt: Date;
};