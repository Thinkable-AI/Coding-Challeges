import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatProcessingService } from './services/ChatProcessing.service';
import { MessageModel, MessageSchema } from 'src/chat/models/message.model/message.model';
import { MessageModule } from '@/message/message.module';

@Module({
  imports:[MessageModule,MongooseModule.forFeature([{ name: MessageModel.name, schema: MessageSchema }])],
  providers: [ChatProcessingService],
  exports:[ChatProcessingService]
})
export class chatTraitementModule {}
