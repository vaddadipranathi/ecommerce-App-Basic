import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Constants } from 'src/common/const/const';
import { Logger } from 'src/config/logger/logger.service';
import { Repository } from 'typeorm';
import { User } from './../../entitys/user.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private loggerService: Logger,
  ) {}

  async addUser(userDto: UserDto) {
    const user = new User();
    Object.assign(user, userDto);
    user.status = true;
    return await this.userRepository.save(user);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserOnEmail(emailID: string) {
    return await this.userRepository.findOne({
      emailID: emailID,
    });
  }

  async login(emailID: string) {
    const result = await this.getUserOnEmail(emailID);
    if (result) {
      Constants.emailID = emailID;
      return true;
    }
  }
}
