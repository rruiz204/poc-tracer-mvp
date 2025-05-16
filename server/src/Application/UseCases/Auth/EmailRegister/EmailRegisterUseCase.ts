import type { AuthDTO } from "@DTOs/AuthDTO";
import type { UseCase } from "@UseCases/UseCase";
import type { EmailRegisterCommand } from "./EmailRegisterCommand";

import { inject, injectable } from "inversify";
import { UnitOfWork } from "@Database/Common/UnitOfWork";
import { EmailRegisterSchema } from "./EmailRegisterSchema";

import { JwtService } from "@Services/Tokens/JwtService";
import { LogicException } from "@Exceptions/LogicException";
import { BcryptService } from "@Services/Password/BcryptService";

@injectable()
export class EmailRegisterUseCase implements UseCase<EmailRegisterCommand, AuthDTO> {
  constructor(@inject(UnitOfWork) private readonly uow: UnitOfWork) {};

  public async execute(command: EmailRegisterCommand): Promise<AuthDTO> {
    const validated = await EmailRegisterSchema.validate(command);
    
    const existing = await this.uow.user.findByEmail(validated.email);
    if (existing) throw new LogicException.Redundancy("User already exists");

    const hashed = await BcryptService.hash(validated.password);
    const created = await this.uow.user.create({ ...validated, password: hashed });

    const token = await JwtService.sign({ id: created.id, expi: "1h" });
    return { type: "Bearer", token: token };
  };
};