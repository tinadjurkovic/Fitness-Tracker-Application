import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MealPlan } from '../models/meal-plan.model';

@Injectable({
  providedIn: 'root',
})
export class MealPlanService {
  private baseUrl = 'assets/';

  constructor(private http: HttpClient) {}

  getMealPlan(planType: string): Observable<MealPlan> {
    const mealPlanUrl = `${this.baseUrl}${planType}-meal-plan.json`;
    return this.http.get<MealPlan>(mealPlanUrl);
  }
}
