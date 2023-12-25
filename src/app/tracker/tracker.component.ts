// tracker.component.ts
import { Component } from '@angular/core';
import { TrackerService } from './tracker.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css'],
})
export class TrackerComponent {
  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  meals: string[] = ['Breakfast', 'Snack 1', 'Lunch', 'Snack 2', 'Dinner', 'Snack 3'];
  exercises: string[] = ['Exercise 1', 'Exercise 2', 'Exercise 3'];
  progress: number = 0;
  exerciseProgress: number = 0;
  overallProgress: number = 0;

  constructor(private trackerService: TrackerService) {}

  updateProgress(day: string, item: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    const selectedItems = checked ? [item] : [];

    if (this.meals.includes(item)) {
      this.trackerService.updateProgress(day, selectedItems, []);
    } else if (this.exercises.includes(item)) {
      this.trackerService.updateProgress(day, [], selectedItems);
    }
  }

  calculateProgress(): void {
    const totalMeals = this.days.length * this.meals.length;
    const selectedMeals = this.trackerService.getSelectedMeals();
    this.progress = (selectedMeals.length / totalMeals) * 100;
    console.log('Meal Progress:', this.progress.toFixed(2) + '%');
  }

  calculateExerciseProgress(): void {
    const totalExercises = this.days.length * this.exercises.length;
    const selectedExercises = this.trackerService.getSelectedExercises();
    this.exerciseProgress = (selectedExercises.length / totalExercises) * 100;
    console.log('Exercise Progress:', this.exerciseProgress.toFixed(2) + '%');
  }

  calculateOverallProgress(): void {
    this.overallProgress = this.progress + this.exerciseProgress;
    console.log('Overall Progress:', this.overallProgress.toFixed(2) + '%');
  }
}

