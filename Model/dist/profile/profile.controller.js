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
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("../auth/jwt.service");
const user_service_1 = require("../user/user.service");
const profile_service_1 = require("./profile.service");
const passwordChecker_1 = require("../utils/passwordChecker");
let ProfileController = exports.ProfileController = class ProfileController {
    constructor(userservice, profileService, jwt) {
        this.userservice = userservice;
        this.profileService = profileService;
        this.jwt = jwt;
    }
    async display(username, res) {
        console.log(username);
        const user = await this.profileService.findByName(username);
        if (user) {
            console.log(user.stats);
            delete user.password;
        }
        res.send(user);
    }
    async update(Body, res, id) {
        if (Body) {
            if (!Body.username) {
                res.send('empty');
                return;
            }
            const exist = this.userservice.findByName(Body.username);
            if (!exist) {
                if ((0, passwordChecker_1.checkPasswordStrength)(Body.password) == 'Weak') {
                    res.send('weak');
                    return;
                }
                await this.userservice.update(Body, id);
                const user = await this.userservice.findById(id);
                console.log(user.stats);
                const cookie = await this.jwt.generateToken_2(user);
                console.log(await this.jwt.decoded(cookie));
                res.send({ message: 'success', cookie: cookie });
            }
            else
                res.send({ message: 'username already exist', status: 'failure' });
        }
        else {
            res.send({ message: 'error' });
        }
    }
};
__decorate([
    (0, common_1.Get)(':username'),
    __param(0, (0, common_1.Param)('username')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "display", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Number]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "update", null);
exports.ProfileController = ProfileController = __decorate([
    (0, common_1.Controller)('profile'),
    __metadata("design:paramtypes", [user_service_1.UserService, profile_service_1.ProfileService, jwt_service_1.JWToken])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map