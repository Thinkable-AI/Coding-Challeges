/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export declare class MessageModel {
    content: string;
}
export declare class Message {
    message: string;
    isStreaming?: boolean;
    sourceDocs?: ChatMessageType[];
}
export declare class ChatMessageType {
    content: string;
    isUser: boolean;
    sourceDocs?: Document[];
}
export type MessageDocument = MessageModel & Document;
export declare const MessageSchema: import("mongoose").Schema<MessageModel, import("mongoose").Model<MessageModel, any, any, any, Document<unknown, any, MessageModel> & MessageModel & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MessageModel, Document<unknown, {}, import("mongoose").FlatRecord<MessageModel>> & import("mongoose").FlatRecord<MessageModel> & {
    _id: import("mongoose").Types.ObjectId;
}>;
