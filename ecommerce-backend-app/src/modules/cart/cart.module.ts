import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logger } from 'src/config/logger/logger.service';
import { ProductsService } from '../products/products.service';
import { Cart } from './../../entitys/cart.entity';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { Products } from 'src/entitys/products.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Cart, Products])],
  providers: [CartService, Logger, ProductsService],
  controllers: [CartController],
  exports: [CartService],
})
export class CartModule {}
