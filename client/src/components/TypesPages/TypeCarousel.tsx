import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Grid, duration } from "@mui/material/";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState, FC } from "react";

const stepperTheme = createTheme({ typography: { fontSize: 35 } });

export interface ITypeCarouselImage {
  image?: string;
  imageAltText?: string;
}

interface ITypeCarousel {
  carouselImages?: ITypeCarouselImage[];
}

const TypeCarousel: FC<ITypeCarousel> = (props) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [maxSteps, setMaxSteps] = useState<number>(0);

  useEffect(() => {
    if (props.carouselImages !== undefined && props.carouselImages.length > 0) {
      setMaxSteps(props.carouselImages!.length);
    } else {
      setMaxSteps(0);
    }
  }, [props.carouselImages]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  theme.typography.h2 = {
    "@media (max-width:600px)": {
      fontSize: "20px",
      lineHeight: "28px",
      Padding: "0px 35px",
      margin: "0px 0px 30px",
    },
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      {props.carouselImages !== undefined &&
        props.carouselImages.length > 0 && (
          <Box>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "34px",
                  lineHeight: "44px",
                  margin: "0px 0px 45px",
                  padding: "0px 70px",
                  fontWeight: 600,
                  color: "RGB(81, 89, 106)",
                  textAlign: "center",
                }}
              >
                Somatotypes in this category
              </Typography>
            </ThemeProvider>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              springConfig={{
                duration: "0.6s",
                easeFunction: "ease",
                delay: "0s",
              }}
            >
              {props.carouselImages!.map((image, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={image.image}
                    alt={image.imageAltText}
                    style={{ maxHeight: "400px" }}
                  />
                </Box>
              ))}
            </SwipeableViews>
            <ThemeProvider theme={stepperTheme}>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="large"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    {/* Next */}
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="large"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    {/* Back */}
                  </Button>
                }
              />
            </ThemeProvider>
          </Box>
        )}
    </Box>
  );
};

export default TypeCarousel;
