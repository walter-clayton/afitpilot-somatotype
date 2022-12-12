import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Button, Typography, Stack } from "@mui/material/";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
theme.typography.h1 = {
  "@media (min-width:600px)": {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.9rem",
  },
};
theme.typography.h2 = {
  "@media (max-width:600px)": {
    fontSize: "36px",
    lineHeight: "46px",
    margin: "0px 0px 10px"
  },
  // [theme.breakpoints.down("lg")]: {
  //   fontSize: "54px",
  // },
};
const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Grid
            container
            sx={{
              backgroundColor: "#f6f6f7",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "400px",
            }}
          >
            <Grid item xs={12} md={12} lg={12} sm={12}>
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "black",
                    textAlign: "center",
                    fontSize: "54px",
                    margin: '0px 0px 20px',
                    lineHeight: "71px",
                    fontWeight: 600
                  }}
                >
                  We were built differently.{" "}
                </Typography>
                <Typography
                  mb={2}
                  variant="body1"
                  sx={{
                    color: "black",
                    textAlign: "center",
                    fontSize: "20px",
                    lineHeight: "40px",
                    margin: '0px 0px 30px',
                    fontWeight: 400
                  }}
                >
                  Locate your own uniqueness {" "}
                </Typography>
                <Stack>
                  <Button
                    sx={{
                      borderRadius: "40px",
                      backgroundColor: "RGB(108, 77, 123)",
                      fontSize: "20px",
                      textTransform: "initial",
                      padding: "19px 50px",
                      lineHeight: '40px',
                      textAlign: "center",
                      fontWeight: 600,
                      "&.MuiButtonBase-root:hover": { bgcolor: "RGB(108, 77, 123)" },
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
        </ThemeProvider>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", padding: "25px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
              <Typography variant="h1" sx={{ color: "#4298b4" }}>
                157+
                <Typography sx={{ color: "black" }}>
                  Tests taken today
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
              <Typography variant="h1" sx={{ color: "#e4ae3a" }}>
                59+
                <Typography sx={{ color: "black" }}>
                  Tests taken in Belgium
                </Typography>{" "}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
              <Typography variant="h1" sx={{ color: "#33a474" }}>
                40M+
                <Typography sx={{ color: "black" }}>
                  Total tests taken
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
              <Typography variant="h1" sx={{ color: "#88619a" }}>
                59%
                <Typography sx={{ color: "black" }}>
                  Results rated as accurate or very accurate
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </div >
  );
};

export default Header;
