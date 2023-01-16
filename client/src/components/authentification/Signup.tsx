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
  InputLabel,
  useMediaQuery,
} from "@mui/material/";
import CssBaseline from "@mui/material/CssBaseline";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { IData } from "../../App";

interface ISignUp {
  data?: IData;
  setData?: ((data: IData | undefined) => void) | undefined;
  setOpen?: (bool: boolean) => void;
  setSnackbarMessage?: (msg: string) => void;
  setResultsSaved?: (bool: boolean) => void;
}

const Signup: FC<ISignUp> = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailIsIncorrect, setEmailIsIncorrect] = useState(false);
  const [nameIsIncorrect, setNameIsIncorrect] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [fetching, setFetching] = React.useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user", "data"]);

  const xxs = useMediaQuery("(max-width:450px)");

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

  const isNameValid = (name: string): boolean => {
    const isValid: boolean = name !== "" && /^[a-z\s]*$/.test(name);

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
          name: name,
          data: props.data,
        },
        { headers: headers }
      );
      setOpen(true);
      setCookie(
        "user",
        { ...response.data.user },
        {
          path: "/",
          sameSite: "none",
          secure: true,
          maxAge: 3600,
        }
      );
      props.setOpen?.(true);
      props.setSnackbarMessage?.(response.data.message);
      props.setResultsSaved?.(response.data.dataSaved);
      props.setData?.(undefined);
      setFetching(false);
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

  const handleChangeName = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(String(event.currentTarget.value).toLowerCase());
    if (!isNameValid(event.currentTarget.value.toLowerCase())) {
      setNameIsIncorrect(true);
    } else {
      setNameIsIncorrect(false);
    }
    setHasChanges(true);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    //validation message using snackbar
    if (props.data && isEmailValid(data.get("email")) && isNameValid(name)) {
      setOpen(false);
      addUser(data);
      // setSnackbarMessage("You have succesfully Register ");
    } else {
      if (!isEmailValid(data.get("email"))) {
        setSnackbarMessage("Email is incorrect");
      } else if (!isNameValid(name)) {
        setSnackbarMessage("Name is incorrect");
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
        <Typography component="h1" variant="h4">
          Sign up
        </Typography>
        {props.data ? (
          <Alert severity="error" sx={{ margin: "20px 0" }}>
            You must sign up to save your results.
          </Alert>
        ) : (
          <Alert severity="error" sx={{ margin: "20px 0" }}>
            You must submit results to sign up.
            <br />
            Take the test
            <span> </span>
            <Link
              onClick={() => {
                navigate("/Test");
              }}
            >
              here
            </Link>
            <span> !</span>
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                minWidth: "max-content",
                marginRight: "15px",
                color: "grey",
              }}
            >
              Your name is
            </Box>
            <TextField
              margin="normal"
              required
              fullWidth
              error={nameIsIncorrect ? true : false}
              onChange={handleChangeName}
              id="name"
              label="Your name"
              name="name"
              autoComplete="name"
              autoFocus
            />
          </Box>
          {nameIsIncorrect ? (
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              color="#ff0000"
            >
              • Please enter a valid name (just letters) !
            </Typography>
          ) : null}
          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            spacing={2}
            sx={{ my: 2 }}
          >
            <Grid item>
              <Button
                type="submit"
                size="large"
                sx={{
                  maxWidth: "sm",
                  color: "white",
                  backgroundColor: "RGB(108, 77, 123)",
                  padding: "7px 15px",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: "30px",
                  fontSize: "18px",
                  borderRadius: "40px",
                  textTransform: "initial",
                  minWidth: "140px",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "RGB(108, 77, 123)",
                  },
                }}
                onClick={() => {
                  handleClick();
                  navigate("/");
                  window.scrollTo(0, 0);
                }}
                disabled={fetching}
              >
                GO BACK
              </Button>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                sx={{
                  maxWidth: "sm",
                  color: "white",
                  backgroundColor: "RGB(108, 77, 123)",
                  padding: "7px 15px",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: "30px",
                  fontSize: "18px",
                  borderRadius: "40px",
                  textTransform: "initial",
                  minWidth: "140px",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "RGB(108, 77, 123)",
                  },
                }}
                onClick={() => {
                  props.data && handleClick();
                }}
                variant="contained"
                size="large"
                disabled={
                  fetching ||
                  nameIsIncorrect ||
                  emailIsIncorrect ||
                  name === "" ||
                  email === "" ||
                  !props.data
                }
              >
                {fetching ? <CircularProgress size={25} /> : "SIGN UP"}
              </Button>
            </Grid>
          </Grid>
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
                  window.scrollTo(0, 0);
                }}
                sx={{ cursor: "pointer" }}
              >
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
