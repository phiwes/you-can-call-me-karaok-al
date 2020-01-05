import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from './user.entity';


@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

    async findOne(username: string): Promise<User> {
        return await this.userRepository.findOne({ where: { userName: username } });
    }

    async  findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async create(user: User): Promise<User> {

        // check uniqueness of username/email

        let existingUser = await this.findOne(user.userName);

        if (existingUser) {
            const errors = {username: 'Username and email must be unique.'};
            throw new HttpException({message: 'Input data validation failed', errors}, HttpStatus.BAD_REQUEST);

        }

        // create new user
        let newUser = new User();
        newUser.userName = user.userName;
        newUser.userEmail = user.userEmail;
        newUser.password = user.password;

        const errors = 0;
        if (errors > 0) {
            const _errors = {username: 'Userinput is not valid.'};
            throw new HttpException({message: 'Input data validation failed', _errors}, HttpStatus.BAD_REQUEST);

        } else {
            return await this.userRepository.save(newUser);
        }

    }
}
