import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import mongoose from 'mongoose'
declare const module: any;
async function bootstrap() {
  await mongoose.connect('mongodb://localhost:27017/', { dbName: 'test' });
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('博客api')
    .setDescription('这是我的第一个api管理系统')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-doc', app, document);

  await app.listen(5000);
}
bootstrap();
