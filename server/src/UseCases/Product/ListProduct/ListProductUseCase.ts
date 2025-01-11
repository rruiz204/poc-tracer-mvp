import type { Product } from "@prisma/client";
import type { ProductRepository } from "@Repositories/ProductRepository";

import type { ListProductQuery } from "./ListProductQuery";
import type { ListProductResponse } from "./ListProductResponse";

export class ListProductUseCase {
  constructor(
    private repository: ProductRepository,
  ) {};

  public async use(): Promise<Product[]> { // flag: adjust
    return await this.repository.list();
  };
};