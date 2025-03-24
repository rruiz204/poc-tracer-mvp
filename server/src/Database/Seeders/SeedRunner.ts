import type { Seeder } from "./Seeder";
import { Context } from "@Database/Core/Context";

import { ProductSeeder } from "./ProductSeeder";
import { ProductRepository } from "@Repositories/Product/ProductRepository";

const productRepository = new ProductRepository(Context);
const productSeeder = new ProductSeeder(productRepository);

const SeedRunner = async (seeders: Seeder[]) => {
  for (const seeder of seeders) {
    const name = seeder.getName();

    const executed = await Context.seed.findFirst({
      where: { name: { equals: name } }
    });

    if (executed) return;
    await seeder.seed();

    console.log(`Seeder executed ${name}`);
    await Context.seed.create({ data: { name } });
  };
};

await SeedRunner([
  productSeeder,
]);