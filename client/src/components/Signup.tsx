import * as React from 'react';
import { Button, TextField, Link, Grid, Box, Typography, Container,FormControlLabel,Checkbox } from '@mui/material/';
import CssBaseline from '@mui/material/CssBaseline';
import Snackbar from '@mui/material/Snackbar';

export default function Signup() {
  /**
*
* @param username String
* @returns Boolean
*/
  const isUsernameValid = (username: FormDataEntryValue | null): boolean => {
    const isValid: boolean = username?.toString().match(/^[a-zA-Z0-9]+$/) !== null;
    return isValid;
  };
  const isEmailValid = (email: FormDataEntryValue | null): boolean => {
    const isValid: boolean =
      email?.toString().match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) !== null;
    return isValid;
  };
  const isPasswordValid = (pwd: FormDataEntryValue | null): boolean => {
    const isValid: boolean =
      pwd?.toString().match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/) !==
      null;
    return isValid;
  };

  //message
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
//validation message using snackbar
    if (isEmailValid(data.get('email')) && isUsernameValid(data.get('username')) && isPasswordValid(data.get('password'))) {
      setSnackbarMessage("You have succesfully Register ")
    }
    else {
      if (!isPasswordValid(data.get('username'))) {
        setSnackbarMessage("Username is incorrect")
      }
      if (!isEmailValid(data.get('email'))) {
        setSnackbarMessage('Email is incorrect')
      }
      if (!isPasswordValid(data.get('password'))) {
        setSnackbarMessage("Password is incorrect")
      }
    }
  };

  // usestate from snackbar messaage
  const [open, setOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const handleClose = (event: any, reason: any) => {
    if (reason === 'clickaway') {
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
        sx={{ marginTop:8,display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
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
            <Grid item xs={12} >
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
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
                name="password"
                label="Confirm password"
                type="password"
                id="password2"
                autoComplete="new-password"
              />
            </Grid>

            <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I agree to the Terms and Conditions" />
              </Grid>
          </Grid>
          <Button type="submit" fullWidth onClick={handleClick} variant="contained" sx={{ mt: 3, mb: 2 }}>  Register </Button>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={snackbarMessage} />
          <Grid container justifyContent="center">
            <Grid item>
              <Link href="/Login" variant="body2">
                Already have an account?
                Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}