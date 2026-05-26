import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateWorkLogDto {
  @IsString()
  category: string;

  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  date?: string;
}