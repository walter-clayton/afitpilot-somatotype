import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Button, Typography } from "@mui/material/";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CounterShare from "./CounterShare";
import { useNavigate } from "react-router-dom";
import Rectangle from '../image/Mountain.svg'

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
const heading = {
  "@media (max-width:600px)": {
    fontSize: "27px",
    lineHeight: "35px",
    margin: "30px 0px",
    marginTop: 0
  },

};

const TypesPage = () => {
  const navigate = useNavigate();
  const Endomorph = [
    {
      image: "manu-tribesman",
      bodyType: 'Balanced endomorph',
      TypeCode: "BEn",
      linkToPage: "/Balanced-endomorph",
      description: "Endomorphy is dominant and mesomorphy and ectomorphy are equal(or do not differ by more than one half unit)."
    },
    {
      image: "manu-tribesman",
      bodyType: 'Mesomorphic endomorph ',
      TypeCode: "MEn",
      linkToPage: "/Balanced-endomorph",
      description: " Endomorphy is dominant and mesomorphy is greater than ectomorphy.",
    },
    {
      image: "manu-tribesman",
      bodyType: ' Mesomorph-endomorph',
      TypeCode: "M-En",
      linkToPage: "/Balanced-endomorph",
      description: " Endomorphy and mesomorphy are equal(or do not differ by more than one half unit),and ectomorphy is smaller.",
    },
  ];
  const Mesomorph = [
    {
      image: "manu-tribesman",
      bodyType: 'Endomorphic mesomorph',
      TypeCode: "EnM",
      linkToPage: "/Balanced-endomorph",
      description: "Mesomorphy is dominant and endomorphy is greater than ectomorphy "
    },
    {
      image: "manu-tribesman",
      bodyType: 'Balanced mesomorph',
      TypeCode: "BM",
      linkToPage: "/Balanced-endomorph",
      description: " Mesomorphy is dominant, endomorph and ectomorphy are less and equal(or do not differ by more than one-half unit.)      ",
    },
    {
      image: "manu-tribesman",
      bodyType: 'Ectomorphic mesomorph ',
      TypeCode: "EcM",
      linkToPage: "/Balanced-endomorph",
      description: "Mesomorphy is dominant,and ectomorphy is greater than endomorphy.",
    },
    {
      image: "manu-tribesman",
      bodyType: 'Mesomorph-ectomorph',
      TypeCode: "M-Ec",
      linkToPage: "/Balanced-endomorph",
      description: "Mesomorphy and ectomorphy are equal(or do not differ by more than one-half unit); and endomorphy is lower.",
    },
  ];
  const Ectomorphy = [
    {
      image: "manu-tribesman",
      bodyType: 'Mesomorphic ectomorph ',
      TypeCode: "MEc",
      linkToPage: "/Balanced-endomorph",
      description: "Ectomorphy is dominant;and mesomorphy is greater than endomorphy."
    },
    {
      image: "manu-tribesman",
      bodyType: 'Balanced ectomorph',
      TypeCode: "BEc",
      linkToPage: "/Balanced-endomorph",
      description: "Ectomorphy is dominant;endomorphy and mesomorphy are equal and lower(or do not differ by more than one-half unit).",
    },
    {
      image: "manu-tribesman",
      bodyType: 'Endomorphic ectomorph ',
      TypeCode: "EnEc",
      linkToPage: "/Balanced-endomorph",
      description: "Ectomorphy is dominant;and endomorphy is greater than mesomorphy.",
    },
  ];
  const Neutral = [
    {
      image: "manu-tribesman",
      bodyType: 'Endomorph-ectomorph',
      TypeCode: "En-Ec",
      linkToPage: "/Balanced-endomorph",
      description: "Endomorphy and ectomorphy are equal (or do not differ by more than one-half unit);and mesomorphy is lower."
    },
    {
      image: "manu-tribesman",
      bodyType: 'Ectomorphic endomorph',
      TypeCode: "EcEn ",
      linkToPage: "/Balanced-endomorph",
      description: "Endomorphy is dominant;and ectomorphy is greater than mesomorphy.",
    },
    {
      image: "manu-tribesman",
      bodyType: 'Central',
      TypeCode: "Central",
      linkToPage: "/Balanced-endomorph",
      description: "No component differ by more than one unit from the other two,and consists of ratings of 2,3 or 4.      ",
    },
  ];

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
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography component="h1" variant="h1"
              sx={{
                color: "black",
                textAlign: "center",
                fontSize: "45px",
                margin: '30px 0px',
                fontWeight: 700,
                lineHeight: "58.5px",
              }}
            >
              <Box sx={heading}>
                Somatotypes Categories
              </Box>
            </Typography>
            <Button variant="contained"
              sx={{
                borderRadius: "40px",
                fontSize: "18px",
                lineHeight: "30px",
                backgroundColor: "RGB(108, 77, 123)",
                padding: "14px 40px",
                fontWeight: 600,
                textAlign: 'center',
                textTransform: 'initial',
                marginTop: 0,
                "&.MuiButtonBase-root:hover": { bgcolor: "RGB(108, 77, 123)" },
              }}
              onClick={() => {
                navigate('/test');
              }}
            >
              Find your Types <ArrowForwardSharpIcon />
            </Button>
          </Box>
        </Grid>
      </Grid>
      <ThemeProvider theme={theme}>
        <Box sx={{ mb: -1 }}>
          <img
            src={Rectangle}
            alt="manu tribesman"
            style={{ width: "100%", }}
          />
        </Box>

        <Box sx={{ width: "100%", backgroundColor: "#e7dfea", }}>
          <Typography variant="h2" sx={{ color: "white", textAlign: "center" }}>
            Endomorph
          </Typography>
          <Grid container spacing={2}
            direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
          >
            {Endomorph.map((step, index) =>
              <Grid item md={4} lg={4} xl={4} sx={{ textAlign: "center", marginTop: 10 }}
                onClick={() => {
                  navigate(step.linkToPage);
                }}>
                <img
                  src={require('../image/' + step.image + '.png')}
                  alt="manu tribesman"
                  style={{ width: "100px" }}
                />
                <Typography variant="h1" sx={{ color: "#88619a", textAlign: 'center' }}>
                  {step.bodyType}
                  <Typography variant="body1" sx={{ color: "black" }}>
                    {step.TypeCode}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
                    {step.description}
                  </Typography>
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>
        {/* second grid */}
        <Box sx={{ width: "100%", backgroundColor: "#d6ece3" }}>
          <Typography variant="h2" sx={{ color: "white", textAlign: "center", mb: 2 }} >
            Mesomorph
          </Typography>
          <Grid item container spacing={2}
            direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
          >
            {Mesomorph.map((step, index) =>
              <Grid item md={3} lg={3} xl={3} textAlign={"center"}
                onClick={() => {
                  navigate(step.linkToPage);
                }}>
                <img
                  src={require('../image/' + step.image + '.png')}
                  alt="manu tribesman"
                  style={{ width: "100px" }}
                />
                <Typography variant="h1" sx={{ color: "#33a474", textAlign: "center" }}>
                  {step.bodyType}
                  <Typography variant="body1" sx={{ color: "black" }}>
                    {step.TypeCode}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
                    {step.description}
                  </Typography>
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>
        {/* third grid */}
        <Box sx={{ width: "100%", backgroundColor: "#f9eed7" }}>
          <Typography variant="h2" sx={{ color: "white", textAlign: "center", mb: 2 }}>
            Ectomorphy
          </Typography>
          <Grid item
            container
            spacing={2}
            direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
          >
            {Ectomorphy.map((step, index) =>
              <Grid item md={4} lg={4} xl={4} sx={{ textAlign: "center", marginTop: 10 }}
                onClick={() => {
                  navigate(step.linkToPage);
                }}>
                <img
                  src={require('../image/' + step.image + '.png')}
                  alt="manu tribesman"
                  style={{ width: "100px" }}
                />
                <Typography variant="h1" sx={{ color: "#e4ae3a", textAlign: "center" }}>
                  {step.bodyType}
                  <Typography variant="body1" sx={{ color: "black" }}>
                    {step.TypeCode}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
                    {step.description}
                  </Typography>
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>
        {/* fourth grid */}
        <Box sx={{ width: "100%", backgroundColor: "#d9eaf0" }}>
          <Typography variant="h2" sx={{ color: "white", textAlign: "center", mb: 2 }} >
            Neutral
          </Typography>
          <Grid item container spacing={2}
            direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
          >
            {Neutral.map((step, index) =>
              <Grid item md={4} lg={4} xl={4} sx={{ textAlign: "center", marginTop: 10 }}
                onClick={() => {
                  navigate(step.linkToPage);
                }}>
                <img
                  src={require('../image/' + step.image + '.png')}
                  alt="manu tribesman"
                  style={{ width: "100px" }}
                />
                <Typography variant="h1" sx={{ color: "#4298b4", textAlign: "center" }}>
                  {step.bodyType}
                  <Typography variant="body1" sx={{ color: "black" }}>
                    {step.TypeCode}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "black", px: 5 }}>
                    {step.description}
                  </Typography>
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>
        <CounterShare />
      </ThemeProvider>
    </Box>
  );
};

export default TypesPage;
