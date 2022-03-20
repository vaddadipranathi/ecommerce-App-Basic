import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Products } from 'src/entitys/products.entity';
import { ProductsInfoDto } from './products.dto';
import { ProductsService } from './products.service';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/getAllProducts')
  getAllProducts(): Promise<Products[]> {
    return this.productsService.getAllProducts();
  }

  @Post('/addProduct')
  addProduct(@Body() productsInfoDto: ProductsInfoDto) {
    return this.productsService.addProduct(productsInfoDto);
  }

  @Get('/getProductById/:id')
  getProductById(@Param('id') id: number) {
    return this.productsService.getProductById(id);
  }
}
