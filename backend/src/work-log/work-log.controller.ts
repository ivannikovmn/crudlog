import { Body, Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';
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

  @Delete(':id')
  deleteRecord(@Param('id') id: string) {
    return this.workLogService.deleteRecord(Number(id));
  }  

  @Put(':id')
  updateRecord(@Param('id') id: string, @Body() body) {
    return this.workLogService.updateRecord(Number(id), body);
  }  
}