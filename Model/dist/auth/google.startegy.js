"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_google_oauth20_1 = require("passport-google-oauth20");
class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, 'google') {
    constructor() {
        super({
            clientID: '154782931535-ftdo0053qmtsbcjb8rtpep6m13rhn7du.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3000/auth/from-google',
            scope: ['email', 'Profile'],
        });
    }
    async validate(accessToken, refreshToken, profile) {
        const { name, emails, photos } = profile;
        const user = {
            username: name,
            email: emails[0].value,
            image: photos[0].value,
        };
        return user;
    }
}
exports.GoogleStrategy = GoogleStrategy;
//# sourceMappingURL=google.startegy.js.map