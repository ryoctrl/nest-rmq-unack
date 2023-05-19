import { Controller, Inject, Post } from '@nestjs/common';
import {
  ClientProxy,
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('NOTIFICATION_SERVICE')
    private readonly client: ClientProxy,
  ) {}
  @MessagePattern('notifications')
  getNotifications(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(`Pattern: ${context.getPattern()} acknowledged.`);
    context.getChannelRef().ack(context.getMessage());
  }

  // @MessagePattern('n0tifications')
  // getN0tifications(@Payload() data: any, @Ctx() context: RmqContext) {
  //   console.log(`Pattern: ${context.getPattern()} acknowledged.`);
  //   context.getChannelRef().ack(context.getMessage());
  // }

  @Post('/valid')
  sendValidMessage() {
    this.client.emit('notifications', {});
  }

  @Post('/invalid')
  sendInvalidMessage() {
    this.client.emit('n0tifications', {});
  }
}
