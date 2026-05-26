import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkLogService {
  private records: any[] = [];

  getAll() {
    return this.records;
  }

  addRecord(record) {
    this.records.push(record);

    return record;
  }
}