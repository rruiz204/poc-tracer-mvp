import type { Request, Response } from "express";

export class ProductController {
  constructor() {};

  public async index(req: Request, res: Response) {
    res.status(200).json({ path: "index" });
  };

  public async store(req: Request, res: Response) {
    res.status(200).json({ path: "store" });
  };
};