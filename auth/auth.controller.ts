/* eslint-disable prettier/prettier */
import { Controller, Get, Headers, HttpStatus, Post, Query, Res } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { NEXT_AUTH_JWT_SECRET_KEY, NEXT_REFRESH_JWT_SECRET_KEY, dummyOTP, dummyPhoneNumber } from 'src/constants';

@Controller('auth')
export class AuthController {

  constructor() {}
  @Get('request-otp')
    async getOTP(@Query('phone') phone: string, @Res() response) {
      if (phone === dummyPhoneNumber) {
        return response.status(HttpStatus.OK).json({
          message: 'OTP successfully'});
      } else {
      return response.status(HttpStatus.NOT_FOUND).json({ message: 'Phone number not recognized'});
      }
    }

    @Get('verify-otp')
    async verifyOTP(@Query('phone') phone: string,@Query('otp') otp: string, @Res() response) {
    if (phone === dummyPhoneNumber && otp === dummyOTP) {
          const secretAuthKey = NEXT_AUTH_JWT_SECRET_KEY;
          const secretRefreshKey = NEXT_REFRESH_JWT_SECRET_KEY;
          const accessToken = jwt.sign({dummyPhoneNumber}, secretAuthKey, { expiresIn: '1m' });
          const refreshToken = jwt.sign({dummyPhoneNumber}, secretRefreshKey, { expiresIn: '2m' });
        return response.status(HttpStatus.OK).json({
          message: 'OTP Verification Successful',
          data : {accessToken : accessToken, refreshToken : refreshToken}});
      } else {
      return response.status(HttpStatus.FORBIDDEN).json({ message: 'OTP Verification Failed'});
      }
    }

    @Post('refresh')
    async refreshAccessToken(@Headers('refreshtoken') refreshToken: string, @Res() response) {
      if (!refreshToken) {
        return response.status(HttpStatus.FORBIDDEN).send('Access Denied. No refresh token provided.');
      }
  
      try {
        const decoded = jwt.verify(refreshToken, NEXT_REFRESH_JWT_SECRET_KEY) as { dummyPhoneNumber: any, exp: number };
  
        if (decoded.exp < Math.floor(Date.now() / 1000)) {
          response.status(HttpStatus.UNAUTHORIZED).send('Refresh Token Expired.');
          return null;
        }

        const accessToken = jwt.sign({ dummyPhoneNumber: decoded.dummyPhoneNumber }, NEXT_AUTH_JWT_SECRET_KEY, { expiresIn: '5m' });
        response.status(HttpStatus.OK).json({accessToken : accessToken });
      } catch (error) {
        return response.status(HttpStatus.FORBIDDEN).send('Invalid refresh token.');
      }
    }
}
