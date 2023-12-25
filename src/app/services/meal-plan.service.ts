import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealPlanService {
  private gainWeightMealPlanUrl = './assets/meal-plan.json';  // Adjust the path accordingly

  constructor(private http: HttpClient) {}

  getGainWeightMealPlan(): Observable<any> {
    return this.http.get<any>(this.gainWeightMealPlanUrl);
  }
}
