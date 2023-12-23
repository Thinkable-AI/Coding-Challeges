import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageDocument, MessageModel } from 'src/chat/models/message.model/message.model';

@Injectable()
export class MessageRepository {
  constructor(@InjectModel(MessageModel.name) private readonly messageModel: Model<MessageDocument>) {}

  async createMessage(content: string): Promise<MessageDocument> {
    const newMessage = new this.messageModel({ content });
    return newMessage.save();
  }

  async findAll(): Promise<MessageDocument[]> {
    return this.messageModel.find().exec();
  }
}
