import { KhaosResponse } from "@core/khaos/KhaosTypes";
import { KhaosFactory } from "@core/khaos/KhaosFactory";
import { 
  ListProductResponse,
  CreateProductResponse,
  RemoveProductResponse,
} from "./ProductResponse";

enum Endpoint {
  Product = "product",
};

const list = async (): Promise<KhaosResponse<ListProductResponse>> => {
  const khaos = KhaosFactory.build({ endpoint: Endpoint.Product, method: "GET" });
  return await khaos.invoke<ListProductResponse>();
};

const create = async (): Promise<KhaosResponse<CreateProductResponse>> => {
  const khaos = KhaosFactory.build({ endpoint: Endpoint.Product, method: "POST" });
  return await khaos.invoke<CreateProductResponse>();
};

const remove = async () => {
  const khaos = KhaosFactory.build({ endpoint: Endpoint.Product, method: "DELETE" });
  return await khaos.invoke<RemoveProductResponse>();
};

export const ProductService = Object.freeze({ list, create, remove });