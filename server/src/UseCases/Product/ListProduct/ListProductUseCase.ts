import type { ProductRepository } from "@Repositories/ProductRepository";
import type { ListProductQuery } from "./ListProductQuery";
import type { ListProductResponse } from "./ListProductResponse";

export class ListProductUseCase {
  constructor(
    private repository: ProductRepository,
  ) {};

  public async use(): Promise<ListProductResponse[]> {
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