import { describe, expect, it, afterEach } from "vitest";

import { Context } from "@Database/Context";
import { ProductFactory } from "@Database/Factories/ProductFactory";
import { ProductRepository } from "@Repositories/ProductRepository";

describe("product repository", () => {
  const repository = new ProductRepository(Context);

  afterEach(async () => {
    await Context.product.deleteMany();
  });

  it("should create a product in the database", async () => {
    const product = ProductFactory.build({ id: 1 });
    const { name, description, price, stock } = product;

    await repository.create({ name, description, price, stock });
    const data = await Context.product.findFirst({ where: { name: { equals: product.name } }});

    expect(data?.name).toEqual(product.name);
  });

  it("should list all products from the database", async () => {
    const product = ProductFactory.build({ id: 1 });
    const { name, description, price, stock } = product;

    await Context.product.createMany({ data: [{ name, description, price, stock }] });
    const data = await repository.list();

    expect(data.length).toEqual(1);
  });

  it("should find a product by its name", async () => {
    const product = ProductFactory.build({ id: 1 });
    const { name, description, price, stock } = product;

    await Context.product.create({ data: { name, description, price, stock } });
    const data = await repository.find({ name: { equals: product.name } });
    
    expect(data?.name).toEqual(product.name);
  });

  it("should delete a product by its id", async () => {
    const product = ProductFactory.build({ id: 1 });
    const { name, description, price, stock } = product;

    await Context.product.create({ data: { name, description, price, stock } });
    const existing = await Context.product.findFirst({ where: { name: { equals: name } } });

    await repository.delete({ id: existing?.id });
    const counter = await Context.product.count();
    expect(counter).toEqual(0);
  });

  it("should update the data of a product", async () => {
    const product = ProductFactory.build({ id: 1 });
    const { name, description, price, stock } = product;

    await Context.product.create({ data: { name, description, price, stock } });
    const updated = await repository.update({ name: product.name }, { price: 1000 });

    expect(updated.price).toEqual(1000);
  });

});