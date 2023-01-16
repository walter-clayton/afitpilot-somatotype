import * as React from "react";
import Box from "@mui/material/Box";
import { Typography, Grid, useMediaQuery } from "@mui/material/";
import groupImage from "../../../image/Group.svg";
import sitting from "../../../image/sitting-2.svg";
import CallToActionWidget from "../../CTA/CallToActionWidget";
import CounterShare from "../../shares/CounterShare";
import CommentPage from "../../comments/CommentPage";
import TypeExample, { ITypeCarouselImage } from "../TypeCarousel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EcEnMan from "../../../image/Typespage_avatars/EcEn_man.svg";
import EcEnWoman from "../../../image/Typespage_avatars/EcEn_woman.svg";

export default function Types() {
  const ECEnImages: ITypeCarouselImage[] = [
    {
      image: EcEnMan,
      imageAltText: "EcEnMan",
    },
    {
      image: EcEnWoman,
      imageAltText: "EcEnWoman",
    },
  ];

  const theme = createTheme();
  const medium = useMediaQuery("(max-width:899px)");
  const small = useMediaQuery("(max-width:599px)");
  const extraSmall = useMediaQuery("(max-width:449px)");

  theme.typography.h4 = {
    "@media (max-width:600px)": {
      fontSize: "38px",
      fontWeight: 600,
    },
    "@media (max-width:450px)": {
      fontSize: "30px",
      fontWeight: 600,
    },
  };
  theme.typography.h2 = {
    "@media (max-width:600px)": {
      fontSize: "30px",
    },
  };
  theme.typography.body1 = {
    "@media (max-width:600px)": {
      fontSize: "22px",
      fontWeight: 600,
    },
    "@media (max-width:450px)": {
      fontSize: "18px",
      fontWeight: 600,
    },
  };
  return (
    <Box>
      <Grid
        container
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ backgroundColor: "#6C4D7B" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 2, md: 1 }}
          padding={2}
          justifySelf={"center"}
          alignSelf={"center"}
          sx={{ backgroundColor: "#f6f6f7" }}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <img
              src={sitting}
              alt="sitting girl"
              style={{
                maxHeight: "320px",
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
        <Grid item xs={12} md={6} order={1} padding={2}>
          <Box
            sx={{
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
                sx={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "60px",
                  fontWeight: 600,
                }}
              >
                Ectomorphic Endomorph
              </Typography>
              <Typography
                component="div"
                variant="body1"
                sx={{
                  color: "white",
                  fontSize: "36px",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: "normal",
                }}
              >
                (EcEn)
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
          <Grid
            container
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              textAlign: "justify",
              padding: 2,
            }}
          >
            <Grid item width={"100%"}>
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{ fontSize: "45px", fontWeight: 600 }}
                >
                  Introduction
                </Typography>
              </ThemeProvider>
              <Typography variant="h6" gutterBottom>
                What is a Ectomorphic endomorphy?
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, sapiente? Exercitationem provident itaque nemo iusto
                consequatur laudantium deleniti? Impedit ad ab facere
                consequatur unde dolores modi soluta cupiditate veritatis
                provident?
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, sapiente? Exercitationem provident itaque nemo iusto
                consequatur laudantium deleniti? Impedit ad ab facere
                consequatur unde dolores modi soluta cupiditate veritatis
                provident?
              </Typography>
              <Typography variant="h6" gutterBottom>
                The Life of the Mind
              </Typography>
            </Grid>
            <Grid
              item
              alignSelf={"center"}
              width={{ xs: "100%", sm: "85%", md: "75%", xl: "65%" }}
            >
              <img src={groupImage} alt="" />
            </Grid>
            <Grid item width={"100%"}>
              <Typography mt={3} variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, sapiente? Exercitationem provident itaque nemo iusto
                consequatur laudantium deleniti? Impedit ad ab facere
                consequatur unde dolores modi soluta cupiditate veritatis
                provident?
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, sapiente? Exercitationem provident itaque nemo iusto
                consequatur laudantium deleniti? Impedit ad ab facere
                consequatur unde dolores modi soluta cupiditate veritatis
                provident?
              </Typography>
              <Typography variant="h6" gutterBottom>
                A Thirst for Knowledge
              </Typography>
              <Typography mt={3} variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, sapiente? Exercitationem provident itaque nemo iusto
                consequatur laudantium deleniti? Impedit ad ab facere
                consequatur unde dolores modi soluta cupiditate veritatis
                provident?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* widget component */}

        {medium ? null : (
          <Grid item md={3}>
            <CallToActionWidget />
          </Grid>
        )}
      </Grid>
      <TypeExample carouselImages={ECEnImages} />
      <CounterShare />
      {/* <CommentPage /> */}
    </Box>
  );
}
