import { describe, expect, it, vi, beforeEach } from "vitest";

import type { Product } from "@prisma/client";

import { Context } from "@Database/Core/Context";
import { UnitOfWork } from "@Database/Core/UnitOfWork";
import { ProductFactory } from "@Database/Factories/ProductFactory";
import { RedundancyException } from "@Exceptions/RedundancyException";
import { CreateProductUseCase } from "@UseCases/Product/CreateProduct/CreateProductUseCase";

describe("create product use case", () => {
  let product1: Product;
  
  const uow = new UnitOfWork(Context);
  const useCase = new CreateProductUseCase(uow);

  beforeEach(async () => {
    product1 = await ProductFactory.build({ id: 1 });
  });

  it("should create a new product when no product with the same name exists", async () => {
    vi.spyOn(uow.product, "findByName").mockResolvedValue(null);
    vi.spyOn(uow.product, "create").mockResolvedValue(product1);

    const product = await useCase.execute({ ...product1 });
    expect(product.name).toEqual(product1.name);
  });

  it("should throw RedundancyException when a product with the same name already exists", async () => {
    vi.spyOn(uow.product, "findByName").mockResolvedValue(product1);
    
    await expect(useCase.execute({ ...product1 }))
      .rejects.toThrowError(RedundancyException);
  });
});