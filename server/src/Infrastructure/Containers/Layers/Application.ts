import { ContainerModule } from "inversify";

import { EmailLoginUseCase } from "@UseCases/Auth/EmailLogin/EmailLoginUseCase";
import { EmailRegisterUseCase } from "@UseCases/Auth/EmailRegister/EmailRegisterUseCase";

export const Application = new ContainerModule((opts) => {
  opts.bind(EmailLoginUseCase).toSelf();
  opts.bind(EmailRegisterUseCase).toSelf();
});