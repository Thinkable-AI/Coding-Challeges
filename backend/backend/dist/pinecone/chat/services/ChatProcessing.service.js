"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatProcessingService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("langchain/embeddings/openai");
const openai_2 = require("langchain/chat_models/openai");
const chains_1 = require("langchain/chains");
const pinecone_1 = require("../../../shared/libs/pinecone");
const schema_1 = require("langchain/schema");
const pinecone_2 = require("langchain/vectorstores/pinecone");
let ChatProcessingService = class ChatProcessingService {
    async processQuestion(question, messages) {
        try {
            const chain = await this.initializeModelAndChain();
            const pastMessages = this.convertMessagesToModelFormat(messages);
            const response = await this.askQuestionWithChain(question, pastMessages, chain);
            console.log('Response:', response.text);
            return response.text;
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to ask the question');
        }
    }
    async initializeModelAndChain() {
        if (!process.env.PINECONE_INDEX_NAME)
            throw Error('no index');
        const index = pinecone_1.pinecone.Index(process.env.PINECONE_INDEX_NAME);
        const vectorStore = await pinecone_2.PineconeStore.fromExistingIndex(new openai_1.OpenAIEmbeddings({}), {
            pineconeIndex: index,
            textKey: 'text',
        });
        const model = new openai_2.ChatOpenAI({
            modelName: 'gpt-3.5-turbo',
        });
        return chains_1.ConversationalRetrievalQAChain.fromLLM(model, vectorStore.asRetriever(), {});
    }
    convertMessagesToModelFormat(messages) {
        return messages.map((message, i) => {
            try {
                if (i % 2 === 0) {
                    return new schema_1.HumanMessage(message.content);
                }
                else {
                    return new schema_1.AIMessage(message.content);
                }
            }
            catch (error) {
                console.error(`Error creating message for content: ${message.content}`);
                console.error(error);
                return new schema_1.AIMessage('Error creating message');
            }
        });
    }
    async askQuestionWithChain(question, pastMessages, chain) {
        return chain.call({
            question: question,
            chat_history: pastMessages,
        });
    }
};
exports.ChatProcessingService = ChatProcessingService;
exports.ChatProcessingService = ChatProcessingService = __decorate([
    (0, common_1.Injectable)()
], ChatProcessingService);
//# sourceMappingURL=ChatProcessing.service.js.map