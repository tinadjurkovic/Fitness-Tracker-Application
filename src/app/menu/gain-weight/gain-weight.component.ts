import { ActivatedRoute, Router } from '@angular/router';
import { GainWeightMealPlanDay } from './gain-weight.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TrackerService } from '../../services/tracker.service';

@Component({
  selector: 'app-gain-weight',
  templateUrl: './gain-weight.component.html',
  styleUrls: ['./gain-weight.component.scss'],
})
export class GainWeightComponent implements OnInit {
  user: any;
  exercisePlan: any = {};
  showExercisePlan: boolean = false;
  showMealPlan: boolean = false;
  mealPlan: { [key: string]: GainWeightMealPlanDay } = {};

  modalTitle: string = '';
  modalItems: string[] = [];
  modalActive: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private trackerService: TrackerService 
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    console.log('User in Component:', this.user);

    fetch('assets/exercise-plan.json')
      .then((response) => response.json())
      .then((data) => {
        this.exercisePlan = data;
        console.log('Exercise Plan:', this.exercisePlan);
      })
      .catch((error) => {
        console.error('Error fetching exercise plan:', error);
      });

    fetch('assets/gain-weight-meal-plan.json')
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

  toggleUserInfo(): void {
    this.openModal('User Information', [
      `Name: ${this.user.name} ${this.user.surname}`,
      `Age: ${this.user.age}`,
      `Weight: ${this.user.weight}`,
      `Height: ${this.user.height}`,
    ]);
  }
  goToTracker(): void {
    const selectedMenuOption = 'Gain Weight'; 
    this.trackerService.setInitialMenuOption(selectedMenuOption);
    this.router.navigate(['/tracker']);
  }

  openModal(title: string, items: string[]): void {
    this.modalTitle = title;
    this.modalItems = items;
    this.modalActive = true;
  }

  closeModal(): void {
    this.modalActive = false;
  }
}


