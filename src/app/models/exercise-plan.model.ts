export interface Exercise {
    name: string;
    reps: number | string;
    sets: number;
    rest: string;
  }
  
  export interface WorkoutDay {
    muscleGroup: string;
    exercises: Exercise[];
  }
  
  export interface ExercisePlan {
    monday: WorkoutDay;
    tuesday: WorkoutDay;
    wednesday: WorkoutDay;
    thursday: WorkoutDay;
    friday: WorkoutDay;
    saturday: WorkoutDay;
    sunday: { restDay: boolean };
  }
  