import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { AppResolver } from './app.resolver';
import { PineconeModule } from './pinecone/pinecone.module';
import { ChatModule } from './chat/chat.module';
import { ChatService } from './chat/services/chat/chat.service';
import { ChatProcessingService } from './pinecone/chatTraitement/services/ChatProcessing.service';
import { MessageModule } from '@/message/message.module';
import { MessageModel } from './chat/models/message.model/message.model';
import { chatTraitementModule } from './pinecone/chatTraitement/chatTraitement.module';
import { MessageRepository } from '@/message/repositories';


@Module({
  imports: [chatTraitementModule,SharedModule, ChatModule, PineconeModule,MessageModule],
  providers: [AppResolver, ChatService,ChatProcessingService,MessageModel],
})

export class AppModule {}
