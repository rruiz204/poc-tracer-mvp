import { Khaos } from "@core/khaos/Khaos";
import { KhaosResponse } from "@core/khaos/KhaosTypes";
import { ProductListResponse } from "./ProductResponse";

const list = async (): Promise<KhaosResponse<ProductListResponse>> => {
  const khaos = new Khaos();
  khaos.setHttpMethod("GET");
  khaos.setEndpoint("product/list");
  return await khaos.invoke<ProductListResponse>();
};

export const ProductService = Object.freeze({ list });