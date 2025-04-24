import * as yup from "yup";
import { DeleteUserSchema } from "./DeleteUserSchema";
export type DeleteUserCommand = yup.InferType<typeof DeleteUserSchema>;