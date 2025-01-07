import { Router } from "express";
import { Context } from "@Database/Context";

import { ProductService } from "@Services/ProductService";
import { ProductController } from "@Controllers/ProductController";
import { ProductRepository } from "@Repositories/ProductRepository";

const repository = new ProductRepository(Context);
const service = new ProductService(repository);
const controller = new ProductController(service);

export const ProductRouter = Router();

ProductRouter.get("/list", controller.list);
ProductRouter.post("/store", controller.store);