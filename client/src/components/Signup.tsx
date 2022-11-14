import * as React from 'react';
import {Button,TextField,Link,Grid,Box,Typography,Container} from '@mui/material/';
import CssBaseline from '@mui/material/CssBaseline';
// import { createTheme } from '@mui/material/styles';

export default function Signup() {
    /**
 *
 * @param username String
 * @returns Boolean
 */
const isUsernameValid = (username:FormDataEntryValue | null): boolean => {
    const isValid: boolean =  username?.toString().match(/^[a-zA-Z0-9]+$/) !== null;
    return isValid;
  };
 
    const handleSubmit = (event:any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (isUsernameValid(data.get('username'))) {
            console.log("username is correct ")
          }
          else {
            console.log('username is wrong')
          }
      
        console.log({
            firstName: data.get('firstName'),
            email: data.get('email'),
            password: data.get('password'),

        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

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
                        {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                //   label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register                    </Button>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Link href="/Login" variant="body2"

                            >
                                Already have an account?
                                Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            {/* <Copyright sx={{ mt: 5 }} /> */}
        </Container>
    );
}