import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrackerService {
  private selectedMeals: { [key: string]: { [key: string]: boolean } } = {};
  private selectedExercises: { [key: string]: string[] } = {};
  private selectedMenuOptionSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  updateProgress(day: string, selectedMeals: { [key: string]: boolean }, selectedExercises: string[]): void {
    this.selectedMeals[day] = selectedMeals;
    this.selectedExercises[day] = selectedExercises;
  }

  getSelectedMeals(): { [key: string]: { [key: string]: boolean } } {
    return this.selectedMeals;
  }

  getSelectedExercises(): { [key: string]: string[] } {
    return this.selectedExercises;
  }

  setSelectedMenuOption(option: string): void {
    this.selectedMenuOptionSubject.next(option);
  }

  getSelectedMenuOption(): Observable<string> {
    return this.selectedMenuOptionSubject.asObservable();
  }

  setInitialMenuOption(option: string): void {
    this.setSelectedMenuOption(option);
  }
}
