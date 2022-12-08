import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Button, Typography } from "@mui/material/";
import Stack from "@mui/material/Stack";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bodytype2 from "../image/manu-tribesman.png";
import CounterShare from "./CounterShare";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
theme.typography.h1 = {
  "@media (min-width:600px)": {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },

};
theme.typography.h2 = {
  "@media (max-width:600px)": {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "5rem",
  },

};
const TypesPage = () => {
  const navigate = useNavigate();
  return (
    <Box>
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
        <Box sx={{ width: "100%", backgroundColor: "#e7dfea", }}>
          <Typography
            component="h2"
            variant="h2"
            sx={{ color: "white", textAlign: "center", }}
          >
            Endomorph
          </Typography>
          <Grid
            container
            spacing={2}
            direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
            onClick={() => {
              navigate("/Balanced-endomorph");
            }}
          >
            <Grid item md={4} lg={4} xl={4} sx={{ textAlign: "center", marginTop: 10 }}>
              <img
                src={bodytype2}
                alt="manu tribesman"
                style={{ width: "100px", }}
              />
              <Typography variant="h1" sx={{ color: "#88619a", textAlign: 'center' }}>
                Balanced endomorph
                <Typography variant="body1" sx={{ color: "black", }}>
                  BEn
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
                  Endomorphy is dominant and mesomorphy and ectomorphy are
                  equal(or do not differ by more than one half unit).
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={4} lg={4} xl={4} sx={{ textAlign: "center", marginTop: 10 }}>
              <img
                src={bodytype2}
                alt="manu tribesman"
                style={{ width: "100px" }}
              />
              <Typography variant="h1" sx={{ color: "#88619a", textAlign: 'center' }}>
                Mesomorphic endomorph
                <Typography variant="body1" sx={{ color: "black", }}>
                  MEn
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
                  Endomorphy is dominant and mesomorphy is greater than
                  ectomorphy.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={4} lg={4} xl={4} sx={{ textAlign: "center", marginTop: 10 }}>
              <img
                src={bodytype2}
                alt="manu tribesman"
                style={{ width: "100px" }}
              />
              <Typography variant="h1" sx={{ color: "#88619a", textAlign: 'center' }}>
                Mesomorph-endomorph
                <Typography variant="body1" sx={{ color: "black", }}>
                  M-En
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
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
            variant="h2"
            sx={{ color: "white", textAlign: "center", mb: 2 }}
          >
            Mesomorph
          </Typography>
          <Grid
            container
            spacing={2}
            direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
            onClick={() => {
              navigate("/Balanced-endomorph");
            }}
          >
            <Grid item md={3} lg={3} xl={3} textAlign={"center"} >
              <img
                src={bodytype2}
                alt="manu tribesman"
                style={{ width: "100px" }}
              />
              <Typography variant="h1" sx={{ color: "#33a474", textAlign: "center" }}>
                Endomorphic mesomorph
                <Typography variant="body1" sx={{ color: "black" }}>
                  EnM
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
                  Mesomorphy is dominant and endomorphy is greater than
                  ectomorphy
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={3} lg={3} xl={3} textAlign={'center'} >
              <img
                src={bodytype2}
                alt="manu tribesman"
                style={{ width: "100px" }}
              />
              <Typography variant="h1" sx={{ color: "#33a474", textAlign: "center", }}>
                Balanced mesomorph
                <Typography variant="body1" sx={{ color: "black", textAlign: 'center' }}>
                  BM
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "black", px: 5, }}>
                  Mesomorphy is dominant, endomorph and ectomorphy are less and
                  equal(or do not differ by more than one-half unit.)
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={3} lg={3} xl={3} textAlign={'center'}>
              <img
                src={bodytype2}
                alt="manu tribesman"
                style={{ width: "100px" }}
              />
              <Typography variant="h1" sx={{ color: "#33a474", textAlign: "center" }}>
                Ectomorphic mesomorph
                <Typography variant="body1" sx={{ color: "black" }}>
                  EcM
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
                  Mesomorphy is dominant,and ectomorphy is greater than
                  endomorphy.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={3} lg={3} xl={3} textAlign={"center"}>
              <img
                src={bodytype2}
                alt="manu tribesman"
                style={{ width: "100px" }}
              />
              <Typography variant="h1" sx={{ color: "#33a474", textAlign: "center" }}>
                Mesomorph-ectomorph
                <Typography variant="body1" sx={{ color: "black" }}>
                  M-Ec
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
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
            variant="h2"
            sx={{ color: "white", textAlign: "center", mb: 2 }}
          >
            Ectomorphy
          </Typography>
          <Grid
            container
            spacing={2}
            direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
            onClick={() => {
              navigate("/Balanced-endomorph");
            }}
          >
            <Grid item md={4} lg={4} xl={4} sx={{ textAlign: "center", marginTop: 10 }}>
              <img
                src={bodytype2}
                alt="manu tribesman"
                style={{ width: "100px" }}
              />
              <Typography variant="h1" sx={{ color: "#e4ae3a", textAlign: "center" }}>
                Mesomorphic ectomorph
                <Typography variant="body1" sx={{ color: "black" }}>
                  MEc
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
                  Ectomorphy is dominant;and mesomorphy is greater than
                  endomorphy.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={4} lg={4} xl={4} sx={{ textAlign: "center", marginTop: 10 }}>
              <img
                src={bodytype2}
                alt="manu tribesman"
                style={{ width: "100px" }}
              />
              <Typography variant="h1" sx={{ color: "#e4ae3a", textAlign: "center" }}>
                Balanced ectomorph
                <Typography variant="body1" sx={{ color: "black" }}>
                  BEc
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
                  Ectomorphy is dominant;endomorphy and mesomorphy are equal and
                  lower(or do not differ by more than one-half unit).
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={4} lg={4} xl={4} sx={{ textAlign: "center", marginTop: 10 }}>
              <img
                src={bodytype2}
                alt="manu tribesman"
                style={{ width: "100px" }}
              />
              <Typography variant="h1" sx={{ color: "#e4ae3a", textAlign: "center" }}>
                Endomorphic ectomorph
                <Typography variant="body1" sx={{ color: "black" }}>
                  EnEc
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
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
            variant="h2"
            sx={{ color: "white", textAlign: "center", mb: 2 }}
          >
            Neutral
          </Typography>
          <Grid
            container
            spacing={2}
            direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
            onClick={() => {
              navigate("/Balanced-endomorph");
            }}
          >
            <Grid item md={4} lg={4} xl={4} sx={{ textAlign: "center", marginTop: 10 }}>
              <img
                src={bodytype2}
                alt="manu tribesman"
                style={{ width: "100px" }}
              />
              <Typography variant="h1" sx={{ color: "#4298b4", textAlign: "center" }}>
                Endomorph-ectomorph
                <Typography variant="body1" sx={{ color: "black" }}>
                  En-Ec
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
                  Endomorphy and ectomorphy are equal (or do not differ by more
                  than one-half unit);and mesomorphy is lower.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={4} lg={4} xl={4} sx={{ textAlign: "center", marginTop: 10 }}>
              <img
                src={bodytype2}
                alt="manu tribesman"
                style={{ width: "100px" }}
              />
              <Typography variant="h1" sx={{ color: "#4298b4", textAlign: 'center' }}>
                Ectomorphic endomorph
                <Typography variant="body1" sx={{ color: "black" }}>
                  EcEn
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
                  Endomorphy is dominant;and ectomorphy is greater than
                  mesomorphy.
                </Typography>
              </Typography>
            </Grid>
            <Grid item md={4} lg={4} xl={4} sx={{ textAlign: "center", marginTop: 10 }}>
              <img
                src={bodytype2}
                alt="manu tribesman"
                style={{ width: "100px" }}
              />
              <Typography variant="h1" sx={{ color: "#4298b4", textAlign: 'center' }}>
                Central
                <Typography variant="body1" sx={{ color: "black" }}>
                  Central
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
                  No component differ by more than one unit from the other
                  two,and consists of ratings of 2,3 or 4.
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <CounterShare />
      </ThemeProvider>
    </Box>
  );
};

export default TypesPage;
