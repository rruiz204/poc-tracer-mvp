import type { Request, Response } from "express";
import type { ListProductUseCase } from "@UseCases/Product/ListProduct/ListProductUseCase";
import type { CreateProductUseCase } from "@UseCases/Product/CreateProduct/CreateProductUseCase";
import type { UpdateProductUseCase } from "@UseCases/Product/UpdateProduct/UpdateProductUseCase";
import type { DeleteProductUseCase } from "@UseCases/Product/DeleteProduct/DeleteProductUseCase";

export class ProductController {
  constructor(
    private listProductUseCase: ListProductUseCase,
    private createProductUseCase: CreateProductUseCase,
    private updateProductUseCase: UpdateProductUseCase,
    private deleteProductUseCase: DeleteProductUseCase,
  ) {
    this.list = this.list.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  };

  public async list(req: Request, res: Response) {
    const products = await this.listProductUseCase.use({});
    res.status(200).json({ path: "index", products });
  };

  public async create(req: Request, res: Response) {
    const product = await this.createProductUseCase.use(req.body);
    res.status(200).json({ path: "create", product });
  };

  public async update(req: Request, res: Response) {
    const product = await this.updateProductUseCase.use(req.body);
    res.status(200).json({ path: "update", product });
  };

  public async delete(req: Request, res: Response) {
    const product = await this.deleteProductUseCase.use(req.body);
    res.status(200).json({ path: "delete", product });
  };
};