import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './user.entity';
import { Module } from '@nestjs/common';
import {AuthController} from './auth.controller';
import {UsersService} from './user.service';
import {AuthService} from './auth.service';
import {LocalStrategy} from './local.strategy';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [AuthController],
    providers: [UsersService, AuthService, LocalStrategy],
})
export class AuthModule {}
