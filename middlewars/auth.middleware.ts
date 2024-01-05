/* eslint-disable prettier/prettier */
import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { NEXT_AUTH_JWT_SECRET_KEY } from 'src/constants';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
        let accessToken = request.headers['authorization'];
        if (!accessToken) {
        response.status(HttpStatus.BAD_REQUEST).send('Access Denied. No Access Token Provided.');
        return null;
        }

        accessToken = Array.isArray(accessToken) ? accessToken.join('') : accessToken;

        try {
            const decoded = jwt.verify(accessToken, NEXT_AUTH_JWT_SECRET_KEY) as { dummyPhoneNumber?: any, exp: number };
            if (decoded.exp < Math.floor(Date.now() / 1000)) {
                response.status(HttpStatus.UNAUTHORIZED).send('Access Token expired');
                return null;
            }
            next()
        } catch (error) {
          response.status(HttpStatus.UNAUTHORIZED).send('Access Token expired');
          return null;
        }
      }
}
