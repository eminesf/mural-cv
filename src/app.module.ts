import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://node.env={USER}:node.env={PASSWORD}@mural-my-cv.owsov.mongodb.net/mural-my-cv?retryWrites=true&w=majority',
    ),
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
