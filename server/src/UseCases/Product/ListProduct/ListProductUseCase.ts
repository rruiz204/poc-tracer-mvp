import type { UseCase } from "@UseCases/UseCase";
import type { ProductDTO } from "@UseCases/DTOs/ProductDTO";
import type { ListProductQuery } from "./ListProductQuery";
import type { ProductRepository } from "@Repositories/ProductRepository";

export class ListProductUseCase implements UseCase<ListProductQuery ,ProductDTO[]> {
  constructor(
    private repository: ProductRepository,
  ) {};

  public async use(query: ListProductQuery): Promise<ProductDTO[]> {
    return (await this.repository.list()).map(p => ({
      id: p.id,
      name: p.name,
      description: p.description,
      price: p.price,
      stock: p.stock,
      active: p.active,
      createdAt: p.createdAt
    }));
  };
};