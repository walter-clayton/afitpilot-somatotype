import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Typography } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const theme = createTheme();
theme.typography.h3 = {
    "@media (min-width:600px)": {
        fontSize: "3.5rem"
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "2.9rem",
    },
};
const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        height: '50px',
    },
    [theme.breakpoints.up('md')]: {
        height: '180px',
        width: '220px'
    },
}));

const HeaderTestpage = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid item
                container
                sx={{
                    backgroundColor: "#f6f6f7",
                    marginBottom: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "350px",
                }}
            >
                <Grid item xs={12} md={12} lg={12} xl={12} sm={12}>
                    <Box
                        sx={{
                            marginTop: 3,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                        <Typography
                            variant="h3"
                            sx={{
                                color: "black",
                                textAlign: "center",
                                mb: 2,
                            }}>
                            Free Somatotype Test
                        </Typography>
                        <Typography
                            mb={2}
                            variant="subtitle1"
                            sx={{
                                color: "black",
                                textAlign: "center",
                                mb: 4,
                            }} >
                            Find your body shape {" "}
                        </Typography>
                    </Box>
                    <Stack
                        direction={{ xs: 'column', sm: 'column', md: "row", lg: 'row', xl: 'row' }}
                        justifyContent="space-evenly"
                        alignItems="stretch"
                        spacing={2}
                    >
                        <Paper
                            square
                            elevation={3}
                            sx={{
                                alignItems: 'center',
                                paddingTop: "20px",
                                borderRadius: '8px'
                            }} >
                            <Root>
                                <Typography textAlign={'center'} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }} variant="h6">
                                    Complete the test
                                </Typography>
                                <Typography textAlign={'center'} sx={{
                                    paddingTop: { sm: 1, md: 3, lg: 3, xl: 3 }
                                }}>Take accurate measurements.
                                </Typography>
                            </Root>
                        </Paper>
                        <Paper
                            elevation={3}
                            sx={{
                                alignItems: 'center',
                                paddingTop: "20px",
                                borderRadius: '8px'
                            }} >
                            <Root>
                                <Typography textAlign={'center'} sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }} variant="h6"
                                >View detailed results
                                </Typography>
                                <Typography textAlign={'center'} sx={{
                                    paddingTop: { sm: 1, md: 3, lg: 3, xl: 3 }
                                }}>Learn where you are.
                                </Typography>
                            </Root>
                        </Paper>
                        <Paper
                            elevation={3}
                            sx={{
                                alignItems: 'center',
                                paddingTop: "20px",
                                borderRadius: '8px'
                            }}>
                            <Root>
                                <Typography textAlign={'center'} sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }} variant="h6"
                                >Unlock your potential
                                </Typography>
                                <Typography textAlign={'center'}
                                    sx={{
                                        paddingTop: { md: 3, lg: 3, xl: 3 },
                                    }}>Find out how you can optimise your body shape
                                </Typography>
                            </Root>
                        </Paper>
                    </Stack>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default HeaderTestpage;
