import { useState } from "react";
import Box from "@mui/material/Box";
import { Typography, Grid, useMediaQuery } from "@mui/material/";
import CallToActionWidget from "../../CTA/CallToActionWidget";
import CounterShare from "../../shares/CounterShare";
import TypeExample, { ITypeCarouselImage } from "../TypeCarousel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WhiteGreyRectangle from "../../../image/WhiteGreyRectangle.svg";
import GreyWhiteRectangle from "../../../image/GreyWhiteRectangle.svg";
import { useParams } from "react-router-dom";
import { comparisonDatas } from "../../../datas/ComparisonDatas";
export default function Types(typesData: any) {
  const { codeSoma } = useParams();
  const filteredType = typesData.dataDescription
    .filter((e: any) => e.codeSoma === codeSoma)
    .map((e: any) => e);

  const filteredExamples = comparisonDatas.filter(
    (e) => e.codeSoma === codeSoma
  );

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
        sx={{ backgroundColor: filteredType[0].categoryBgColor }}
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
              src={require("../../../image/Typespage_avatars/" +
                filteredType[0].imageMale +
                ".svg")}
              alt={`${filteredType[0].name} Man`}
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
            <img
              src={require("../../../image/Typespage_avatars/" +
                filteredType[0].imageFemale +
                ".svg")}
              alt={`${filteredType[0].name} Woman`}
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
                {filteredType[0].name}
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
                ({filteredType[0].codeSoma})
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
          sm={10}
          md={8}
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
                {`What does ${filteredType[0].name} actually mean?`}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {filteredType[0].description}
              </Typography>
            </Grid>
            <Grid item width={"100%"} sx={{ py: 2 }}>
              <img
                src={require("../../../image/Types_graphs/" +
                  filteredType[0].graphImage +
                  ".svg")}
                alt={`${filteredType[0].name} Graph"`}
                style={{
                  maxHeight: "320px",
                  width: medium
                    ? small
                      ? extraSmall
                        ? "100%"
                        : "60%"
                      : "auto"
                    : "auto",
                }}
              />
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
      <Box sx={{ mb: -1, marginTop: 8 }}>
        <img src={WhiteGreyRectangle} alt="" style={{ width: "100%" }} />
      </Box>
      <Grid sx={{ py: 2, bgcolor: "#F5F5F6" }}>
        <TypeExample carouselImages={filteredExamples} />
      </Grid>
      <Box>
        <img src={GreyWhiteRectangle} alt="" style={{ width: "100%" }} />
      </Box>
      <CounterShare />
      {/* <CommentPage /> */}
    </Box>
  );
}
