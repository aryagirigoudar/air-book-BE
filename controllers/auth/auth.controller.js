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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const constants_1 = require("../../constants");
let AuthController = class AuthController {
    constructor() { }
    async getOTP(phone, response) {
        if (phone === constants_1.dummyPhoneNumber) {
            return response.status(common_1.HttpStatus.OK).json({
                message: 'OTP successfully'
            });
        }
        else {
            return response.status(common_1.HttpStatus.NOT_FOUND).json({ message: 'Phone number not recognized' });
        }
    }
    async verifyOTP(phone, otp, response) {
        if (phone === constants_1.dummyPhoneNumber && otp === constants_1.dummyOTP) {
            const secretAuthKey = constants_1.NEXT_AUTH_JWT_SECRET_KEY;
            const secretRefreshKey = constants_1.NEXT_REFRESH_JWT_SECRET_KEY;
            const accessToken = jwt.sign({ dummyPhoneNumber: constants_1.dummyPhoneNumber }, secretAuthKey, { expiresIn: '1m' });
            const refreshToken = jwt.sign({ dummyPhoneNumber: constants_1.dummyPhoneNumber }, secretRefreshKey, { expiresIn: '2m' });
            return response.status(common_1.HttpStatus.OK).json({
                message: 'OTP Verification Successful',
                data: { accessToken: accessToken, refreshToken: refreshToken }
            });
        }
        else {
            return response.status(common_1.HttpStatus.FORBIDDEN).json({ message: 'OTP Verification Failed' });
        }
    }
    async refreshAccessToken(refreshToken, response) {
        if (!refreshToken) {
            return response.status(common_1.HttpStatus.FORBIDDEN).send('Access Denied. No refresh token provided.');
        }
        try {
            const decoded = jwt.verify(refreshToken, constants_1.NEXT_REFRESH_JWT_SECRET_KEY);
            if (decoded.exp < Math.floor(Date.now() / 1000)) {
                response.status(common_1.HttpStatus.UNAUTHORIZED).send('Refresh Token Expired.');
                return null;
            }
            const accessToken = jwt.sign({ dummyPhoneNumber: decoded.dummyPhoneNumber }, constants_1.NEXT_AUTH_JWT_SECRET_KEY, { expiresIn: '5m' });
            response.status(common_1.HttpStatus.OK).json({ accessToken: accessToken });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.FORBIDDEN).send('Invalid refresh token.');
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Get)('request-otp'),
    __param(0, (0, common_1.Query)('phone')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getOTP", null);
__decorate([
    (0, common_1.Get)('verify-otp'),
    __param(0, (0, common_1.Query)('phone')),
    __param(1, (0, common_1.Query)('otp')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyOTP", null);
__decorate([
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Headers)('refreshtoken')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshAccessToken", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [])
], AuthController);
//# sourceMappingURL=auth.controller.js.map