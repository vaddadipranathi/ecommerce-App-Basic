import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logger } from 'src/config/logger/logger.service';
import { User } from './../../entitys/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, Logger],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
