import { Injectable } from '@nestjs/common';
import {UsersService} from './user.service';
import {JwtService} from '@nestjs/jwt';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from './user.entity';
import {Repository} from 'typeorm';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService,
                private readonly jwtService: JwtService,
                @InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const findOneOptions = {
            userName: username
        };

        let user = await this.userRepository.findOne(findOneOptions);
        pass = crypto.createHmac('sha256', pass).digest('hex');

        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
