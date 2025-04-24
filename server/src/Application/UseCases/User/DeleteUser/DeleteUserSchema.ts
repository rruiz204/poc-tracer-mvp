import * as yup from "yup";

export const DeleteUserSchema = yup.object({
  id: yup.number().required().positive(),
});