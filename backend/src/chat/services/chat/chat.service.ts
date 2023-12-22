import { Injectable } from '@nestjs/common';
import { ChatProcessingService } from 'src/pinecone/chat/services/ChatProcessing.service'; // Assurez-vous que le chemin est correct

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
