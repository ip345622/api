import { Controller,Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './DTO/create-user.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}
    @Post()
    createUser(@Body() newUser: CreateUserDto){
        return this.usersService.CreateUser(newUser)
    }
    @Get()
    getUser(@Body() newUser: CreateUserDto){
        return this.usersService.getUser();
    }

}
