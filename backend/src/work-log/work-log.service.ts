import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkLogService {
  private records = [];

  getAll() {
    return this.records;
  }
}