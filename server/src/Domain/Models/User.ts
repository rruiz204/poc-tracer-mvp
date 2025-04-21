import { Prisma } from "@prisma/client";
import type { User as Model } from "@prisma/client";
import type { Pagination } from "@Types/Pagination";
import type { Specification } from "@Specs/Specification";

export namespace User {
  export type Entity = Model;
  export type Records = Model[];
  export type Nullable = Model | null;

  export type CreateParams = Prisma.UserCreateInput;
  export type UpdateParams = Prisma.UserUpdateInput;

  export type WhereParams = Prisma.UserWhereInput;
  export type OrderParams = Prisma.UserOrderByWithRelationInput;

  export type Spec = Specification<WhereParams, OrderParams>;
  export const Paginate: Pagination = { take: 0, skip: 10 };
};