import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Grid,
  Box,
  Button,
  Typography,
  Stack,
  CircularProgress,
  useMediaQuery,
} from "@mui/material/";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const theme = createTheme();
theme.typography.h1 = {
  "@media (max-width:600px)": {
    fontSize: "36px",
    lineHeight: "46px",
    margin: "0px 0px 10px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "54px",
  },
};
const Header = () => {
  const navigate = useNavigate();
  const [fetching, setFetching] = useState<boolean>(false);

  const [totalUsers, setTotalUsers] = useState<string>("");
  const [totalSomatotypes, setTotalSomatotypes] = useState<string>("");
  const [uniqueSomatotypes, setUniqueSomatotypes] = useState<string>("");

  const xxxs = useMediaQuery("(max-width:320px)");

  useEffect(() => {
    getAllUsers();
    getAllSomatotypes();
  }, []);

  const getAllUsers = async () => {
    const headers = {
      "Content-Type": "application/json",
      access_key: process.env.REACT_APP_ACCESS_KEY,
    };

    try {
      setFetching(true);
      const response = await axios.get(process.env.REACT_APP_GETALLUSERS!, {
        headers: headers,
      });
      setTotalUsers(String(response.data.count));
      setFetching(false);
    } catch (error) {
      // if (error.response) {
      //     error.response.data.message
      //       ? setSnackbarMessage(error.response.data.message)
      //       : setSnackbarMessage(error.response.statusText);
      //   } else {
      //     setSnackbarMessage("Error with the server");
      //   }
      console.log("error ", error);
      setTotalUsers("ERR");
      setFetching(false);
    }
  };

  const getAllSomatotypes = async () => {
    const headers = {
      "Content-Type": "application/json",
      access_key: process.env.REACT_APP_ACCESS_KEY,
    };

    try {
      setFetching(true);
      const response = await axios.get(
        process.env.REACT_APP_GETALLSOMATOTYPES!,
        {
          headers: headers,
        }
      );
      setTotalSomatotypes(String(response.data.count));
      setUniqueSomatotypes(String(response.data.uniqueSomatotypes));
      setFetching(false);
    } catch (error) {
      // if (error.response) {
      //     error.response.data.message
      //       ? setSnackbarMessage(error.response.data.message)
      //       : setSnackbarMessage(error.response.statusText);
      //   } else {
      //     setSnackbarMessage("Error with the server");
      //   }
      console.log("error ", error);
      setUniqueSomatotypes("ERR");
      setTotalSomatotypes("ERR");
      setFetching(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        sx={{
          backgroundColor: "#f6f6f7",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "25px",
        }}
      >
        <Grid item xs={12} width={"100%"}>
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "black",
                textAlign: "center",
                fontSize: "54px",
                marginBottom: "20px",
                lineHeight: "71px",
                fontWeight: 600,
              }}
            >
              We were built differently.{" "}
            </Typography>
            <Typography
              mb={2}
              variant="body1"
              sx={{
                color: "black",
                textAlign: "center",
                fontSize: "20px",
                lineHeight: "40px",
                marginBottom: "30px",
                fontWeight: 400,
              }}
            >
              Locate your own uniqueness{" "}
            </Typography>
            <Stack>
              <Button
                sx={{
                  borderRadius: "40px",
                  backgroundColor: "RGB(108, 77, 123)",
                  fontSize: "20px",
                  textTransform: "initial",
                  padding: xxxs ? "15px" : "20px",
                  width: xxxs ? "200px" : "250px",
                  lineHeight: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  marginBottom: "30px",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "RGB(108, 77, 123)",
                  },
                }}
                variant="contained"
                onClick={() => {
                  navigate("/Test");
                  window.scrollTo(0, 0);
                }}
              >
                Take the Test <ArrowForwardSharpIcon />
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} width={"100%"} mt={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Typography
              variant="h1"
              sx={{ color: "#33a474" }}
              textAlign={"center"}
            >
              {fetching ? <CircularProgress size={25} /> : totalSomatotypes}
              <Typography sx={{ color: "black" }}>Tests taken</Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Typography
              variant="h1"
              sx={{ color: "#4298b4" }}
              textAlign={"center"}
            >
              {fetching ? <CircularProgress size={25} /> : totalUsers}
              <Typography sx={{ color: "black" }}>Avatars Created</Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Typography
              variant="h1"
              sx={{ color: "#e4ae3a" }}
              textAlign={"center"}
            >
              {fetching ? <CircularProgress size={25} /> : uniqueSomatotypes}
              <Typography sx={{ color: "black" }}>
                {xxxs ? `Unique Somatotypes` : "Somatotypes"}
              </Typography>{" "}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Header;
