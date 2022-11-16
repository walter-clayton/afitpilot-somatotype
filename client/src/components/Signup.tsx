import * as React from "react";
import {
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  FormControlLabel,
  Checkbox,
  CircularProgress 
} from "@mui/material/";
import CssBaseline from "@mui/material/CssBaseline";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const naviguate = useNavigate();
  const [fetching, setFetching] = React.useState<boolean>(false);

  /**
   *
   * @param username String
   * @returns Boolean
   */
  const isUsernameValid = (username: FormDataEntryValue | null): boolean => {
    const isValid: boolean =
      username?.toString().match(/^[a-zA-Z0-9]+$/) !== null;
    return isValid;
  };
  const isEmailValid = (email: FormDataEntryValue | null): boolean => {
    const isValid: boolean =
      email
        ?.toString()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) !== null;
    return isValid;
  };
  const isPasswordValid = (pwd: FormDataEntryValue | null): boolean => {
    const isValid: boolean =
      pwd
        ?.toString()
        .match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/) !==
      null;
    return isValid;
  };
  const isPasswordMatch = (
    pwd: FormDataEntryValue | null,
    confirmPwd: FormDataEntryValue | null
  ): boolean => {
    const isValid: boolean = pwd === confirmPwd;
    return isValid;
  };

  const addUser = async (data: FormData) => {
    try {
      setFetching(true);
      const headers = {
        "Content-Type": "application/json",
        access_key: process.env.REACT_APP_ACCESS_KEY,
      };
      const response = await axios.post(
        process.env.REACT_APP_REGISTER_URL!,
        {
          email: data.get("email"),
          username: data.get("username"),
          password: data.get("password"),
          confirmPassword: data.get("confirmPassword"),
        },
        { headers: headers }
      );
      setOpen(true);
      setSnackbarMessage(response.data.message);
      setFetching(false);
    } catch (error: any) {
      setOpen(true);
      if (error.response) {
        error.response.data.message
          ? setSnackbarMessage(error.response.data.message)
          : setSnackbarMessage(error.response.statusText);
      } else {
        setSnackbarMessage("Error with the server");
      }

      console.log("error ", error);
      setFetching(false);
    }
  };

  //message
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    
    //validation message using snackbar
    if (
      isEmailValid(data.get("email")) &&
      isUsernameValid(data.get("username")) &&
      isPasswordValid(data.get("password")) &&
      isPasswordValid(data.get("confirmPassword")) &&
      isPasswordMatch(data.get("password"), data.get("confirmPassword"))
    ) {
      setOpen(false);
      addUser(data);
      // setSnackbarMessage("You have succesfully Register ");
    } else {
      if (!isPasswordValid(data.get("username"))) {
        setSnackbarMessage("Username is incorrect");
      }
      if (!isEmailValid(data.get("email"))) {
        setSnackbarMessage("Email is incorrect");
      }
      if (!isPasswordValid(data.get("password"))) {
        setSnackbarMessage("Password is incorrect");
      }
      if (!isPasswordMatch(data.get("password"), data.get("confirmPassword"))) {
        setSnackbarMessage("Passwords missmatch");
      }
    }
  };

  // usestate from snackbar messaage
  const [open, setOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="username"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm password"
                type="password"
                id="password2"
                autoComplete="new-password"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I agree to the Terms and Conditions"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            onClick={handleClick}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={fetching}
          >
            {fetching ? <CircularProgress size={25}/> : "Register"}
          </Button>

          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={snackbarMessage}
          />
          <Grid container justifyContent="center">
            <Grid item>
              <Link
                onClick={() => {
                  naviguate("/Login");
                }}
                sx={{ cursor: "pointer" }}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
