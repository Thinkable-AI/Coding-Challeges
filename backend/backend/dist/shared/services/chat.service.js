"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("langchain/chat_models/openai");
const pinecone_1 = require("langchain/vectorstores/pinecone");
const openai_2 = require("langchain/embeddings/openai");
const chains_1 = require("langchain/chains");
const schema_1 = require("langchain/schema");
const pinecone_2 = require("../libs/pinecone");
let ChatService = class ChatService {
    constructor() {
        this.messages = [];
        this.messages = [
            { content: 'Welcome to the chat!', isUser: false }
        ];
    }
    async sendMessage(content, isUser) {
        this.messages.push({ content, isUser });
    }
    async getMessages() {
        return this.messages;
    }
    async askQuestion(question) {
        try {
            console.log('dans chat service la qst est ', question);
            console.log('dans chat service le msg est ', this.messages);
            if (!process.env.PINECONE_INDEX_NAME)
                throw Error('no index');
            const index = pinecone_2.pinecone.Index(process.env.PINECONE_INDEX_NAME);
            const vectorStore = await pinecone_1.PineconeStore.fromExistingIndex(new openai_2.OpenAIEmbeddings({}), {
                pineconeIndex: index,
                textKey: 'text',
            });
            const model = new openai_1.ChatOpenAI({
                modelName: 'gpt-3.5-turbo',
            });
            const chain = chains_1.ConversationalRetrievalQAChain.fromLLM(model, vectorStore.asRetriever(), {});
            const pastMessages = this.messages.map((message, i) => {
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
                    return new schema_1.AIMessage("Error creating message");
                }
            });
            const response = await chain.call({
                question: question,
                chat_history: pastMessages,
            });
            console.log('dla reponse est', response);
            console.log('dla reponse est', response.text);
            await this.sendMessage(response.text, false);
            return response.text;
        }
        catch (error) {
            console.error(error);
            throw new Error('Failed to ask the question');
        }
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ChatService);
//# sourceMappingURL=chat.service.js.map