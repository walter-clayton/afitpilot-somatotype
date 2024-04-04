export interface ExerciseFormState {
  id: string;
  intendedScore: number | string;
  exerciseName?: string;
  unit?: string;
  prescribedRPE?: number;
  actualRPE?: number;
  date: string;
  notes: string;
  adjustedPerformance?: number | null;
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

export const calculateAdjustedPerformance = (
  unit: string,
  actualRPE: number,
  intendedScore: number
): string => {
  let adjustmentFactor = 1 - (actualRPE - 4) / 10;
  adjustmentFactor = Math.max(adjustmentFactor, 0.9);

  const adjustedScore = Math.round(intendedScore * adjustmentFactor);
  // Math.round(intendedScore * adjustmentFactor);

  switch (unit) {
    case "calories":
    case "kilometers":
    case "meters":
    case "miles":
    case "points":
    case "steps":
      return `${adjustedScore.toFixed(2)} ${unit}`;
    case "kilograms":
    case "percent":
    case "score":
    case "watts":
      return `${adjustedScore.toFixed(2)} ${unit}`;
    case "kilometers per hour":
    case "miles per hour":
    case "meters per second":
      return `${adjustedScore.toFixed(2)} ${unit}`;
    case "minutes per kilometer":
      return `${(intendedScore / adjustedScore).toFixed(2)} ${unit}`;
    case "reps":
    case "rounds":
    case "RPM":
      return `${Math.round(adjustedScore)} ${unit}`;
    case "time":
      return `${Math.round(adjustedScore)} seconds`;
    default:
      return "Adjustment not applicable for this unit";
  }
};
