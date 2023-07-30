"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const channel_entity_1 = require("../database/channel.entity");
const channelMembership_entity_1 = require("../database/channelMembership.entity");
const channel_controller_1 = require("./channel.controller");
const channel_service_1 = require("./channel.service");
const user_entity_1 = require("../database/user.entity");
let ChannelModule = exports.ChannelModule = class ChannelModule {
};
exports.ChannelModule = ChannelModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([channel_entity_1.Channel, channelMembership_entity_1.ChannelMembership, user_entity_1.User])],
        controllers: [channel_controller_1.ChannelController],
        providers: [channel_service_1.ChannelService,],
    })
], ChannelModule);
//# sourceMappingURL=channel.module.js.map