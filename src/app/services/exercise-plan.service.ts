import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExercisePlan } from '../models/exercise-plan.model';

@Injectable({
  providedIn: 'root',
})
export class ExercisePlanService {
  private exercisePlanUrl = 'assets/exercise-plan.json';

  constructor(private http: HttpClient) {}

  getExercisePlan(): Observable<ExercisePlan> {
    return this.http.get<ExercisePlan>(this.exercisePlanUrl);
  }
}
