import { ListProductResponse } from "@core/services/product/ProductResponse";

const positive: ListProductResponse = {
  products: [
    {
      id: 1,
      name: "Bike-1",
      price: 3000,
      stock: 20,
      active: true,
      description: "Random description about this bike",
      createdAt: new Date(),
    },
    {
      id: 2,
      name: "Bike-2",
      price: 6000,
      stock: 15,
      active: true,
      description: "Random description about this bike",
      createdAt: new Date(),
    },
    {
      id: 3,
      name: "Bike-3",
      price: 9000,
      stock: 10,
      active: false,
      description: "Random description about this bike",
      createdAt: new Date(),
    },
  ],
};

export const ListProductsFixture = Object.freeze({ positive });