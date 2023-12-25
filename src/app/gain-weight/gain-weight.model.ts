export interface MealPlanItem {
    breakfast: string;
    snack1: string;
    lunch: string;
    snack2: string;
    dinner: string;
    snack3: string;
  }
  export interface Exercise {
    name: string;
    reps: number | string;
    sets: number;
    rest: string;
  }
  
  export interface ExercisePlanDay {
    muscleGroup: string;
    exercises: Exercise[];
  }
  
  export interface ExercisePlan {
    [day: string]: ExercisePlanDay | { restDay: boolean };
  }