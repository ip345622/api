import { Controller,Post,Body } from '@nestjs/common';
import { CreateUserDto } from './DTO/create-user.dto';
import { UsersService } from './users.service';
import { Get } from '@nestjs/common';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}
    @Post()
    createUser(@Body() newUser: CreateUserDto){
        return this.usersService.CreateUser(newUser)
    }
}
