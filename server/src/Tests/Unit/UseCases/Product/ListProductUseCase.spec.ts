import { describe, expect, it, vi } from "vitest";

import { Context } from "@Database/Context";
import { ProductFactory } from "@Database/Factories/ProductFactory";
import { ProductRepository } from "@Repositories/ProductRepository";
import { ListProductUseCase } from "@UseCases/Product/ListProduct/ListProductUseCase";

describe("list products use case", () => {
  const repository = new ProductRepository(Context);
  const useCase = new ListProductUseCase(repository);

  it("should return all products when products exist", async () => {
    const firstProduct = ProductFactory.build({ id: 1, name: "first product" });
    const secondProduct = ProductFactory.build({ id: 2, name: "second product" });

    vi.spyOn(repository, "list").mockResolvedValue([firstProduct, secondProduct]);
    const response = await useCase.use();
    expect(response.length).toEqual(2);
  });

  it("should return an empty list when no products exist", async () => {
    vi.spyOn(repository, "list").mockResolvedValue([]);
    const response = await useCase.use();
    expect(response.length).toEqual(0);
  });

});