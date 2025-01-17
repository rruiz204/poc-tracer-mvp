import { Context } from "./Context";
import  type{ Seeder } from "./Seeders/Seeder";
import { ProductSeeder } from "./Seeders/ProductSeeder";
import { ProductRepository } from "@Repositories/ProductRepository";

const productRepository = new ProductRepository(Context);
const productSeeder = new ProductSeeder(10, productRepository);


const Runner = async (seeders: Seeder[]) => {
  for (const seeder of seeders) {
    const seedName = seeder.getName();

    const executedSeed = await Context.seed.findFirst({
      where: { name: { equals: seedName} }
    });

    if (!executedSeed) {
      await seeder.seed();
      console.log(`Seeder executed: ${seedName}`);
      await Context.seed.create({ data: { name: seedName } });
    };
  };
};

await Runner([
  productSeeder,
]);