import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography, Button } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import avatar from '../image/manu-tribesman.png';
import TrueCoach from '../image/TrueCoach.png';

const theme = createTheme();
theme.typography.h3 = {
    "@media (max-width:600px)": {
        fontSize: "25px",
        textAlign: "center"
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "40px",
    },
};
theme.typography.body1 = {
    "@media (max-width:600px)": {
        fontSize: "15px",
        textAlign: "center"
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "20px",
    },
};
const Root = styled('div')(({ theme }) => ({
    "@media (max-width:600px)": {
        height: '260px',
        width: '300px',
        padding: 1,
    },
    [theme.breakpoints.up('md')]: {
        height: '260px',
        width: '300px',
        padding: 5,
    },
}));

const Nutrition = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    marginBottom: 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "350px",
                    mt: { xs: 40, sm: 40, md: 0, lg: 0, xl: 0 }
                }}>
                <Stack
                    direction={{ xs: 'column', sm: 'column', md: "row", lg: 'row', xl: 'row' }}
                    spacing={5} >
                    <Paper
                        square
                        elevation={3}
                        sx={{
                            alignItems: 'center',
                            color: "#FFFFFF",
                            paddingTop: "20px",
                            borderRadius: '8px',
                            backgroundColor: '#606161'
                        }} >
                        <Root>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}>
                                <Typography variant="h6">
                                    <Box>
                                        <img src={avatar} alt="" width={"100px"} />
                                    </Box>
                                </Typography>
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
                            paddingTop: "20px",
                            borderRadius: '8px',
                            backgroundColor: '#606161',
                            color: "#FFFFFF",
                        }} >
                        <Root>
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={2}>
                                <Typography variant="h6">
                                    <Box>
                                        <img src={TrueCoach} alt="" width={"130px"} height={"230px"} />
                                    </Box>
                                </Typography>
                                <Typography variant="body1">
                                    Written Plans
                                    <Typography variant="body2">
                                        Complete one meal at a time
                                    </Typography>
                                </Typography>
                            </Stack>
                        </Root>
                    </Paper>
                    <Paper
                        elevation={3}
                        sx={{
                            alignItems: 'center',
                            paddingTop: "20px",
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
                                <Typography variant="h6">
                                    <Box>
                                        <img src={avatar} alt="" width={"100px"} />
                                    </Box>
                                </Typography>
                                <Typography variant="body1" >
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
                    height: "50px",
                    mt: { xs: 40, sm: 40, md: 0, lg: 0, xl: 0 }
                }}>
                <Button
                    sx={{
                        borderRadius: "40px",
                        backgroundColor: "RGB(108, 77, 123)",
                        padding: "14px 60px",
                        fontWeight: 600,
                        textAlign: "start",
                        fontSize: "20px",
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
        </ThemeProvider >
    )
}

export default Nutrition
