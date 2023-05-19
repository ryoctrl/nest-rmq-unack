# NEST_RMQ_UNACK

## Problem

In the following case, a nest application with the RabbitMQ microservice integration will freeze when the application has received a message which has a pattern that is not registered within the controller.

RabbitMQ Options:

- prefetchCount: 1
- noAck: false

## How to reproduce

Before reproduce this problem, `5672` `15672` `3000` ports should be available on your host.

1. you have to run a temprary rabbitmq instance using docker.

```
$ docker-compose up -d
```

2. Next run the nest js application.

```
$ yarn install
$ yarn start:dev
```

3. Reproduce

```
# publish valid event, then check if the valid event is handled.
$ curl -X POST http://127.0.0.1:3000/valid

# publish invalid event, then check if the application output error logs.
$ curl -X POST http://127.0.0.1:3000/invalid

# publish valid event again, then check if the valid event is not handled due to the application is keeping to handle invalid event.
$ curl -X POST http://127.0.0.1:3000/valid
```
