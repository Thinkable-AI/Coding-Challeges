import { Module } from '@nestjs/common';
import { ChatProcessingService } from './chatTraitement/services/ChatProcessing.service';
import { ChatService } from 'src/chat/services/chat/chat.service';
import { IngestionService } from './ingestion/services/ingestion.service';
import { IngestionModule } from './ingestion/ingestion.module';
import { chatTraitementModule } from './chatTraitement/chatTraitement.module';
import { MessageRepository } from '@/message/repositories';
import { MessageModel } from 'src/chat/models/message.model/message.model';
import { MessageModule } from '@/message/message.module';
import { MessageDTO } from '@/message/dto/message.dto';

@Module({
  imports: [PineconeModule, IngestionModule, chatTraitementModule],
  providers: [ChatProcessingService, ChatService, IngestionService],
})
export class PineconeModule {}
