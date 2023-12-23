import { Injectable } from '@nestjs/common';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { ConversationalRetrievalQAChain } from 'langchain/chains';
import { AIMessage, HumanMessage } from 'langchain/schema';
import { pinecone } from '@/libs/pinecone';

@Injectable()
export class ChatService {
  private messages: { content: string; isUser: boolean }[] = [];
  // Initialisez les messages dans le constructeur si nécessaire
  constructor() {
    this.messages = [
      { content: 'Welcome to the chat!', isUser: false }
    ];
  }
  async sendMessage(content: string, isUser: boolean): Promise<void> {
    this.messages.push({ content, isUser });
  }

  async getMessages(): Promise<{ content: string; isUser: boolean }[]> {
    return this.messages;
  }

  async askQuestion(question: string): Promise<string> {
    try {
      console.log('dans chat service la qst est ',question)
      console.log('dans chat service le msg est ',this.messages)

      // Initialiser le modèle et le vectorStore 
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

      const chain = ConversationalRetrievalQAChain.fromLLM(
        model,
        vectorStore.asRetriever(),
        {
          // Configurations pour le chain, si nécessaire
        },
      );

      // assurer si le message parvien du AI ou Human
      const pastMessages = this.messages.map((message, i) => {
        try {
          if (i % 2 === 0) {
            return new HumanMessage(message.content);
          } else {
            return new AIMessage(message.content);
          }
        } catch (error) {
          console.error(`Error creating message for content: ${message.content}`);
          console.error(error);
          return new AIMessage("Error creating message");
        }
      });
      

      // Poser une question en utilisant l'historique de chat
      const response = await chain.call({
        question: question,
        chat_history: pastMessages,
      });
      console.log('dla reponse est',response)
      console.log('dla reponse est',response.text)

      await this.sendMessage(response.text, false); 

      return response.text; 
    } catch (error) {
      console.error(error);
      throw new Error('Failed to ask the question');
    }
  }
}