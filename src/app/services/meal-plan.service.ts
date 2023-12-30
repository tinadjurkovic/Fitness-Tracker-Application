import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealPlanService {
  private gainWeightMealPlanUrl = 'assets/gain-weight-meal-plan.json';  

  constructor(private http: HttpClient) {}

  getGainWeightMealPlan(): Observable<any> {
    return this.http.get<any>(this.gainWeightMealPlanUrl);
  }
}
