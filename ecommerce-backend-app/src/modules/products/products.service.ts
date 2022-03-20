import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from 'src/config/logger/logger.service';
import { Repository } from 'typeorm';
import { Products } from './../../entitys/products.entity';
import { ProductsInfoDto } from './products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
    private loggerService: Logger,
  ) {}

  async addProduct(productsInfoDto: ProductsInfoDto) {
    const product = new Products();
    console.log('hi');
    Object.assign(product, productsInfoDto);
    product.status = true;
    return await this.productsRepository.save(product);
  }

  async getAllProducts(): Promise<Products[]> {
    return await this.productsRepository.find();
  }

  async getProductById(id: number) {
    return await this.productsRepository.findOne({
      id: id,
    });
  }
}
