import { describe, expect, it, vi, beforeEach } from "vitest";

import type { User } from "@Models/User";

import { Context } from "@Database/Core/Context";
import { UnitOfWork } from "@Database/Core/UnitOfWork";
import { LogicException } from "@Exceptions/LogicException";
import { UserFactory } from "@Database/Factories/UserFactory";
import { DeleteUserUseCase } from "@UseCases/User/DeleteUser/DeleteUserUseCase";

describe("delete user use case", () => {
  let user1: User.Entity;

  const uow = new UnitOfWork(Context);
  const useCase = new DeleteUserUseCase(uow);

  beforeEach(async () => {
    user1 = await UserFactory.build({ id: 1 });
  });

  it("should delete the user", async () => {
    vi.spyOn(uow.user, "findById").mockResolvedValue(user1);
    vi.spyOn(uow.user, "delete").mockResolvedValue(user1);

    const deleted = await useCase.execute({ id: user1.id });
    expect(deleted.email).toEqual(user1.email);
  });

  it("should throw Not Found", async () => {
    vi.spyOn(uow.user, "findById").mockResolvedValue(null);

    await expect(useCase.execute({ id: user1.id }))
      .rejects.toThrowError(LogicException.NotFound);
  });
});