import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography, Button, Grid } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import avatar from '../image/manu-tribesman.png';
import TrueCoach from '../image/TrueCoach.png';

const theme = createTheme();

theme.typography.body1 = {
    "@media (max-width:600px)": {
        fontSize: "24px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "25px",
    },
};
theme.typography.body2 = {
    "@media (max-width:600px)": {
        fontSize: "15px",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "17px",
    },
};
const Root = styled('div')(({ theme }) => ({
    "@media (max-width:600px)": {
        height: '270px',
        width: '400px',
        padding: "25px 40px",
    },
    [theme.breakpoints.up('md')]: {
        height: '270px',
        width: '400px',
        padding: "25px 40px",
    },
}));

const NutritionCard = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid item container>
                <Box
                    sx={{
                        marginBottom: 5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        marginTop: "40px",
                    }}>
                    <Stack
                        direction={{ xs: 'column', sm: 'column', md: "row", lg: 'row', xl: 'row' }}
                        spacing={2}>
                        <Paper
                            square
                            elevation={3}
                            sx={{
                                alignItems: 'center',
                                color: "#FFFFFF",
                                borderRadius: '8px',
                                backgroundColor: '#606161'
                            }} >
                            <Root>
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}>
                                    <Box>
                                        <img src={avatar} alt="avatar" width={"120px"} height={"230px"} />
                                    </Box>
                                    <Typography variant="body1">
                                        Personal Coach
                                        <Typography variant="body2">
                                            Our Coaches will be at your service 24/7.
                                        </Typography>
                                    </Typography>
                                </Stack>
                            </Root>
                        </Paper>
                        <Paper
                            elevation={3}
                            sx={{
                                alignItems: 'center',
                                borderRadius: '8px',
                                backgroundColor: '#606161',
                                color: "#FFFFFF",
                            }}>
                            <Root>
                                <Stack
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    spacing={2}>
                                    <Box>
                                        <img src={TrueCoach} alt="TrueCoach" width={"120px"} height={"230px"} />
                                    </Box>
                                    <Typography variant="body1">
                                        Written Plans
                                        <Typography variant="body2">
                                            Complete one meal at a time.
                                        </Typography>
                                    </Typography>
                                </Stack>
                            </Root>
                        </Paper>
                        <Paper
                            elevation={3}
                            sx={{
                                alignItems: 'center',
                                borderRadius: '8px',
                                backgroundColor: '#606161',
                                color: "#FFFFFF",
                            }}>
                            <Root>
                                <Stack
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    spacing={2}>
                                    <Box>
                                        <img src={avatar} alt="avatar" width={"120px"} height={"230px"} />
                                    </Box>
                                    <Typography variant="body1">
                                        Sport Specific
                                        <Typography variant="body2">
                                            Programs that make sense.
                                        </Typography>
                                    </Typography>
                                </Stack>
                            </Root>
                        </Paper>
                    </Stack>
                </Box>
                {/* button */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        marginTop: "40px"
                    }}>
                    <Button
                        sx={{
                            borderRadius: "40px",
                            backgroundColor: "RGB(108, 77, 123)",
                            padding: "14px 30px",
                            fontWeight: 600,
                            width: '600px',
                            textAlign: "start",
                            fontSize: "35px",
                            lineHeight: "40px",
                            marginBottom: "20px",
                            textTransform: "initial",
                            "&.MuiButtonBase-root:hover": {
                                bgcolor: "RGB(108, 77, 123)",
                            },
                        }}
                        href="https://checkout.stripe.com/c/pay/cs_test_b1RT65qsTuAKmtK3UqnBwRRI7Hlw2zGpc11sbN1Bix4bqkNgL3UrYfyMng#fidkdWxOYHwnPyd1blpxYHZxWjA0SEZCR3JOZmFjVjR9aXZSV0NVbD1dVX81UDxJTUQ3PVJRUHRIdjBHQDRLbX9%2FUWt2XE5gUnA0N2pAdH1tb0JHdXV9Qz1Gf0BMckZ9amhIPFJfR2pGRGhXNTVzalRgbGdwTCcpJ3VpbGtuQH11anZgYUxhJz8ncWB2cVo9ckhgXHM0YHY2T1xjTWRgUFInKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqcnJyK2JqamJpYCtmamgqJ3gl" target="_blank"
                        variant="contained"
                    >
                        GET STARTED
                    </Button>
                </Box>
            </Grid >
        </ThemeProvider >
    )
}

export default NutritionCard
