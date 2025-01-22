import vine from "@vinejs/vine";

export const UpdateProductSchema = vine.object({
  id: vine.number(),
  name: vine.string(),
  description: vine.string(),
  active: vine.boolean(),
  price: vine.number(),
  stock: vine.number(),
});