"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModule = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./chat.service");
const chat_gateway_1 = require("./chat.gateway");
const typeorm_1 = require("@nestjs/typeorm");
const channel_entity_1 = require("../database/channel.entity");
const message_entity_1 = require("../database/message.entity");
const jwt_service_1 = require("../auth/jwt.service");
const channelMembership_entity_1 = require("../database/channelMembership.entity");
const jwt_1 = require("@nestjs/jwt");
let ChatModule = exports.ChatModule = class ChatModule {
};
exports.ChatModule = ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([channel_entity_1.Channel, message_entity_1.Message, channelMembership_entity_1.ChannelMembership])],
        controllers: [],
        providers: [chat_service_1.ChatService, chat_gateway_1.WebsocketGateway, chat_service_1.ChatService, jwt_service_1.JWToken, jwt_1.JwtService]
    })
], ChatModule);
//# sourceMappingURL=chat.module.js.map