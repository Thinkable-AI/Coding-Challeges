// chat-message.type.ts

import { ObjectType, Field } from '@nestjs/graphql';
import { Document } from 'langchain/document';

@ObjectType()
export class ChatMessageType {
  @Field(() => String)
  content: string;

  @Field(() => Boolean)
  isUser: boolean;

  // Utilisez GraphQLObjectType pour définir un type GraphQL imbriqué
  @Field(() => [Message], { nullable: true })
  sourceDocs?: Document[];
}

@ObjectType()
export class Message {
  @Field(() => String)
  message: string;

  @Field(() => Boolean)
  isStreaming?: boolean;

  // Utilisez GraphQLObjectType pour définir un type GraphQL imbriqué
  @Field(() => [ChatMessageType], { nullable: true })
  sourceDocs?: ChatMessageType[];
}
