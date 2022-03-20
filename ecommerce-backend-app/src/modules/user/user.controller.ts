import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from './../../entitys/user.entity';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getAllUsers')
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Post('/addUser')
  addUser(@Body() userDto: UserDto) {
    return this.userService.addUser(userDto);
  }

  @Get('/getUserOnEmailId/:emailID')
  getUserOnEmail(@Param('emailID') emailID: string) {
    return this.userService.getUserOnEmail(emailID);
  }

  @Get('/login/:emailID')
  login(@Param('emailID') emailID: string) {
    return this.userService.login(emailID);
  }
}
