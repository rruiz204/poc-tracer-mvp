import { Product } from "@core/models/Product";

export interface ListProductResponse {
  products: Product[];
};

export interface CreateProductResponse {
  product: Product;
};

export interface RemoveProductResponse {
  product: Product;
};

export interface UpdateProductResponse {
  product: Product;
};