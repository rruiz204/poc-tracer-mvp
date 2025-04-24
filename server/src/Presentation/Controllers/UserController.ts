import type { Request, Response } from "express";

import type { ListUsersUseCase } from "@UseCases/User/ListUsers/ListUsersUseCase";
import type { UpdateUserUseCase } from "@UseCases/User/UpdateUser/UpdateUserUseCase";
import type { DeleteUserUseCase } from "@UseCases/User/DeleteUser/DeleteUserUseCase";

export class UserController {
  constructor(
    private listUsersUseCase: ListUsersUseCase,
    private updateUserUseCase: UpdateUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
  ) {
    this.list = this.list.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  };

  public async list(req: Request, res: Response) {
    const users = await this.listUsersUseCase.execute({ page: 0, limit: 10 });
    res.status(200).json({ users: users });
  };

  public async update(req: Request, res: Response) {
    const updated = await this.updateUserUseCase.execute(req.body);
    res.status(200).json({ user: updated });
  };

  public async delete(req: Request, res: Response) {
    const deleted = await this.deleteUserUseCase.execute(req.body);
    res.status(200).json({ user: deleted });
  };
};