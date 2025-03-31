import * as yup from "yup";

export const ListProductsSchema = yup.object({
  page: yup.number().required().integer().moreThan(-1),
  limit: yup.number().required().integer().positive(),
});