import type { PrismaClient } from "@prisma/client";

import { UserRepository } from "@Repositories/UserRepository";

export class UnitOfWork {
  public user: UserRepository;

  constructor(context: PrismaClient) {
    this.user = new UserRepository(context);
  };
};