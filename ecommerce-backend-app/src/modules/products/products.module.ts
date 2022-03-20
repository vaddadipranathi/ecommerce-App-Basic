import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logger } from 'src/config/logger/logger.service';
import { Products } from 'src/entitys/products.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  providers: [ProductsService, Logger],
  controllers: [ProductsController],
  exports: [ProductsService],
})
export class ProductsModule {}
