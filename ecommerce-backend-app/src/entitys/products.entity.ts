/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString } from 'class-validator';

/**
 * starting of Products Entity
 */
@Entity()
export class Products {
  /**
   * auto incremental id
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * generates productName column
   */
  @Column()
  @IsString()
  @ApiProperty()
  productName: string;

  /**
   * generates price column
   */
  @Column()
  @IsString()
  @ApiProperty()
  productPrice: string;


  /**
   * generates productCategory column
   */
  @Column()
  @IsString()
  @ApiProperty()
  productCategory: string;

  /**
  * generates productDesc column
  */
  @Column()
  @IsString()
  @ApiProperty()
  productDesc: string;


  /**
   * generates status column
   */
  @Column({ default: false })
  @ApiProperty()
  status: boolean;
}
