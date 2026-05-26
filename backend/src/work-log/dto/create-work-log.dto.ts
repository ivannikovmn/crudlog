import { IsString, IsNumber, IsOptional } from 'class-validator';

// export class CreateWorkLogDto {
//   category: string;
//   amount: number;
//   date?: string;
// }

export class CreateWorkLogDto {
  @IsString()
  category: string;

  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  date?: string;
}