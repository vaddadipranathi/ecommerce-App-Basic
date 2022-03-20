/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cart } from './entitys/cart.entity';
import { Products } from './entitys/products.entity';
import { User } from './entitys/user.entity';
import { CartModule } from './modules/cart/cart.module';
import { ProductsModule } from './modules/products/products.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Chelli1@',
      database: 'ecommerceAppDemo',
      entities: [Cart, Products,User],
      synchronize: false,
    }),
    ProductsModule,
    CartModule,
    UserModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
