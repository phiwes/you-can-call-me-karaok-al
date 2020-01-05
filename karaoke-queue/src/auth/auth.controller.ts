import {Controller, Request, Post, UseGuards, Get, Body} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {AuthService} from './auth.service';
import {UsersService} from './user.service';
import {User} from './user.entity';


@Controller()
export class AuthController {

    constructor(private readonly authService: AuthService,
                private readonly userService: UsersService) {}

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @Post('register')
    async create(@Body('user') userData: User) {
        return this.userService.create(userData);
    }
}
