import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './user.entity';
import { Module } from '@nestjs/common';
import {AuthController} from './auth.controller';
import {UsersService} from './user.service';
import {AuthService} from './auth.service';
import {LocalStrategy} from './local.strategy';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import {jwtConstants} from './constants';
import {JwtStrategy} from './jwt.strategy';

@Module({
    imports: [TypeOrmModule.forFeature([User]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '60s'},
        })
    ],
    controllers: [AuthController],
    providers: [UsersService, AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService, UsersService]
})
export class AuthModule {}
