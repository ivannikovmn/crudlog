import { Injectable } from '@nestjs/common';
import { CreateWorkLogDto } from './dto/create-work-log.dto';

@Injectable()
export class WorkLogService {
  private records: any[] = [];
  private id = 1;

  getAll() {
    return this.records;
  }

  addRecord(dto: CreateWorkLogDto) {
    const record = {
      id: this.id++,
      ...dto,
      date: dto.date ?? new Date().toISOString(),
    };

    this.records.push(record);
    return record;
  }

  deleteRecord(id: number) {
    const index = this.records.findIndex((r) => r.id === id);

    if (index === -1) {
      return { message: 'Record not found' };
    }

    const deleted = this.records.splice(index, 1);
    return deleted[0];
  }

  updateRecord(id: number, dto: any) {
    const index = this.records.findIndex((r) => r.id === id);
  
    if (index === -1) {
      return { message: 'Record not found' };
    }
  
    this.records[index] = {
      ...this.records[index],
      ...dto,
    };
  
    return this.records[index];
  }  
}