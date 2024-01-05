import { MiddlewareConsumer, NestModule } from '@nestjs/common';
export declare class AppModule implements NestModule {
    configure(auth: MiddlewareConsumer): void;
}
