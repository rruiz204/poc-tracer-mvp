import { describe, expect, it, vi, beforeEach } from "vitest";

import type { User } from "@Models/User";

import { Context } from "@Database/Core/Context";
import { JwtService } from "@Services/Jwt/JwtService";
import { UnitOfWork } from "@Database/Core/UnitOfWork";
import { LogicException } from "@Exceptions/LogicException";
import { HashService } from "@Services/Password/HashService";
import { UserFactory } from "@Database/Factories/UserFactory";

import { LoginUserUseCase } from "@UseCases/Auth/LoginUser/LoginUserUseCase";
import type { LoginUserCommand } from "@UseCases/Auth/LoginUser/LoginUserCommand";

describe("login user use case", () => {
  let user1: User.Entity;

  const uow = new UnitOfWork(Context);
  const useCase = new LoginUserUseCase(uow);
  let command: LoginUserCommand;

  beforeEach(async () => {
    user1 = await UserFactory.build({ id: 1 });

    command = {
      email: user1.email,
      password: "fake password",
    };
  });

  it("should login a user", async () => {
    vi.spyOn(JwtService, "sign").mockResolvedValue("fake token");
    vi.spyOn(uow.user, "findByEmail").mockResolvedValue(user1);
    vi.spyOn(HashService, "verify").mockResolvedValue(true);

    const auth = await useCase.execute(command);
    expect(auth.token).toEqual("fake token");
    expect(HashService.verify).toHaveBeenCalledWith(command.password, user1.password);
  });

  it("should throw NotFound", async () => {
    vi.spyOn(uow.user, "findByEmail").mockResolvedValue(null);

    await expect(useCase.execute(command))
      .rejects.toThrowError(LogicException.NotFound);
  });

  it("should throw BadCredentials", async () => {
    vi.spyOn(uow.user, "findByEmail").mockResolvedValue(user1);
    vi.spyOn(HashService, "verify").mockResolvedValue(false);

    await expect(useCase.execute(command))
      .rejects.toThrowError(LogicException.BadCredentials);
  });
});