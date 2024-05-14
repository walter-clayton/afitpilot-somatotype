import React, { useState } from "react";
import RPEChart from "../../image/RPE-Chart.png";
import axios from "axios";
import { Grid, Typography, Button } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const emojis = ["😆", "😋", "😊", "🙂", "😉", "🤨", "😪", "😥", "😭", "🤮"];
const colors = [
  "#5ce1e6",
  "#37b6fe",
  "#37b6fe",
  "#7dd957",
  "#7dd957",
  "#7dd957",
  "#ffde59",
  "#ffde59",
  "#fe904c",
  "#fe1616",
];

const RPEScore = () => {
  const [showImage, setShowImage] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = async (num: number, emoji: string, colors: string) => {
    try {
      console.log("Sending POST request to backend...");

      const response = await axios.post(process.env.REACT_APP_RPEPOST_URL!, {
        emoji: emoji,
        numeroClique: num,
        colors: colors,
      });

      console.log("Response from backend:", response);

      if (response.status !== 201) {
        console.error("Error from server:", response.data);
      } else {
        console.log(`RPE data for ${emoji} clicked`);
        handleOpen();
      }
    } catch (error) {
      console.error("Error saving RPE data:", error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "#fff",
        position: "relative",
        margin: -10, // Reset margin
        padding: 100, // Reset padding
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Typography variant="h1" align="center" gutterBottom>
          RPE SCORE
        </Typography>
      </Grid>

      <Grid container justifyContent="center">
        {emojis.map((emoji, index) => (
          <Grid key={index} item style={{ textAlign: "center" }}>
            <Typography variant="h3" style={{ fontSize: "3em" }}>
              {emoji}
            </Typography>
            <Button
              variant="contained"
              style={{
                fontSize: "2em",
                color: "black",
                margin: "10px",
                padding: "0px 20px 0px 20px",
                backgroundColor: colors[index],
                borderRadius: "15px",
              }}
              onClick={() => handleClick(index + 1, emoji, colors[index])}
            >
              {index + 1}
            </Button>
          </Grid>
        ))}
      </Grid>

      <Button
        startIcon={<ListAltIcon />}
        style={{
          position: "absolute",
          right: "20px",
          bottom: "300px",
          color: "#fff",
          padding: "10px 50px 10px 50px",
          borderRadius: "40px",
          backgroundColor: "RGB(108, 77, 123)",
        }}
        onClick={() => setShowImage(true)}
      >
        RPE Chart
      </Button>

      {showImage && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "black",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              src={RPEChart}
              alt="RPE Chart"
              style={{
                maxWidth: "90vw", // Maximum width of 90% of viewport width
                maxHeight: "90vh", // Maximum height of 90% of viewport height
              }}
            />
            <Button
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",

                color: "white",
                borderRadius: "50%",
              }}
              onClick={() => setShowImage(false)}
            >
              X
            </Button>
          </div>
        </div>
      )}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="You have registered your score!"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default RPEScore;
