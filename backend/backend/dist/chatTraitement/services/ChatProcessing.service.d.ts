import { MessageDTO } from '@/message/dto/message.dto';
import { MessageRepository } from '@/message/repositories';
export declare class ChatProcessingService {
    private readonly messageRepository;
    constructor(messageRepository: MessageRepository);
    processQuestion(question: string, messages: MessageDTO[]): Promise<string>;
    private initializeModelAndChain;
    private convertMessagesToModelFormat;
    private askQuestionWithChain;
}
