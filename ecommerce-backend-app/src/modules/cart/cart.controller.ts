import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';

@Controller('cart')
@ApiTags('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('/addIntoCart/:id')
  addCart(@Param('id') id: number) {
    return this.cartService.addCart(id);
  }

  @Get('/getAllCartItems')
  getAllCartItems() {
    return this.cartService.getAllCartItems();
  }
}
