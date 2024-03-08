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
  Snackbar,
} from "@mui/material/";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { IData } from "../../App";

interface ISignUp {
  setOpen?: (bool: boolean) => void;
  setSnackbarMessage?: (msg: string) => void;
  setResultsSaved?: (bool: boolean) => void;
}

const NavSignUp: FC<ISignUp> = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailIsIncorrect, setEmailIsIncorrect] = useState(false);
  const [nameIsIncorrect, setNameIsIncorrect] = useState(false);
  const [fetching, setFetching] = useState<boolean>(false);
  const [cookies, setCookie] = useCookies(["user", "data"]);

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

  const addUser = async () => {
    try {
      setFetching(true);
      // Assuming you have an API endpoint for user registration
      const response = await axios.post(process.env.REACT_APP_REGISTER_URL!, {
        email,
        name,
        // Other data you want to send
      });
      props.setOpen?.(true);
      // Handle response and set cookies if needed
      setCookie("user", { ...response.data.user });
      props.setSnackbarMessage?.(response.data.message);
      props.setResultsSaved?.(true);
      setFetching(false);
      navigate("/Powerlifting"); // Redirect to loading page after successful signup
    } catch (error: any) {
      console.error("Signup failed:", error);
      props.setSnackbarMessage?.("Error occurred during signup");
      setFetching(false);
    }
  };

  const handleChangeEmail = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.currentTarget.value.toLowerCase());
    setEmailIsIncorrect(!isEmailValid(event.currentTarget.value));
  };

  const handleChangeName = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(event.currentTarget.value.toLowerCase());
    setNameIsIncorrect(!isNameValid(event.currentTarget.value.toLowerCase()));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validate form inputs
    if (!isEmailValid(email) || !isNameValid(name)) {
      props.setSnackbarMessage?.("Please provide valid email and name");
      return;
    }
    addUser();
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            error={emailIsIncorrect}
            onChange={handleChangeEmail}
            value={email}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            error={nameIsIncorrect}
            onChange={handleChangeName}
            value={name}
            id="name"
            label="Your name"
            name="name"
            autoComplete="name"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={
              fetching || emailIsIncorrect || nameIsIncorrect || !email || !name
            }
          >
            {fetching ? <CircularProgress size={24} /> : "Sign Up"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NavSignUp;
