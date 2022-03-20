/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {  IsString } from 'class-validator';
/**
 * starting of user Entity
 */
@Entity()
export class User {
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
    firstName: string;

    /**
   * generates price column
   */
    @Column()
    @IsString()
    @ApiProperty()
    lastName: string;

    /**
* generates price column
*/
    @Column()
    @IsString()
    @ApiProperty()
    emailID: string;

    /**
   * generates price column
   */
    @Column()
    @IsString()
    @ApiProperty()
    phoneNo: string;

    /**
* generates price column
*/
    @Column()
    @IsString()
    @ApiProperty()
    address: string;

    /**
* generates price column
*/
    @Column()
    @IsString()
    @ApiProperty()
    gender: string;




    /**
     * generates status column
     */
    @Column({ default: false })
    @ApiProperty()
    status: boolean;
}
