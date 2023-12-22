"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const shared_module_1 = require("./shared/shared.module");
const app_resolver_1 = require("./app.resolver");
const pinecone_module_1 = require("./pinecone/pinecone.module");
const chat_module_1 = require("./chat/chat.module");
const chat_service_1 = require("./chat/services/chat/chat.service");
const ChatProcessing_service_1 = require("./pinecone/chat/services/ChatProcessing.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [shared_module_1.SharedModule, chat_module_1.ChatModule, pinecone_module_1.PineconeModule],
        providers: [app_resolver_1.AppResolver, chat_service_1.ChatService, ChatProcessing_service_1.ChatProcessingService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map