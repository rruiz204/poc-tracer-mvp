import { inject, injectable } from "inversify";
import type { Request, Response } from "express";

import { EmailLoginUseCase } from "@UseCases/Auth/EmailLogin/EmailLoginUseCase";
import { EmailRegisterUseCase } from "@UseCases/Auth/EmailRegister/EmailRegisterUseCase";

@injectable()
export class AuthController {
  constructor(
    @inject(EmailLoginUseCase) private readonly emailLoginUseCase: EmailLoginUseCase,
    @inject(EmailRegisterUseCase) private readonly emailRegisterUseCase: EmailRegisterUseCase,
  ) {
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  };

  public async login(req: Request, res: Response): Promise<void> {
    const response = await this.emailLoginUseCase.execute(req.body);
    res.status(200).json(response);
  };

  public async register(req: Request, res: Response): Promise<void> {
    const response = await this.emailRegisterUseCase.execute(req.body);
    res.status(200).json(response);
  };
};