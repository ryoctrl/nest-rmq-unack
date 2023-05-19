import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RMQ_OPTIONS } from 'src/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: RMQ_OPTIONS,
  });
  app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
