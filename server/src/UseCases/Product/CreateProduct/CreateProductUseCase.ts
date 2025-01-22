import { CreateProductSchema } from "./CreateProductSchema";
import { ValidationService } from "@Services/ValidationService";

import type { UseCase } from "@UseCases/UseCase";
import type { ProductDTO } from "@UseCases/DTOs/ProductDTO";
import type { CreateProductCommand } from "./CreateProductCommand";
import type { ProductRepository } from "@Repositories/ProductRepository";

export class CreateProductUseCase implements UseCase<CreateProductCommand, ProductDTO> {
  constructor(
    private repository: ProductRepository,
  ) {};

  public async use(command: CreateProductCommand): Promise<ProductDTO> {
    await ValidationService.validate(CreateProductSchema, command);

    const existing = await this.repository.find({ name: { equals: command.name } });
    if (existing) throw new Error("This product is already registered");

    const created = await this.repository.create(command);
    return {
      id: created.id,
      name: created.name,
      description: created.description,
      price: created.price,
      stock: created.stock,
      active: created.active,
      createdAt: created.createdAt,
    };
  };
};