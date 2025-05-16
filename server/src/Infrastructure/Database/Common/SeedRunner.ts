import { Context } from "@Database/Common/Context";
import { Seeder } from "@Database/Seeders/Seeder";

import { AdminSeeder } from "@Database/Seeders/AdminSeeder";

const adminSeeder = new AdminSeeder(Context);

const SeedRunner = async (seeders: Seeder[]) => {
  for (const seeder of seeders) {
    const name = seeder.getName();
    await seeder.seed();
    console.log(`Seeder executed ${name}`);
  };
};

await SeedRunner([
  adminSeeder,
]);