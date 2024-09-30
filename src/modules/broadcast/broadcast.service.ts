import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BroadcastService  {
  
  private logger = new Logger(BroadcastService.name);
  
  public eventBroadcast(data: any): void {
    this.logger.log(JSON.stringify(data))
  }
}
