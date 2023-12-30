export interface LoseWeightMealPlan {
    [day: string]: LoseWeightMealPlanDay | { cheatDay: boolean };
  }
  
  export interface LoseWeightMealPlanDay {
    breakfast: string;
    snack1: string;
    lunch: string;
    snack2: string;
    dinner: string;
    snack3: string;
  }
  