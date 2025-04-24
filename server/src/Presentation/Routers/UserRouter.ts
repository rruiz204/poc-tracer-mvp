import { Router } from "express";
import { Context } from "@Database/Core/Context";
import { UnitOfWork } from "@Database/Core/UnitOfWork";
import { UserController } from "@Controllers/UserController";

import { ListUsersUseCase } from "@UseCases/User/ListUsers/ListUsersUseCase";
import { UpdateUserUseCase } from "@UseCases/User/UpdateUser/UpdateUserUseCase";
import { DeleteUserUseCase } from "@UseCases/User/DeleteUser/DeleteUserUseCase";

const uow = new UnitOfWork(Context);

const listUsersUseCase = new ListUsersUseCase(uow);
const deleteUserUseCase = new DeleteUserUseCase(uow);
const updateUserUseCase = new UpdateUserUseCase(uow);

const userController = new UserController(
  listUsersUseCase, updateUserUseCase, deleteUserUseCase,
);

export const UserRouter = Router();

UserRouter.get("/", userController.list);
UserRouter.put("/", userController.update);
UserRouter.delete("/", userController.delete);