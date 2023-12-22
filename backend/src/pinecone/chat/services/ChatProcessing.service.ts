import { Injectable } from '@nestjs/common';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { ConversationalRetrievalQAChain } from 'langchain/chains';
import { pinecone } from '@/libs/pinecone';
import { AIMessage, HumanMessage } from 'langchain/schema';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
//import { ChatService } from 'src/chat/services/chat/chat.service';

@Injectable()
export class ChatProcessingService {
 // constructor(private readonly ChatService: ChatService) {}

  async processQuestion(question: string, messages: { content: string; isUser: boolean }[]): Promise<string> {
    try {
      const chain = await this.initializeModelAndChain();

      const pastMessages = this.convertMessagesToModelFormat(messages);

      const response = await this.askQuestionWithChain(question, pastMessages, chain);

      console.log('Response:', response.text);

      // pour ajouter a l'historique
   //   await this.ChatService.sendMessage(response.text, false);

      return response.text;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to ask the question');
    }
  }

  private async initializeModelAndChain(): Promise<ConversationalRetrievalQAChain> {
    if (!process.env.PINECONE_INDEX_NAME) throw Error('no index');
    const index = pinecone.Index(process.env.PINECONE_INDEX_NAME);

    const vectorStore = await PineconeStore.fromExistingIndex(
      new OpenAIEmbeddings({}),
      {
        pineconeIndex: index,
        textKey: 'text',
      },
    );

    const model = new ChatOpenAI({
      modelName: 'gpt-3.5-turbo',
    });

    return ConversationalRetrievalQAChain.fromLLM(
      model,
      vectorStore.asRetriever(),
      {
      },
    );
  }

  private convertMessagesToModelFormat(messages: { content: string; isUser: boolean }[]): (AIMessage | HumanMessage)[] {
    return messages.map((message, i) => {
      try {
        if (i % 2 === 0) {
          return new HumanMessage(message.content);
        } else {
          return new AIMessage(message.content);
        }
      } catch (error) {
        console.error(`Error creating message for content: ${message.content}`);
        console.error(error);
        return new AIMessage('Error creating message');
      }
    });
  }

  private async askQuestionWithChain(
    question: string,
    pastMessages: (AIMessage | HumanMessage)[],
    chain: ConversationalRetrievalQAChain,
  ): Promise<any> {
    return chain.call({
      question: question,
      chat_history: pastMessages,
    });
  }
}
