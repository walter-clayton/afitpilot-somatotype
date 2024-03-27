import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  ListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ExerciseFormState } from "../FormModal/UtilTypes";

interface FeedbackCardProps {
  filteredExercises: ExerciseFormState[];
}
const FeedbackCard: React.FC<FeedbackCardProps> = ({ filteredExercises }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // useEffect(() => {
  //   console.log("Exercises in FeedbackCard:", filteredExercises);
  // }, [filteredExercises]);

  const getLastExercise = (): ExerciseFormState | undefined => {
    if (filteredExercises.length > 0) {
      return filteredExercises[filteredExercises.length - 1];
    }
    return undefined;
  };
  const lastExercise = getLastExercise();

  // Return null if there are no filtered exercises
  if (filteredExercises.length === 0) {
    return null;
  }

  const calculateAdjustedPerformance = (
    unit: string,
    rpe: number,
    intendedScore: number
  ): string => {
    switch (unit) {
      case "calories":
        return `${100 * (10 - rpe)} calories`;
      case "kilograms":
        return `${100 * (10 - rpe)} kg`;
      case "kilometers":
        return `${10 * (10 - rpe)} kilometers`;
      case "meters":
        return `${1000 * (10 - rpe)} meters`;
      case "miles":
        return `${6.21371 * (10 - rpe)} miles`;
      case "kilometers per hour":
        return `${10 * (10 - rpe)} kilometers per hour`;
      case "meters per second":
        return `${0.277778 * (10 - rpe)} meters per second`;
      case "miles per hour":
        return `${6.21371 * (10 - rpe)} miles per hour`;
      case "minutes per kilometer":
        return `${(600 / (10 - rpe)).toFixed(2)} minutes per kilometer`;
      case "percent":
        return `${90 + rpe * 1}%`;
      case "points":
      case "reps":
      case "rounds":
        return `${10 + rpe} ${unit}`;
      case "RPM":
        return `${100 * (10 - rpe)} RPM`;
      case "score":
        return `${10 * (10 - rpe)} points`;
      case "steps":
        return `${1000 * (10 - rpe)} steps`;
      case "watts":
        return `${100 * (10 - rpe)} watts`;
      default:
        return "N/A";
    }
  };
  const generateFeedbackMessage = (
    prescribedRPE: number,
    actualRPE: number,
    performance: number,
    exerciseName: string
  ): string => {
    if (actualRPE > prescribedRPE) {
      return `Reduce intensity in your next ${exerciseName} session at.`;
    } else if (actualRPE === prescribedRPE) {
      return `Maintain intensity in your next ${exerciseName} session at.`;
    } else {
      // Check if the actual RPE is significantly lower than the prescribed RPE
      const rpeDifference = prescribedRPE - actualRPE;
      if (rpeDifference >= 2) {
        return `Great job! Increase intensity in your next ${exerciseName} session at.`;
      } else {
        return `Great job! Slightly increase intensity in your next ${exerciseName} session at.`;
      }
    }
  };

  return (
    <Grid
      item
      component="main"
      container
      sx={{
        width: isSmallScreen ? "100vw" : "400px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        mt: "25px",
        gap: "20px",
        backgroundColor: "#fff",
        pb: "14px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        sx={{
          backgroundColor: "#F6F6F7",
          color: "#606161",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: "12px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        Feedback
      </Typography>

      {lastExercise && (
        <Grid
          item
          justifyContent="center"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            width: "100%",
          }}
        >
          <Typography alignItems="center" sx={{ fontWeight: "bold" }}>
            Go for
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              bgcolor: "#9B361A",
              borderRadius: "10px",
              color: "#fff",
              textTransform: "uppercase",
              padding: "10px 20px",
              fontWeight: "bold",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                bgcolor: "#7B341A",
              },
            }}
          >
            {calculateAdjustedPerformance(
              lastExercise.unit || "",
              lastExercise.actualRPE || 0,
              typeof lastExercise.intendedScore === "number"
                ? lastExercise.intendedScore
                : parseInt(lastExercise.intendedScore as string)
            )}
          </Typography>

          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              paddingX: " 20px",
              paddingTop: "10px",
            }}
          >
            {generateFeedbackMessage(
              lastExercise.prescribedRPE || 0,
              lastExercise.actualRPE || 0,
              typeof lastExercise.intendedScore === "number"
                ? lastExercise.intendedScore
                : 0,
              lastExercise.exerciseName || ""
            )}
          </Typography>
          <Typography
            sx={{
              bgcolor: "#56A278",
              borderRadius: "10px",
              color: "#fff",
              textTransform: "uppercase",
              padding: "10px 20px",
              fontWeight: "bold",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                bgcolor: "#36A278",
              },
            }}
          >
            RPE {lastExercise.prescribedRPE}
          </Typography>
          <Typography>
            <ListItem sx={{ textAlign: "center" }}>
              {lastExercise.intendedScore} x 10
            </ListItem>
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default FeedbackCard;
