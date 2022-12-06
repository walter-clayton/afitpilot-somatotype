import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Button } from "@mui/material/";
import { Typography, Container } from "@mui/material/";
import Stack from "@mui/material/Stack";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Group from "../image/Group.svg";

const theme = createTheme();
theme.typography.h2 = {
    "@media (min-width:600px)": {
        fontSize: "2.5rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "2.9rem",
    },
};
const FooterCTA = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Container maxWidth="xl">
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <Grid
                        container
                        sx={{
                            backgroundColor: "#f6f6f7",
                            marginTop: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "400px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                width: "100%",
                                height: "350px",
                            }}
                        >
                            <img src={Group} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} sm={12}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#f6f6f7",
                            }}
                        >
                            <Typography
                                variant="h2"
                                sx={{ color: "black", textAlign: "center" }}
                            >
                                Curious to know your body shape?
                            </Typography>
                            <Stack>
                                <Button
                                    sx={{
                                        borderRadius: "20px",
                                        backgroundColor: "purple",
                                        padding: 1,
                                        mb: 3,
                                        mt: 1
                                    }}
                                    variant="contained"
                                    onClick={() => {
                                        navigate("/Test");
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    Take the test <ArrowForwardSharpIcon />
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                </ThemeProvider>
            </Container>
        </div>
    );
};

export default FooterCTA;
