/* eslint-disable prettier/prettier */
import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { FiltersService } from 'src/services/filters/filters.service';

@Controller()
export class FiltersController {

  constructor(private readonly filtersService: FiltersService) {}
  @Get('filters')
    async getFilters(@Res() response) {
    try {
      const filtersData = await this.filtersService.getFilters();
      return response.status(HttpStatus.OK).json({
      message: 'All filters data found successfully',
      data: filtersData});
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
    }
}
