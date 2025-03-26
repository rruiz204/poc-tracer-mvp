import type { UseCase } from "@UseCases/UseCase";
import type { UnitOfWork } from "@Database/Core/UnitOfWork";
import type { ProductDTO } from "@UseCases/DTOs/ProductDTO";
import type { UpdateProductCommand } from "./UpdateProductCommand";

import { UpdateProductSchema } from "./UpdateProductSchema";
import { NotFoundException } from "@Exceptions/NotFoundException";

export class UpdateProductUseCase implements UseCase<UpdateProductCommand, ProductDTO> {
  constructor(private uow: UnitOfWork) {};

  public async execute(command: UpdateProductCommand): Promise<ProductDTO> {
    await UpdateProductSchema.validate(command);

    const existing = await this.uow.product.findById(command.id);
    if (!existing) throw new NotFoundException("Product not found");

    const updated = await this.uow.product.update({
      id: existing.id, update: command,
    });

    return {
      id: updated.id,
      name: updated.name,
      description: updated.description,
      price: updated.price,
      stock: updated.stock,
      active: updated.active,
      createdAt: updated.createdAt,
    };
  };
};