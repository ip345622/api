import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './DTO/create-user.dto';
import { privateDecrypt } from 'crypto';


@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    CreateUser(user:CreateUserDto){
        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser);
    }

    getUser()
    {
        return this.userRepository.find();
    }
}
