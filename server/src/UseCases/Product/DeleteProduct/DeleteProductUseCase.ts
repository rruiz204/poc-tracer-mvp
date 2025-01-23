import { DeleteProductSchema } from "./DeleteProductSchema";
import { ValidationService } from "@Services/ValidationService";

import type { UseCase } from "@UseCases/UseCase";
import type { ProductDTO } from "@UseCases/DTOs/ProductDTO";
import type { DeleteProductCommand } from "./DeleteProductCommand";
import type { ProductRepository } from "@Repositories/ProductRepository";

export class DeleteProductUseCase implements UseCase<DeleteProductCommand, ProductDTO> {
  constructor(
    private repository: ProductRepository,
  ) {};

  public async use(command: DeleteProductCommand): Promise<ProductDTO> {
    await ValidationService.validate(DeleteProductSchema, command);

    const product = await this.repository.find({ id: { equals: command.id } });
    if (!product) throw new Error("Product not found");

    const deleted = await this.repository.delete({ id: command.id });
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