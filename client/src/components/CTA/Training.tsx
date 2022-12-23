import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Typography, } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import avatar from '../image/manu-tribesman.png';
import NutritionCard from './NutritionCard';
import Arrow1 from '../image/Arrow1.png';
import Arrow1Down from '../image/Arrow1Down.png';
import cross from '../image/cross.png';

const theme = createTheme();
theme.typography.h1 = {
    "@media (max-width:600px)": {
        fontSize: "30px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "54px",
    },
};
theme.typography.h3 = {
    "@media (max-width:600px)": {
        fontSize: "30px",
        textAlign: "center"
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "54px",
    },
};
theme.typography.h4 = {
    "@media (max-width:700px)": {
        fontSize: "50px",
    },
};
theme.typography.h5 = {
    "@media (max-width:700px)": {
        fontSize: "35px",
    },
};
theme.typography.body1 = {
    "@media (max-width:600px)": {
        fontSize: "20px",
        textAlign: "center"
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "32px",
    },
};

theme.typography.body2 = {
    "@media (max-width:600px)": {
        fontSize: "18px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "24px",
    },
};
;
const Training = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid item container>
                <Grid item
                    sx={{
                        backgroundColor: "#4298B4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "350px",
                    }}>
                    <Box
                        sx={{
                            margin: "0 auto",
                            display: "flex",
                            flexDirection: "column",
                        }}>
                        <Typography
                            variant="h1"
                            sx={{
                                color: "white",
                                textAlign: "center",
                                pb: 2
                            }}>
                            Build your Body
                        </Typography>
                        <Typography
                            mb={2}
                            variant="body2"
                            sx={{
                                color: "white",
                                textAlign: "center",
                                fontSize: "24px",
                                px: 2
                            }}>
                            Our Program focuses on increasing <br></br> mesomorphy and decreasing endomorphy.
                        </Typography>
                    </Box>
                </Grid>
                <Grid container spacing={2}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        marginTop: { md: -10, lg: -10, xl: -10 }
                    }}>
                    <Grid item md={3}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                        }}>
                        <img src={avatar} alt="avatar" width={"150px"} />
                    </Grid>
                    <Typography
                        sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' }, color: "#4298B4", textAlign: "center", mt: 18 }}
                        variant="h1">
                        <img src={Arrow1} alt="Arrow" />
                    </Typography>
                    <Typography
                        sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' }, color: "#4298B4" }}
                        variant="h1" mt={1}>
                        <img src={Arrow1Down} alt="ArrowDown" />
                    </Typography>
                    <Grid item md={3}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <img src={avatar} alt="avatar" width={"150px"} />
                    </Grid>
                </Grid>
                {/* Instruction */}
                <Grid container spacing={2}
                    sx={{
                        backgroundColor: "#4298B4",
                        marginTop: 9,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Grid item md={8} >
                        <Typography variant="h3"
                            sx={{ color: "#FFFFFF", mb: 2, fontSize: '54px' }}>
                            3 MONTHS NUTRITION PROGRAM
                        </Typography>
                        <Typography variant="body1"
                            sx={{ color: "#FFFFFF", mb: 2 }}>
                            Changing your body takes time.
                        </Typography>
                        <Typography variant="body2"
                            sx={{ color: "white" }}>
                            That's why we are offering 2 months free.
                        </Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant="h5"
                            sx={{ color: "white", textAlign: "center", fontSize: "42px" }} >
                            300 <span>&#8364;</span>
                        </Typography>
                        <Typography variant="h3" mr={2.6}
                            sx={{
                                color: "black", textAlign: "center",
                                mt: { xs: -6, sm: -6.7, md: -8 }
                            }}>
                            <img src={cross} alt="cancel" width={45} />
                        </Typography>
                        <Typography variant="h4"
                            sx={{ color: "#ffff", textAlign: "center", fontSize: '100px' }}>
                            100 <span>&#8364;</span>
                        </Typography>
                    </Grid>
                </Grid>
                {/* NutritionCard page */}
                <NutritionCard />
            </Grid >
        </ThemeProvider >
    )
}

export default Training
