import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaUserRepository } from './repositories/prisma/prismaUserRepository';
import { UserRepository } from './repositories/userRepository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, {
    provide:  UserRepository,
    useClass: PrismaUserRepository
  }],
})
export class AppModule {}
