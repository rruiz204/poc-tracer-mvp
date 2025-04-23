import type { UserDTO } from "@DTOs/UserDTO";
import type { UseCase } from "@UseCases/UseCase";
import type { UnitOfWork } from "@Database/Core/UnitOfWork";
import type { RegisterUserCommand } from "./RegisterUserCommand";

import { RegisterUserSchema } from "./RegisterUserSchema";
import { LogicException } from "@Exceptions/LogicException";

export class RegisterUserUseCase implements UseCase<RegisterUserCommand, UserDTO> {
  constructor(private uow: UnitOfWork) {};

  public async execute(command: RegisterUserCommand): Promise<UserDTO> {
    const validated = await RegisterUserSchema.validate(command);
    
    const existing = await this.uow.user.findByEmail(validated.email);
    if (existing) throw new LogicException.Redundancy("User already exists");

    const created = await this.uow.user.create(validated);

    return {
      id: created.id,
      name: created.name,
      email: created.email,
    };
  };
};