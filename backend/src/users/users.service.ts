import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersModel.create(createUserDto);
  }

  findAll() {
    return this.usersModel.find();
  }

  findOne(id: number) {
    return this.usersModel.findById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersModel.findByIdAndUpdate(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersModel.findByIdAndRemove(id);
  }
}
