import { ChatProcessingService } from 'src/chatTraitement/services/ChatProcessing.service';
export declare class ChatService {
    private readonly chatProcessingService;
    private messages;
    constructor(chatProcessingService: ChatProcessingService);
    sendMessage(content: string, isUser: boolean): Promise<void>;
    getMessages(): Promise<{
        content: string;
        isUser: boolean;
    }[]>;
    askQuestion(question: string): Promise<string>;
}
