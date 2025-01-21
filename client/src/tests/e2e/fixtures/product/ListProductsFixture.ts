import { ProductListResponse } from "@core/services/product/ProductResponse";

const response: ProductListResponse = {
  path: "list",
  products: [
    {
      id: 12,
      name: "random name 1",
      description: "random description 1",
      price: 1500,
      stock: 50,
      active: true,
      createdAt: new Date()
    },
    {
      id: 13,
      name: "random name 2",
      description: "random description 2",
      price: 3000,
      stock: 23,
      active: true,
      createdAt: new Date(),
    },
  ],
};

export const ListProductFixture = {
  status: 200,
  contentType: "application/json",
  body: JSON.stringify(response),
};