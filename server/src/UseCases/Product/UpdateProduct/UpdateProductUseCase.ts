import { UpdateProductSchema } from "./UpdateProductSchema";
import { ValidationService } from "@Services/ValidationService";

import type { UseCase } from "@UseCases/UseCase";
import type { ProductDTO } from "@UseCases/DTOs/ProductDTO";
import type { UpdateProductCommand } from "./UpdateProductCommand";
import type { ProductRepository } from "@Repositories/ProductRepository";

export class UpdateProductUseCase implements UseCase<UpdateProductCommand, ProductDTO> {
  constructor(
    private repository: ProductRepository,
  ) {};

  public async use(command: UpdateProductCommand): Promise<ProductDTO> {
    await ValidationService.validate(UpdateProductSchema, command);

    const existing = await this.repository.find({ id: { equals: command.id } });
    if (!existing) throw new Error("Product not found");

    const updated = await this.repository.update({ id: command.id }, command);
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