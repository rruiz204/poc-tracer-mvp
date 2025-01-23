import { describe, expect, it, vi } from "vitest";

import { Context } from "@Database/Context";
import { ProductFactory } from "@Database/Factories/ProductFactory";
import { ProductRepository } from "@Repositories/ProductRepository";
import { UpdateProductUseCase } from "@UseCases/Product/UpdateProduct/UpdateProductUseCase";

describe("update product use case", () => {
  const repository = new ProductRepository(Context);
  const useCase = new UpdateProductUseCase(repository);

  it("should update product correctly", async () => {
    const product = ProductFactory.build({ id: 1 });
    const { id, name, description, price, stock, active } = product;

    vi.spyOn(repository, "find").mockResolvedValue(product);
    vi.spyOn(repository, "update").mockResolvedValue(product);

    const updated = await useCase.use({ id, name, description, price, stock, active });
    expect(updated.name).toEqual(name);
  });

  it("should throw error when product not found", async () => {
    const product = ProductFactory.build({ id: 1 });
    const { id, name, description, price, stock, active } = product;

    vi.spyOn(repository, "find").mockResolvedValue(null);
    vi.spyOn(repository, "update");

    await expect(useCase.use({ id, name, description, price, stock, active }))
      .rejects.toThrowError("Product not found");
  });
});