import { describe, expect, it, vi } from "vitest";

import { Context } from "@Database/Context";
import { ProductFactory } from "@Database/Factories/ProductFactory";
import { ProductRepository } from "@Repositories/ProductRepository";
import { CreateProductUseCase } from "@UseCases/Product/CreateProduct/CreateProductUseCase";


describe("create product use case", () => {
  const repository = new ProductRepository(Context);
  const useCase = new CreateProductUseCase(repository);

  it("should store the product if validation and checks pass", async () => {
    const product = ProductFactory.build({ id: 1, name: "testing product" });
    const { name, description, price, stock } = product;

    vi.spyOn(repository, "find").mockResolvedValue(null);
    vi.spyOn(repository, "store").mockResolvedValue(product);

    const response = await useCase.use({ name, description, price, stock });
    expect(response.id).toEqual(product.id);
  });

});