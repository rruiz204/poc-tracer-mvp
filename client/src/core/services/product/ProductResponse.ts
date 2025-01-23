import { Product } from "@core/models/Product";

interface BaseProductResponse {
  product: Product;
  products: Product[];
};

export interface ListProductResponse extends Pick<BaseProductResponse, "products"> {
  path: string;
};

export interface CreateProductResponse extends Pick<BaseProductResponse, "product"> {
  path: string;
};

export interface RemoveProductResponse extends Pick<BaseProductResponse, "product"> {
  path: string;
};

export interface UpdateProductResponse extends Pick<BaseProductResponse, "product"> {
  path: string;
};