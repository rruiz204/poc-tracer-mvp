import * as yup from "yup";

export const UpdateUserSchema = yup.object({
  active: yup.boolean(),
  id: yup.number().required(),
  name: yup.string().min(3).max(15),
  email: yup.string().email().max(50),
  password: yup.string().min(8).max(25),
});