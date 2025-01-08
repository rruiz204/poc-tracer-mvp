import cors from "cors";
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
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  };

  public addLogging() {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      LoggerService.info(`${req.method} ${req.url}`);
      next();
    });
  };

  public addExceptionHandler() {
    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      const status = 500;

      res.status(status).json({ message: err.message });
      LoggerService.error(`${req.method} ${req.url}`);
    });
  };
};