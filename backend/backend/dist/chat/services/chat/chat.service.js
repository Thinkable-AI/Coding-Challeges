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
const ChatProcessing_service_1 = require("../../../pinecone/chatTraitement/services/ChatProcessing.service");
let ChatService = class ChatService {
    constructor(chatProcessingService) {
        this.chatProcessingService = chatProcessingService;
        this.messages = [];
    }
    async sendMessage(content, isUser) {
        this.messages.push({ content, isUser });
    }
    async getMessages() {
        return this.messages;
    }
    async askQuestion(question) {
        try {
            const response = await this.chatProcessingService.processQuestion(question, this.messages);
            await this.sendMessage(response, false);
            return response;
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
    __metadata("design:paramtypes", [ChatProcessing_service_1.ChatProcessingService])
], ChatService);
//# sourceMappingURL=chat.service.js.map