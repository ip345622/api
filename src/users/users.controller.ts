import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Delete
} from '@nestjs/common';
import { CreateUserDto } from './DTO/create-user.dto';
import { UsersService } from './users.service';
import { updateUsuerDto } from './DTO/update-user.dto';
// import { promises } from 'dns';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  createUser(@Body() newUser: CreateUserDto) {
    return this.usersService.CreateUser(newUser);
  }
  @Get()
  getUsers(@Body() newUser: CreateUserDto) {
    return this.usersService.getUsers();
  }
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.getUser(id);
  }
  @Put(':id')
  updateUser(@Param('id',ParseIntPipe) id: number, @Body() updUser: updateUsuerDto){
    return this.usersService.updateUser(id, updUser);
  }
  @Delete(':id')
    deleteUser(@Param ('id', ParseIntPipe) id:number){
        return this.usersService.deleteUser(id)
    }

}
