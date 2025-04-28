import type { AuthDTO } from "@DTOs/AuthDTO";
import type { UseCase } from "@UseCases/UseCase";
import type { UnitOfWork } from "@Database/Core/UnitOfWork";
import type { LoginUserCommand } from "./LoginUserCommand";

import { LoginUserSchema } from "./LoginUserSchema";
import { JwtService } from "@Services/Jwt/JwtService";
import { LogicException } from "@Exceptions/LogicException";
import { HashService } from "@Services/Password/HashService";

export class LoginUserUseCase implements UseCase<LoginUserCommand, AuthDTO> {
  constructor(private uow: UnitOfWork) {};

  public async execute(command: LoginUserCommand): Promise<AuthDTO> {
    const validated = await LoginUserSchema.validate(command);

    const existing = await this.uow.user.findByEmail(validated.email);
    if (!existing) throw new LogicException.NotFound("User doesnt exists");

    const verified = await HashService.verify(validated.password, existing.password);
    if (!verified) throw new LogicException.BadCredentials("Bad credentials");

    const token = await JwtService.sign({ id: existing.id });
    return { type: "Bearer", token: token };
  };
};