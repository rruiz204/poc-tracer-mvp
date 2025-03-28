import { describe, expect, it, vi, beforeEach } from "vitest";

import type { Product } from "@prisma/client";

import { Context } from "@Database/Core/Context";
import { UnitOfWork } from "@Database/Core/UnitOfWork";
import { NotFoundException } from "@Exceptions/NotFoundException";
import { ProductFactory } from "@Database/Factories/ProductFactory";
import { UpdateProductUseCase } from "@UseCases/Product/UpdateProduct/UpdateProductUseCase";

describe("update product use case", () => {
  let product1: Product;

  const uow = new UnitOfWork(Context);
  const useCase = new UpdateProductUseCase(uow);

  beforeEach(async () => {
    product1 = await ProductFactory.build({ id: 1 });
  });

  it("should update the product when it exists", async () => {
    vi.spyOn(uow.product, "findById").mockResolvedValue(product1);
    vi.spyOn(uow.product, "update").mockResolvedValue(product1);

    const product = await useCase.execute({ ...product1 });
    expect(product.name).toEqual(product1.name);
  });

  it("should throw NotFoundException when trying to update a non-existent product", async () => {
    vi.spyOn(uow.product, "findById").mockResolvedValue(null);
    
    await expect(useCase.execute({ ...product1 }))
      .rejects.toThrowError(NotFoundException);
  });
});