import * as yup from "yup";

export const ProductSchema = yup.object({
  name: yup.string()
    .required("Name is a required field"),
  description: yup.string()
    .required("Description is a required field"),
  price: yup.number()
    .typeError("The price must be a valid number")
    .positive().required(),
  stock: yup.number()
    .typeError("The stock must be a valid number")
    .integer().required(),
  active: yup.boolean().required(),
});

export type ProductSchemaType = yup.InferType<typeof ProductSchema>;