"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const filters_schema_1 = require("./schemas/filters.schema");
const app_service_1 = require("./app.service");
const filters_controller_1 = require("./controllers/filters/filters.controller");
const filters_service_1 = require("./services/filters/filters.service");
const meals_controller_1 = require("./controllers/meals/meals.controller");
const meals_service_1 = require("./services/meals/meals.service");
const meals_schema_1 = require("./schemas/meals.schema");
const auth_controller_1 = require("./controllers/auth/auth.controller");
const auth_middleware_1 = require("./middlewars/auth.middleware");
let AppModule = class AppModule {
    configure(auth) {
        auth.apply(auth_middleware_1.AuthMiddleware).forRoutes('/filters', '/meals');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/air-book'),
            mongoose_1.MongooseModule.forFeature([
                { name: 'filters', schema: filters_schema_1.FiltersSchema },
                { name: 'meals', schema: meals_schema_1.MealsSchema }
            ])],
        controllers: [app_controller_1.AppController, filters_controller_1.FiltersController, meals_controller_1.MealsController, auth_controller_1.AuthController],
        providers: [app_service_1.AppService, filters_service_1.FiltersService, meals_service_1.MealsService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map