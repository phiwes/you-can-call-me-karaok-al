import {Controller, Request, Post, UseGuards, Get} from '@nestjs/common';


@Controller('auth')
export class AuthController {

    @Post()
    async login(@Request() req) {
        return req.user;
    }

    @Get()
    getHello(): string {
        return "the other controller works and so does this one you dummy";
    }
}
