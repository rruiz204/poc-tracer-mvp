import type { Request, Response } from "express";

import { ListProductsSchema } from "@UseCases/Product/ListProducts/ListProductsSchema";
import { CreateProductSchema } from "@UseCases/Product/CreateProduct/CreateProductSchema";
import { UpdateProductSchema } from "@UseCases/Product/UpdateProduct/UpdateProductSchema";
import { DeleteProductSchema } from "@UseCases/Product/DeleteProduct/DeleteProductSchema";

import type { ListProductsUseCase } from "@UseCases/Product/ListProducts/ListProductsUseCase";
import type { CreateProductUseCase } from "@UseCases/Product/CreateProduct/CreateProductUseCase";
import type { UpdateProductUseCase } from "@UseCases/Product/UpdateProduct/UpdateProductUseCase";
import type { DeleteProductUseCase } from "@UseCases/Product/DeleteProduct/DeleteProductUseCase";

export class ProductController {
  constructor(
    private listProductsUseCase: ListProductsUseCase,
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
    const schema = await ListProductsSchema.validate(req.query);
    const products = await this.listProductsUseCase.execute(schema);
    res.status(200).json({ products });
  };

  public async create(req: Request, res: Response) {
    const schema = await CreateProductSchema.validate(req.body);
    const product = await this.createProductUseCase.execute(schema);
    res.status(200).json(product);
  };

  public async update(req: Request, res: Response) {
    const schema = await UpdateProductSchema.validate(req.body);
    const product = await this.updateProductUseCase.execute(schema);
    res.status(200).json(product);
  };

  public async delete(req: Request, res: Response) {
    const schema = await DeleteProductSchema.validate(req.body);
    const product = await this.deleteProductUseCase.execute(schema);
    res.status(200).json(product);
  };
};