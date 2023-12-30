export interface StayActiveMealPlanMealPlan {
  [day: string]: StayActiveMealPlanDay | { cheatDay: boolean };
}

export interface StayActiveMealPlanDay {
  breakfast: string;
  snack1: string;
  lunch: string;
  snack2: string;
  dinner: string;
  snack3: string;
}
