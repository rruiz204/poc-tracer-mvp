import * as yup from "yup";
import { EmailRegisterSchema } from "./EmailRegisterSchema";
export type EmailRegisterCommand = yup.InferType<typeof EmailRegisterSchema>;