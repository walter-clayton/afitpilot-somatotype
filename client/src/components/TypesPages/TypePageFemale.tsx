import { useState } from "react";
import { Grid, Box, Button, Typography, useMediaQuery } from "@mui/material/";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CounterShare from "../shares/CounterShare";
import { useNavigate } from "react-router-dom";
import mesomorpyshape from "../../image/mesomorpyshape.png";

const theme = createTheme();
theme.typography.h1 = {
  "@media (max-width:600px)": {
    fontSize: "22px",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "25px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "28px",
  },
};
theme.typography.h2 = {
  "@media (max-width:600px)": {
    fontSize: "42px",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "70px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "100px",
  },
};

const TypesPageFemale = (props: any) => {
  const navigate = useNavigate();
  const medium = useMediaQuery("(max-width:899px)");
  const small = useMediaQuery("(max-width:599px)");
  const extraSmall = useMediaQuery("(max-width:449px)");

  const [isShown, setIsShown] = useState(true);

  const Mesomorph = [
    {
      image: "EnM_woman",
      bodyType: "Endomorphic Mesomorph",
      TypeCode: "EnM",
      linkToPage: "/EnM",
    },
    {
      image: "BM_woman",
      bodyType: "Balanced Mesomorph",
      TypeCode: "BM",
      linkToPage: "/BM",
    },
    {
      image: "EcM_woman",
      bodyType: "Ectomorphic Mesomorph ",
      TypeCode: "EcM",
      linkToPage: "/EcM",
    },
  ];
  const Ectomorph = [
    {
      image: "MEc_woman",
      bodyType: "Mesomorphic Ectomorph ",
      TypeCode: "MEc",
      linkToPage: "/MEc",
    },
    {
      image: "BEc_woman",
      bodyType: "Balanced Ectomorph",
      TypeCode: "BEc",
      linkToPage: "/BEc",
    },
    {
      image: "EnEc_woman",
      bodyType: "Endomorphic Ectomorph ",
      TypeCode: "EnEc",
      linkToPage: "/EnEc",
    },
  ];
  const Endomorph = [
    {
      image: "EcEn_woman",
      bodyType: "Ectomorphic Endomorph",
      TypeCode: "EcEn ",
      linkToPage: "/EcEn",
    },
    {
      image: "BEn_woman",
      bodyType: "Balanced Endomorph",
      TypeCode: "BEn",
      linkToPage: "/BEn",
    },
    {
      image: "MEn_woman",
      bodyType: "Mesomorphic Endomorph ",
      TypeCode: "MEn",
      linkToPage: "/MEn",
    },
  ];
  const Hybrid = [
    {
      image: "M-Ec_woman",
      bodyType: "Mesomorph Ectomorph",
      TypeCode: "M-Ec",
      linkToPage: "/M-Ec",
    },
    {
      image: "En-Ec_woman",
      bodyType: "Endomorph Ectomorph",
      TypeCode: "En-Ec",
      linkToPage: "/En-Ec",
    },
    {
      image: "M-En_woman",
      bodyType: "Mesomorph Endomorph",
      TypeCode: "M-En",
      linkToPage: "/M-En",
    },
  ];
  const Central = [
    {
      image: "C_woman",
      bodyType: "Central",
      TypeCode: "C",
      linkToPage: "/C",
    },
  ];

  return (
    <Box>
      {isShown && (
        <ThemeProvider theme={theme}>
          <Box sx={{ mb: -2, mt: "-70px" }}>
            <img src={mesomorpyshape} alt="" style={{ width: "100%" }} />
          </Box>
          <Box
            ref={props.section1Ref}
            sx={{ width: "100%", backgroundColor: "#E7CACA" }}
          >
            <Typography
              variant="h2"
              sx={{ color: "white", textAlign: "center" }}
            >
              MESOMORPH
            </Typography>
            <Grid
              container
              spacing={2}
              direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
            >
              {Mesomorph.map((step, index) => (
                <Grid
                  key={index}
                  item
                  md={4}
                  lg={4}
                  xl={4}
                  sx={{ textAlign: "center", marginTop: 5, pb: 9 }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(step.linkToPage);
                  }}
                >
                  <img
                    src={require("../../image/Typespage_avatars/" +
                      step.image +
                      ".svg")}
                    alt="manu tribesman"
                    style={{
                      width: medium
                        ? small
                          ? extraSmall
                            ? "65%"
                            : "60%"
                          : "100%"
                        : "100%",
                      height: "350px",
                    }}
                  />
                  <Typography
                    variant="h1"
                    sx={{ color: "#B76060", textAlign: "center" }}
                  >
                    {step.bodyType}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#000000",
                        fontSize: "18px",
                        fontWeight: 800,
                      }}
                    >
                      {step.TypeCode}
                    </Typography>
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: "40px",
                  fontSize: "18px",
                  lineHeight: "30px",
                  backgroundColor: "RGB(108, 77, 123)",
                  padding: "14px 30px",
                  fontWeight: 600,
                  textAlign: "center",
                  textTransform: "initial",
                  marginTop: 0,
                  mb: -2,
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "RGB(108, 77, 123)",
                  },
                }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/test");
                }}
              >
                Take the Test <ArrowForwardSharpIcon />
              </Button>
            </Box>
          </Box>
          {/* second grid */}
          <Box
            ref={props.section2Ref}
            sx={{ width: "100%", backgroundColor: "#F2E2BF" }}
          >
            <Typography
              variant="h2"
              sx={{ color: "white", textAlign: "center", mb: 2, pt: 9 }}
            >
              ECTOMORPH
            </Typography>
            <Grid
              item
              container
              spacing={2}
              direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
            >
              {Ectomorph.map((step, index) => (
                <Grid
                  key={index}
                  item
                  md={4}
                  lg={4}
                  xl={4}
                  sx={{ textAlign: "center", marginTop: 5, mb: 5 }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(step.linkToPage);
                  }}
                >
                  <img
                    src={require("../../image/Typespage_avatars/" +
                      step.image +
                      ".svg")}
                    alt="manu tribesman"
                    style={{
                      width: medium
                        ? small
                          ? extraSmall
                            ? "65%"
                            : "60%"
                          : "100%"
                        : "100%",
                      height: "350px",
                    }}
                  />
                  <Typography
                    variant="h1"
                    sx={{ color: "#DCB051", textAlign: "center" }}
                  >
                    {step.bodyType}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#000000",
                        fontSize: "18px",
                        fontWeight: 800,
                      }}
                    >
                      {step.TypeCode}
                    </Typography>
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* third grid */}
          <Box
            ref={props.section3Ref}
            sx={{ width: "100%", backgroundColor: "#DCD0E2" }}
          >
            <Typography
              variant="h2"
              sx={{ color: "white", textAlign: "center", mb: 2 }}
            >
              ENDOMORPH
            </Typography>
            <Grid
              item
              container
              spacing={2}
              direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
            >
              {Endomorph.map((step, index) => (
                <Grid
                  key={index}
                  item
                  md={4}
                  lg={4}
                  xl={4}
                  sx={{ textAlign: "center", marginTop: 5, pb: 9 }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(step.linkToPage);
                  }}
                >
                  <img
                    src={require("../../image/Typespage_avatars/" +
                      step.image +
                      ".svg")}
                    alt="manu tribesman"
                    style={{
                      width: medium
                        ? small
                          ? extraSmall
                            ? "65%"
                            : "60%"
                          : "100%"
                        : "100%",
                      height: "350px",
                    }}
                  />
                  <Typography
                    variant="h1"
                    sx={{ color: "#6C4D7B", textAlign: "center" }}
                  >
                    {step.bodyType}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#000000",
                        fontSize: "18px",
                        fontWeight: 800,
                      }}
                    >
                      {step.TypeCode}
                    </Typography>
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: "40px",
                  fontSize: "18px",
                  lineHeight: "30px",
                  backgroundColor: "RGB(108, 77, 123)",
                  padding: "14px 30px",
                  fontWeight: 600,
                  textAlign: "center",
                  textTransform: "initial",
                  marginTop: 0,
                  mb: -2,
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "RGB(108, 77, 123)",
                  },
                }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/test");
                }}
              >
                Take the Test <ArrowForwardSharpIcon />
              </Button>
            </Box>
          </Box>
          {/* fourth grid */}
          <Box
            ref={props.section4Ref}
            sx={{ width: "100%", backgroundColor: "#D5E8DD" }}
          >
            <Typography
              variant="h2"
              sx={{ color: "white", textAlign: "center", mb: 2, pt: 9 }}
            >
              HYBRID
            </Typography>
            <Grid
              item
              container
              spacing={2}
              direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
            >
              {Hybrid.map((step, index) => (
                <Grid
                  key={index}
                  item
                  md={4}
                  sm={12}
                  lg={4}
                  xl={4}
                  sx={{ textAlign: "center", marginTop: 5, mb: 5 }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(step.linkToPage);
                  }}
                >
                  <img
                    src={require("../../image/Typespage_avatars/" +
                      step.image +
                      ".svg")}
                    alt="manu tribesman"
                    style={{
                      width: medium
                        ? small
                          ? extraSmall
                            ? "65%"
                            : "60%"
                          : "100%"
                        : "100%",
                      height: "350px",
                    }}
                  />
                  <Typography
                    variant="h1"
                    sx={{ color: "#56A278", textAlign: "center" }}
                  >
                    {step.bodyType}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#000000",
                        fontSize: "18px",
                        fontWeight: 800,
                      }}
                    >
                      {step.TypeCode}
                    </Typography>
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* fifth grid */}
          <Box
            ref={props.section5Ref}
            sx={{ width: "100%", backgroundColor: "#CFE5EC" }}
          >
            <Typography
              variant="h2"
              sx={{ color: "white", textAlign: "center", mb: 2 }}
            >
              CENTRAL
            </Typography>
            <Grid
              item
              container
              spacing={2}
              direction={{ xs: "column", md: "row", lg: "row", xl: "row" }}
            >
              {Central.map((step, index) => (
                <Grid
                  key={index}
                  item
                  md={12}
                  lg={12}
                  xl={12}
                  sx={{ textAlign: "center", marginTop: 5, mb: 5 }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(step.linkToPage);
                  }}
                >
                  <img
                    src={require("../../image/Typespage_avatars/" +
                      step.image +
                      ".svg")}
                    alt="manu tribesman"
                    style={{
                      width: medium
                        ? small
                          ? extraSmall
                            ? "65%"
                            : "60%"
                          : "100%"
                        : "100%",
                      height: "350px",
                    }}
                  />
                  <Typography
                    variant="h1"
                    sx={{ color: "#1874A3", textAlign: "center" }}
                  >
                    {step.bodyType}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#000000",
                        fontSize: "18px",
                        fontWeight: 800,
                      }}
                    >
                      {step.TypeCode}
                    </Typography>
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          <CounterShare />
        </ThemeProvider>
      )}
    </Box>
  );
};

export default TypesPageFemale;
