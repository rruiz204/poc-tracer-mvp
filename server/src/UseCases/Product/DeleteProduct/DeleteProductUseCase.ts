import type { UseCase } from "@UseCases/UseCase";
import type { UnitOfWork } from "@Database/Core/UnitOfWork";
import type { ProductDTO } from "@UseCases/DTOs/ProductDTO";
import type { DeleteProductCommand } from "./DeleteProductCommand";

import { DeleteProductSchema } from "./DeleteProductSchema";

export class DeleteProductUseCase implements UseCase<DeleteProductCommand, ProductDTO> {
  constructor(private uow: UnitOfWork) {};

  public async execute(command: DeleteProductCommand): Promise<ProductDTO> {
    await DeleteProductSchema.validate(command);

    const product = await this.uow.product.findById(command.id);
    if (!product) throw new Error("Product not found");

    const deleted = await this.uow.product.delete({ id: command.id });
    
    return {
      id: deleted.id,
      name: deleted.name,
      description: deleted.description,
      price: deleted.price,
      stock: deleted.stock,
      active: deleted.active,
      createdAt: deleted.createdAt,
    };
  };
};