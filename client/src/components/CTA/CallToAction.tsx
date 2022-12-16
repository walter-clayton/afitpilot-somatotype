import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Button, Typography, useMediaQuery } from "@mui/material/";
import Stack from "@mui/material/Stack";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import sitting from "../image/sitting-2.svg";
import manuTribesManBackground from "../image/manu-tribesman-with-background.png";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const CallToAction = () => {
  const medium = useMediaQuery("(max-width:899px)");
  const small = useMediaQuery("(max-width:599px)");
  const extraSmall = useMediaQuery("(max-width:449px)");
  const xxSmall = useMediaQuery("(max-width:399px)");
  const navigate = useNavigate();
  const theme = createTheme();
  theme.typography.h2 = {
    "@media (max-width:600px)": {
      fontSize: "34px",
    },
  };
  return (
    <Box>
      <CssBaseline />
      <Grid
        container
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{ backgroundColor: "#f6f6f7", marginTop: 8, padding: 4 }}
      >
        <Grid
          item
          container
          xs={small ? 12 : 6}
          sx={{ mx: small ? "20px" : "0" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          order={small ? 2 : 1}
        >
          <Grid item xs={12}>
            <ThemeProvider theme={theme}>
              <Typography
                variant="body1"
                sx={{
                  color: "RGB(51, 164, 116)",
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  lineHeight: "26px",
                  padding: 0,
                  flexGrow: 1,
                }}
              >
                Somatotypes
              </Typography>
              <Typography
                mt={1.5}
                component="h2"
                variant="h2"
                sx={{
                  fontSize: "46px",
                  margin: "0px 0px 10px",
                  fontWeight: 600,
                }}
              >
                Understand yourself
              </Typography>
              <Typography
                mt={1.5}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontSize: "18px",
                  lineHeight: "30px",
                  marginBottom: "30px",
                  fontWeight: 400,
                }}
                variant="body1"
              >
                In our free type descriptions you’ll learn what body shape you
                have
              </Typography>
            </ThemeProvider>
            <Grid
              container
              mt={1}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={small ? "center" : "space-between"}
            >
              <Grid item xs={small ? 12 : 5}>
                <Button
                  sx={{
                    borderRadius: "40px",
                    boxSizing: "border-box",
                    backgroundColor: "RGB(51, 164, 116)",
                    width: small ? (extraSmall ? "80%" : "65%") : "100%",
                    mx: small ? (extraSmall ? "10%" : "17.5%") : "0",
                    minWidth: "160px",
                    padding: "14px 40px",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    textAlign: "center",
                    textTransform: "initial",
                    fontStyle: "normal",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "RGB(51, 164, 116)",
                    },
                  }}
                  variant="contained"
                  onClick={() => {
                    navigate("/Types");
                    window.scrollTo(0, 0);
                  }}
                >
                  Somatotypes
                </Button>
              </Grid>
              <Grid item xs={small ? 12 : 5}>
                <Button
                  sx={{
                    color: "RGB(66, 152, 180)",
                    boxSizing: "border-box",
                    fontSize: "14px",
                    lineHeight: "26px",
                    fontWeight: 700,
                    padding: "14px 0px",
                    paddingLeft: small ? "6px" : "0px",
                    width: small ? (extraSmall ? "80%" : "65%") : "100%",
                    mx: small ? (extraSmall ? "10%" : "17.5%") : "0",
                    maxHeight: "60px",
                    minWidth: "160px",
                  }}
                  variant="text"
                  onClick={() => {}}
                >
                  Explore Theory <ArrowForwardSharpIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={small ? 12 : 5} order={small ? 1 : 2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={manuTribesManBackground}
              alt="Manu Tribesman with background"
              style={{
                maxWidth: "650px",
                width: medium
                  ? small
                    ? extraSmall
                      ? "95%"
                      : "80%"
                    : "65%"
                  : "80%",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{ backgroundColor: "#f6f6f7", marginTop: 8, padding: 4 }}
      >
        <Grid item xs={small ? 12 : 5}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "25px",
            }}
          >
            <img
              src={sitting}
              alt="sitting girl"
              style={{
                maxHeight: "650px",
                width: medium
                  ? small
                    ? extraSmall
                      ? "65%"
                      : "60%"
                    : "55%"
                  : "60%",
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          container
          xs={small ? 12 : 6}
          sx={{ mx: small ? "20px" : "0" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Grid item xs={12}>
            <ThemeProvider theme={theme}>
              <Typography
                variant="body1"
                sx={{
                  color: "RGB(66, 152, 180)",
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  lineHeight: "26px",
                  padding: 0,
                }}
              >
                Teams
              </Typography>
              <Typography
                mt={1.5}
                variant="h2"
                sx={{
                  fontSize: "46px",
                  margin: "0px 0px 10px",
                  fontWeight: 600,
                }}
              >
                Understand your team better
              </Typography>
              <Typography
                mt={1}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontSize: "18px",
                  lineHeight: "30px",
                  margin: "0px 0px 30px",
                  fontWeight: 400,
                }}
                variant="body1"
              >
                Understand your team better with our Somatotype Assessment.
                Improve communication, create harmony, and help team members
                develop their individual strengths. Works for teams of all
                sizes.
              </Typography>
            </ThemeProvider>
            <Grid
              container
              mt={1}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={small ? "center" : "start"}
            >
              <Grid item xs={small ? 12 : 5}>
                <Button
                  sx={{
                    borderRadius: "40px",
                    boxSizing: "border-box",
                    backgroundColor: "RGB(52, 121, 144)",
                    width: small
                      ? extraSmall
                        ? xxSmall
                          ? "100%"
                          : "80%"
                        : "70%"
                      : "100%",
                    mx: small
                      ? extraSmall
                        ? xxSmall
                          ? "0%"
                          : "10%"
                        : "15%"
                      : "0",
                    minWidth: xxSmall ? "182px" : "225px",
                    paddingY: "14px",
                    paddingRight: xxSmall ? "20px" : "40px",
                    paddingLeft: xxSmall ? "23px" : "46px",
                    fontSize: "18px",
                    maxHeight: "60px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    textAlign: "center",
                    textTransform: "initial",
                    fontStyle: "normal",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "RGB(52, 121, 144)",
                    },

                    // textAlign: "start",
                  }}
                  variant="contained"
                  onClick={() => {
                    navigate("/Test");
                    window.scrollTo(0, 0);
                  }}
                >
                  Take the Test <ArrowForwardSharpIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CallToAction;
