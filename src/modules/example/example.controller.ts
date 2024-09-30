import { Controller } from '@nestjs/common';
import { ExampleService } from './example.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ExampleController {
  constructor(
    private readonly appService: ExampleService
  ) {}

  @MessagePattern('example.topic')
  public getHello(@Payload() message: any) {
    return this.appService.getHello(message);
  }
}
