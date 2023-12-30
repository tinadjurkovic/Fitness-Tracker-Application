export interface GainWeightMealPlan {
  [day: string]: GainWeightMealPlanDay | { cheatDay: boolean };
}

export interface GainWeightMealPlanDay {
  breakfast: string;
  snack1: string;
  lunch: string;
  snack2: string;
  dinner: string;
  snack3: string;
}
