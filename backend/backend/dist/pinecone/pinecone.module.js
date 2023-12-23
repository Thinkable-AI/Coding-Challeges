"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PineconeModule = void 0;
const common_1 = require("@nestjs/common");
const ChatProcessing_service_1 = require("./chatTraitement/services/ChatProcessing.service");
const chat_service_1 = require("../chat/services/chat/chat.service");
const ingestion_service_1 = require("./ingestion/services/ingestion.service");
const ingestion_module_1 = require("./ingestion/ingestion.module");
const chatTraitement_module_1 = require("./chatTraitement/chatTraitement.module");
let PineconeModule = class PineconeModule {
};
exports.PineconeModule = PineconeModule;
exports.PineconeModule = PineconeModule = __decorate([
    (0, common_1.Module)({
        imports: [PineconeModule, ingestion_module_1.IngestionModule, chatTraitement_module_1.chatTraitementModule],
        providers: [ChatProcessing_service_1.ChatProcessingService, chat_service_1.ChatService, ingestion_service_1.IngestionService],
    })
], PineconeModule);
//# sourceMappingURL=pinecone.module.js.map