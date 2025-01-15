import { Khaos } from "@core/khaos/Khaos";
import { KhaosResponse } from "@core/khaos/KhaosTypes";
import { Product } from "@core/models/Product";

interface ListResponse {
  path: string;
  products: Product[];
};

const list = async (): Promise<KhaosResponse<ListResponse>> => {
  const khaos = new Khaos();
  
  khaos.setHttpMethod("GET");
  khaos.setEndpoint("product/list");

  return await khaos.invoke<ListResponse>();
};

// ====================================

export const ProductService = Object.freeze({ list });