import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ValidationPipe를 글로벌로 적용
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
