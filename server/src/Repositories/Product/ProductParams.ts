import type { Product } from "@prisma/client";

interface ProductCommonFields {
  id: Product["id"];
  name: Product["name"];
  price: Product["price"];
  stock: Product["stock"];
  active?: Product["active"];
  description: Product["description"];
};

export interface ListProductsParams {
  offset: number; limit: number;
};

export interface DeleteProductParams {
  id: ProductCommonFields["id"];
};

export interface CreateProductParams {
  create: Omit<ProductCommonFields, "id">;
};

export interface UpdateProductParams {
  id: ProductCommonFields["id"];
  update: Omit<Partial<ProductCommonFields>, "id">;
};