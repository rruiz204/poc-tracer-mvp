import { KhaosResponse } from "@core/services/khaos/KhaosTypes";
import { KhaosFactory } from "@core/services/khaos/KhaosFactory";
import { 
  ListProductResponse,
  CreateProductResponse,
  RemoveProductResponse,
  UpdateProductResponse,
} from "./ProductResponse";
import {
  CreateProductPayload,
  DeleteProductPayload,
  UpdateProductPayload,
} from "./ProductPayload";

enum Endpoint {
  Product = "product",
};

const list = async (): Promise<KhaosResponse<ListProductResponse>> => {
  const khaos = KhaosFactory.build({ endpoint: Endpoint.Product, method: "GET" });
  return await khaos.invoke<ListProductResponse>();
};

const create = async (payload: CreateProductPayload): Promise<KhaosResponse<CreateProductResponse>> => {
  const khaos = KhaosFactory.build({ endpoint: Endpoint.Product, method: "POST" });
  khaos.setBody(payload);
  return await khaos.invoke<CreateProductResponse>();
};

const remove = async (payload: DeleteProductPayload): Promise<KhaosResponse<RemoveProductResponse>> => {
  const khaos = KhaosFactory.build({ endpoint: Endpoint.Product, method: "DELETE" });
  khaos.setBody(payload);
  return await khaos.invoke<RemoveProductResponse>();
};

const update = async (payload: UpdateProductPayload): Promise<KhaosResponse<UpdateProductResponse>> => {
  const khaos = KhaosFactory.build({ endpoint: Endpoint.Product, method: "PUT" });
  khaos.setBody(payload);
  return await khaos.invoke<UpdateProductResponse>();
};

export const ProductService = Object.freeze({ list, create, remove, update });