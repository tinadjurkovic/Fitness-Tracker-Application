export interface StrengthenMusclesMealPlan {
    [day: string]: StrengthenMusclesMealPlanDay | { cheatDay: boolean };
  }
  
  export interface StrengthenMusclesMealPlanDay {
    breakfast: string;
    snack1: string;
    lunch: string;
    snack2: string;
    dinner: string;
    snack3: string;
  }
  