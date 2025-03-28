import { describe, expect, it, vi, beforeEach } from "vitest";

import type { Product } from "@prisma/client";

import { Context } from "@Database/Core/Context";
import { UnitOfWork } from "@Database/Core/UnitOfWork";
import { ProductFactory } from "@Database/Factories/ProductFactory";
import { ListProductsUseCase } from "@UseCases/Product/ListProducts/ListProductsUseCase";

describe("list products use case", () => {
  let product1: Product, product2: Product, product3: Product;

  const uow = new UnitOfWork(Context);
  const flags = { page: 0, limit: 10 };
  const useCase = new ListProductsUseCase(uow);

  beforeEach(async () => {
    product1 = await ProductFactory.build({ id: 1 });
    product2 = await ProductFactory.build({ id: 2 });
    product3 = await ProductFactory.build({ id: 3 });
  });

  it("should return a list of products when products exist", async () => {
    vi.spyOn(uow.product, "list").mockResolvedValue([product1, product2, product3]);
    const products = await useCase.execute(flags);
    expect(products.length).toEqual(3);
  });

  it("should return an empty list when no products are found", async () => {
    vi.spyOn(uow.product, "list").mockResolvedValue([]);
    const products = await useCase.execute(flags);
    expect(products.length).toEqual(0);
  });
});