import { Controller, Post, Body, Get, Query, Inject, HttpCode } from '@midwayjs/decorator';
import { HttpStatus } from '@midwayjs/core';
import { UserService } from '../service/user.service';

@Controller('/api/user')
export class UserController {
    @Inject()
    userService: UserService;

    @Post('/register')
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() body: { username: string, email: string, password: string, avatar?: string, hobbies?: string[] }) {
        // Controller logic
    }

    @Post('/login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() body: { email: string, password: string }) {
        // Controller logic
    }

    @Get('/get_user')
    @HttpCode(HttpStatus.OK)
    async getUser(@Query('uid') uid: string) {
        // Controller logic
    }
}
