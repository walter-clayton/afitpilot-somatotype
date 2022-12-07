import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Button, Typography } from "@mui/material/";
import Stack from "@mui/material/Stack";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import sitting from "../image/sitting-2.svg";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <CssBaseline />
      <Grid item container sx={{ backgroundColor: "#f6f6f7", marginTop: 8 }}>
        <Grid item xs={12} md={5} lg={6} sm={12}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              marginRight: "20px",
              marginLeft: "7px",
            }}
          >
            <Typography component="h1" variant="h4" sx={{ color: "blue" }}>
              Somatotypes
            </Typography>
            <Typography mt={1.5} component="h4" variant="h4">
              Understand yourself
            </Typography>
            <Typography
              mt={1.5}
              sx={{ display: "flex", justifyContent: "flex-end" }}
              variant="body1"
            >
              In our free type descriptions you’ll learn what body shape you
              have
            </Typography>
            <Stack mt={1.5} spacing={2} direction="row">
              <Button
                sx={{ borderRadius: "20px", backgroundColor: "green" }}
                variant="contained"
                onClick={() => {
                  navigate("/Types");
                  window.scrollTo(0, 0);
                }}
              >
                Somatotypes
              </Button>
              <Button sx={{ color: "blue" }} variant="text" onClick={() => { }}>
                Explore Theory <ArrowForwardSharpIcon />
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={7} lg={6} sm={12}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={sitting} alt="sitting girl" />
          </Box>
        </Grid>
      </Grid>
      <Grid item container sx={{ backgroundColor: "#f6f6f7", marginTop: 8 }}>
        <Grid item xs={12} md={7} lg={6} sm={12}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={sitting} alt="sitting girl" />
          </Box>
        </Grid>
        <Grid item xs={12} md={5} lg={6} sm={12}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              marginRight: "20px",
              marginLeft: "7px",
            }}
          >
            <Typography component="h1" variant="h4" sx={{ color: "blue" }}>
              Teams
            </Typography>
            <Typography mt={1.5} component="h4" variant="h4">
              Understand your team better
            </Typography>
            <Typography
              mt={1.5} variant="body1"
              sx={{ display: "flex", justifyContent: "flex-end" }}>
              Understand your team better with our Somatotype Assessment.
              Improve communication, create harmony, and help team members
              develop their individual strengths. Works for teams of all sizes.
            </Typography>
            <Stack mt={1.5} spacing={2} direction="row">
              <Button
                sx={{ borderRadius: "20px", backgroundColor: "green" }}
                variant="contained"
                onClick={() => {
                  navigate("/Test");
                  window.scrollTo(0, 0);
                }}
              >
                Take the Test <ArrowForwardSharpIcon />
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CallToAction;
