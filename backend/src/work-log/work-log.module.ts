import { Module } from '@nestjs/common';
import { WorkLogController } from './work-log.controller';
import { WorkLogService } from './work-log.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [WorkLogController],
  providers: [WorkLogService, PrismaService],
})
export class WorkLogModule {}