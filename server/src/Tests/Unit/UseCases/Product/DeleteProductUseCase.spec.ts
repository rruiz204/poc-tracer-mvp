import { describe, expect, it, vi } from "vitest";

import { Context } from "@Database/Context";
import { ProductFactory } from "@Database/Factories/ProductFactory";
import { ProductRepository } from "@Repositories/ProductRepository";
import { DeleteProductUseCase } from "@UseCases/Product/DeleteProduct/DeleteProductUseCase";

describe("delete product use case", () => {
  const repository = new ProductRepository(Context);
  const useCase = new DeleteProductUseCase(repository);

  it("should delete product correctly", async () => {
    const product = ProductFactory.build({ id: 1 });

    vi.spyOn(repository, "find").mockResolvedValue(product);
    vi.spyOn(repository, "delete").mockResolvedValue(product);

    const deleted = await useCase.use({ id: product.id });
    expect(deleted.id).toEqual(product.id);
  });

  it("should throw error when product not found", async () => {
    const product = ProductFactory.build({ id: 1 });

    vi.spyOn(repository, "find").mockResolvedValue(null);
    vi.spyOn(repository, "delete");

    await expect(useCase.use({ id: product.id }))
      .rejects.toThrowError("Product not found");
  });
});