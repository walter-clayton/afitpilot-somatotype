import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Button, Typography } from "@mui/material/";
import Stack from "@mui/material/Stack";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import sitting from "../image/sitting-2.svg";
import manuTribesManBackground from "../image/manu-tribesman-with-background.png";
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
                sx={{
                  borderRadius: "40px", backgroundColor: "RGB(51, 164, 116)", padding: "14px 40px", fontSize: "18px", fontWeight: 600, lineHeight: "30px", textAlign: "center", textTransform: "initial", fontStyle: 'normal', "&.MuiButtonBase-root:hover": { bgcolor: "RGB(51, 164, 116)" },
                }}
                variant="contained"
                onClick={() => {
                  navigate("/Types");
                  window.scrollTo(0, 0);
                }}
              >
                Somatotypes
              </Button>
              <Button sx={{ color: "RGB(66, 152, 180)", fontSize: "14px", lineHeight: "26px", fontWeight: 700, padding: "0px" }} variant="text" onClick={() => { }}>
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
            <img
              src={manuTribesManBackground}
              alt="Manu Tribesman with background"
              style={{ width: "50%" }}
            />
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
                sx={{
                  borderRadius: "40px", backgroundColor: "RGB(52, 121, 144)", padding: "14px 40px", fontWeight: 600, fontSize: "18px", lineHeight: "30px", textAlign: "start", "&.MuiButtonBase-root:hover": { bgcolor: "RGB(52, 121, 144)" }
                }}
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
