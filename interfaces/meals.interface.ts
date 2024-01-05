/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
export interface IMeals extends Document{
  readonly id: string;
  readonly title: string;
  readonly starter: string;
  readonly desert: string;
  readonly name: string;
  readonly price: number;
  readonly labels: string[];
  readonly img: string;
  readonly drinks: Drink[];
}

interface Drink {
  readonly id: string;
  readonly title: string;
  readonly price: number;
}