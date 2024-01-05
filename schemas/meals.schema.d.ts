/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export interface IDrink {
    id: string;
    title: string;
    price: number;
}
export declare class Drink {
    id: string;
    title: string;
    price: number;
}
export declare const DrinkSchema: import("mongoose").Schema<Drink, import("mongoose").Model<Drink, any, any, any, Document<unknown, any, Drink> & Drink & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Drink, Document<unknown, {}, import("mongoose").FlatRecord<Drink>> & import("mongoose").FlatRecord<Drink> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare class Meals extends Document {
    id: string;
    title: string;
    name: string;
    starter: string;
    desert: string;
    price: number;
    labels: string[];
    img: string;
    drinks: IDrink[];
}
export declare const MealsSchema: import("mongoose").Schema<Meals, import("mongoose").Model<Meals, any, any, any, Document<unknown, any, Meals> & Meals & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Meals, Document<unknown, {}, import("mongoose").FlatRecord<Meals>> & import("mongoose").FlatRecord<Meals> & {
    _id: import("mongoose").Types.ObjectId;
}>;
