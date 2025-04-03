import * as yup from "yup";

export const DeleteProductSchema = yup.object({
  id: yup.string().required("Name is a required field"),
});