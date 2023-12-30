import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModel, MessageSchema } from 'src/chat/models/message.model/message.model';
import { MessageRepository } from './repositories';

@Module({
  imports: [MongooseModule.forFeature([{ name: MessageModel.name, schema: MessageSchema }])],
  providers: [MessageRepository],
  exports: [MessageRepository], 
})

export class MessageModule {}