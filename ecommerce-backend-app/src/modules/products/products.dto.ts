/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
/**
 * Starting of ProductsInfoDto
 */
export class ProductsInfoDto {
    /**
     * productName recieves input of type string
     */
    @IsString()
    @ApiProperty()
    productName: string;

    /**
    * productPrice recieves input of type string
    */
    @IsString()
    @ApiProperty()
    productPrice: string;

    /**
    * productCategory recieves input of type string
    */
    @IsString()
    @ApiProperty()
    productCategory: string;

    /**
* productDesc recieves input of type string
*/
    @IsString()
    @ApiProperty()
    productDesc: string;

}
