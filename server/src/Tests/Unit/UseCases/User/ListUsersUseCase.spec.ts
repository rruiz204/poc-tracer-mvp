import { describe, expect, it, vi, beforeEach } from "vitest";

import type { User } from "@Models/User";
import type { ListUsersQuery } from "@UseCases/User/ListUsers/ListUsersQuery";

import { Context } from "@Database/Core/Context";
import { UnitOfWork } from "@Database/Core/UnitOfWork";
import { UserFactory } from "@Database/Factories/UserFactory";
import { ListUsersUseCase } from "@UseCases/User/ListUsers/ListUsersUseCase";

describe("list users use case", () => {
  let user1: User.Entity, user2: User.Entity, user3: User.Entity;

  const uow = new UnitOfWork(Context);
  const useCase = new ListUsersUseCase(uow);
  const query: ListUsersQuery = { page: 0, limit: 10 };

  beforeEach(async () => {
    user1 = await UserFactory.build({ id: 1 });
    user2 = await UserFactory.build({ id: 2 });
    user3 = await UserFactory.build({ id: 3 });
  });

  it("should return a list of users", async () => {
    vi.spyOn(uow.user, "list").mockResolvedValue([user1, user2, user3]);
    await expect(useCase.execute(query)).resolves.toHaveLength(3);
  });

  it("should return an empty list", async () => {
    vi.spyOn(uow.user, "list").mockResolvedValue([]);
    await expect(useCase.execute(query)).resolves.toHaveLength(0);
  });
});