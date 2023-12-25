export interface StayActiveMealPlanDay {
    breakfast: string;
    snack1: string;
    lunch: string;
    snack2: string;
    dinner: string;
    snack3: string;
  }
  
  export interface StayActiveMealPlan {
    day1: StayActiveMealPlanDay;
    day2: StayActiveMealPlanDay;
    day3: StayActiveMealPlanDay;
    day4: StayActiveMealPlanDay;
    day5: StayActiveMealPlanDay;
    day6: StayActiveMealPlanDay;
    day7: { cheatDay: boolean };
  }
  