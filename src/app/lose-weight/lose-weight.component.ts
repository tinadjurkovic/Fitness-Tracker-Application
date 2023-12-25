import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoseWeightMealPlan, LoseWeightMealPlanDay } from './lose-weight.model';

@Component({
  selector: 'app-lose-weight',
  templateUrl: './lose-weight.component.html',
  styleUrls: ['./lose-weight.component.css'],
})
export class LoseWeightComponent implements OnInit {
  exercisePlan: any = {};
  showExercisePlan: boolean = false;
  showMealPlan: boolean = false;
  mealPlan: { [key: string]: LoseWeightMealPlan } = {};

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    fetch('assets/exercise-plan.json')
      .then((response) => response.json())
      .then((data) => {
        this.exercisePlan = data;
        console.log('Exercise Plan:', this.exercisePlan);
      })
      .catch((error) => {
        console.error('Error fetching exercise plan:', error);
      });

      fetch('assets/lose-weight-meal-plan.json')
      .then((response) => response.json())
      .then((data) => {
        this.mealPlan = data;
        console.log('Meal Plan:', this.mealPlan);
      })
      .catch((error) => {
        console.error('Error fetching meal plan:', error);
      });
  }

  toggleExercisePlan(): void {
    this.showExercisePlan = !this.showExercisePlan;
    console.log('showExercisePlan:', this.showExercisePlan);
  }

  toggleMealPlan(): void {
    this.showMealPlan = !this.showMealPlan;
    console.log('showMealPlan:', this.showMealPlan);
  }

  getObjectKeys(obj: object): string[] {
    return Object.keys(obj || {});
  }

  goToTracker(): void {
    this.router.navigate(['/tracker']);
  }
}
