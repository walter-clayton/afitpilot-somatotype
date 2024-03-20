export interface ExerciseFormState {
  intendedScore: number | string;
  exerciseName?: string;
  unit?: string;
  prescribedRPE?: number;
  actualRPE?: number;
  date?: string;
  notes?: string;
}

export const units: string[] = [
  "calories",
  "kilograms",
  "kilometers",
  "kilometers per hour",
  "meters",
  "meters per second",
  "miles",
  "miles per hour",
  "minutes per kilometer",
  "percent",
  "points",
  "reps",
  "rounds",
  "RPM",
  "score",
  "steps",
  "time",
  "watts",
];
