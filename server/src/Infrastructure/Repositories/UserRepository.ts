import { User } from "@Models/User";
import { PrismaClient } from "@prisma/client";

export class UserRepository {
  constructor(private prisma: PrismaClient) {};

  public async list(spec: User.Spec): Promise<User.Records> {
    return await this.prisma.user.findMany({
      where: spec.toFilters?.(),
      orderBy: spec.toOrder?.(),
      take: User.Paginate.take,
      skip: User.Paginate.skip,
    });
  };

  public async update(id: number, params: User.UpdateParams): Promise<User.Entity> {
    return await this.prisma.user.update({ data: params, where: { id } });
  };

  public async create(params: User.CreateParams): Promise<User.Entity> {
    return await this.prisma.user.create({ data: params });
  };

  public async delete(id: number): Promise<User.Entity> {
    return await this.prisma.user.delete({ where: { id } });
  };

  public async findById(id: number): Promise<User.Nullable> {
    return await this.prisma.user.findUnique({ where: { id } });
  };

  public async findByEmail(email: string): Promise<User.Nullable> {
    return await this.prisma.user.findUnique({ where: { email } });
  };
};