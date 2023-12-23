"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatTraitementModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const ChatProcessing_service_1 = require("./services/ChatProcessing.service");
const message_model_1 = require("../../chat/models/message.model/message.model");
const message_module_1 = require("../../shared/message/message.module");
const chat_service_1 = require("../../shared/services/chat.service");
let chatTraitementModule = class chatTraitementModule {
};
exports.chatTraitementModule = chatTraitementModule;
exports.chatTraitementModule = chatTraitementModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: message_model_1.MessageModel.name, schema: message_model_1.MessageSchema }]), message_module_1.MessageModule],
        providers: [chat_service_1.ChatService, ChatProcessing_service_1.ChatProcessingService],
    })
], chatTraitementModule);
//# sourceMappingURL=chatTraitement.module.js.map