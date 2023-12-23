"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModule = void 0;
const models_1 = require("../shared/message/models");
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./services/chat/chat.service");
const mongoose_1 = require("@nestjs/mongoose");
const message_model_1 = require("./models/message.model/message.model");
const ChatProcessing_service_1 = require("../pinecone/chatTraitement/services/ChatProcessing.service");
let ChatModule = class ChatModule {
};
exports.ChatModule = ChatModule;
exports.ChatModule = ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: message_model_1.MessageModel.name, schema: models_1.MessageSchema }])],
        providers: [chat_service_1.ChatService, ChatProcessing_service_1.ChatProcessingService, message_model_1.MessageModel],
    })
], ChatModule);
//# sourceMappingURL=chat.module.js.map