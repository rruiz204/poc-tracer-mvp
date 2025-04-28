import { describe, expect, it, vi, beforeEach } from "vitest";

import type { User } from "@Models/User";

import { Context } from "@Database/Core/Context";
import { JwtService } from "@Services/Jwt/JwtService";
import { UnitOfWork } from "@Database/Core/UnitOfWork";
import { LogicException } from "@Exceptions/LogicException";
import { HashService } from "@Services/Password/HashService";
import { UserFactory } from "@Database/Factories/UserFactory";

import { RegisterUserUseCase } from "@UseCases/Auth/RegisterUser/RegisterUserUseCase";
import type { RegisterUserCommand } from "@UseCases/Auth/RegisterUser/RegisterUserCommand";

describe("register user use case", () => {
  let user1: User.Entity;

  const uow = new UnitOfWork(Context);
  const useCase = new RegisterUserUseCase(uow);
  let command: RegisterUserCommand;

  beforeEach(async () => {
    user1 = await UserFactory.build({ id: 1 });

    command = {
      name: user1.name,
      email: user1.email,
      active: user1.active,
      password: user1.password,
    };
  });

  it("should register a new user", async () => {
    vi.spyOn(HashService, "hash").mockResolvedValue("fake hash");
    vi.spyOn(JwtService, "sign").mockResolvedValue("fake token");

    vi.spyOn(uow.user, "findByEmail").mockResolvedValue(null);
    vi.spyOn(uow.user, "create").mockResolvedValue(user1);

    const auth = await useCase.execute(command);
    expect(auth.token).toEqual("fake token");
    expect(HashService.hash).toHaveBeenCalledWith(command.password);
  });

  it("should throw Redundancy", async () => {
    vi.spyOn(uow.user, "findByEmail").mockResolvedValue(user1);

    await expect(useCase.execute(command))
      .rejects.toThrowError(LogicException.Redundancy);
  });
});