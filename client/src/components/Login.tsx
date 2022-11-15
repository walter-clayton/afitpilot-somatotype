import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import { Link, Grid, Box, Button, Checkbox, FormControlLabel } from '@mui/material/';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Typography, Container } from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputAdornment, TextField } from '@mui/material/';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Snackbar from '@mui/material/Snackbar';

const theme = createTheme();
export default function Login() {
  /**
   * @param email String
   * @returns Boolean
   */
  const isEmailValid = (email: FormDataEntryValue | null): boolean => {
    const isValid: boolean =
      email?.toString().match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
      pwd?.toString().match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/) !==
      null;
    return isValid;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Snackbar message for validation
    console.log(typeof data.get('email'))
    if (isEmailValid(data.get('email')) && isPasswordValid(data.get('password'))) {
      setSnackbarMessage("You have succesfully Logged in ")
    }
    else {
      if (!isEmailValid(data.get('email'))) {
        setSnackbarMessage('Email is incorrect')
      }
      if (!isPasswordValid(data.get('password'))) {
        setSnackbarMessage("Password is incorrect")
      }
    }
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
const [showPassword, setShowPassword] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Login</Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
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
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              InputProps={
                {
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
                }
              }
              >
            </TextField>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"/>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleClick}
              sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message={snackbarMessage}
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}