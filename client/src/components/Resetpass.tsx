import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, TextField, Avatar, InputAdornment } from "@mui/material/";
import { Typography, Container } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import KeyIcon from "@mui/icons-material/Key";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const theme = createTheme();
export default function Resetpass() {
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
  const isPasswordMatch = (
    pwd: FormDataEntryValue | null,
    confirmPwd: FormDataEntryValue | null
  ): boolean => {
    const isValid: boolean = pwd === confirmPwd;
    return isValid;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Snackbar message for validation
    console.log(typeof data.get("email"));

    if (
      isPasswordValid(data.get("confirmPassword")) &&
      isPasswordMatch(data.get("password"), data.get("confirmPassword"))
    ) {
      setSnackbarMessage("You have succesfully reset the password");
    } else {
      if (!isPasswordValid(data.get("password"))) {
        setSnackbarMessage("Password is incorrect");
      }
      if (!isPasswordMatch(data.get("password"), data.get("confirmPassword"))) {
        setSnackbarMessage("Passwords missmatch");
      }
    }
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
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  const [password, setPassword] = useState("");
  const [passwordIsIncorrect, setPasswordIsIncorrect] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <KeyIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create new password
          </Typography>
          <Typography textAlign={"center"} variant="subtitle2">
            Your new password must be different from previous used password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              error={passwordIsIncorrect ? true : false}
              onChange={handleChangePassword}
              name="password"
              label="password"
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

            <TextField
              margin="normal"
              required
              fullWidth
              error={passwordIsIncorrect ? true : false}
              onChange={handleChangePassword}
              name="confirmPassword"
              label="Confirm password"
              type={showPassword ? "text" : "password"}
              id="password2"
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
              fullWidth
              variant="contained"
              onClick={handleClick}
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message={snackbarMessage}
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
