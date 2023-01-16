import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, useMediaQuery } from "@mui/material/";
import { Typography, Container } from "@mui/material/";
import contact from "../../image/contact-us.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  const medium = useMediaQuery("(max-width:899px)");
  const small = useMediaQuery("(max-width:599px)");
  const extraSmall = useMediaQuery("(max-width:449px)");
  return (
    <div>
      <Container component="main">
        <CssBaseline />
        <Grid
          container
          sx={{
            marginTop: { sm: 2, md: 8, xs: 2 },
          }}
        >
          <Grid
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            order={{ sm: 2, xs: 2, md: 1, lg: 1 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={contact}
                alt="sitting girl"
                style={{
                  maxHeight: "320px",
                  width: medium
                    ? small
                      ? extraSmall
                        ? "65%"
                        : "60%"
                      : "100%"
                    : "100%",
                }}
              />
            </Box>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            order={{ sm: 1, xs: 1, md: 2, lg: 2 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: { md: 7, lg: 7, sm: 4, xs: 4 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: "black",
                    fontWeight: 400,
                    fontSize: medium
                      ? small
                        ? extraSmall
                          ? "20px"
                          : "28px"
                        : "40px"
                      : "40px",
                    textAlign: "start",
                  }}
                >
                  Contact Us
                </Typography>
                <Typography
                  mt={1.5}
                  sx={{
                    fontSize: medium
                      ? small
                        ? extraSmall
                          ? "17px"
                          : "20px"
                        : "20px"
                      : "25px",
                  }}
                >
                  Please send us your questions.
                </Typography>
                <Typography
                  mt={1.5}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    fontSize: medium
                      ? small
                        ? extraSmall
                          ? "17px"
                          : "20px"
                        : "18px"
                      : "20px",
                  }}
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
