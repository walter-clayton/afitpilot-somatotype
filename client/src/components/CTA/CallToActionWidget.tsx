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
      <Grid
        container
        sx={{ backgroundColor: "#f6f6f7", marginTop: 3, borderRadius: "10px" }}
      >
        <Grid item xs={12} md={12} lg={12} sm={12} xl={12}>
          <Box
            sx={{
              padding: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: "black" }}>
              New Here?
            </Typography>
            <Stack mt={1.5} spacing={2} direction="row">
              <Button
                sx={{
                  borderRadius: "40px",
                  backgroundColor: "RGB(108, 77, 123)",
                  fontSize: "16px",
                  fontWeight: 600,
                  textTransform: "initial",
                  textAlign: "center",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "RGB(108, 77, 123)",
                  },
                  width: "160px",
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
            <Typography mt={1.5} variant="body2">
              Already have your result?
            </Typography>
            <Link
              onClick={() => {
                navigate("/Login");
                window.scrollTo(0, 0);
              }}
              sx={{ cursor: "pointer", textDecoration: "none" }}
              variant="body2"
            >
              {"Log in"}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CallToWidget;
