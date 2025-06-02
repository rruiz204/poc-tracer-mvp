import type { User } from "@Models/User";

export interface IUserRepository {
  list(): Promise<User.Records>;
  delete(id: number): Promise<User.Entity>;
  create(params: User.CreateParams): Promise<User.Entity>;
  update(id: number, params: User.UpdateParams): Promise<User.Entity>
  findById(id: number): Promise<User.Nullable>;
  findByEmail(email: string): Promise<User.Nullable>;
};