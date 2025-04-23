import type { UserDTO } from "@DTOs/UserDTO";
import type { UseCase } from "@UseCases/UseCase";
import type { ListUsersQuery } from "./ListUsersQuery";
import type { UnitOfWork } from "@Database/Core/UnitOfWork";

export class ListUsersUseCase implements UseCase<ListUsersQuery, UserDTO[]> {
  constructor(private uow: UnitOfWork) {};

  public async execute(query: ListUsersQuery): Promise<UserDTO[]> {
    const page = query.page * query.limit;

    const users = await this.uow.user.list();

    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  };
};