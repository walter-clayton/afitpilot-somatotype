import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material/';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import avatar from "../image/manu-tribesman.png"
import { createTheme, ThemeProvider } from "@mui/material/styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
    {
        label1: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath1: '../image/bodytype1.svg'
    },
    {
        label2: 'Bird',
        imgPath2:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

function TypeExample() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

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
            lineHeight: '28px',
            Padding: "0px 35px",
            margin: "0px 0px 30px"
        },
    };
    return (
        <Box sx={{
            marginTop: 15,
            flexGrow: 1,
        }}>
            <ThemeProvider theme={theme}>
                <Typography variant="h2" sx={{ fontSize: "34px", lineHeight: '44px', margin: "0px 0px 45px", padding: "0px 70px", fontWeight: 600, color: "RGB(81, 89, 106)", textAlign: "center" }}>
                    Balanced Endomorph You May Know
                </Typography>
            </ThemeProvider>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                <Grid item>
                    <Box sx={{ display: "flex", flexDirection: 'row' }} >
                        <Box
                            sx={{
                                marginRight: "220px"
                            }}
                            component="img"
                            src={avatar}
                            style={{ width: "100px" }}
                        />
                        <Box
                            sx={{
                                marginRight: "220px"
                            }}
                            component="img"
                            src={avatar}
                            style={{ width: "100px" }}
                        />
                        <Box
                            sx={{
                                marginRight: "220px"
                            }}
                            component="img"
                            src={avatar}
                            style={{ width: "100px" }}
                        />
                        <Box
                            sx={{
                                marginRight: "220px"
                            }}
                            component="img"
                            src={avatar}
                            style={{ width: "100px" }}
                        />
                    </Box>
                </Grid>
                <div >
                    <Box sx={{ display: "flex", flexDirection: 'row' }} >
                        <Box
                            sx={{
                                marginRight: "220px"
                            }}
                            component="img"
                            src={avatar}
                            style={{ width: "100px" }}
                        />
                        <Box
                            sx={{
                                marginRight: "220px"
                            }}
                            component="img"
                            src={avatar}
                            style={{ width: "100px" }}
                        />
                        <Box
                            sx={{
                                marginRight: "220px"
                            }}
                            component="img"
                            src={avatar}
                            style={{ width: "100px" }}
                        />
                        <Box
                            sx={{
                                marginRight: "220px"
                            }}
                            component="img"
                            src={avatar}
                            style={{ width: "100px" }}
                        />
                    </Box>
                </div>
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        {/* Next */}
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        {/* Back */}
                    </Button>
                }
            />
        </Box >
    );
}

export default TypeExample;