import {  MessageDocument } from '@/message/models';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageModel } from 'src/chat/models/message.model/message.model';
import { ChatProcessingService } from 'src/pinecone/chatTraitement/services/ChatProcessing.service'; 

@Injectable()
export class ChatService {
  private messages: { content: string; isUser: boolean }[] = [];

  constructor(private readonly chatProcessingService: ChatProcessingService) {}

  async sendMessage(content: string, isUser: boolean): Promise<void> {
    this.messages.push({ content, isUser });
  }

  async getMessages(): Promise<{ content: string; isUser: boolean }[]> {
    return this.messages;
  }

  async askQuestion(question: string): Promise<string> {
    try {
      const response = await this.chatProcessingService.processQuestion(question, this.messages);
      await this.sendMessage(response, false);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to ask the question');
    }
  }
}
