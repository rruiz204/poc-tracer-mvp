import { Router } from "express";
import { Context } from "@Database/Core/Context";
import { UnitOfWork } from "@Database/Core/UnitOfWork";
import { ProductController } from "@Controllers/ProductController";

import { ListProductsUseCase } from "@UseCases/Product/ListProducts/ListProductsUseCase";
import { CreateProductUseCase } from "@UseCases/Product/CreateProduct/CreateProductUseCase";
import { UpdateProductUseCase } from "@UseCases/Product/UpdateProduct/UpdateProductUseCase";
import { DeleteProductUseCase } from "@UseCases/Product/DeleteProduct/DeleteProductUseCase";

const uow = new UnitOfWork(Context);

const listProductsUseCase = new ListProductsUseCase(uow);
const createProductUseCase = new CreateProductUseCase(uow);
const updateProductUseCase = new UpdateProductUseCase(uow);
const deleteProductUseCase = new DeleteProductUseCase(uow);

const controller = new ProductController(
  listProductsUseCase, createProductUseCase,
  updateProductUseCase, deleteProductUseCase,
);

export const ProductRouter = Router();

ProductRouter.get("/", controller.list);
ProductRouter.put("/", controller.update);
ProductRouter.post("/", controller.create);
ProductRouter.delete("/", controller.delete);