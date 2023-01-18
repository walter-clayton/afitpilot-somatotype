import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Button, Typography, useMediaQuery } from "@mui/material/";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import HomeTraining from "../../image/HomeTraining.svg";
import TypeFemale from "../../image/TypeFemale.svg";
import TypeMale from "../../image/TypeMale.svg";
import Nutrition from "../../image/Nutrition.svg";
import compare from "../../image/compare.svg";
import Optimise from "../../image/Optimise.svg";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WhitePurpleRectangle from "../../image/WhitePurpleRectangle.svg";
import PurpleGreenRectangle from "../../image/PurpleGreenRectangle.svg";
import GreenBlueRectangle from "../../image/GreenBlueRectangle.svg";
import BlueYellowRectangle from "../../image/BlueYellowRectangle.svg";
import YellowGreyRectangle from "../../image/YellowGreyRectangle.svg";

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
      <Box sx={{ mb: -1, marginTop: 8 }}>
        <img src={WhitePurpleRectangle} alt="" style={{ width: "100%" }} />
      </Box>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{ backgroundColor: "#DCD0E1", padding: 4 }}
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
                  color: "#6C4D7B",
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  lineHeight: "26px",
                  padding: 0,
                  flexGrow: 1,
                }}
              >
                Types
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
                Understand
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
                In our descriptions you’ll learn about different body types.
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
                    backgroundColor: "#6C4D7B",
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
                      : "0%",
                    // minWidth: xxSmall ? "182px" : "225px",
                    paddingY: "14px",
                    paddingRight: xxSmall ? "23px" : "46px",
                    paddingLeft: xxSmall ? "23px" : "46px",
                    fontSize: "18px",
                    maxHeight: "60px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    textAlign: "center",
                    textTransform: "initial",
                    fontStyle: "normal",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#6C4D7B",
                    },
                  }}
                  variant="contained"
                  onClick={() => {
                    navigate("/types");
                    window.scrollTo(0, 0);
                  }}
                >
                  Somatotypes
                </Button>
              </Grid>
              <Grid item xs={small ? 12 : 5}>
                <Button
                  sx={{
                    color: "#6C4D7B",
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
              flexDirection: medium
                ? small
                  ? extraSmall
                    ? "column"
                    : "column"
                  : "row"
                : "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "25px",
            }}
          >
            {" "}
            <img
              src={TypeMale}
              alt="Male Types"
              style={{
                maxHeight: "600px",
                width: medium ? "75%" : "",
              }}
            />
            <img
              src={TypeFemale}
              alt="Female Types"
              style={{
                maxHeight: "600px",
                width: medium ? "75%" : "",
              }}
            />
          </Box>
        </Grid>
      </Grid>
      {/* second grid */}
      <Box sx={{ mb: -1, mt: "-1px" }}>
        <img src={PurpleGreenRectangle} alt="" style={{ width: "100%" }} />
      </Box>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{ backgroundColor: "#D5E8DD", padding: 4 }}
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
              src={Nutrition}
              alt="HomeFeed"
              style={{
                width: medium ? "90%" : "",
                maxHeight: "600px",
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
                  color: "#56A278",
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  lineHeight: "26px",
                  padding: 0,
                }}
              >
                Nutrition Programs
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
                Feed
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
                Follow a curated nutrition program to improve your somatotype.
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
                    backgroundColor: "#56A278",
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
                    // minWidth: xxSmall ? "182px" : "225px",
                    paddingY: "14px",
                    paddingRight: xxSmall ? "23px" : "46px",
                    paddingLeft: xxSmall ? "23px" : "46px",
                    fontSize: "18px",
                    maxHeight: "60px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    textAlign: "center",
                    textTransform: "initial",
                    fontStyle: "normal",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#56A278",
                    },
                  }}
                  variant="contained"
                  onClick={() => {
                    navigate("/Nutrition");
                    window.scrollTo(0, 0);
                  }}
                >
                  Nutrition
                </Button>
              </Grid>
              <Grid item xs={small ? 12 : 5}>
                <Button
                  sx={{
                    color: "#56A278",
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
      </Grid>
      {/* 3 grid */}
      <Box sx={{ mb: -1, mt: "-1px" }}>
        <img src={GreenBlueRectangle} alt="" style={{ width: "100%" }} />
      </Box>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{ backgroundColor: "#CFE5EC", padding: 4 }}
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
        >
          <Grid item xs={12}>
            <ThemeProvider theme={theme}>
              <Typography
                variant="body1"
                sx={{
                  color: "#1774A3",
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  lineHeight: "26px",
                  padding: 0,
                }}
              >
                Training Programs
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
                Build
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
                Follow a tailored training program to increase muscle mass and
                definition.
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
                    backgroundColor: "#1774A3",
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
                    // minWidth: xxSmall ? "182px" : "225px",
                    paddingY: "14px",
                    paddingRight: xxSmall ? "23px" : "46px",
                    paddingLeft: xxSmall ? "23px" : "46px",
                    fontSize: "18px",
                    maxHeight: "60px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    textAlign: "center",
                    textTransform: "initial",
                    fontStyle: "normal",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#1774A3",
                    },

                    // textAlign: "start",
                  }}
                  variant="contained"
                  onClick={() => {
                    navigate("/Training");
                    window.scrollTo(0, 0);
                  }}
                >
                  Training
                </Button>
              </Grid>
              <Grid item xs={small ? 12 : 5}>
                <Button
                  sx={{
                    color: "#1774A3",
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
              src={HomeTraining}
              alt="Training"
              style={{
                maxHeight: "600px",
                width: medium ? "90%" : "",
              }}
            />
          </Box>
        </Grid>
      </Grid>
      {/* 4 grid */}
      <Box sx={{ mb: -1, mt: "-1px" }}>
        <img src={BlueYellowRectangle} alt="" style={{ width: "100%" }} />
      </Box>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{ backgroundColor: "#F2E2BF", mt: "-10px", padding: 4 }}
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
              src={Optimise}
              alt="Optimise"
              style={{
                maxHeight: "600px",
                width: medium ? "90%" : "",
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
                  color: "#DCB051",
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  lineHeight: "26px",
                  padding: 0,
                }}
              >
                Sport specific programs
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
                Optimise
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
                Follow a sport specific training program to gain a competitive
                advantage.
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
                    backgroundColor: "#DCB051",
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
                    // minWidth: xxSmall ? "182px" : "225px",
                    paddingY: "14px",
                    paddingRight: xxSmall ? "23px" : "46px",
                    paddingLeft: xxSmall ? "23px" : "46px",
                    fontSize: "18px",
                    maxHeight: "60px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    textTransform: "initial",
                    fontStyle: "normal",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#DCB051",
                    },

                    // textAlign: "start",
                  }}
                  variant="contained"
                  onClick={() => {
                    navigate("/Training");
                    window.scrollTo(0, 0);
                  }}
                >
                  Training
                </Button>
              </Grid>
              <Grid item xs={small ? 12 : 5}>
                <Button
                  sx={{
                    color: "#DCB051",
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
      </Grid>
      <Box sx={{ mb: -1, mt: "-1px" }}>
        <img src={YellowGreyRectangle} alt="" style={{ width: "100%" }} />
      </Box>
      <Grid
        container
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{ backgroundColor: "#F5F5F6", padding: 4 }}
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
        >
          <Grid item xs={12}>
            <ThemeProvider theme={theme}>
              <Typography
                mt={1.5}
                variant="h2"
                sx={{
                  fontSize: "46px",
                  margin: "0px 0px 10px",
                  fontWeight: 600,
                }}
              >
                Compare
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
                Discover different tribes, sports and occupations.
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
                    backgroundColor: "#FFFFFF",
                    color: "#000000",
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
                    paddingRight: xxSmall ? "23px" : "46px",
                    paddingLeft: xxSmall ? "23px" : "46px",
                    fontSize: "18px",
                    maxHeight: "60px",
                    fontWeight: 600,
                    lineHeight: "30px",
                    textAlign: "center",
                    textTransform: "initial",
                    fontStyle: "normal",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#FFFFFF",
                    },

                    // textAlign: "start",
                  }}
                  variant="contained"
                  onClick={() => {
                    navigate("/Library");
                    window.scrollTo(0, 0);
                  }}
                >
                  Library
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
              src={compare}
              alt="Compare"
              style={{
                maxHeight: "600px",
                width: medium ? "90%" : "",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CallToAction;
