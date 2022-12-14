import { Injectable } from "@nestjs/common";
import { randomUUID } from "node:crypto";
import { PrismaService } from "src/database/prisma.service";
import { UserRepository } from "../userRepository";

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private prisma: PrismaService){}

    async create(name: string, userFunction: string): Promise<void> {
        await this.prisma.user.create({
            data: {
                id: randomUUID(),
                name,
                function: userFunction
            }
        })
    }
}