import cors from "cors";
import express from "express";
import { MainRouter } from "@Routers/ApiRouter";

import type { Express, Request, Response, NextFunction } from "express";

export class Boostrap {
  constructor(private app: Express) {}

  public addRouters(): void {
    this.app.use("/api", MainRouter);
  };

  public addMiddlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  };

  public addExceptionHandler(): void {
    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      const status = 500;
      res.status(status).json({ message: err.message });
    });
  };
};