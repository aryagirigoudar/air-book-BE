/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface IDrink {
  id: string;
  title: string;
  price: number;
}

@Schema()
export class Drink {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  price: number;
}

export const DrinkSchema = SchemaFactory.createForClass(Drink);

@Schema()
export class Meals extends Document {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  starter: string;

  @Prop({ required: true })
  desert: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: [{ type: String }], required: true })
  labels: string[];

  @Prop({ required: true })
  img: string;

  @Prop({ type: [DrinkSchema], required: true })
  drinks: IDrink[];
}

export const MealsSchema = SchemaFactory.createForClass(Meals);
