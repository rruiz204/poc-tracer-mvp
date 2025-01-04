import type { Request, Response } from "express";
import { Router } from "express";

export const MainRouter = Router();

MainRouter.get("/ping", (req: Request, res: Response) => {
  res.status(200).json({ ping: "pong" });
});