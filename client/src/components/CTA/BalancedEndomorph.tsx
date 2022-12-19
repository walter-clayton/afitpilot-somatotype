import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material/";
import man from "../image/Group.svg";
import sitting from "../image/sitting-2.svg";
import CallToActionWidget from "./CallToActionWidget";
import CounterShare from "./CounterShare";
import CommentPage from "./CommentPage";
import TypeExample from "./TypeExample";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Types() {
  const theme = createTheme();

  theme.typography.h4 = {
    "@media (max-width:600px)": {
      fontSize: "30px",
      lineHeight: '50px',
      margin: "0px 0px 5px",
      fontWeight: 600,
    },
  };
  theme.typography.h2 = {
    "@media (max-width:600px)": {
      fontSize: "30px",
    }
  };
  theme.typography.body1 = {
    "@media (max-width:600px)": {
      fontSize: "22px",
      lineHeight: 'normal',
      margin: "0px 0px 30px",
      fontWeight: 600,
    },
  };
  return (
    <Box>
      <Grid container sx={{ backgroundColor: "#f6f6f7", marginTop: 8 }}>
        <Grid item xs={12} md={6} lg={6} sm={12}
          order={{ xs: 2, sm: 2, md: 1, lg: 1 }}
        >
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
        <Grid item xs={12} md={6} lg={6} sm={12} sx={{ backgroundColor: "#6C4D7B" }}
          order={{ xs: 1, sm: 1, md: 1, lg: 1 }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ThemeProvider theme={theme}>
              <Typography
                component="span"
                variant="h4"
                sx={{ color: "white", textAlign: "center", fontSize: "60px", lineHeight: "94px", margin: "0px 0px 3px", fontWeight: 600 }}
              >
                Balanced Endomorph
              </Typography>
              <Typography component="div" variant="body1" sx={{ color: "white", fontSize: '36px', fontWeight: 600, textAlign: "center", lineHeight: "normal" }}>
                (BEn)
              </Typography>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          sx={{
            flexGrow: 1,
            alignItems: "center",
            margin: "20px auto",
          }}
          xs={12}
          md={9}
          lg={8}
        >
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              textAlign: "justify",
              padding: 2
            }}
          >
            <ThemeProvider theme={theme}>
              <Typography variant="h2" gutterBottom sx={{ fontSize: "45px" }}>
                Introduction
              </Typography>
            </ThemeProvider>
            <Typography variant="h6" gutterBottom>
              What is a Balanced endomorphy?
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              sapiente? Exercitationem provident itaque nemo iusto consequatur
              laudantium deleniti? Impedit ad ab facere consequatur unde dolores
              modi soluta cupiditate veritatis provident?
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              sapiente? Exercitationem provident itaque nemo iusto consequatur
              laudantium deleniti? Impedit ad ab facere consequatur unde dolores
              modi soluta cupiditate veritatis provident?
            </Typography>
            <Typography variant="h6" gutterBottom>
              The Life of the Mind
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "500px",
              }}
            >
              <img src={man} alt="" height={"50%"} />
            </Box>
            <Typography
              mt={3}
              variant="body1"
              gutterBottom
              sx={{ marginTop: "-170px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              sapiente? Exercitationem provident itaque nemo iusto consequatur
              laudantium deleniti? Impedit ad ab facere consequatur unde dolores
              modi soluta cupiditate veritatis provident?
            </Typography>
            <Box
              sx={{
                backgroundColor: "#6C4D7B",
                padding: 2,
                color: "white",
                margin: "0px 20px",
              }}
            >
              <Typography variant="overline">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Typography>
            </Box>
            <Typography mt={3} variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              sapiente? Exercitationem provident itaque nemo iusto consequatur
              laudantium deleniti? Impedit ad ab facere consequatur unde dolores
              modi soluta cupiditate veritatis provident?
            </Typography>
            <Typography variant="h6" gutterBottom>
              A Thirst for Knowledge
            </Typography>
            <Typography mt={3} variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              sapiente? Exercitationem provident itaque nemo iusto consequatur
              laudantium deleniti? Impedit ad ab facere consequatur unde dolores
              modi soluta cupiditate veritatis provident?
            </Typography>
          </Box>
        </Grid>
        {/* widget component */}
        <Grid md={3}>
          <CallToActionWidget />
        </Grid>
      </Grid>
      <TypeExample />
      <CounterShare />
      <CommentPage />
    </Box>
  );
}
