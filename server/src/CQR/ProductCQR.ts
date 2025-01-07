export interface ListProductQuery {};

export interface ListProductResponse {};

// =======================================

export interface CreateProductCommand {
  name: string;
  code: string;
  price: string;
};

export interface CreateProductResponse {
  id: number;
  name: string;
  code: string;
  price: string;
};