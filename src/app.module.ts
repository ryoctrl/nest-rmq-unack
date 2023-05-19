import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RMQ_OPTIONS } from 'src/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIFICATION_SERVICE',
        transport: Transport.RMQ,
        options: RMQ_OPTIONS,
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
