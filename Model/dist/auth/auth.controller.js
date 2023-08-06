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
exports.fortytwo_Controller = exports.googleController = exports.AuthController = void 0;
const user_service_1 = require("./../user/user.service");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const use_Dto_1 = require("../Dto/use.Dto");
const local_startegy_1 = require("./local.startegy");
const passport_1 = require("@nestjs/passport");
const jwt_service_1 = require("./jwt.service");
let AuthController = exports.AuthController = class AuthController {
    constructor(authservice, localStrategy, userservice, jwtservice) {
        this.authservice = authservice;
        this.localStrategy = localStrategy;
        this.userservice = userservice;
        this.jwtservice = jwtservice;
    }
    async modyfiy(Body, res) {
        console.log(Body);
        const decode = await this.jwtservice.decoded(Body.cookie);
        delete Body.cookie;
        const id = decode.id;
        await this.userservice.update(Body, id);
        var user = await this.userservice.findById(id);
        if (user) {
            console.log("HOLOALDJN");
            const cookie_token = await this.authservice.generateToken_2(user);
            console.log(await this.jwtservice.decoded(cookie_token));
            res.send(cookie_token);
        }
        else
            res.send('Error');
    }
    async create(Body, res) {
        const ret = await this.authservice.check_and_create(Body);
        if (ret == true) {
            const cookie_token = await this.authservice.generatOken(Body);
            res.send(cookie_token);
        }
        else
            res.send({
                message: ret,
            });
    }
    async checking(Body, res) {
        if (!Body.username)
            res.send('empty');
        const user1 = await this.localStrategy.validate(Body.username, Body.password);
        const user = await this.userservice.findByName(Body.username);
        if (!user1)
            res.send({ message: 'notExists' });
        else {
            const cookie_token = await this.authservice.generateToken_2(user);
            const user2 = await this.jwtservice.decoded(cookie_token);
            res.send({ message: 'success', cookie: cookie_token, user: user2 });
        }
    }
    async log_out(Body, res) {
        res.clearCookie('accessToken');
        res.status(200)
            .redirect('localhost:3001/login');
    }
};
__decorate([
    (0, common_1.Put)('modify-data'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "modyfiy", null);
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [use_Dto_1.UserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [use_Dto_1.UserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "checking", null);
__decorate([
    (0, common_1.Get)('Sign-Out'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "log_out", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService, local_startegy_1.LocalStrategy, user_service_1.UserService, jwt_service_1.JWToken])
], AuthController);
let googleController = exports.googleController = class googleController {
    constructor(authservice) {
        this.authservice = authservice;
    }
    googlelogin() {
        console.log("Auth/google");
    }
    async googleloginredirect(req, res) {
        console.log("CallBack");
        const user = await req.user;
        console.log(user);
        if (await this.authservice.create_Oauth(user) == true) {
            const cookie_token = await this.authservice.generatOken(user);
            res.cookie('accessToken', cookie_token, {
                httpOnly: true,
            });
            res.redirect("http://localhost:3001/");
            console.log('coockie token = ' + cookie_token);
            return {
                status: 200,
                token: cookie_token,
                user: user,
                message: 'the user create secssufully',
            };
        }
        else {
            console.log('error');
            const cookie_token = await this.authservice.generatOken(user);
            res.cookie('accessToken', cookie_token, {
                httpOnly: true,
            });
            res.redirect("http://localhost:3001/");
            console.log('coockie token = ' + cookie_token + "\n\n\n\n");
            return {
                status: 200,
                token: cookie_token,
                user: user,
                message: 'the user already exist'
            };
        }
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    (0, common_1.Get)('google'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], googleController.prototype, "googlelogin", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    (0, common_1.Get)('from-google'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], googleController.prototype, "googleloginredirect", null);
exports.googleController = googleController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], googleController);
let fortytwo_Controller = exports.fortytwo_Controller = class fortytwo_Controller {
    constructor(authservice) {
        this.authservice = authservice;
    }
    googlelogin(req, res) {
        console.log("heloWorld");
    }
    async fortytwo_loginredirect(req, res) {
        console.log("CallBack");
        const user = await req.user;
        if (await this.authservice.create_Oauth(user) == true) {
            const cookie_token = await this.authservice.generatOken(user);
            res.cookie('accessToken', cookie_token, {
                httpOnly: true, secure: false
            });
            res.redirect("http://localhost:3001/");
            const user_data = { token: cookie_token,
                user: user,
                message: 'the email already exist' };
            console.log(user_data);
            return user_data;
        }
        else {
            const cookie_token = await this.authservice.generatOken(user);
            res.cookie('accessToken', cookie_token, {
                httpOnly: true, secure: false
            });
            console.log('coockie token = ' + cookie_token);
            res.redirect("http://localhost:3001/");
            const user_data = { token: cookie_token,
                user: user,
                message: 'the email already exist' };
            console.log(user_data);
            return user_data;
        }
    }
};
__decorate([
    (0, common_1.Get)('42'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('42')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], fortytwo_Controller.prototype, "googlelogin", null);
__decorate([
    (0, common_1.Get)('from-42'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('42')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], fortytwo_Controller.prototype, "fortytwo_loginredirect", null);
exports.fortytwo_Controller = fortytwo_Controller = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], fortytwo_Controller);
//# sourceMappingURL=auth.controller.js.map