import type { Seeder } from "./Seeder";
import { ProductFactory } from "@Database/Factories/ProductFactory";
import { ProductRepository } from "@Repositories/Product/ProductRepository";

export class ProductSeeder implements Seeder {
  private name: string = "product-seeder";
  private amount: number = 10;

  constructor(private productRepository: ProductRepository) {};

  public getName(): string {
    return this.name;
  };

  public async seed(): Promise<void> {
    for (let index = 1; index <= this.amount; index++) {
      const data = await ProductFactory.build({ id: index });
      const name = `${data.name}-${index}`;

      await this.productRepository.create({ create: {
        name: name,
        price: data.price,
        stock: data.stock,
        active: data.active,
        description: data.description,
      }});
    };
  };
};