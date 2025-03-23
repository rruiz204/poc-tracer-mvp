import type { UseCase } from "@UseCases/UseCase";
import type { ListProductQuery } from "./ListProductQuery";
import type { UnitOfWork } from "@Database/Core/UnitOfWork";
import type { ProductDTO } from "@UseCases/DTOs/ProductDTO";

export class ListProductUseCase implements UseCase<ListProductQuery ,ProductDTO[]> {
  constructor(private uow: UnitOfWork) {};

  public async use(query: ListProductQuery): Promise<ProductDTO[]> {
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