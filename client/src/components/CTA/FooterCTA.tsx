import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Button, Typography } from "@mui/material/";
import Stack from "@mui/material/Stack";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Group from "../image/Group.svg";

const theme = createTheme();
theme.typography.h2 = {
    "@media (max-width:600px)": {
        fontSize: "30px",
        lineHeight: '42px',
        margin: '15px 0px',
        padding: '0px 15px'
    },

};
const FooterCTA = () => {
    const navigate = useNavigate();

    return (
        <Box>
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
                            sx={{
                                color: "black", textAlign: "center", fontWeight: 600, fontSize: "38px", margin: "20px 0px 30px", lineHeight: '56px'
                            }}
                        >
                            Curious to know your body shape?
                        </Typography>
                        <Stack>
                            <Button
                                sx={{
                                    borderRadius: "40px",
                                    backgroundColor: "RGB(108, 77, 123)",
                                    padding: "19px 50px",
                                    fontWeight: 600,
                                    textAlign: "start",
                                    fontSize: "20px",
                                    lineHeight: "40px",
                                    margin: "0px 0px 40px",
                                    textTransform: "initial",
                                    "&.MuiButtonBase-root:hover": { bgcolor: "RGB(108, 77, 123)" },
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
        </Box>
    );
};

export default FooterCTA;