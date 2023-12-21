export declare class ChatService {
    private messages;
    constructor();
    sendMessage(content: string, isUser: boolean): Promise<void>;
    getMessages(): Promise<{
        content: string;
        isUser: boolean;
    }[]>;
    askQuestion(question: string): Promise<string>;
}
