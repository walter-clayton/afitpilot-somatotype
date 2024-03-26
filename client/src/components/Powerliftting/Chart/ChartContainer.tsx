import React from "react";
import { Grid, Typography, useTheme, useMediaQuery, Box } from "@mui/material";

const ChartContainer: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        mt: "30px",
        display: "flex",
        gap: "30px",
        flexDirection: isSmallScreen ? "column" : "row",
      }}
    >
      {/* Exercise scores*/}
      <Grid
        item
        component="main"
        container
        sx={{
          width: isSmallScreen ? "100vw" : "300px",
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
        <Grid>RPE scores</Grid>
      </Grid>
      {/* RPE scores */}
      <Grid
        item
        component="main"
        container
        sx={{
          width: isSmallScreen ? "100vw" : "300px",
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
        <Grid>Exercise scores</Grid>
      </Grid>
    </Box>
  );
};

export default ChartContainer;
