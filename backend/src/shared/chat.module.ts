import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatService } from './services/chat.service';
import { Message, MessageSchema } from './models/message.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }])],
  providers: [ChatService],
  exports: [ChatService],
})

export class ChatModule {}
