import type { Request, Response } from "express";
import type { ListProductUseCase } from "@UseCases/Product/ListProduct/ListProductUseCase";
import type { CreateProductUseCase } from "@UseCases/Product/CreateProduct/CreateProductUseCase";

export class ProductController {
  constructor(
    private listProductUseCase: ListProductUseCase,
    private createProductUseCase: CreateProductUseCase,
  ) {
    this.list = this.list.bind(this);
    this.store = this.store.bind(this);
  };

  public async list(req: Request, res: Response) {
    const products = await this.listProductUseCase.use();
    res.status(200).json({ path: "index", products });
  };

  public async store(req: Request, res: Response) {
    const product = await this.createProductUseCase.use(req.body);
    res.status(200).json({ path: "store", product });
  };
};