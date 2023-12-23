import { MessageDTO } from '@/message/dto/message.dto';
export declare class ChatProcessingService {
    processQuestion(question: string, messages: MessageDTO[]): Promise<string>;
    private initializeModelAndChain;
    private convertMessagesToModelFormat;
    private askQuestionWithChain;
}
