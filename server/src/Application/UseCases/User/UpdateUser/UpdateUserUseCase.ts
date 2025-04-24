import type { UserDTO } from "@DTOs/UserDTO";
import type { UseCase } from "@UseCases/UseCase";
import type { UnitOfWork } from "@Database/Core/UnitOfWork";
import type { UpdateUserCommand } from "./UpdateUserCommand";

import { UpdateUserSchema } from "./UpdateUserSchema";
import { LogicException } from "@Exceptions/LogicException";

export class UpdateUserUseCase implements UseCase<UpdateUserCommand, UserDTO> {
  constructor(private uow: UnitOfWork) {};

  public async execute(command: UpdateUserCommand): Promise<UserDTO> {
    const validated = await UpdateUserSchema.validate(command);

    const existing = await this.uow.user.findById(validated.id);
    if (!existing) throw new LogicException.NotFound("This user doesnt exists");

    const { id, ...payload } = validated;
    const updated = await this.uow.user.update(id, payload);

    return {
      id: updated.id,
      name: updated.name,
      email: updated.email,
    };
  };
};