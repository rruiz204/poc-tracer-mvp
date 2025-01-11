import { Prisma } from "@prisma/client";

export interface ListProductResponse {
  id: number;
  name: string;
  description: string;
  price: Prisma.Decimal;
  stock: number;
  active: boolean;
  createdAt: Date;
};