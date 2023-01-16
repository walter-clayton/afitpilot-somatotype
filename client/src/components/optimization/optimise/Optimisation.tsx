import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Typography, useMediaQuery } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeTraining from "../../../image/HomeTraining.svg";
import Nutrition from "../../../image/Nutrition.svg";
import cross from "../../../image/cross.png";
import OptimiseCard from "./OptimiseCard";

const theme = createTheme();
theme.typography.h1 = {
  "@media (max-width:600px)": {
    fontSize: "30px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "54px",
  },
};
theme.typography.h3 = {
  "@media (max-width:600px)": {
    fontSize: "25px",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "44px",
  },
};
theme.typography.h4 = {
  "@media (max-width:700px)": {
    fontSize: "60px",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "60px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "100px",
  },
};
theme.typography.h5 = {
  "@media (max-width:700px)": {
    fontSize: "30px",
  },
};
theme.typography.body1 = {
  "@media (max-width:600px)": {
    fontSize: "20px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
  },
};

theme.typography.body2 = {
  "@media (max-width:600px)": {
    fontSize: "15px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
  },
};

const Optimisation = () => {
  const medium = useMediaQuery("(min-width:769px)");
  const small = useMediaQuery("(max-width:768px)");
  const extraSmall = useMediaQuery("(max-width:449px)");
  const xxSmall = useMediaQuery("(max-width:399px)");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid item container>
        <Grid
          item
          sx={{
            backgroundColor: "#DCB051",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "350px",
          }}
        >
          <Box
            sx={{
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "white",
                textAlign: "center",
                pb: 2,
              }}
            >
              Optimisation
            </Typography>
            <Typography
              mb={2}
              variant="body2"
              sx={{
                color: "white",
                textAlign: "center",
                fontSize: "24px",
                px: 2,
              }}
            >
              Become a better athlete by following our <br></br> nutrition and
              training program.
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            mt: { xs: 1, sm: -4, md: 1, lg: 1 },
            mb: { xs: -5, sm: -6, md: 1, lg: 1 },
          }}
        >
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              mb: xxSmall ? -10 : "",
            }}
          >
            <img
              src={Nutrition}
              alt="Nutrition"
              style={{
                maxHeight: "600px",
                height: "300px",
                width: medium
                  ? small
                    ? extraSmall
                      ? "65%"
                      : "70%"
                    : "75%"
                  : "75%",
              }}
            />
          </Grid>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <img
              src={HomeTraining}
              alt="Training"
              style={{
                maxHeight: "600px",
                height: "300px",
                width: medium
                  ? small
                    ? extraSmall
                      ? "65%"
                      : "70%"
                    : "75%"
                  : "75%",
              }}
            />
          </Grid>
        </Grid>
        {/* Instruction */}
        <Grid
          container
          sx={{
            marginTop: { xs: "0px", sm: "50px" },
          }}
        >
          <Grid
            item
            sm={8}
            xs={12}
            sx={{
              padding: "50px 0",
              backgroundColor: "#DCB051",
              marginTop: { xs: "50px", sm: "0" },
              borderRight: 6,
              borderColor: "#DCB051",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: medium ? "start" : "center",
                justifyContent: "center",
                flexDirection: "column",
                paddingLeft: medium ? "50px" : "",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#FFFFFF",
                  mb: 2,
                  fontSize: "54px",
                  textAlign: medium ? "start" : "center",
                  lineHeight: 1.2,
                }}
              >
                3 MONTHS NUTRITION PROGRAM & TRAINING PROGRAM
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#FFFFFF",
                  mb: 2,
                  textAlign: medium ? "start" : "center",
                }}
              >
                Changing your body takes time.
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "white", textAlign: medium ? "start" : "center" }}
              >
                That's why we are offering 2 months free.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            sm={4}
            xs={12}
            sx={{
              padding: "50px 0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: { xs: "50px", sm: "0" },
              backgroundColor: "#DCB051",
              borderLeft: 6,
              borderColor: "#DCB051",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{ color: "white", textAlign: "center", fontSize: "42px" }}
              >
                900 <span>&#8364;</span>
              </Typography>
              <Typography
                variant="h3"
                mr={2.6}
                sx={{
                  color: "black",
                  textAlign: "center",
                  mt: { xs: -6, sm: -6.7, md: -8 },
                }}
              >
                <img src={cross} alt="cancel" width={45} />
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "#ffff",
                  textAlign: "center",
                  fontSize: "100px",
                  fontWeight: "bold",
                }}
              >
                300 <span>&#8364;</span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/*OptimiseCard page */}
        <OptimiseCard />
      </Grid>
    </ThemeProvider>
  );
};

export default Optimisation;
