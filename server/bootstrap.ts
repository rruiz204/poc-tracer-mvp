import express, { type Express } from "express";
import { MainRouter } from "@Routers/ApiRouter";

export class Boostrap {
  constructor(private app: Express) {}

  public addRouters() {
    this.app.use("/api", MainRouter);
  };

  public addMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  };
};