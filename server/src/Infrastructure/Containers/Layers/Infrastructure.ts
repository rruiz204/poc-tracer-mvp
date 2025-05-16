import { ContainerModule } from "inversify";

import { Context } from "@Database/Common/Context";
import { UnitOfWork } from "@Database/Common/UnitOfWork";

export const Infrastructure = new ContainerModule((opts) => {
  opts.bind(UnitOfWork).toDynamicValue(() => new UnitOfWork(Context)).inSingletonScope();
});