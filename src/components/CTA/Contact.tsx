import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box } from "@mui/material/";
import { Typography, Container } from "@mui/material/";
import Group from "../image/Group.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Container component="main">
        <CssBaseline />
        <Grid container sx={{}}>
          <Grid xs={12} md={6} lg={6} sm={12}>
            <Box
              sx={{
                marginTop: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={Group} alt="sitting girl" />
            </Box>
          </Grid>
          <Grid xs={12} md={6} lg={6} sm={12}>
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                marginRight: "20px",
                marginLeft: "7px",
                // backgroundColor:'#33a474',
              }}
            >
              <Typography component="h1" variant="h4" sx={{ color: "black" }}>
                Contact Us
              </Typography>
              <Typography
                mt={1.5}
                sx={{ lineHeight: 2, fontSize: 19 }}
                variant="subtitle1"
              >
                Please send us your questions.
              </Typography>
              <Typography
                mt={1.5}
                sx={{ display: "flex", justifyContent: "flex-end" }}
                color="inherit"
                variant="body1"
              >
                <Link
                  to=""
                  onClick={() => {
                    window.location.href = "mailto:info.afitpilot@gmail.com";
                  }}
                >
                  info.afitpilot@gmail.com
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
