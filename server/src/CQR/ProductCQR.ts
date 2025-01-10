import { Prisma } from "@prisma/client";

// =======================================

export interface ListProductQuery {};

export interface ListProductResponse {
  id: number;
  name: string;
  description: string;
  price: Prisma.Decimal;
  stock: number;
  active: boolean;
  createdAt: Date;
};

// =======================================

export interface CreateProductCommand {
  name: string;
  description: string;
  price: Prisma.Decimal;
  stock: number;
};

export interface CreateProductResponse {
  id: number;
  name: string;
  description: string;
  price: Prisma.Decimal;
  stock: number;
  active: boolean;
  createdAt: Date;
};