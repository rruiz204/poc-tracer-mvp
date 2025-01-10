import { faker } from "@faker-js/faker";
import { Prisma, type Product } from "@prisma/client";

interface FactoryArgs {
  id: number;
  name: string;
};

export class ProductFactory {
  public static build({ id, name }: FactoryArgs): Product {
    const price = faker.number.float({ min: 10, max: 50 }).toFixed(2)

    return {
      id: id,
      name: name,
      description: faker.lorem.paragraph(),
      price: new Prisma.Decimal(price),
      stock: faker.number.int({ min: 10, max: 50 }),
      active: faker.datatype.boolean(),
      createdAt: faker.date.anytime(),
      updatedAt: faker.date.anytime(),
    };
  };
};