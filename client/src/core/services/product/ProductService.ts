import { ProductPayload } from "@core/schemas/ProductSchema";
import { KhaosResponse } from "@core/services/khaos/KhaosTypes";
import { KhaosFactory } from "@core/services/khaos/KhaosFactory";
import { 
  ListProductResponse,
  CreateProductResponse,
  RemoveProductResponse,
  UpdateProductResponse,
} from "./ProductResponse";

enum Endpoint {
  Product = "product",
};

const list = async (): Promise<KhaosResponse<ListProductResponse>> => {
  const khaos = KhaosFactory.build({ endpoint: Endpoint.Product, method: "GET" });
  return await khaos.invoke<ListProductResponse>();
};

const create = async (payload: ProductPayload): Promise<KhaosResponse<CreateProductResponse>> => {
  const khaos = KhaosFactory.build({ endpoint: Endpoint.Product, method: "POST" });
  khaos.setBody(payload);
  return await khaos.invoke<CreateProductResponse>();
};

const remove = async (): Promise<KhaosResponse<RemoveProductResponse>> => {
  const khaos = KhaosFactory.build({ endpoint: Endpoint.Product, method: "DELETE" });
  return await khaos.invoke<RemoveProductResponse>();
};

const update = async (): Promise<KhaosResponse<UpdateProductResponse>> => {
  const khaos = KhaosFactory.build({ endpoint: Endpoint.Product, method: "PUT" });
  return await khaos.invoke<UpdateProductResponse>();
};

export const ProductService = Object.freeze({ list, create, remove, update });