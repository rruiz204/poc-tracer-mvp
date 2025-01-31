import { faker } from "@faker-js/faker";
import { Product } from "@core/models/Product";

interface FactoryArgs {
  id: number;
  active: boolean;
};

export class ProductFactory {
  public static build({ id, active }: FactoryArgs): Product {
    return {
      id: id,
      name: faker.commerce.product(),
      description: faker.lorem.paragraph(),
      price: faker.number.int({ min: 1000, max: 20000 }),
      stock: faker.number.int({ min: 10, max: 50 }),
      active: active,
      createdAt: faker.date.anytime(),
    };
  };
};