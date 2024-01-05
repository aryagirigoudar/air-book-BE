/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { FiltersSchema } from './schemas/filters.schema';
import { AppService } from './app.service';
import { FiltersController } from './controllers/filters/filters.controller';
import { FiltersService } from './services/filters/filters.service';
import { MealsController } from './controllers/meals/meals.controller';
import { MealsService } from './services/meals/meals.service';
import { MealsSchema } from './schemas/meals.schema';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthMiddleware } from './middlewars/auth.middleware';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/air-book'),
  MongooseModule.forFeature([
  { name: 'filters', schema: FiltersSchema },
  { name: 'meals', schema: MealsSchema }])],
  controllers: [AppController, FiltersController, MealsController, AuthController],
  providers: [AppService, FiltersService, MealsService],
})
export class AppModule implements NestModule {
  configure(auth: MiddlewareConsumer) {
    auth.apply(AuthMiddleware).forRoutes('/filters', '/meals');
  }
}
