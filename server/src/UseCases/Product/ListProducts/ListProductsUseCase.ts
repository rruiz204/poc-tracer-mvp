import type { UseCase } from "@UseCases/UseCase";
import type { UnitOfWork } from "@Database/Core/UnitOfWork";
import type { ProductDTO } from "@UseCases/DTOs/ProductDTO";
import type { ListProductsQuery } from "./ListProductsQuery";

import { ListProductsSchema } from "./ListProductsSchema";

export class ListProductsUseCase implements UseCase<ListProductsQuery ,ProductDTO[]> {
  constructor(private uow: UnitOfWork) {};

  public async execute(query: ListProductsQuery): Promise<ProductDTO[]> {
    await ListProductsSchema.validate(query);
    const offset = query.page * query.limit;

    const products = await this.uow.product.list({
      offset: offset, limit: query.limit,
    });
    
    return products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      active: product.active,
      createdAt: product.createdAt,
      description: product.description,
    }));
  };
};