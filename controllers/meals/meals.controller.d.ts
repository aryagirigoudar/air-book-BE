import { MealsService } from 'src/services/meals/meals.service';
export declare class MealsController {
    private readonly mealsService;
    constructor(mealsService: MealsService);
    getMeals(response: any): Promise<any>;
}
