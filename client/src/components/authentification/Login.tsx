import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Link,
  Grid,
  Box,
  Button,
  CircularProgress,
  Alert,
  autocompleteClasses,
} from "@mui/material/";
import { Typography, Container } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputAdornment, TextField } from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const theme = createTheme();
export default function Login(props: any) {
  const navigate = useNavigate();
  const [fetching, setFetching] = React.useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user", "data"]);

  //validation
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailIsIncorrect, setEmailIsIncorrect] = useState(false);
  const [passwordIsIncorrect, setPasswordIsIncorrect] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  /**
   * @param email String
   * @returns Boolean
   */
  const isEmailValid = (email: FormDataEntryValue | null): boolean => {
    const isValid: boolean =
      email
        ?.toString()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) !== null;
    return isValid;
  };
  /**
   * password must contains at least: 6 characters, 1 lowercase letter, 1 uppercase letter, 1 symbol as !@#$%^&* and 1 number
   * @param pwd String
   * @returns Boolean
   */
  const isPasswordValid = (pwd: FormDataEntryValue | null): boolean => {
    const isValid: boolean =
      pwd
        ?.toString()
        .match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/) !==
      null;
    return isValid;
  };

  const login = async (data: FormData) => {
    try {
      setOpen(false);
      setFetching(true);
      const headers = {
        "Content-Type": "application/json",
        access_key: process.env.REACT_APP_ACCESS_KEY,
      };
      const response = await axios.post(
        process.env.REACT_APP_LOGIN_URL!,
        {
          email: data.get("email"),
          password: data.get("password"),
          data: props.data,
        },
        {
          headers: headers,
        }
      );

      setFetching(false);
      removeCookie("data", { path: "/", sameSite: "none", secure: true });
      const now = new Date();
      const seconds = Math.floor(now.getTime() / 1000);
      setCookie(
        "user",
        { ...response.data.user, createdAt: seconds },
        {
          path: "/",
          sameSite: "none",
          secure: true,
          maxAge: 3600,
        }
      );

      props.setOpen(true);
      props.setSnackbarMessage(response.data.message);
      props.setResultsSaved?.(response.data.dataSaved);
      props.setData?.(undefined);
      navigate("/");
      window.scrollTo(0, 0);
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Snackbar message for validation
    if (
      isEmailValid(data.get("email")) &&
      isPasswordValid(data.get("password"))
    ) {
      login(data);
    } else {
      if (!isEmailValid(data.get("email"))) {
        setSnackbarMessage("Email is incorrect");
      } else if (!isPasswordValid(data.get("password"))) {
        setSnackbarMessage("Password is incorrect");
      }
    }
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  //usestate for Snackbar
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
  const handleChangePassword = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.currentTarget.value);
    if (!isPasswordValid(event.currentTarget.value)) {
      setPasswordIsIncorrect(true);
    } else {
      setPasswordIsIncorrect(false);
    }
    setHasChanges(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4" mb={1.5}>
            Login
          </Typography>
          <Typography variant="subtitle1">
            Not a member yet? Create a free profile by taking our
            <Link
              onClick={() => {
                navigate("/test");
                window.scrollTo(0, 0);
              }}
              sx={{ textDecoration: "none", cursor: "pointer" }}
              variant="subtitle1"
            >
              {" "}
              free somatotype test
            </Link>
            .
          </Typography>
          {props.data && (
            <Alert severity="error" sx={{ margin: "20px 0" }}>
              You have to log in to save the results
            </Alert>
          )}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              onChange={handleChangeEmail}
              error={emailIsIncorrect ? true : false}
              required
              fullWidth
              id="email"
              label=" Email Address"
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

            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleChangePassword}
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
            {passwordIsIncorrect ? (
              <>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  color="#ff0000"
                >
                  • Password must contains at least: 6 characters !
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  color="#ff0000"
                >
                  • Password must contains 1 lowercase letter !
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  color="#ff0000"
                >
                  • Password must contains 1 uppercase letter !
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  color="#ff0000"
                >
                  • Password must contains 1 symbol as !@#$%^&* !
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  color="#ff0000"
                >
                  • Password must contains 1 number !
                </Typography>
              </>
            ) : null}
            <Button
              type="submit"
              variant="contained"
              onClick={handleClick}
              sx={{
                backgroundColor: "RGB(108, 77, 123)",
                borderRadius: "40px",
                width: "80%",
                mx: "10%",
                mt: 3,
                fontSize: "18px",
                padding: "14px 40px",
                fontWeight: 600,
                textTransform: "initial",
                lineHeight: "30px",
                textAlign: "center",
                "&.MuiButtonBase-root:hover": { bgcolor: "RGB(108, 77, 123)" },
              }}
              disabled={fetching}
            >
              {fetching ? <CircularProgress size={25} /> : "Log In"}
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message={snackbarMessage}
            />
            <Grid container>
              <Grid item xs textAlign={"center"} mt={3}>
                <Link
                  href="/Forget"
                  sx={{ textAlign: "Center", textDecoration: "none" }}
                  variant="subtitle1"
                >
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
