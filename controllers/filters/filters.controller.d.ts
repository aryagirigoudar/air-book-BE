import { FiltersService } from 'src/services/filters/filters.service';
export declare class FiltersController {
    private readonly filtersService;
    constructor(filtersService: FiltersService);
    getFilters(response: any): Promise<any>;
}
