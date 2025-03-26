import cors from "cors";
import { json } from "body-parser";
import type { Express } from "express";

import { PingRouter } from "@Routers/PingRouter";
import { ProductRouter } from "@Routers/ProductRouter";
import { ExceptionMiddleware } from "@Middlewares/ExceptionMiddleware";

export class Boostrap {
  constructor(private app: Express) {}

  public addRouters(): void {
    this.app.use("/api/ping", PingRouter);
    this.app.use("/api/product", ProductRouter);
  };

  public addMiddlewares(): void {
    this.app.use(cors());
    this.app.use(json());
  };

  public addExceptionHandler(): void {
    this.app.use(ExceptionMiddleware);
  };
};