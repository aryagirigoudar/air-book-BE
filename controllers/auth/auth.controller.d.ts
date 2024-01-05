export declare class AuthController {
    constructor();
    getOTP(phone: string, response: any): Promise<any>;
    verifyOTP(phone: string, otp: string, response: any): Promise<any>;
    refreshAccessToken(refreshToken: string, response: any): Promise<any>;
}
