"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const constants_1 = require("../constants");
let AuthMiddleware = class AuthMiddleware {
    use(request, response, next) {
        let accessToken = request.headers['authorization'];
        if (!accessToken) {
            response.status(common_1.HttpStatus.BAD_REQUEST).send('Access Denied. No Access Token Provided.');
            return null;
        }
        accessToken = Array.isArray(accessToken) ? accessToken.join('') : accessToken;
        try {
            const decoded = jwt.verify(accessToken, constants_1.NEXT_AUTH_JWT_SECRET_KEY);
            if (decoded.exp < Math.floor(Date.now() / 1000)) {
                response.status(common_1.HttpStatus.UNAUTHORIZED).send('Access Token expired');
                return null;
            }
            next();
        }
        catch (error) {
            response.status(common_1.HttpStatus.UNAUTHORIZED).send('Access Token expired');
            return null;
        }
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)()
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map