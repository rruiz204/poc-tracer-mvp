import * as yup from "yup";
import { LoginUserSchema } from "./LoginUserSchema";
export type LoginUserCommand = yup.InferType<typeof LoginUserSchema>;