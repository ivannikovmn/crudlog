import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateWorkLogDto {
  workType: string;
  volume: number;
  unit: string;
  performer: string;
  date?: string;
}