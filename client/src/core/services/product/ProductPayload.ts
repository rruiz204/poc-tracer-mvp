import { Product } from "@core/models/Product"

export interface CreateProductPayload extends Omit<Product, "id" | "createdAt"> {};

export interface UpdateProductPayload extends Omit<Product, "createdAt"> {};

export interface DeleteProductPayload extends Pick<Product, "id"> {};