import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackerService } from '../services/tracker.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent implements OnInit, OnDestroy {

  user = this.userService.getUser();
  selectedMenuOption: string = '';
  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  meals: string[] = ['Breakfast', 'Snack 1', 'Lunch', 'Snack 2', 'Dinner', 'Snack 3'];
  exercises: string[] = ['Exercise 1', 'Exercise 2', 'Exercise 3'];
  progress: number = 0;
  exerciseProgress: number = 0;
  overallProgress: number = 0;

  modalTitle: string = '';
  modalItems: string[] = [];
  modalActive: boolean = false;

  exercisesData: { [key: string]: { muscleGroup: string, exercises: any[] } } = {}; 

  constructor(
    public trackerService: TrackerService,
    public userService: UserService,
    public route: ActivatedRoute
  ) {}

  private menuOptionSubscription: Subscription | undefined;

  updateProgress(day: string, item: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;

    const selectedMeals: { [key: string]: boolean } = this.trackerService.getSelectedMeals()[day] || {};
    selectedMeals[item] = checked;

    const selectedExercises: { [key: string]: boolean } = this.trackerService.getSelectedMeals()[day] || {};
    selectedExercises[item] = checked;

    if (this.meals.includes(item)) {
      this.trackerService.updateProgress(day, selectedMeals, []);
      this.calculateProgress();
    } else if (this.exercises.includes(item)) {
      this.trackerService.updateProgress(day, selectedExercises, [item]);
      this.calculateExerciseProgress();
    }

    this.calculateOverallProgress();
  }

  
  calculateProgress(): void {
    const totalMeals = this.days.length * this.meals.length;
    const selectedMeals = this.trackerService.getSelectedMeals();
    const selectedMealCount = Object.values(selectedMeals)
      .map((day) => Object.values(day).filter((value) => value).length)
      .reduce((acc, count) => acc + count, 0);

    this.progress = (selectedMealCount / totalMeals) * 50;
    console.log('Meal Progress:', this.progress.toFixed(2) + '%');
  }

  calculateExerciseProgress(): void {
    const totalExercises = this.days.length * this.exercises.length;
    const selectedExercises = this.trackerService.getSelectedExercises(); 
    const selectedExerciseCount = Object.values(selectedExercises)
      .map((day) => day.length)
      .reduce((acc, count) => acc + count, 0);

    this.exerciseProgress = (selectedExerciseCount / totalExercises) * 50;
    console.log('Exercise Progress:', this.exerciseProgress.toFixed(2) + '%');
  }

  calculateOverallProgress(): void {
    this.overallProgress = this.progress + this.exerciseProgress;
    console.log('Overall Progress:', this.overallProgress.toFixed(2) + '%');
  }

  ngOnInit(): void {
    const state = this.route.snapshot.firstChild?.data;
    this.selectedMenuOption = state?.['selectedMenuOption'];

    this.trackerService.getSelectedMenuOption().subscribe((option: string) => {
      this.selectedMenuOption = option;
    });

    this.exercisesData = this.trackerService.getExercisesData();
  }

  ngOnDestroy(): void {
    if (this.menuOptionSubscription) {
      this.menuOptionSubscription.unsubscribe();
    }
  }

  toggleUserInfo(): void {
    const user = this.userService.getUser();

    if (user !== null) {
      this.modalActive = true;
      this.modalTitle = 'User Information';
      this.modalItems = [
        `Name: ${user.name} ${user.surname}`,
        `Age: ${user.age}`,
        `Weight: ${user.weight}`,
        `Height: ${user.height}`,
      ];
    } else {
      console.error('User is null. Unable to display user information.');
    }
  }

  closeModal(): void {
    this.modalActive = false;
  }
}
