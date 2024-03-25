import { Grid, Typography, ListItem } from "@mui/material";
import React from "react";

const FeedbackCard = () => {
  return (
    <Grid
      item
      component="main"
      container
      sx={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        mt: "20px",
        gap: "20px",
        // padding: "10px 25px",
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
        }}
      >
        <Typography alignItems="center" sx={{ fontWeight: "bold" }}>
          Go for
        </Typography>
        <Typography
          // variant="contained"
          sx={{
            bgcolor: "#9B361A",
            borderRadius: "10px",
            color: "#fff",
            textTransform: "uppercase",
            padding: "10px 20px",
            fontWeight: "bold",

            "&:hover": {
              bgcolor: "#7B341A",
            },
          }}
        >
          100 kg
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          next time you squat at
        </Typography>
        <Typography
          sx={{
            bgcolor: "#56A278",
            borderRadius: "10px",
            color: "#fff",
            textTransform: "uppercase",
            padding: "10px 20px",
            fontWeight: "bold",
            "&:hover": {
              bgcolor: "#36A278",
            },
          }}
        >
          RPE 8
        </Typography>
        <Typography>
          <ListItem> 4 X 10</ListItem>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FeedbackCard;
