import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box, Button, Link } from "@mui/material/";
import { Typography, Container } from "@mui/material/";
import { TextField } from "@mui/material/";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Forget() {
  /**
   * @param email String
   * @returns Boolean
   */
  const isEmailValid = (email: FormDataEntryValue | null): boolean => {
    const isValid: boolean =
      email
        ?.toString()
        .match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) !== null;
    return isValid;
  };
  const [email, setEmail] = useState("");
  const [emailIsIncorrect, setEmailIsIncorrect] = useState(false);
  const [fetching, setFetching] = React.useState<boolean>(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const navigate = useNavigate();

  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const resetPassword = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        access_key: process.env.REACT_APP_ACCESS_KEY,
      };
      setFetching(true);
      const response = await axios.post(
        process.env.REACT_APP_RESET_PASS_URL!,
        {
          email: email,
        },
        {
          headers: headers,
        }
      );
      setOpen(true);
      setSnackbarMessage(response.data.message);
      setFetching(false);
    } catch (error: unknown) {
      setOpen(true);
      setFetching(false);
      if ((error as any).response) {
        (error as any).response.data.message
          ? setSnackbarMessage((error as any).response.data.message)
          : setSnackbarMessage((error as any).response.statusText);
      } else {
        setSnackbarMessage("Error with the server");
      }
      console.log("error ", error);
    }
  };

  const validateSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Snackbar message for validation
    if (isEmailValid(data.get("email"))) {
      resetPassword();
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

  return (
    <div>
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
          <Typography component="h1" variant="h4" mb={2}>
            Forgot Password?{" "}
          </Typography>
          <Typography variant="subtitle1" mb={1}>
            Enter your e-mail address to receive a reset link.
          </Typography>
          <Box
            component="form"
            onSubmit={validateSubmit}
            noValidate
            sx={{ mt: 1 }}
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
            <Box mt={"20px"}>
              <Button
                type="submit"
                disabled={fetching}
                variant="contained"
                sx={{
                  backgroundColor: "RGB(108, 77, 123)",
                  padding: "14px 30px",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: "30px",
                  fontSize: "18px",
                  borderRadius: "40px",
                  textTransform: "initial",
                  margin: "0px 80px",
                  minWidth: "240px",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "RGB(108, 77, 123)",
                  },
                }}
              >
                Send email
              </Button>
            </Box>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message={snackbarMessage}
            />
            <Grid container>
              <Grid item xs textAlign={"center"} mt={"20px"}>
                <Link
                  onClick={() => {
                    navigate("/Login");
                    window.scrollTo(0, 0);
                  }}
                  sx={{
                    textAlign: "Center",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  variant="subtitle1"
                >
                  Back to Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
