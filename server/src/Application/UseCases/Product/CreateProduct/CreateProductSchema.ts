import * as yup from "yup";

export const CreateProductSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required().positive(),
  stock: yup.number().required().positive(),
});