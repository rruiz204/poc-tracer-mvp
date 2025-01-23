import { KhaosResponse } from "@core/khaos/KhaosTypes";
import { KhaosFactory } from "@core/khaos/KhaosFactory";
import { 
  ListProductResponse,
  CreateProductResponse,
} from "./ProductResponse";

const list = async (): Promise<KhaosResponse<ListProductResponse>> => {
  const khaos = KhaosFactory.build({ endpoint: "product", method: "GET" });
  return await khaos.invoke<ListProductResponse>();
};

const create = async (): Promise<KhaosResponse<CreateProductResponse>> => {
  const khaos = KhaosFactory.build({ endpoint: "product", method: "POST" });
  return await khaos.invoke<CreateProductResponse>();
};

export const ProductService = Object.freeze({ list, create });