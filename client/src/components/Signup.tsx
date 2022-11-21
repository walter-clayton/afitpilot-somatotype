import React, { FC, useState } from "react";
import {
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Alert,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material/";
import CssBaseline from "@mui/material/CssBaseline";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { IData } from "../App";

interface ISugnUp {
  data?: IData;
  setData?: ((data: IData | undefined) => void) | undefined;
}

const Signup: FC<ISugnUp> = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailIsIncorrect, setEmailIsIncorrect] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [fetching, setFetching] = React.useState<boolean>(false);
  const [cookies, setCookie] = useCookies(["user"]);


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
          data: props.data,
        },
        { headers: headers }
      );
      setOpen(true);
      setCookie("user", response.data.user, {
        path: "/",
        sameSite: "none",
        secure: true,
        maxAge: 3600,
      });
      setSnackbarMessage(response.data.message);
      props.setData?.(undefined);
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
  const handleChangeEmail = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(String(event.currentTarget.value).toLowerCase());
    if (!isEmailValid(event.currentTarget.value)) {
      setEmailIsIncorrect(true);
    } else {
      setEmailIsIncorrect(false);
    }
    setHasChanges(true);
  };
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
        <Typography variant="subtitle2">
          Before you move on to your profile,would you like an email copy of
          your results?
        </Typography>
        {props.data && (
          <Alert severity="error" sx={{ margin: "20px 0" }}>
            You have to sign up to save the results
          </Alert>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 0.2 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            error={emailIsIncorrect ? true : false}
            onChange={handleChangeEmail}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          {emailIsIncorrect ? (
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              color="#ff0000"
            >
              • Please enter a valid email !
            </Typography>
          ) : null}
          <Button
            type="submit"
            variant="outlined"
            size="large"
            onClick={() => {
              handleClick();
              navigate("/");
            }}
            sx={{ mt: 3, mb: 2, marginRight: 5, marginLeft: 8 }}
            disabled={fetching}
          >
            {fetching ? <CircularProgress size={25} /> : "GO BACK"}
          </Button>
          <Button
            type="submit"
            onClick={handleClick}
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2 }}
            disabled={fetching}
          >
            {fetching ? <CircularProgress size={25} /> : "SIGN UP"}
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
                  navigate("/Login");
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
};

export default Signup;
