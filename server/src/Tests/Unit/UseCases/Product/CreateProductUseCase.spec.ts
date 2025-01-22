import { describe, expect, it, vi } from "vitest";

import { Context } from "@Database/Context";
import { ProductFactory } from "@Database/Factories/ProductFactory";
import { ProductRepository } from "@Repositories/ProductRepository";
import { CreateProductUseCase } from "@UseCases/Product/CreateProduct/CreateProductUseCase";

describe("create product use case", () => {
  const repository = new ProductRepository(Context);
  const useCase = new CreateProductUseCase(repository);

  it("should create product correctly when it does not already exist", async () => {
    const product = ProductFactory.build({ id: 1 });
    const { name, description, price, stock } = product;

    vi.spyOn(repository, "find").mockResolvedValue(null);
    vi.spyOn(repository, "create").mockResolvedValue(product);

    const response = await useCase.use({ name, description, price, stock });
    expect(response.id).toEqual(product.id);
  });

  it("should throw error when product already exists", async () => {
    const product = ProductFactory.build({ id: 1 });
    const { name, description, price, stock } = product;

    vi.spyOn(repository, "find").mockResolvedValue(product);
    vi.spyOn(repository, "create");

    await expect(useCase.use({ name, description, price, stock }))
      .rejects.toThrowError("This product is already registered");
  });

});