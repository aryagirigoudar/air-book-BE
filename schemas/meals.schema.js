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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealsSchema = exports.Meals = exports.DrinkSchema = exports.Drink = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Drink = class Drink {
};
exports.Drink = Drink;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Drink.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Drink.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Drink.prototype, "price", void 0);
exports.Drink = Drink = __decorate([
    (0, mongoose_1.Schema)()
], Drink);
exports.DrinkSchema = mongoose_1.SchemaFactory.createForClass(Drink);
let Meals = class Meals extends mongoose_2.Document {
};
exports.Meals = Meals;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Meals.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Meals.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Meals.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Meals.prototype, "starter", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Meals.prototype, "desert", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Meals.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: String }], required: true }),
    __metadata("design:type", Array)
], Meals.prototype, "labels", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Meals.prototype, "img", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.DrinkSchema], required: true }),
    __metadata("design:type", Array)
], Meals.prototype, "drinks", void 0);
exports.Meals = Meals = __decorate([
    (0, mongoose_1.Schema)()
], Meals);
exports.MealsSchema = mongoose_1.SchemaFactory.createForClass(Meals);
//# sourceMappingURL=meals.schema.js.map