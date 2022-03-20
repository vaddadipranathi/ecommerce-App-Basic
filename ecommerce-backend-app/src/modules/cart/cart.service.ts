/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from 'src/config/logger/logger.service';
import { Repository } from 'typeorm';
import { Cart } from './../../entitys/cart.entity';
import { ProductsService } from './../products/products.service';
import { CartDto } from './cart.dto';
import { Constants } from 'src/common/const/const';
@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    private loggerService: Logger,
    private producctService: ProductsService,
  ) {}

  async addCart(id: number) {
    const cart = new Cart();
    const result = await this.producctService.getProductById(id);
    cart.productPrice = result.productPrice;
    cart.status = true;
    cart.productsId = result.id;
    cart.emailID = Constants.emailID;
    return await this.cartRepository.save(cart);
  }

  async getAllCartItems() {
    console.log('input', Constants.emailID);
    const cartDto = new CartDto();
    const cartDtorray: CartDto[] = [];
    const result = await this.cartRepository.find({
      emailID: Constants.emailID,
    });
    for (let val of result) {
      const result = await this.producctService.getProductById(val.productsId);
      Object.assign(cartDto, result);
      cartDtorray.push(Object.assign(cartDto, result));
    }
    return cartDtorray;
  }
}
