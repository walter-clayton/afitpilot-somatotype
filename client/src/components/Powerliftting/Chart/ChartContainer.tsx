import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { ExerciseFormState } from "../FormModal/UtilTypes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Dataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  tension: number;
  fill: boolean;
}

const createDataset = (
  label: string,
  data: number[],
  borderColor: string
): Dataset => ({
  label,
  data,
  borderColor,
  backgroundColor: borderColor,
  tension: 0.4,
  fill: false,
});

const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "",
    },
  },
};

const ChartContainer: React.FC<{ filteredExercises: ExerciseFormState[] }> = ({
  filteredExercises,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  // const [adjustedActualPerformance, setAdjustedActualPerformance] = useState<
  //   number[]
  // >([]);
  // console.log(
  //   " coming from adjustedActualPerformance",
  //   adjustedActualPerformance
  // );

  useEffect(() => {
    // const calculateAdjustedPerformances = () => {
    //   const adjustedPerformances = filteredExercises.map((exercise) => {
    //     if (typeof exercise.actualRPE === "number") {
    //       const intendedScore =
    //         typeof exercise.intendedScore === "number"
    // ? exercise.intendedScore
    //           : 0;
    //       const actualRPE =
    //         typeof exercise.actualRPE === "number" ? exercise.actualRPE : 10;
    //       const difference = intendedScore - actualRPE;
    // Check if the difference is a valid number
    //       if (!isNaN(difference)) {
    // Adjust the actual performance by adding the difference
    //         return exercise.actualRPE + difference;
    //       }
    //     }
    // If actualRPE is not a valid number or difference calculation failed, return undefined
    //     return undefined;
    //   });
    // Filter out undefined values
    //   const filteredAdjustedPerformances = adjustedPerformances.filter(
    //     (value) => typeof value === "number"
    //   );
    //   setAdjustedActualPerformance(filteredAdjustedPerformances as number[]);
    // };
    // calculateAdjustedPerformances();
    // console.log("Exercises in ChartContainer:", filteredExercises);
  }, [filteredExercises]);

  const optionsWithoutGrid: ChartOptions<"line"> = {
    ...options,
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          display: false,
        },
      },
    },
  };

  const dates: string[] = filteredExercises.map((exercise) => exercise.date);
  const labels: string[] = dates.slice(0, 30);

  const prescribedRPE: (number | undefined)[] = filteredExercises.map(
    (exercise) => exercise.prescribedRPE
  );
  const actualRPE: (number | undefined)[] = filteredExercises.map(
    (exercise) => exercise.actualRPE
  );

  const filteredPrescribedRPE: number[] = prescribedRPE.filter(
    (value): value is number => value !== undefined
  );
  const filteredActualRPE: number[] = actualRPE.filter(
    (value): value is number => value !== undefined
  );

  const prescribedPerformance: (number | undefined)[] = filteredExercises.map(
    (exercise) => {
      if (typeof exercise.intendedScore === "string") {
        return parseInt(exercise.intendedScore);
      } else if (typeof exercise.intendedScore === "number") {
        return exercise.intendedScore;
      } else {
        return undefined;
      }
    }
  );

  const actualPerformance: (number | undefined)[] = filteredExercises.map(
    (exercise) =>
      typeof exercise.actualRPE === "number" ? exercise.actualRPE : undefined
  );

  const filteredPrescribedPerformance: number[] = prescribedPerformance.filter(
    (value): value is number => value !== undefined
  );
  const filteredActualPerformance: number[] = actualPerformance.filter(
    (value): value is number => value !== undefined
  );

  // Return null if there are no filtered exercises
  if (filteredExercises.length === 0) {
    return null;
  }

  const rpeChartData: ChartData<"line"> = {
    labels,
    datasets: [
      createDataset("Prescribed RPE", filteredPrescribedRPE, "#56A278"),
      createDataset("Actual RPE", filteredActualRPE, "#9B361A"),
    ],
  };

  const performanceChartData: ChartData<"line"> = {
    labels,
    datasets: [
      createDataset(
        "Prescribed Performance",
        filteredPrescribedPerformance,
        // adjustedActualPerformance,
        "#56A278"
      ),
      createDataset("Actual Performance", filteredActualPerformance, "#9B361A"),
    ],
  };

  return (
    <Box
      sx={{
        mt: "30px",
        display: "flex",
        gap: "30px",
        flexDirection: isSmallScreen ? "column" : "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* RPE scores chart */}
      <Grid
        item
        sx={{
          width: isSmallScreen ? "100vw" : "400px",
          flexDirection: "column",
          flexWrap: "wrap",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          mt: "20px",
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
          RPE scores
        </Typography>

        {/* RPE scores chart to display */}
        <Line
          options={optionsWithoutGrid}
          data={rpeChartData}
          style={{ padding: "10px" }}
        />
      </Grid>

      {/* Exercise scores*/}
      <Grid
        item
        sx={{
          width: isSmallScreen ? "100vw" : "400px",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
          borderRadius: "20px",
          mt: "20px",
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
          Exercise scores
        </Typography>

        {/* Exercise scores chart to display */}
        <Line
          options={optionsWithoutGrid}
          data={performanceChartData}
          style={{
            padding: "10px",
            width: "100%",
          }}
        />
      </Grid>
    </Box>
  );
};

export default ChartContainer;
