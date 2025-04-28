import type { AuthDTO } from "@DTOs/AuthDTO";
import type { UseCase } from "@UseCases/UseCase";
import type { UnitOfWork } from "@Database/Core/UnitOfWork";
import type { RegisterUserCommand } from "./RegisterUserCommand";

import { JwtService } from "@Services/Jwt/JwtService";
import { RegisterUserSchema } from "./RegisterUserSchema";
import { LogicException } from "@Exceptions/LogicException";
import { HashService } from "@Services/Password/HashService";

export class RegisterUserUseCase implements UseCase<RegisterUserCommand, AuthDTO> {
  constructor(private uow: UnitOfWork) {};

  public async execute(command: RegisterUserCommand): Promise<AuthDTO> {
    const validated = await RegisterUserSchema.validate(command);
    
    const existing = await this.uow.user.findByEmail(validated.email);
    if (existing) throw new LogicException.Redundancy("User already exists");

    const hashed = await HashService.hash(validated.password);
    const created = await this.uow.user.create({ ...validated, password: hashed });

    const token = await JwtService.sign({ id: created.id });
    return { type: "Bearer", token: token };
  };
};