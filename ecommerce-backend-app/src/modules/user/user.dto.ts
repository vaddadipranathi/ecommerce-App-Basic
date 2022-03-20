/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

/**
 * Starting of UserDto
 */
export class UserDto {

    @IsString()
    @ApiProperty()
    firstName: string;

    @IsString()
    @ApiProperty()
    lastName: string;

    @IsString()
    @ApiProperty()
    emailID: string;

    @IsString()
    @ApiProperty()
    phoneNo: string;

    @IsString()
    @ApiProperty()
    address: string;

    @IsString()
    @ApiProperty()
    gender: string;

}