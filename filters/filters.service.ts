/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IFilters } from 'src/interfaces/filters.interface';

@Injectable()
export class FiltersService {
  constructor(@InjectModel('filters') private filtersModel:Model<IFilters>) { }

  async getFilters(): Promise<IFilters[]> {
    const filtersData = await this.filtersModel.find({}, { _id: 0 });
    if (!filtersData || filtersData.length == 0) {
        throw new NotFoundException('Filters data not found!');
    }
    return filtersData;
}
}