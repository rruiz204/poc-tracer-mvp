import { describe, expect, it, vi, beforeEach } from "vitest";

import type { User } from "@Models/User";

import { Context } from "@Database/Core/Context";
import { UnitOfWork } from "@Database/Core/UnitOfWork";
import { LogicException } from "@Exceptions/LogicException";
import { UserFactory } from "@Database/Factories/UserFactory";
import { UpdateUserUseCase } from "@UseCases/User/UpdateUser/UpdateUserUseCase";

describe("update user use case", () => {
  let user1: User.Entity;

  const uow = new UnitOfWork(Context);
  const useCase = new UpdateUserUseCase(uow);
  
  beforeEach(async () => {
    user1 = await UserFactory.build({ id: 1 });
  });

  it("should update the user", async () => {
    const commnad = { id: user1.id, email: "updated@gmail.com" };
    vi.spyOn(uow.user, "findById").mockResolvedValue(user1);

    vi.spyOn(uow.user, "update").mockResolvedValue({
      ...user1, email: commnad.email,
    });

    const updated = await useCase.execute(commnad);
    expect(user1.email).not.toEqual(updated.email);
  });

  it("should throw Not Found", async () => {
    vi.spyOn(uow.user, "findById").mockResolvedValue(null);

    await expect(useCase.execute({ id: user1.id }))
      .rejects.toThrowError(LogicException.NotFound);
  });
});