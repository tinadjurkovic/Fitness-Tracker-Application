// tracker.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrackerService {
  userProgress: { [key: string]: { meals: string[]; exercises: string[] } } = {};

  updateProgress(day: string, meals: string[], exercises: string[]): void {
    this.userProgress[day] = { meals, exercises };
  }

  getSelectedMeals(): string[] {
    const selectedMeals: string[] = [];

    for (const day in this.userProgress) {
      if (this.userProgress.hasOwnProperty(day)) {
        selectedMeals.push(...this.userProgress[day].meals);
      }
    }

    return selectedMeals;
  }

  getSelectedExercises(): string[] {
    const selectedExercises: string[] = [];

    for (const day in this.userProgress) {
      if (this.userProgress.hasOwnProperty(day)) {
        selectedExercises.push(...this.userProgress[day].exercises);
      }
    }

    return selectedExercises;
  }
}
