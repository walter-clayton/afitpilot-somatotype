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

// Updated to comply with TypeScript expectations for Chart.js options
const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: true,
    },
    // The title property now correctly placed inside plugins
    title: {
      display: false,
      text: "",
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
    createDataset("Prescribed RPE", prescribedRPE, "#56A278"),
    createDataset("Actual RPE", actualRPE, "#9B361A"),
  ],
};

const performanceChartData: ChartData<"line"> = {
  labels,
  datasets: [
    createDataset("Prescribed Performance", prescribedPerformance, "#56A278"),
    createDataset("Actual Performance", actualPerformance, "#9B361A"),
  ],
};

const ChartContainer: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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

        {/* Excerise scores chart to display */}
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
