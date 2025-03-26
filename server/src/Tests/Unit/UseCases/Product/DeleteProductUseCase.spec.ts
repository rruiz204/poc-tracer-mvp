import { describe, expect, it, vi, beforeEach } from "vitest";

import type { Product } from "@prisma/client";

import { Context } from "@Database/Core/Context";
import { UnitOfWork } from "@Database/Core/UnitOfWork";
import { NotFoundException } from "@Exceptions/NotFoundException";
import { ProductFactory } from "@Database/Factories/ProductFactory";
import { DeleteProductUseCase } from "@UseCases/Product/DeleteProduct/DeleteProductUseCase";

describe("delete product use case", () => {
  let product1: Product;
  
  const uow = new UnitOfWork(Context);
  const useCase = new DeleteProductUseCase(uow);

  beforeEach(async () => {
    product1 = await ProductFactory.build({ id: 1 });
  });

  // ======================== Test Section ============================

  it("should delete the product when it exists", async () => {
    vi.spyOn(uow.product, "findById").mockResolvedValue(product1);
    vi.spyOn(uow.product, "delete").mockResolvedValue(product1);

    const product = await useCase.execute({ ...product1 });
    expect(product.name).toEqual(product1.name);
  });

  it("should throw NotFoundException when trying to delete a non-existent product", async () => {
    vi.spyOn(uow.product, "findById").mockResolvedValue(null);
    
    await expect(useCase.execute({ ...product1 }))
      .rejects.toThrowError(NotFoundException);
  });
});