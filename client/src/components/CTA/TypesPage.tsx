import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Button, Typography } from "@mui/material/";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CounterShare from "./CounterShare";
import { useNavigate } from "react-router-dom";
import mesomorpyshape from '../image/mesomorpyshape.png'
import centralshape from '../image/centralshape.png'
import TypesPage1 from "./TypesPage1";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const theme = createTheme();
theme.typography.h1 = {
  "@media (max-width:600px)": {
    fontSize: "1.0 rem",
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
    fontSize: "36px",
    lineHeight: "46px",
    margin: "0px 0px 10px",
    fontWeight: 600,
    textAlign: "center",
  },
  "@media only screen and (min-width: 600px) and (max-width: 1400px)": {
    color: "black",
    textAlign: "center",
    fontSize: "54px",
    marginBottom: "20px",
    lineHeight: "71px",
    fontWeight: 600,
  },
};

const TypesPage = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const Mesomorph = [
    {
      image: "balanced mesomorph",
      bodyType: 'Balanced mesomorph',
      TypeCode: "BM",
      linkToPage: "/Balanced-endomorph",
    },
    {
      image: "ectomorphic mesomorph",
      bodyType: 'Ectomorphic mesomorph ',
      TypeCode: "EcM",
      linkToPage: "/Balanced-endomorph",
    },
    {
      image: "endomorphic mesomorph",
      bodyType: 'Endomorphic mesomorph',
      TypeCode: "EnM",
      linkToPage: "/Balanced-endomorph",
    },
  ];
  const Ectomorph = [
    {
      image: "mesomorphic ectomorph",
      bodyType: 'Mesomorphic ectomorph ',
      TypeCode: "MEc",
      linkToPage: "/Balanced-endomorph",
    },
    {
      image: "balanced ectomorph",
      bodyType: 'Balanced ectomorph',
      TypeCode: "BEc",
      linkToPage: "/Balanced-endomorph",
    },
    {
      image: "endomorphic ectomorph",
      bodyType: 'Endomorphic ectomorph ',
      TypeCode: "EnEc",
      linkToPage: "/Balanced-endomorph",
    },
  ];
  const Endomorph = [
    {
      image: "ectomorphic endomorph",
      bodyType: 'Ectomorphic endomorph',
      TypeCode: "EcEn ",
      linkToPage: "/Balanced-endomorph",
    },
    {
      image: "balanced endomorph",
      bodyType: 'Balanced endomorph',
      TypeCode: "BEn",
      linkToPage: "/Balanced-endomorph",
    },
    {
      image: "mesomorphic endomorph",
      bodyType: 'Mesomorphic endomorph ',
      TypeCode: "MEn",
      linkToPage: "/Balanced-endomorph",
    },
  ];
  const Hybrid = [
    {
      image: "mesomorph ectomorph",
      bodyType: 'Mesomorph-ectomorph',
      TypeCode: "M-Ec",
      linkToPage: "/Balanced-endomorph",
    },
    {
      image: "endomorph ectomorph",
      bodyType: 'Endomorph-ectomorph',
      TypeCode: "En-Ec",
      linkToPage: "/Balanced-endomorph",
    },
    {
      image: "mesomorph endomorph",
      bodyType: 'Mesomorph-endomorph',
      TypeCode: "M-En",
      linkToPage: "/Balanced-endomorph",
    },
  ];
  const Central = [
    {
      image: "central",
      bodyType: 'Central',
      TypeCode: "Central",
      linkToPage: "/Balanced-endomorph",
    },
  ];

  return (
    <Box>
      <CssBaseline />
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginBottom: 4,
        }}>
        <Grid xs={12} md={12} lg={12} sm={12}
          sx={{
            backgroundColor: '#F5F5F6',
            width: "100%",
            mb: 7
          }}>
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "150px"
            }}
          >
            <Typography variant="h1"
              sx={heading}>
              Categories
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
                mb: -6,
                "&.MuiButtonBase-root:hover": { bgcolor: "RGB(108, 77, 123)" },
              }}
              onClick={() => {
                navigate('/test');
              }}
            >
              Take the Test <ArrowForwardSharpIcon />
            </Button>
          </Box>
        </Grid>
        {/* typepage for Categories */}
        <TypesPage1 />
        {/* switch button to show SUBCATEGORIES */}
        <FormControlLabel control={<Switch defaultChecked />}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          label="13 SUBCATEGORIES" />
      </Grid>
      {isChecked &&
        <ThemeProvider theme={theme}>
          <Box sx={{ mb: -2, }}>
            <img
              src={mesomorpyshape}
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ width: "100%", backgroundColor: "#E7CACA", }}>
            <Typography variant="h2" sx={{ color: "white", textAlign: "center" }}>
              Mesomorph
            </Typography>
            <Grid container spacing={2}
              direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
            >
              {Mesomorph.map((step, index) =>
                <Grid item md={4} lg={4} xl={4} sx={{ textAlign: "center", marginTop: 10 }}
                  onClick={() => {
                    navigate(step.linkToPage);
                  }}>
                  <img
                    src={require('../image/' + step.image + '.png')}
                    alt="manu tribesman"
                    style={{ width: "200px", height: '200px' }}
                  />
                  <Typography variant="h1" sx={{ color: "#B76060", textAlign: 'center' }}>
                    {step.bodyType}
                    <Typography variant="body1" sx={{ color: "#000000", fontSize: "18px" }}>
                      {step.TypeCode}
                    </Typography>
                  </Typography>
                </Grid>
              )}
            </Grid>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button variant="contained"
                sx={{
                  borderRadius: "40px",
                  fontSize: "18px",
                  lineHeight: "30px",
                  backgroundColor: "RGB(108, 77, 123)",
                  padding: "14px 30px",
                  fontWeight: 600,
                  textAlign: 'center',
                  textTransform: 'initial',
                  marginTop: 0,
                  mt: 2,
                  mb: -2,
                  "&.MuiButtonBase-root:hover": { bgcolor: "RGB(108, 77, 123)" },
                }}
                onClick={() => {
                  navigate('/test');
                }}
              >
                Take the Test <ArrowForwardSharpIcon />
              </Button>
            </Box>
          </Box>
          {/* second grid */}
          <Box sx={{ width: "100%", backgroundColor: "#F2E2BF" }}>
            <Typography variant="h2" sx={{ color: "white", textAlign: "center", mb: 2, pt: 2 }} >
              Ectomorph
            </Typography>
            <Grid item container spacing={2}
              direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
            >
              {Ectomorph.map((step, index) =>
                <Grid item md={4} lg={4} xl={4} textAlign={"center"}
                  onClick={() => {
                    navigate(step.linkToPage);
                  }}>
                  <img
                    src={require('../image/' + step.image + '.png')}
                    alt="manu tribesman"
                    style={{ width: "200px", height: '200px' }}
                  />
                  <Typography variant="h1" sx={{ color: "#DCB051", textAlign: "center" }}>
                    {step.bodyType}
                    <Typography variant="body1" sx={{ color: "#000000", fontSize: "18px" }}>
                      {step.TypeCode}
                    </Typography>
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
          {/* third grid */}
          <Box sx={{ width: "100%", backgroundColor: "#DCD0E2" }}>
            <Typography variant="h2" sx={{ color: "white", textAlign: "center", mb: 2 }}>
              Endomorph
            </Typography>
            <Grid item
              container
              spacing={2}
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
                    style={{ width: "200px", height: '200px' }}
                  />
                  <Typography variant="h1" sx={{ color: "#6C4D7B", textAlign: "center" }}>
                    {step.bodyType}
                    <Typography variant="body1" sx={{ color: "#000000", fontSize: "18px" }}>
                      {step.TypeCode}
                    </Typography>
                  </Typography>
                </Grid>
              )}
            </Grid>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button variant="contained"
                sx={{
                  borderRadius: "40px",
                  fontSize: "18px",
                  lineHeight: "30px",
                  backgroundColor: "RGB(108, 77, 123)",
                  padding: "14px 30px",
                  fontWeight: 600,
                  textAlign: 'center',
                  textTransform: 'initial',
                  marginTop: 0,
                  mt: 2,
                  mb: -2,
                  "&.MuiButtonBase-root:hover": { bgcolor: "RGB(108, 77, 123)" },
                }}
                onClick={() => {
                  navigate('/test');
                }}
              >
                Take the Test <ArrowForwardSharpIcon />
              </Button>
            </Box>
          </Box>
          {/* fourth grid */}
          <Box sx={{ width: "100%", backgroundColor: "#D5E8DD" }}>
            <Typography variant="h2" sx={{ color: "white", textAlign: "center", mb: 2, pt: 2 }} >
              Hybrid
            </Typography>
            <Grid item container spacing={2}
              direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
            >
              {Hybrid.map((step, index) =>
                <Grid item md={4} sm={12} lg={4} xl={4} sx={{ textAlign: "center", marginTop: 10 }}
                  onClick={() => {
                    navigate(step.linkToPage);
                  }}>
                  <img
                    src={require('../image/' + step.image + '.png')}
                    alt="manu tribesman"
                    style={{ width: "200px", height: '200px' }}
                  />
                  <Typography variant="h1" sx={{ color: "#56A278", textAlign: "center" }}>
                    {step.bodyType}
                    <Typography variant="body1" sx={{ color: "#000000", fontSize: "18px" }}>
                      {step.TypeCode}
                    </Typography>
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
          {/* fifth grid */}
          <Box sx={{ width: "100%", backgroundColor: "#A0CBDA" }}>
            <Typography variant="h2" sx={{ color: "white", textAlign: "center", mb: 2 }} >
              Central
            </Typography>
            <Grid item container spacing={2}
              direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
            >
              {Central.map((step, index) =>
                <Grid item md={12} lg={12} xl={12} sx={{ textAlign: "center", marginTop: 10 }}
                  onClick={() => {
                    navigate(step.linkToPage);
                  }}>
                  <img
                    src={require('../image/' + step.image + '.png')}
                    alt="manu tribesman"
                    style={{ width: "200px", height: '200px' }}
                  />
                  <Typography variant="h1" sx={{ color: "#1874A3", textAlign: "center" }}>
                    {step.bodyType}
                    <Typography variant="body1" sx={{ color: "#000000", fontSize: "18px" }}>
                      {step.TypeCode}
                    </Typography>
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
          <CounterShare />
        </ThemeProvider>
      }
    </Box >
  )
};

export default TypesPage;
