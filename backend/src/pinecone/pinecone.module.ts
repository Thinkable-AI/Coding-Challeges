import { Module } from '@nestjs/common';
import { ChatProcessingService } from './chat/services/ChatProcessing.service';
import { ChatService } from 'src/chat/services/chat/chat.service';
import { IngestionService } from './ingestion/services/ingestion.service';
import { IngestionModule } from './ingestion/ingestion.module';

@Module({
    imports: [ PineconeModule, IngestionModule],
    providers: [ChatProcessingService,ChatService, IngestionService],
  })
export class PineconeModule {}
