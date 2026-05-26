import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkLogModule } from './work-log/work-log.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [WorkLogModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],  
})
export class AppModule {}
