import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Grid, useMediaQuery } from '@mui/material/';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const category = [
    {
        label: 'MESOMORPH',
        bgColor: '#B76060',
        image: "Mesomorph",

    },
    {
        label: 'ECTOMORPH',
        bgColor: '#DCB051',
        image: "ectomorph",

    },
    {
        label: 'ENDOMORPH',
        bgColor: '#6C4D7B',
        image: "endomorph",

    },
    {
        label: 'HYBRID',
        bgColor: '#56A278',
        image: "hybrid",

    },
    {
        label: 'CENTRAL',
        bgColor: '#4298B4',
        image: "central",

    },
];

function TypesPage1() {
    const medium = useMediaQuery("(max-width:899px)");
    const small = useMediaQuery("(max-width:599px)");
    const extraSmall = useMediaQuery("(max-width:280px)");

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = category.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Grid
            container
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "25px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "420px",
                    width: medium
                        ? small
                            ? extraSmall
                                ? "100%"
                                : "96%"
                            : "95%"
                        : "100%",
                }}
            >
                <Button size="large" sx={{ color: "black", mt: -26 }} onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft sx={{ fontSize: 60 }} />
                    )}
                </Button>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {category.map((step, index) => (
                        <Box>
                            <Paper
                                square
                                elevation={0}
                                sx={{
                                    backgroundColor: `${step.bgColor}`,
                                    display: 'flex',
                                    borderRadius: "8px",
                                    color: "#FFFF",
                                }}
                            >
                                <Typography
                                    sx={{
                                        margin: "0px auto", height: "50px", py: 1.5
                                    }}
                                >
                                    {step.label}
                                </Typography>
                            </Paper>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mt: 3,
                                }}
                            >
                                <img
                                    src={require('../image/' + step.image + '.png')}
                                    alt="graphs"
                                    style={{
                                        width: "180px",
                                    }}
                                />
                            </Box>
                        </Box>
                    ))}
                </SwipeableViews>
                <Button
                    size="large"
                    sx={{ color: "black", mt: -26 }}
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                >
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight sx={{ fontSize: 60 }} />
                    )}
                </Button>
            </Box>
        </Grid >
    );
}

export default TypesPage1;