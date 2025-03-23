import { UpdateProductSchema } from "./UpdateProductSchema";
import { ValidationService } from "@Services/ValidationService";

import type { UseCase } from "@UseCases/UseCase";
import type { UnitOfWork } from "@Database/Core/UnitOfWork";
import type { ProductDTO } from "@UseCases/DTOs/ProductDTO";
import type { UpdateProductCommand } from "./UpdateProductCommand";

export class UpdateProductUseCase implements UseCase<UpdateProductCommand, ProductDTO> {
  constructor(private uow: UnitOfWork) {};

  public async use(command: UpdateProductCommand): Promise<ProductDTO> {
    await ValidationService.validate(UpdateProductSchema, command);

    const existing = await this.uow.product.findById(command.id);
    if (!existing) throw new Error("Product not found");

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