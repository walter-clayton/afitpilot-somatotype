import React from "react";
import { Box, Button, Typography, Stack, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Errorpage from "../../image/Errorpage.svg";

const Error404 = () => {
  const navigate = useNavigate();
  const theme = createTheme();
  theme.typography.h2 = {
    "@media (min-width:600px)": {
      fontSize: "35px",
      fontWeight: 600,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "44px",
      fontWeight: 600,
    },
  };
  return (
    <Container>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          Height: "100vh",
          mt: { md: 4, xs: 0, sm: 4 },
        }}
      >
        <img src={Errorpage} alt="Error 404 page" width={"100%"} height={450} />
        <ThemeProvider theme={theme}>
          <Typography variant="h2" mb={3} sx={{ color: "black" }}>
            Oops.This page doesn’t exist.
          </Typography>
          <Typography variant="h6" mb={2} sx={{ color: "black" }}>
            Perhaps you'd like to...
          </Typography>
        </ThemeProvider>
        <Stack
          direction={{
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
            xxl: "row",
          }}
          mb={5}
          spacing={2}
        >
          <Button
            variant="contained"
            sx={{
              maxWidth: "sm",
              color: "white",
              backgroundColor: "RGB(108, 77, 123)",
              padding: "15px 30px",
              fontWeight: 600,
              textAlign: "center",
              lineHeight: "30px",
              fontSize: "18px",
              borderRadius: "40px",
              textTransform: "initial",
              minWidth: "140px",
              "&.MuiButtonBase-root:hover": { bgcolor: "RGB(108, 77, 123)" },
            }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/Test");
            }}
          >
            Take the Test
          </Button>
          <Button
            variant="contained"
            sx={{
              maxWidth: "sm",
              color: "white",
              backgroundColor: "RGB(52, 121, 144)",
              padding: "15px 30px",
              fontWeight: 600,
              textAlign: "center",
              lineHeight: "30px",
              fontSize: "18px",
              borderRadius: "40px",
              textTransform: "initial",
              minWidth: "140px",
              "&.MuiButtonBase-root:hover": { bgcolor: "RGB(52, 121, 144)" },
            }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/Types");
            }}
          >
            Explore Somatotypes
          </Button>
          <Button
            variant="contained"
            sx={{
              maxWidth: "sm",
              color: "white",
              backgroundColor: "RGB(40, 131, 92)",
              padding: "15px 30px",
              fontWeight: 600,
              textAlign: "center",
              lineHeight: "30px",
              fontSize: "18px",
              borderRadius: "40px",
              textTransform: "initial",
              minWidth: "220px",
              "&.MuiButtonBase-root:hover": { bgcolor: "RGB(40, 131, 92)" },
            }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/Contact");
            }}
          >
            Contact us
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Error404;
