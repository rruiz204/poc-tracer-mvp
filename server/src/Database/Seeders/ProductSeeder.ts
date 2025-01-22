import type { Seeder } from "./Seeder";
import { ProductFactory } from "@Database/Factories/ProductFactory";
import type { ProductRepository } from "@Repositories/ProductRepository";

export class ProductSeeder implements Seeder {
  private name: string = "product-seeder";

  constructor(
    private amount: number,
    private repository: ProductRepository,
  ) {};

  public getName(): string {
    return this.name;
  }

  public async seed(): Promise<void> {
    for (let index = 0; index < this.amount; index++) {
      const data = ProductFactory.build({ id: index });
      const { description, price, stock } = data;

      const name = `${data.name}-${index}`;
      await this.repository.create({ name, description, price, stock });
    };
  };
};