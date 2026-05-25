import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkLogModule } from './work-log/work-log.module';

@Module({
  imports: [WorkLogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
