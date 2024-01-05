/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMeals } from 'src/interfaces/meals.interface';

@Injectable()
export class MealsService {
  constructor(@InjectModel('meals') private mealsModel:Model<IMeals>) { }

  async getMeals(): Promise<IMeals[]> {
    const mealsData = await this.mealsModel.find({}, { _id: 0 });
    if (!mealsData || mealsData.length == 0) {
        throw new NotFoundException('Filters data not found!');
    }
    return mealsData;
}
}