import { PrismaService } from "nestjs-prisma";

import {
  FindOnePostArgs,
  FindManyPostArgs,
  PostCreateArgs,
  PostUpdateArgs,
  PostDeleteArgs,
  Subset,
  Post,
} from "@prisma/client";

export class PostServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async findMany<T extends FindManyPostArgs>(
    args: Subset<T, FindManyPostArgs>
  ): Promise<Post[]> {
    return this.prisma.post.findMany(args);
  }
  async findOne<T extends FindOnePostArgs>(
    args: Subset<T, FindOnePostArgs>
  ): Promise<Post | null> {
    return this.prisma.post.findOne(args);
  }
  async create<T extends PostCreateArgs>(
    args: Subset<T, PostCreateArgs>
  ): Promise<Post> {
    return this.prisma.post.create<T>(args);
  }
  async update<T extends PostUpdateArgs>(
    args: Subset<T, PostUpdateArgs>
  ): Promise<Post> {
    return this.prisma.post.update<T>(args);
  }
  async delete<T extends PostDeleteArgs>(
    args: Subset<T, PostDeleteArgs>
  ): Promise<Post> {
    return this.prisma.post.delete(args);
  }
}
