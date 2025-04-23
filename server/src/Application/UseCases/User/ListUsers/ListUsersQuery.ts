import * as yup from "yup";
import { ListUsersSchema } from "./ListUsersSchema";
export type ListUsersQuery = yup.InferType<typeof ListUsersSchema>;