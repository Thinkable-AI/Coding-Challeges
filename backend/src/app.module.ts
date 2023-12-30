import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { AppResolver } from './app.resolver';
import { ChatModule } from './chat/chat.module';
import { ChatService } from './chat/services/chat/chat.service';
import { MessageModule } from '@/message/message.module';
import { MessageModel } from './chat/models/message.model/message.model';
import { MessageRepository } from '@/message/repositories';
import { chatTraitementModule } from './chatTraitement/chatTraitement.module';
import { IngestionModule } from './ingestion/ingestion.module';


@Module({
  imports: [chatTraitementModule,SharedModule, IngestionModule, ChatModule,MessageModule],
  providers: [AppResolver],
})

export class AppModule {}
