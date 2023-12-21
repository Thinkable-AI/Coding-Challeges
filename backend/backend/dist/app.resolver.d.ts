import { ChatService } from './shared/services/chat.service';
import { ChatMessageType } from './shared/types/message.type';
export declare class AppResolver {
    private readonly chatService;
    constructor(chatService: ChatService);
    getHello(): string;
    getMessages(): Promise<ChatMessageType[]>;
    sendMessage(content: string, isUser: boolean): Promise<string>;
    askQuestion(question: string): Promise<string>;
}
