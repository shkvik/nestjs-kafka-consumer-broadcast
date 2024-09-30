import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CONFIG_APP } from './config/config.export';

async function bootstrap() {
  
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [CONFIG_APP.KAFKA_BROKER],
        },
        consumer: {
          // It needs to be uniqe for every consumer instance!
          groupId: CONFIG_APP.KAFKA_GROUP_ID,
        }
      },
    },
  );
  app.listen();
}
bootstrap();
