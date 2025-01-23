import { Khaos } from "@core/khaos/Khaos";
import { KhaosResponse } from "@core/khaos/KhaosTypes";
import { 
  ListProductResponse,
  CreateProductResponse,
} from "./ProductResponse";

const list = async (): Promise<KhaosResponse<ListProductResponse>> => {
  const khaos = new Khaos();
  khaos.setHttpMethod("GET");
  khaos.setEndpoint("product/");
  return await khaos.invoke<ListProductResponse>();
};

const create = async (): Promise<KhaosResponse<CreateProductResponse>> => {
  const khaos = new Khaos();
  khaos.setHttpMethod("POST");
  khaos.setEndpoint("product/");
  return await khaos.invoke<CreateProductResponse>();
};

export const ProductService = Object.freeze({ list, create });