import * as yup from "yup";

import { ListProductsSchema } from "@schemas/Product/ListProductsSchema";
import { CreateProductSchema } from "@schemas/Product/CreateProductSchema";
import { UpdateProductSchema } from "@schemas/Product/UpdateProductSchema";
import { DeleteProductSchema } from "@schemas/Product/DeleteProductSchema";

export type ListProductsPayload = yup.InferType<typeof ListProductsSchema>;
export type CreateProductPayload = yup.InferType<typeof CreateProductSchema>;
export type UpdateProductPayload = yup.InferType<typeof UpdateProductSchema>;
export type DeleteProductPayload = yup.InferType<typeof DeleteProductSchema>;