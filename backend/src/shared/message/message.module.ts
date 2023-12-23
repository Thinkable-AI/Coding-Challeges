import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModel, MessageSchema } from 'src/chat/models/message.model/message.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: MessageModel.name, schema: MessageSchema }])],
  providers: [MessageModel],
  exports: [MessageModel], 
})

export class MessageModule {}