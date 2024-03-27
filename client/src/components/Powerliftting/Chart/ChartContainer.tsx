import React from "react";
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
  tension: 0.1,
});

// Updated to comply with TypeScript expectations for Chart.js options
const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    // The title property now correctly placed inside plugins
    title: {
      display: true,
      text: "", // Default text, will be overridden
    },
  },
};

const labels = [
  "Session 1",
  "Session 2",
  "Session 3",
  "Session 4",
  "Session 5",
];
const prescribedRPE = [6, 7, 8, 7, 6];
const actualRPE = [5, 7, 9, 6, 5];
const prescribedPerformance = [100, 105, 110, 108, 104];
const actualPerformance = [95, 107, 112, 105, 102];

const rpeChartData: ChartData<"line"> = {
  labels,
  datasets: [
    createDataset("Prescribed RPE", prescribedRPE, "green"),
    createDataset("Actual RPE", actualRPE, "red"),
  ],
};

const performanceChartData: ChartData<"line"> = {
  labels,
  datasets: [
    createDataset("Prescribed Performance", prescribedPerformance, "green"),
    createDataset("Actual Performance", actualPerformance, "red"),
  ],
};

const ChartContainer: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const rpeOptions = {
    ...options,
    plugins: {
      ...options.plugins,
      title: { ...options.plugins!.title, text: "RPE Scores Over Time" },
    },
  };
  const exerciseOptions = {
    ...options,
    plugins: {
      ...options.plugins,
      title: { ...options.plugins!.title, text: "Exercise Scores Over Time" },
    },
  };
  return (
    <Box
      sx={{
        mt: "30px",
        display: "flex",
        gap: "30px",
        flexDirection: isSmallScreen ? "column" : "row",
      }}
    >
      {/* RPE scores chart */}
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
          //   mt: "20px",
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
        <Grid>
          {/* RPE scores chart to display */}
          <Line options={rpeOptions} data={rpeChartData} />
        </Grid>
      </Grid>

      {/* Exercise scores*/}
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
          //   mt: "20px",
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
        <Grid>
          {/* Excerise scores chart to display */}
          <Line options={exerciseOptions} data={performanceChartData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChartContainer;
