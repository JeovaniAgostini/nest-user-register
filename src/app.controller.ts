import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser } from './dtos/createUser';
import { UserRepository } from './repositories/userRepository';

@Controller('app')
export class AppController {
    constructor(
        private userRepository: UserRepository
    ){}

    @Get()
    getHello(): string {
        return "Hello";
    }

    @Post('hello')
    async getHello2(@Body() body:CreateUser) {
        const { name, function: userFunction } = body;

        await this.userRepository.create(name, userFunction)
    }
}
