import { Grid, ListItem, Typography } from "@mui/material";
import React from "react";

const Legends = () => {
  return (
    <Grid
      component="main"
      item
      container
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        padding: "10px 25px",
      }}
    >
      <Typography
        sx={{
          bgcolor: "#56A278",
          color: "#fff",
          borderRadius: "10px",
          fontWeight: "bold",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ListItem sx={{ textAlign: "center" }}>
          Green = your prescribed RPE and performance
        </ListItem>
      </Typography>
      <Typography
        sx={{
          bgcolor: "#9B361A",
          color: "#fff",
          borderRadius: "10px",
          fontWeight: "bold",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ListItem sx={{ textAlign: "center" }}>
          RED = your actual RPE and adjusted performance
        </ListItem>
      </Typography>
    </Grid>
  );
};

export default Legends;
