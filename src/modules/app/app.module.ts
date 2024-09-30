import { Module } from '@nestjs/common';
import { BroadcastModule } from '../broadcast/broadcast.module';

@Module({
  imports: [BroadcastModule]
})
export class AppModule {}
