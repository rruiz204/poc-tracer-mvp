import type { PrismaClient } from "@prisma/client";

export abstract class Seeder {
  constructor(
    protected name: string,
    protected context: PrismaClient,
    protected amount: number = 10,
  ) {};

  abstract seed(): Promise<void>;

  public getName(): string {
    return this.name;
  };
};