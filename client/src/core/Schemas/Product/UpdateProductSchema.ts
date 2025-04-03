import * as yup from "yup";

export const UpdateProductSchema = yup.object({
  name: yup.string(),
  description: yup.string(),
  price: yup.number()
    .typeError("The price must be a valid number")
    .positive(),
  stock: yup.number()
    .typeError("The stock must be a valid number")
    .integer(),
  active: yup.boolean()
});