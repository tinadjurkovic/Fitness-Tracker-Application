import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExercisePlanService {
  private gainWeightExercisePlanUrl = './assets/exercise-plan.json';  

  constructor(private http: HttpClient) {}

  getGainWeightExercisePlan(): Observable<any> {
    return this.http.get<any>(this.gainWeightExercisePlanUrl);
  }
}
