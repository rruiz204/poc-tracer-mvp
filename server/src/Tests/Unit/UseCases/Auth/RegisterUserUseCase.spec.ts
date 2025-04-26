import { describe, expect, it, vi, beforeEach } from "vitest";

import type { User } from "@Models/User";

import { Context } from "@Database/Core/Context";
import { UnitOfWork } from "@Database/Core/UnitOfWork";
import { LogicException } from "@Exceptions/LogicException";
import { UserFactory } from "@Database/Factories/UserFactory";
import { RegisterUserUseCase } from "@UseCases/Auth/RegisterUser/RegisterUserUseCase";

describe("register user use case", () => {
  let user1: User.Entity;

  const uow = new UnitOfWork(Context);
  const useCase = new RegisterUserUseCase(uow);

  beforeEach(async () => {
    user1 = await UserFactory.build({ id: 1 });
  });

  it("should register a new user", async () => {  
    vi.spyOn(uow.user, "findByEmail").mockResolvedValue(null);
    vi.spyOn(uow.user, "create").mockResolvedValue(user1);

    const auth = await useCase.execute({ ...user1 });
    expect(auth.token).toEqual("fake token");
  });

  it("should throw Redundancy", async () => {
    vi.spyOn(uow.user, "findByEmail").mockResolvedValue(user1);

    await expect(useCase.execute({ ...user1 }))
      .rejects.toThrowError(LogicException.Redundancy);
  });
});