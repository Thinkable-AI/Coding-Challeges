import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { AppResolver } from './app.resolver';
import { PineconeModule } from './pinecone/pinecone.module';
import { ChatModule } from './chat/chat.module';
import { ChatService } from './chat/services/chat/chat.service';
import { ChatProcessingService } from './pinecone/chat/services/ChatProcessing.service';


@Module({
  imports: [SharedModule, ChatModule, PineconeModule],
  providers: [AppResolver, ChatService,ChatProcessingService],
})

export class AppModule {}
