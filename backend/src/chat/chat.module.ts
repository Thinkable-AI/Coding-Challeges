import { Module } from '@nestjs/common';
import { ChatService } from './services/chat/chat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModel } from './models/message.model/message.model';
import { MessageSchema } from '@/models';
import { ChatProcessingService } from 'src/pinecone/chat/services/ChatProcessing.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: MessageModel.name, schema: MessageSchema }])],
  providers: [ChatService,ChatProcessingService],
  
})
export class ChatModule {}
