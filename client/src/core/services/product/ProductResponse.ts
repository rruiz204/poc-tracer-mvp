import { Product } from "@core/models/Product";

export interface ProductListResponse {
  path: string;
  products: Product[];
};