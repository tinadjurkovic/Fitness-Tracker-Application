export interface MealPlan {
    [day: string]: {
      breakfast: string;
      snack1: string;
      lunch: string;
      snack2: string;
      dinner: string;
      snack3: string;
    } | { cheatDay: boolean };
  }
  