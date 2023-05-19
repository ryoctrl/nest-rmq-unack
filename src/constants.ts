export const RMQ_OPTIONS = {
  urls: ['amqp://user:password@localhost:5672'],
  queue: 'notification_queue',
  prefetchCount: 1,
  noAck: false,
  queueOptions: {
    durable: false,
  },
};
