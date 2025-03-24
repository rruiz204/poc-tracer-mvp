import { faker } from "@faker-js/faker";
import type { Product } from "@prisma/client";

interface BuildArgs {
  id: number;
};

export class ProductFactory {
  public static build({ id }: BuildArgs): Product {
    return {
      id: id,
      name: faker.commerce.product(),
      description: faker.lorem.paragraph(),
      price: faker.number.int({ min: 1000, max: 20000 }),
      stock: faker.number.int({ min: 10, max: 50 }),
      active: faker.datatype.boolean(),
      createdAt: faker.date.anytime(),
      updatedAt: faker.date.anytime(),
    };
  };
};