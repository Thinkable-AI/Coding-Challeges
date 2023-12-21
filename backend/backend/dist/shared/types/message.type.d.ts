import { Document } from 'langchain/document';
export declare class ChatMessageType {
    content: string;
    isUser: boolean;
    sourceDocs?: Document[];
}
export declare class Message {
    message: string;
    isStreaming?: boolean;
    sourceDocs?: ChatMessageType[];
}
