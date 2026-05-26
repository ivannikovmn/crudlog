import { Body, Controller, Get, Post } from '@nestjs/common';
import { WorkLogService } from './work-log.service';

@Controller('work-log')
export class WorkLogController {
  constructor(private readonly workLogService: WorkLogService) {}

  @Get()
  getAll() {
    return this.workLogService.getAll();
  }

  @Post()
  addRecord(@Body() body) {
    return this.workLogService.addRecord(body);
  }
}