import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatProcessingService } from './services/ChatProcessing.service';
import { MessageModel, MessageSchema } from 'src/chat/models/message.model/message.model';
import { MessageModule } from '@/message/message.module';
import { ChatService } from '@/services/chat.service';
import { MessageDTO } from '@/message/dto/message.dto';
import { MessageRepository } from '@/message/repositories';

@Module({
  imports: [MongooseModule.forFeature([{ name: MessageModel.name, schema: MessageSchema }]), MessageModule],
  providers: [ChatService, ChatProcessingService],
})
export class chatTraitementModule {}
