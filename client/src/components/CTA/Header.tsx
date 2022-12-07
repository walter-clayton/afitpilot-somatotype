import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Button, Typography } from "@mui/material/";
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
  "@media (min-width:600px)": {
    fontSize: "1.9rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.9rem",
    padding: "50px"
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.9rem",
  },
};
const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          container
          sx={{
            backgroundColor: "#f6f6f7",
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "450px",
          }}
        >
          <Grid item xs={12} md={12} lg={12} xl={12} sm={12}>
            <Box
              sx={{
                marginTop: 4,
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
                }}
              >
                "No knowledge can be more satisfactory to a person than that
                of their own frame, its parts, their functions and actions"{" "}
              </Typography>
              <Typography
                mb={2}
                variant="subtitle1"
                sx={{
                  color: "black",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                - Thomas Jefferson{" "}
              </Typography>
              <Button
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "purple",
                  padding: 1,
                }}
                variant="contained"
                onClick={() => {
                  navigate("/Test");
                  window.scrollTo(0, 0);
                }}
              >
                Take the test <ArrowForwardSharpIcon />
              </Button>
            </Box>
          </Grid>
        </Grid>
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
                </Typography>
              </Typography>{" "}
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
