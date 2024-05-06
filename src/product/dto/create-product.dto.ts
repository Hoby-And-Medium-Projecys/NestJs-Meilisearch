import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsInt()
  stock: number;
}
