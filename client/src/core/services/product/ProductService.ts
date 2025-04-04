import { KhaosResponse } from "@services/Khaos/KhaosTypes";
import { KhaosFactory } from "@services/Khaos/KhaosFactory";

import {
  ListProductsResponse,
  SimpleProductResponse,
} from "./ProductResponse";

import {
  CreateProductPayload,
  UpdateProductPayload,
  DeleteProductPayload,
} from "./ProductPayload";

export class ProductService {
  public static async list(): Promise<KhaosResponse<ListProductsResponse>> {
    const khaos = KhaosFactory.build({ endpoint: "product", method: "GET" });
    return await khaos.invoke<ListProductsResponse>();
  };

  public static async create(payload: CreateProductPayload): Promise<KhaosResponse<SimpleProductResponse>> {
    const khaos = KhaosFactory.build({ endpoint: "product", method: "POST" }).setBody(payload);
    return await khaos.invoke<SimpleProductResponse>();
  };

  public static async update(payload: UpdateProductPayload): Promise<KhaosResponse<SimpleProductResponse>> {
    const khaos = KhaosFactory.build({ endpoint: "product", method: "PUT" }).setBody(payload);
    return await khaos.invoke<SimpleProductResponse>();
  };

  public static async delete(payload: DeleteProductPayload): Promise<KhaosResponse<SimpleProductResponse>> {
    const khaos = KhaosFactory.build({ endpoint: "product", method: "DELETE" }).setBody(payload);
    return await khaos.invoke<SimpleProductResponse>();
  };
};