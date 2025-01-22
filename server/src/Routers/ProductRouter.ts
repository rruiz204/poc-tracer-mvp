import { Router } from "express";
import { Context } from "@Database/Context";

import { ProductController } from "@Controllers/ProductController";
import { ProductRepository } from "@Repositories/ProductRepository";

import { ListProductUseCase } from "@UseCases/Product/ListProduct/ListProductUseCase";
import { CreateProductUseCase } from "@UseCases/Product/CreateProduct/CreateProductUseCase";
import { UpdateProductUseCase } from "@UseCases/Product/UpdateProduct/UpdateProductUseCase";
import { DeleteProductUseCase } from "@UseCases/Product/DeleteProduct/DeleteProductUseCase";

const repository = new ProductRepository(Context);

const listProductUseCase = new ListProductUseCase(repository);
const createProductUseCase = new CreateProductUseCase(repository);
const updateProductUseCase = new UpdateProductUseCase(repository);
const deleteProductUseCase = new DeleteProductUseCase(repository);

const controller = new ProductController(
  listProductUseCase, createProductUseCase,
  updateProductUseCase, deleteProductUseCase,
);

export const ProductRouter = Router();

ProductRouter.get("/", controller.list);
ProductRouter.post("/", controller.create);
ProductRouter.put("/", controller.update);
ProductRouter.delete("/", controller.delete);