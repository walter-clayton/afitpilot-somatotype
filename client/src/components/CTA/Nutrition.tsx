import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Typography, } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import avatar from '../image/manu-tribesman.png';
import NutritionCard from './NutritionCard';
import CloseIcon from '@mui/icons-material/Close';

const theme = createTheme();
theme.typography.h1 = {
    "@media (max-width:600px)": {
        fontSize: "34px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "54px",
    },
};
theme.typography.body1 = {
    "@media (min-width:600px)": {
        fontSize: "15px"
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "22px",
    },
};
theme.typography.body2 = {
    "@media (min-width:600px)": {
        fontSize: "14px"
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "24px",
    },
}
const Nutrition = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid item container>
                <Grid item
                    sx={{
                        backgroundColor: "#33A474",
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
                            Feed your Body
                        </Typography>
                        <Typography
                            mb={2}
                            variant="body2"
                            sx={{
                                color: "white",
                                textAlign: "center",
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
                    }}>
                    <Grid item md={3}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                        }}>
                        <img src={avatar} alt="" width={"100px"} />
                    </Grid>
                    <Typography
                        sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' }, color: "#258B60", margin: 7, }}
                        variant="h1">
                        <span>&#x2192;</span>
                    </Typography>
                    <Typography
                        sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' }, color: "#258B60" }}
                        variant="h1">
                        <span>&#8595;</span>
                    </Typography>
                    <Grid item md={3}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <img src={avatar} alt="" width={"100px"} />
                    </Grid>
                </Grid>
                {/* Instruction */}
                <Grid container spacing={2}
                    sx={{
                        backgroundColor: "#33A474",
                        marginTop: 9,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Grid item md={8}>
                        <Typography variant="h3"
                            sx={{
                                color: "#FFFFFF",
                                mb: 2,
                            }}>
                            3 MONTHS NUTRITION PROGRAM
                        </Typography>
                        <Typography variant="body1"
                            sx={{ color: "#FFFFFF", mb: 2 }}>
                            Changing your body takes time.
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "white" }}>
                            That's why we are offering 2 months free.
                        </Typography>
                    </Grid>
                    <Grid item md={4}>
                        <Typography variant="h4"
                            sx={{ color: "white", textAlign: "center" }} >
                            300 <span>&#8364;</span>
                        </Typography>
                        <Typography variant="h3" mt={-6}
                            sx={{ color: "black", textAlign: "center" }}>
                            <CloseIcon sx={{ fontSize: 50 }} />
                        </Typography>
                        <Typography variant="h3"
                            sx={{ color: "#ffff", textAlign: "center" }}>
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

export default Nutrition
