import cors from "cors";
import { json } from "body-parser";
import type { Express } from "express";

import { PingRouter } from "@Routers/PingRouter";
import { AuthRouter } from "@Routers/AuthRouter";

import { ExceptionMiddleware } from "@Middlewares/ExceptionMiddleware"

export class Bootstrap {
  constructor(private app: Express) {};

  public addRouters(): void {
    this.app.use("/api/ping", PingRouter);
    this.app.use("/api/auth", AuthRouter);
  };

  public addMiddlewares(): void {
    this.app.use(json());
  };

  public addCors(): void {
    this.app.use(cors());
  };

  public addExceptionHandler(): void {
    this.app.use(ExceptionMiddleware);
  };
};