import { MessageRepository } from '@/message/repositories';
import { MessageModule } from '@/message/message.module';
import { Message, MessageSchema } from '@/message/models';
import { Module } from '@nestjs/common';
import { ChatService } from './services/chat/chat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModel } from './models/message.model/message.model';
import { ChatProcessingService } from 'src/pinecone/chatTraitement/services/ChatProcessing.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: MessageModel.name, schema: MessageSchema }])],
  providers: [ChatService,ChatProcessingService,MessageModel],

})
export class ChatModule {}
