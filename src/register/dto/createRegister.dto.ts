import { IsNotEmpty, IsString, MinLength, MaxLength } from "class-validator";

export class CreateRegisterDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  password: string;

  @IsNotEmpty()
  @IsString()
  site: string;

  @IsString()
  @MinLength(8)
  phone: string;
}