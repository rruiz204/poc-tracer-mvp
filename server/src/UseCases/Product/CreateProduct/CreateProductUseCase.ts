import { CreateProductSchema } from "./CreateProductSchema";
import { ValidationService } from "@Services/ValidationService";

import type { UseCase } from "@UseCases/UseCase";
import type { UnitOfWork } from "@Database/Core/UnitOfWork";
import type { ProductDTO } from "@UseCases/DTOs/ProductDTO";
import type { CreateProductCommand } from "./CreateProductCommand";

export class CreateProductUseCase implements UseCase<CreateProductCommand, ProductDTO> {
  constructor(private uow: UnitOfWork) {};

  public async use(command: CreateProductCommand): Promise<ProductDTO> {
    await ValidationService.validate(CreateProductSchema, command);

    const existing = await this.uow.product.findByName(command.name);
    if (existing) throw new Error("This product is already registered");

    const created = await this.uow.product.create({ create: command });
    
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