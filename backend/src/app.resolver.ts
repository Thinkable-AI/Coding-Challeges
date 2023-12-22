import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ChatService } from './chat/services/chat/chat.service';
import { ChatMessageType } from './chat/models/message.model/message.model'; // Importez le type ChatMessageType

@Resolver()
export class AppResolver {
  constructor(private readonly chatService: ChatService) {}

  @Query(() => String)
  getHello(): string {
    return 'Hello World!';
  }

  @Query(() => [ChatMessageType]) 
  async getMessages(): Promise<ChatMessageType[]> {
    return this.chatService.getMessages();
  }

  @Mutation(() => String)
  async sendMessage(
    @Args('content') content: string,
    @Args('isUser') isUser: boolean,
  ): Promise<string> {
    await this.chatService.sendMessage(content, isUser);
    return 'Message sent successfully';
  }

  @Query(() => String)
  async askQuestion(@Args('question') question: string): Promise<string> {
    console.log("****** la qst est",question)
    const response = await this.chatService.askQuestion(question);
    return response;
  }
}
