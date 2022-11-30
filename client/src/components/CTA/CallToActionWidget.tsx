import React from "react";
import Box from "@mui/material/Box";
import { Typography, Container, Grid, Button, Link } from "@mui/material/";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { useNavigate } from "react-router-dom";

const CallToWidget = () => {
  const navigate = useNavigate();

  return (
    <Container component="main">
      <CssBaseline />
      <Grid container sx={{ backgroundColor: "#f6f6f7", marginTop: 3 }}>
        <Grid xs={12} md={12} lg={12} sm={12} xl={12}>
          <Box
            sx={{
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography component="h1" variant="h4" sx={{ color: "black" }}>
              New Here?
            </Typography>
            <Stack mt={1.5} spacing={2} direction="row">
              <Button
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "green",
                  "&.MuiButtonBase-root:hover": { bgcolor: "green" },
                }}
                variant="contained"
                onClick={() => {
                  navigate("/");
                  window.scrollTo(0, 0);
                }}
              >
                Take the test <ArrowForwardSharpIcon />
              </Button>
            </Stack>
            <Typography mt={1.5} mb={1.5} variant="body2">
              Already have your result?
              <Link
                onClick={() => {
                  navigate("/Login");
                  window.scrollTo(0, 0);
                }}
                sx={{ cursor: "pointer", textDecoration: "none" }}
                variant="body2"
              >
                {"Log in."}
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CallToWidget;
