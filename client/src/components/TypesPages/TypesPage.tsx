import { useState, useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Grid,
  Box,
  Button,
  Typography,
  useMediaQuery,
  Stack,
} from "@mui/material/";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CounterShare from "../shares/CounterShare";
import { useNavigate } from "react-router-dom";
import redFeatureShape from "../../image/redFeatureShape.svg";
import TypesPage1, { Icategory } from "./GraphTypes";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TypesPageFemale from "./TypePageFemale";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import IconButton from "@mui/material/IconButton";
import { Category } from "@mui/icons-material";

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
const heading = {
  "@media (max-width:600px)": {
    fontSize: "36px",
    lineHeight: "46px",
    margin: "0px 0px 10px",
    fontWeight: 600,
    textAlign: "center",
  },
  "@media only screen and (min-width: 600px) and (max-width: 1716px)": {
    color: "black",
    textAlign: "center",
    fontSize: "54px",
    marginBottom: "20px",
    lineHeight: "71px",
    fontWeight: 600,
  },
};
interface Icategories {
  category1: Icategory[];
  category2: Icategory[];
}
const TypesPage = (typesData: any) => {
  const filteredType = typesData.dataDescription;
  const navigate = useNavigate();
  const medium = useMediaQuery("(max-width:899px)");
  const small = useMediaQuery("(max-width:599px)");
  const extraSmall = useMediaQuery("(max-width:449px)");
  const categories: Icategories = {
    category1: [
      {
        label: "MESOMORPH",
        bgColor: "#B76060",
      },
      {
        label: "ECTOMORPH",
        bgColor: "#DCB051",
      },
      {
        label: "ENDOMORPH",
        bgColor: "#6C4D7B",
      },
      {
        label: "HYBRID",
        bgColor: "#56A278",
      },
      {
        label: "CENTRAL",
        bgColor: "#4298B4",
      },
    ],
    category2: [
      {
        label: "Balanced Mesomorph",
        bgColor: "#B76060",
      },
      {
        label: "Ectomorphic Mesomorph",
        bgColor: "#B76060",
      },
      {
        label: "Endomorphic Mesomorph",
        bgColor: "#B76060",
      },
      //ectomorph
      {
        label: "Mesomorphic Ectomorph",
        bgColor: "#DCB051",
      },
      {
        label: "Balanced Ectomorph",
        bgColor: "#DCB051",
      },
      {
        label: "Endomorphic Ectomorph",
        bgColor: "#DCB051",
      },
      //endomorph
      {
        label: "Ectomorphic Endomorph",
        bgColor: "#6C4D7B",
      },
      {
        label: "Balanced Endomorph",
        bgColor: "#6C4D7B",
      },
      {
        label: "Mesomorphic Endomorph",
        bgColor: "#6C4D7B",
      },
      //hybrid
      {
        label: "Mesomorph Ectomorph",
        bgColor: "#56A278",
      },
      {
        label: "Endomorph Ectomorph",
        bgColor: "#56A278",
      },
      {
        label: "Mesomorph Endomorph",
        bgColor: "#56A278",
      },
      //central
      {
        label: "Central",
        bgColor: "#4298B4",
      },
    ],
  };
  const [isChecked, setIsChecked] = useState(false);
  const [currentIndexCat1, setCurrentIndexCat1] = useState(0);
  const [currentIndexCat2, setCurrentIndexCat2] = useState(0);
  const [labelCategory, setLabelCategory] = useState("category1");
  const [currentCategory, setCurrentCategory] = useState(
    (categories as any)[labelCategory]
  );
  const [isShown, setIsShown] = useState(true);
  const [isShownFemale, setIsShownFemale] = useState(false);

  const handleClick = () => {
    setIsShown(true);
    setIsShownFemale(false);
  };
  const handleClickFemale = () => {
    setIsShownFemale(true);
    setIsShown(false);
  };
  const xxs = useMediaQuery("(max-width:380px)");

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);

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
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sm={12}
          sx={{
            backgroundColor: "#F5F5F6",
            width: "100%",
            mb: 7,
          }}
        >
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "250px",
            }}
          >
            <Typography variant="h1" sx={heading} pb={6}>
              Categories
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: "40px",
                fontSize: "18px",
                lineHeight: "30px",
                backgroundColor: "RGB(108, 77, 123)",
                padding: "14px 40px",
                fontWeight: 600,
                textAlign: "center",
                textTransform: "initial",
                marginTop: 0,
                mb: { xs: -15, sm: -11, md: -11, lg: -11 },
                "&.MuiButtonBase-root:hover": { bgcolor: "RGB(108, 77, 123)" },
              }}
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/test");
              }}
            >
              Take the Test <ArrowForwardSharpIcon />
            </Button>
          </Box>
        </Grid>
        {/* typepage for Categories */}
        <TypesPage1
          currentCategory={currentCategory}
          section1Ref={section1Ref}
          section2Ref={section2Ref}
          section3Ref={section3Ref}
          section4Ref={section4Ref}
          section5Ref={section5Ref}
          labelCategory={labelCategory}
          currentIndexCat1={currentIndexCat1}
          setCurrentIndexCat1={setCurrentIndexCat1}
          currentIndexCat2={currentIndexCat2}
          setCurrentIndexCat2={setCurrentIndexCat2}
        />
        {/* switch button to show SUBCATEGORIES */}
        <Box>
          <FormControlLabel
            control={<Switch defaultChecked={isChecked} />}
            onChange={(event: any) => {
              setIsChecked(!isChecked);
              if (event.target.checked) {
                setCurrentCategory(categories["category2"]);
                setLabelCategory("category2");
              } else {
                setCurrentCategory(categories["category1"]);
                setLabelCategory("category1");
              }
            }}
            label={
              <Typography sx={{ fontSize: "1.4rem", fontWeight: 300 }}>
                13 SUBCATEGORIES
              </Typography>
            }
          />
        </Box>
        {/* switch netween male and female */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            textAlign: "center",
            my: { xs: 5, sm: 4, md: 2, lg: 2 },
          }}
        >
          <Stack direction="row" spacing={2}>
            <IconButton
              sx={{
                backgroundColor: isShown ? "#000000" : "white",
                border: 1.3,
                color: isShown ? "white" : "#000000",
                borderRadius: 1,
                "&.MuiButtonBase-root:hover": {
                  bgcolor: isShown ? "#000000" : "white",
                },
                width: xxs ? "50px" : "70px",
                height: xxs ? "50px" : "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => {
                handleClick();
              }}
            >
              <MaleIcon sx={{ fontSize: 60 }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: isShownFemale ? "#000000" : "white",
                border: 1.3,
                color: isShownFemale ? "white" : "#000000",
                borderRadius: 1,
                "&.MuiButtonBase-root:hover": {
                  bgcolor: isShownFemale ? "#000000" : "white",
                },
                width: xxs ? "50px" : "70px",
                height: xxs ? "50px" : "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => {
                handleClickFemale();
              }}
            >
              <FemaleIcon sx={{ fontSize: 60 }} />
            </IconButton>
          </Stack>
        </Box>
      </Grid>
      {isShown && (
        <ThemeProvider theme={theme}>
          <Box sx={{ mb: -2, mt: "-70px" }}>
            <img src={redFeatureShape} alt="" style={{ width: "100%" }} />
          </Box>
          <Box
            ref={section1Ref}
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
              {filteredType
                .filter((e: any) => e.category === "Mesomorph")
                .map((step: any, index: any) => (
                  <Grid
                    key={index}
                    item
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{
                      textAlign: "center",
                      marginTop: 5,
                      pb: 9,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(step.linkToPage);
                    }}
                  >
                    <img
                      src={require("../../image/Typespage_avatars/" +
                        step.imageMale +
                        ".svg")}
                      alt={`${step.name} Mesomorph`}
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
                      {step.name}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#000000",
                          fontSize: "18px",
                          fontWeight: 800,
                        }}
                      >
                        {step.codeSoma}
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
            ref={section2Ref}
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
              {filteredType
                .filter((e: any) => e.category === "Ectomorph")
                .map((step: any, index: any) => (
                  <Grid
                    key={index}
                    item
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{
                      textAlign: "center",
                      marginTop: 5,
                      mb: 5,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(step.linkToPage);
                    }}
                  >
                    <img
                      src={require("../../image/Typespage_avatars/" +
                        step.imageMale +
                        ".svg")}
                      alt="Ectomorph"
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
                      {step.name}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#000000",
                          fontSize: "18px",
                          fontWeight: 800,
                        }}
                      >
                        {step.codeSoma}
                      </Typography>
                    </Typography>
                  </Grid>
                ))}
            </Grid>
          </Box>
          {/* third grid */}
          <Box
            ref={section3Ref}
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
              {filteredType
                .filter((e: any) => e.category === "Endomorph")
                .map((step: any, index: any) => (
                  <Grid
                    key={index}
                    item
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{
                      textAlign: "center",
                      marginTop: 5,
                      pb: 9,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(step.linkToPage);
                    }}
                  >
                    <img
                      src={require("../../image/Typespage_avatars/" +
                        step.imageMale +
                        ".svg")}
                      alt="Endomorph"
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
                      {step.name}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#000000",
                          fontSize: "18px",
                          fontWeight: 800,
                        }}
                      >
                        {step.codeSoma}
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
            ref={section4Ref}
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
              {filteredType
                .filter((e: any) => e.category === "Hybrid")
                .map((step: any, index: any) => (
                  <Grid
                    key={index}
                    item
                    md={4}
                    sm={12}
                    lg={4}
                    xl={4}
                    sx={{
                      textAlign: "center",
                      marginTop: 5,
                      mb: 5,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(step.linkToPage);
                    }}
                  >
                    <img
                      src={require("../../image/Typespage_avatars/" +
                        step.imageMale +
                        ".svg")}
                      alt="Hybrid"
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
                      {step.name}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#000000",
                          fontSize: "18px",
                          fontWeight: 800,
                        }}
                      >
                        {step.codeSoma}
                      </Typography>
                    </Typography>
                  </Grid>
                ))}
            </Grid>
          </Box>
          {/* fifth grid */}
          <Box
            ref={section5Ref}
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
              {filteredType
                .filter((e: any) => e.category === "Central")
                .map((step: any, index: any) => (
                  <Grid
                    key={index}
                    item
                    md={12}
                    lg={12}
                    xl={12}
                    sx={{
                      textAlign: "center",
                      marginTop: 5,
                      mb: 5,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(step.linkToPage);
                    }}
                  >
                    <img
                      src={require("../../image/Typespage_avatars/" +
                        step.imageMale +
                        ".svg")}
                      alt="central"
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
                      {step.name}
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#000000",
                          fontSize: "18px",
                          fontWeight: 800,
                        }}
                      >
                        {step.codeSoma}
                      </Typography>
                    </Typography>
                  </Grid>
                ))}
            </Grid>
          </Box>
          <CounterShare />
        </ThemeProvider>
      )}
      {isShownFemale && (
        <Box>
          <TypesPageFemale
            section1Ref={section1Ref}
            section2Ref={section2Ref}
            section3Ref={section3Ref}
            section4Ref={section4Ref}
            section5Ref={section5Ref}
          />
        </Box>
      )}
    </Box>
  );
};

export default TypesPage;
