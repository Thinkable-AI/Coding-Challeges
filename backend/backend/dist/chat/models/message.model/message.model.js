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
exports.MessageSchema = exports.ChatMessageType = exports.Message = exports.MessageModel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const graphql_1 = require("@nestjs/graphql");
let MessageModel = class MessageModel {
};
exports.MessageModel = MessageModel;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MessageModel.prototype, "content", void 0);
exports.MessageModel = MessageModel = __decorate([
    (0, mongoose_1.Schema)()
], MessageModel);
let Message = class Message {
};
exports.Message = Message;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Message.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], Message.prototype, "isStreaming", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ChatMessageType], { nullable: true }),
    __metadata("design:type", Array)
], Message.prototype, "sourceDocs", void 0);
exports.Message = Message = __decorate([
    (0, graphql_1.ObjectType)()
], Message);
let ChatMessageType = class ChatMessageType {
};
exports.ChatMessageType = ChatMessageType;
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ChatMessageType.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], ChatMessageType.prototype, "isUser", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Message], { nullable: true }),
    __metadata("design:type", Array)
], ChatMessageType.prototype, "sourceDocs", void 0);
exports.ChatMessageType = ChatMessageType = __decorate([
    (0, graphql_1.ObjectType)()
], ChatMessageType);
exports.MessageSchema = mongoose_1.SchemaFactory.createForClass(MessageModel);
//# sourceMappingURL=message.model.js.map