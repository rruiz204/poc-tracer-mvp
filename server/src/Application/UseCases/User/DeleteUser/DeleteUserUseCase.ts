import type { UserDTO } from "@DTOs/UserDTO";
import type { UseCase } from "@UseCases/UseCase";
import type { UnitOfWork } from "@Database/Core/UnitOfWork";
import type { DeleteUserCommand } from "./DeleteUserCommand";

import { LogicException } from "@Exceptions/LogicException";
import { DeleteUserSchema } from "./DeleteUserSchema";

export class DeleteUserUseCase implements UseCase<DeleteUserCommand, UserDTO> {
  constructor (private uow: UnitOfWork) {};
  
  public async execute(command: DeleteUserCommand): Promise<UserDTO> {
    const validated = await DeleteUserSchema.validate(command);

    const existing = await this.uow.user.findById(validated.id);
    if (!existing) throw new LogicException.NotFound("User doesnt exists");

    const deleted = await this.uow.user.delete(existing.id);
    
    return {
      id: deleted.id,
      name: deleted.name,
      email: deleted.email,
    };
  };
};