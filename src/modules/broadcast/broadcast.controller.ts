import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { BroadcastService } from './broadcast.service';

@Controller()
export class BroadcastController {
  constructor(
    private readonly broadcastService: BroadcastService
  ) {}

  @EventPattern('broadcast.topic')
  public eventBroadcast(@Payload() message: any) {
    return this.broadcastService.eventBroadcast(message);
  }
}
