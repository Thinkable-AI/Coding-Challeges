import { ChatService } from './chat/services/chat/chat.service';
import { ChatMessageType } from './chat/models/message.model/message.model';
export declare class AppResolver {
    private readonly chatService;
    constructor(chatService: ChatService);
    getHello(): string;
    getMessages(): Promise<ChatMessageType[]>;
    sendMessage(content: string, isUser: boolean): Promise<string>;
    askQuestion(question: string): Promise<string>;
}
