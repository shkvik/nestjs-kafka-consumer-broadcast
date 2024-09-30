import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ExampleService  {
  
  private logger = new Logger(ExampleService.name);

  public getHello(data: any): string {
    this.logger.log(JSON.stringify(data))
    return 'Hello World!';
  }
}
