/* eslint-disable prettier/prettier */
import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { MealsService } from 'src/services/meals/meals.service';

@Controller()
export class MealsController {

  constructor(private readonly mealsService: MealsService) {}
  @Get('meals')
    async getMeals(@Res() response) {
    try {
      const mealsData = await this.mealsService.getMeals();
      return response.status(HttpStatus.OK).json({
      message: 'All meals data found successfully',
      data: mealsData});
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
    }
}
