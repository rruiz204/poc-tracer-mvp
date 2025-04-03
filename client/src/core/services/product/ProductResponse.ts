import { Product } from "@models/Product";

export interface SimpleProductResponse extends Product {};

export interface ListProductsResponse {
  products: Product[];
};