/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsEmail, IsNumber, IsString } from 'class-validator';
/**
 * starting of Cart Entity
 */
@Entity()
export class Cart {
  /**
   * auto incremental id
   */
  @PrimaryGeneratedColumn()
  id: number;


  /**
   * generates price column
   */
  @Column()
  @IsString()
  @ApiProperty()
  productPrice: string;


  @Column()
  @IsNumber()
  productsId: number;

  @Column()
  @IsEmail()
  emailID: string;



  /**
   * generates status column
   */
  @Column({ default: false })
  @ApiProperty()
  status: boolean;
}
