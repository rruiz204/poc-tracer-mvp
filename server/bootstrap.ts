import express from "express";
import { MainRouter } from "@Routers/ApiRouter";
import { LoggerService } from "@Services/LoggerService";
import type { Express, Request, Response, NextFunction } from "express";

export class Boostrap {
  constructor(private app: Express) {}

  public addRouters() {
    this.app.use("/api", MainRouter);
  };

  public addMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  };

  public addLogging() {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      LoggerService.info(`${req.method} ${req.url}`);
    });
  };
};