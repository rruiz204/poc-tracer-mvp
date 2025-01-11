import { Router } from "express";
import { Context } from "@Database/Context";

import { ProductController } from "@Controllers/ProductController";
import { ProductRepository } from "@Repositories/ProductRepository";

import { ListProductUseCase } from "@UseCases/Product/ListProduct/ListProductUseCase";
import { CreateProductUseCase } from "@UseCases/Product/CreateProduct/CreateProductUseCase";

const repository = new ProductRepository(Context);

const listProductUseCase = new ListProductUseCase(repository);
const createProductUseCase = new CreateProductUseCase(repository);

const controller = new ProductController(listProductUseCase, createProductUseCase);

export const ProductRouter = Router();

ProductRouter.get("/list", controller.list);
ProductRouter.post("/store", controller.store);