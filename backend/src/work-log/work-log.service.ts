import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkLogDto } from './dto/create-work-log.dto';

@Injectable()
export class WorkLogService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.workLog.findMany();
  }

  async addRecord(dto: CreateWorkLogDto) {
    return this.prisma.workLog.create({
      data: {
        category: dto.category,
        amount: dto.amount,
        date: dto.date,
      },
    });
  }

  async deleteRecord(id: number) {
    return this.prisma.workLog.delete({
      where: { id },
    });
  }

  async updateRecord(id: number, dto: any) {
    return this.prisma.workLog.update({
      where: { id },
      data: dto,
    });
  }
}