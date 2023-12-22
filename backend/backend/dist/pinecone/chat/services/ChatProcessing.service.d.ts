export declare class ChatProcessingService {
    processQuestion(question: string, messages: {
        content: string;
        isUser: boolean;
    }[]): Promise<string>;
    private initializeModelAndChain;
    private convertMessagesToModelFormat;
    private askQuestionWithChain;
}
