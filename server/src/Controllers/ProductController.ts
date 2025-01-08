import { v4 } from "uuid";
import type { Request, Response } from "express";
import type { ProductService } from "@Services/ProductService";

export class ProductController {
  constructor(
    private service: ProductService,
  ) {
    this.list = this.list.bind(this);
    this.store = this.store.bind(this);
  };

  public async list(req: Request, res: Response) {
    const products = await this.service.list();
    res.status(200).json({ path: "index", products });
  };

  public async store(req: Request, res: Response) {
    const code = v4();

    const product = await this.service.store({
      name: req.body.name,
      code: code,
      price: req.body.price,
    });

    res.status(200).json({ path: "store", product });
  };
};