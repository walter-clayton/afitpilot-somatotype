import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Button } from "@mui/material/";
import { Typography, Container } from "@mui/material/";
import Stack from "@mui/material/Stack";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bodytype1 from "../image/bodytype1.svg";
import bodytype2 from "../image/manu-tribesman.png";
import CounterShare from "./CounterShare";

const theme = createTheme();
theme.typography.h1 = {
  "@media (min-width:600px)": {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
};
const TypesPage = () => {
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <Grid
        container
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginBottom: 4,
        }}
      >
        <Grid xs={12} md={12} lg={12} sm={12}>
          <Box
            sx={{
              marginTop: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: "black",
                textAlign: "center",
                fontSize: "44px",
                mb: 2,
              }}
            >
              Somatotypes Categories
            </Typography>
            <Stack>
              <Button
                sx={{
                  borderRadius: "30px",
                  backgroundColor: "purple",
                  padding: 2,
                }}
                variant="contained"
              >
                Find your types <ArrowForwardSharpIcon />
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "100%", backgroundColor: "#e7dfea" }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{ color: "white", textAlign: "center", mb: 0.5 }}
          >
            Endomorph
          </Typography>
          <Grid
            container
            spacing={2}
            direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
          >
            <Grid item md={4} lg={4} xl={4}>
              <Box sx={{ textalign: "center" }}>
                <img src={bodytype1} alt="" />
              </Box>
              <Typography variant="h1" sx={{ color: "#88619a" }}>
                Balanced endomorph
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  Endomorphy is dominant and mesomorphy and ectomorphy are
                  equal(or do not differ by more than one half unit).
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={4} lg={4} xl={4}>
              <Typography variant="h1" sx={{ color: "#88619a" }}>
                <img src={bodytype1} alt="" />
                Mesomorphic endomorph
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  Endomorphy is dominant and mesomorphy is greater than
                  ectomorphy.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={4} lg={4} xl={4}>
              <Typography variant="h1" sx={{ color: "#88619a" }}>
                <img src={bodytype1} alt="" />
                Mesomorph-endomorph
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  Endomorphy and mesomorphy are equal(or do not differ by more
                  than one half unit),and ectomorphy is smaller.
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* second grid */}
        <Box sx={{ width: "100%", backgroundColor: "#d6ece3" }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{ color: "white", textAlign: "center", mb: 2 }}
          >
            Mesomorph
          </Typography>
          <Grid
            container
            spacing={2}
            direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
          >
            <Grid item md={3} lg={3} xl={3}>
              <Typography variant="h1" sx={{ color: "#33a474" }}>
                <img src={bodytype1} alt="" />
                Endomorphic mesomorph
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  Mesomorphy is dominant and endomorphy is greater than
                  ectomorphy
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={3} lg={3} xl={3}>
              <Typography variant="h1" sx={{ color: "#33a474" }}>
                <img
                  src={bodytype2}
                  alt="manu tribesman"
                  style={{ width: "100px" }}
                />
                Balanced mesomorph
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  Mesomorphy is dominant, endomorph and ectomorphy are less and
                  equal(or do not differ by more than one-half unit.)
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={3} lg={3} xl={3}>
              <Typography variant="h1" sx={{ color: "#33a474" }}>
                <img src={bodytype1} alt="" />
                Ectomorphic mesomorph
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  Mesomorphy is dominant,and ectomorphy is greater than
                  endomorphy.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={3} lg={3} xl={3}>
              <Typography variant="h1" sx={{ color: "#33a474" }}>
                <img src={bodytype1} alt="" />
                Mesomorph-ectomorph
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  Mesomorphy and ectomorphy are equal(or do not differ by more
                  than one-half unit); and endomorphy is lower.
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* third grid */}
        <Box sx={{ width: "100%", backgroundColor: "#f9eed7" }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{ color: "white", textAlign: "center", mb: 2 }}
          >
            Ectomorphy
          </Typography>
          <Grid
            container
            spacing={2}
            direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
          >
            <Grid item md={3} lg={3} xl={3}>
              <Typography variant="h1" sx={{ color: "#e4ae3a" }}>
                <img src={bodytype1} alt="" />
                Mesomorphic ectomorph
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  Ectomorphy is dominant;and mesomorphy is greater than
                  endomorphy.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={3} lg={3} xl={3}>
              <Typography variant="h1" sx={{ color: "#e4ae3a" }}>
                <img src={bodytype1} alt="" />
                Balanced ectomorph
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  Ectomorphy is dominant;endomorphy and mesomorphy are equal and
                  lower(or do not differ by more than one-half unit).
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={3} lg={3} xl={3}>
              <Typography variant="h1" sx={{ color: "#e4ae3a" }}>
                <img src={bodytype1} alt="" />
                Endomorphic ectomorph
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  Ectomorphy is dominant;and endomorphy is greater than
                  mesomorphy.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={3} lg={3} xl={3}>
              <Typography variant="h1" sx={{ color: "#e4ae3a" }}>
                <img src={bodytype1} alt="" />
                Endomorphic ectomorph
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  Ectomorphy is dominant;and endomorphy is greater than
                  mesomorphy.
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* fourth grid */}
        <Box sx={{ width: "100%", backgroundColor: "#d9eaf0" }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{ color: "white", textAlign: "center", mb: 2 }}
          >
            Neutral
          </Typography>
          <Grid
            container
            spacing={2}
            direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
          >
            <Grid item md={4} lg={4} xl={4}>
              <Typography variant="h1" sx={{ color: "#4298b4" }}>
                <img src={bodytype1} alt="" />
                Endomorph-ectomorph
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  Endomorphy and ectomorphy are equal (or do not differ by more
                  than one-half unit);and mesomorphy is lower.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={4} lg={4} xl={4}>
              <Typography variant="h1" sx={{ color: "#4298b4" }}>
                <img src={bodytype1} alt="" />
                Ectomorphic endomorph
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  Endomorphy is dominant;and ectomorphy is greater than
                  mesomorphy.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={4} lg={4} xl={4}>
              <Typography variant="h1" sx={{ color: "#4298b4" }}>
                <img src={bodytype1} alt="" />
                Central
                <Typography variant="subtitle1" sx={{ color: "black" }}>
                  No component differ by more than one unit from the other
                  two,and consists of ratings of 2,3 or 4.
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <CounterShare />
      </ThemeProvider>
    </Container>
  );
};

export default TypesPage;
