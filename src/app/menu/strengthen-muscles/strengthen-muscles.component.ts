import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TrackerService } from '../../services/tracker.service';
import { MealPlanService } from '../../services/meal-plan.service';
import { ExercisePlanService } from '../../services/exercise-plan.service';
import { Router } from '@angular/router';
import { ExercisePlan } from '../../models/exercise-plan.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-strengthen-muscles',
  templateUrl: './strengthen-muscles.component.html',
  styleUrls: ['./strengthen-muscles.component.scss'],
  providers: [MealPlanService]
})
export class StrengthenMusclesComponent implements OnInit, OnDestroy {
  user: any;
  exercisePlan: ExercisePlan = {
    monday: { muscleGroup: '', exercises: [] },
    tuesday: { muscleGroup: '', exercises: [] },
    wednesday: { muscleGroup: '', exercises: [] },
    thursday: { muscleGroup: '', exercises: [] },
    friday: { muscleGroup: '', exercises: [] },
    saturday: { muscleGroup: '', exercises: [] },
    sunday: { restDay: true },
  };
  showExercisePlan: boolean = false;
  showMealPlan: boolean = false;
  mealPlan: { [key: string]: any } = {};

  modalTitle: string = '';
  modalItems: string[] = [];
  modalActive: boolean = false;

  private exercisePlanSubscription: Subscription | undefined;
  private mealPlanSubscription: Subscription | undefined;

  constructor(
    private userService: UserService,
    private trackerService: TrackerService,
    private mealPlanService: MealPlanService,
    private exercisePlanService: ExercisePlanService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    console.log('User in Component:', this.user);

    this.exercisePlanService.getExercisePlan().subscribe(
      (data) => {
        this.exercisePlan = data;
        console.log('Exercise Plan:', this.exercisePlan);
      },
      (error) => {
        console.error('Error fetching exercise plan:', error);
      }
    );

    this.mealPlanService.getMealPlan('strenghten-muscles').subscribe(
      (data) => {
        console.log('Meal Plan:', data);
        this.mealPlan = data;
      },
      (error) => {
        console.error('Error fetching meal plan:', error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.exercisePlanSubscription) {
      this.exercisePlanSubscription.unsubscribe();
    }
    if (this.mealPlanSubscription) {
      this.mealPlanSubscription.unsubscribe();
    }
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
    return Object.keys(obj || {}) as string[];
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
    const selectedMenuOption = 'Strengthen Muscles'; 
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

getExercisesForDay(day: string): any[] {
  const exercises = (this.exercisePlan as any)[day]?.exercises;
  return Array.isArray(exercises) ? exercises : [];
}

}



