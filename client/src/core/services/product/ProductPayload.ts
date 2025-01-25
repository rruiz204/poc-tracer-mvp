import { Product } from "@core/models/Product"

interface BaseProductPayload extends Product {};

export interface CreateProductPayload extends Omit<BaseProductPayload, "id" | "createdAt"> {};

export interface UpdateProductPayload extends Omit<BaseProductPayload, "createdAt"> {};