import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

@Schema()
export class MessageModel {
  @Prop()
  content: string;
}

@ObjectType()
export class Message {
  @Field(() => String)
  message: string;

  @Field(() => Boolean)
  isStreaming?: boolean;

  @Field(() => [ChatMessageType], { nullable: true })
  sourceDocs?: ChatMessageType[];
}

@ObjectType()
export class ChatMessageType {
  @Field(() => String)
  content: string;

  @Field(() => Boolean)
  isUser: boolean;

  @Field(() => [Message], { nullable: true })
  sourceDocs?: Document[];
}
export type MessageDocument = MessageModel & Document;
export const MessageSchema = SchemaFactory.createForClass(MessageModel);

