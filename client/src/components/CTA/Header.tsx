import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Button } from "@mui/material/";
import { Typography, Container } from "@mui/material/";
import Stack from '@mui/material/Stack';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rectangle from './image/Rectangle 261 (2).svg'

const theme = createTheme();
theme.typography.h1 = {
    '@media (min-width:600px)': {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.9rem',
    },
};
const Header = () => {
    return (
        <div>
            <Container maxWidth="xl">
                <CssBaseline />
                {/* <Grid sx={{margin:0,marginBottom:0,padding:0}}>
                <img src={rectangle} alt="" />
                </Grid> */}
                <Grid container sx={{
                    backgroundColor: '#4298b4', marginTop: 8, display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: 'center',
                    width: "100%",
                    height: "450px"
                }} >
                    <Grid xs={12} md={12} lg={12} sm={12}>
                        <Box
                            sx={{
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: 'center',
                            }}
                        >
                            <Typography component="h1" variant="h1" sx={{ color: 'white', textAlign: 'center', fontSize: '44px', mb: 2 }}>
                                It’s so incredible to finally be understood.”                        </Typography>
                            <Typography mb={2} variant="subtitle1" sx={{ color: 'white', textAlign: 'center', fontSize: '20px', mb: 4 }}>
                                Only 10 minutes to get a “freakishly accurate” description of who you are and why you do things the way you do                        </Typography>
                            <Stack>
                                <Button sx={{ borderRadius: '20px', backgroundColor: 'purple', padding: 1 }} variant="contained" >Take the test <ArrowForwardSharpIcon /></Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
                <ThemeProvider theme={theme}>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={6} md={3} lg={3}>
                                <Typography variant="h1" sx={{ color: '#4298b4' }}>
                                    157+
                                    <Typography variant="subtitle1" sx={{ color: 'black' }} >
                                        Tests taken today
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3}>
                                <Typography variant="h1" sx={{ color: '#e4ae3a' }}>
                                    59+
                                    <Typography variant="subtitle1" sx={{ color: 'black' }}>
                                        Tests taken in Belgium
                                    </Typography>
                                </Typography>                        </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3}>
                                <Typography variant="h1" sx={{ color: '#33a474' }}>
                                    40M+
                                    <Typography variant="subtitle1" sx={{ color: 'black' }}>
                                        Total tests taken
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} md={3} lg={3}>
                                <Typography variant="h1" sx={{ color: '#88619a' }}>
                                    59%
                                    <Typography variant="subtitle1" sx={{ color: 'black' }}>
                                        Results rated as accurate or very accurate
                                    </Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </ThemeProvider>
            </Container>
        </div>
    )
}

export default Header
