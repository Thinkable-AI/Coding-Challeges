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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const chat_service_1 = require("./shared/services/chat.service");
const message_type_1 = require("./shared/types/message.type");
let AppResolver = class AppResolver {
    constructor(chatService) {
        this.chatService = chatService;
    }
    getHello() {
        return 'Hello World!';
    }
    async getMessages() {
        return this.chatService.getMessages();
    }
    async sendMessage(content, isUser) {
        await this.chatService.sendMessage(content, isUser);
        return 'Message sent successfully';
    }
    async askQuestion(question) {
        console.log("****** la qst est", question);
        const response = await this.chatService.askQuestion(question);
        return response;
    }
};
exports.AppResolver = AppResolver;
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppResolver.prototype, "getHello", null);
__decorate([
    (0, graphql_1.Query)(() => [message_type_1.ChatMessageType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "getMessages", null);
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('content')),
    __param(1, (0, graphql_1.Args)('isUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "sendMessage", null);
__decorate([
    (0, graphql_1.Query)(() => String),
    __param(0, (0, graphql_1.Args)('question')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "askQuestion", null);
exports.AppResolver = AppResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], AppResolver);
//# sourceMappingURL=app.resolver.js.map