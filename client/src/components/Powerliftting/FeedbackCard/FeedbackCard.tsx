import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  ListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  calculateAdjustedPerformance,
  ExerciseFormState,
} from "../FormModal/UtilTypes";

interface FeedbackCardProps {
  filteredExercises: ExerciseFormState[];
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ filteredExercises }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [adjustedPerformance, setAdjustedPerformance] = useState<string | null>(
    null
  );

  const getLastExercise = (): ExerciseFormState | undefined => {
    if (filteredExercises.length > 0) {
      return filteredExercises[filteredExercises.length - 1];
    }
    return undefined;
  };
  // console.log("coming from adjustedPerformance:", adjustedPerformance);
  const lastExercise = getLastExercise();

  useEffect(() => {
    if (lastExercise) {
      const adjustedPerformanceValue = calculateAdjustedPerformance(
        lastExercise.unit || "",
        lastExercise.actualRPE || 0,
        typeof lastExercise.intendedScore === "number"
          ? lastExercise.intendedScore
          : parseFloat(lastExercise.intendedScore)
      );
      setAdjustedPerformance(adjustedPerformanceValue);
    } else {
      setAdjustedPerformance(null);
    }
  }, [lastExercise]);

  if (filteredExercises.length === 0 || !lastExercise) {
    return null;
  }

  const generateFeedbackMessage = (
    prescribedRPE: number,
    actualRPE: number,
    exerciseName: string
  ): string => {
    if (actualRPE > prescribedRPE) {
      return `Reduce intensity in your next ${exerciseName} session at`;
    } else if (actualRPE === prescribedRPE) {
      return `Maintain intensity in your next ${exerciseName} session at`;
    } else {
      const rpeDifference = prescribedRPE - actualRPE;
      if (rpeDifference >= 2) {
        return `Great job! Increase intensity in your next ${exerciseName} session at`;
      } else {
        return `Great job! Slightly increase intensity in your next ${exerciseName} session at`;
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
              : parseFloat(lastExercise.intendedScore)
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
          <ListItem sx={{ textAlign: "center" }}>{lastExercise.notes}</ListItem>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FeedbackCard;
