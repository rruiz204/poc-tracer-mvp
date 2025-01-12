import vine from "@vinejs/vine";

export const CreateProductSchema = vine.object({
  name: vine.string(),
  description: vine.string(),
  price: vine.number(),
  stock: vine.number(),
});