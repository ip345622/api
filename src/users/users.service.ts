import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './DTO/create-user.dto';
import { updateUsuerDto } from './DTO/update-user.dto';
// import { privateDecrypt } from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  CreateUser(user: CreateUserDto) {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  getUsers() {
    return this.userRepository.find(); // Buscar todo Find()
  }
  getUser(id: number) {
    return this.userRepository.findOne({
      where: {
        pkUser: id,
      },
    });
  }
  // actualizar
  updateUser(id:number, user: updateUsuerDto){
    return this.userRepository.update({pkUser:id},user);
  }
  // eliminar usuario
  deleteUser(id:number){
    
  }
}
