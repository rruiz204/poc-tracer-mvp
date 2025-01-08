import { Router } from "express";
import { ProductRouter } from "./ProductRouter";
import type { Request, Response } from "express";

export const MainRouter = Router();

MainRouter.use("/product", ProductRouter);

MainRouter.get("/ping", (req: Request, res: Response) => {
  res.status(200).json({ ping: "pong" });
});

MainRouter.get("/error", (req: Request, res: Response) => {
  throw new Error("interval server custom");
});