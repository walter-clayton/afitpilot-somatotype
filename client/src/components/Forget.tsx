import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid, Box, Button, Avatar } from '@mui/material/';
import { Typography, Container } from '@mui/material/';
import { TextField } from '@mui/material/';
import Snackbar from '@mui/material/Snackbar';
import KeyIcon from '@mui/icons-material/Key';
export default function Forget() {
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
    const validateSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // Snackbar message for validation
        if (isEmailValid(data.get('email'))) {
            setSnackbarMessage("Email is correct")
        }
        else {
            setSnackbarMessage('Email is incorrect')
        }
        console.log({
            email: data.get('email')
        });
    };
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <KeyIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">Forget password </Typography>
                    <Typography variant="subtitle2">Enter your email address</Typography>
                    <Box component="form" onSubmit={validateSubmit} noValidate sx={{ mt: 1 }}>
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
                        <Button
                            type="submit"
                            onClick={handleClick}
                            fullWidth
                            href='/Resetpass'
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}>
                            Send email
                        </Button>
                        <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            message={snackbarMessage}
                        />
                        <Grid container>
                            <Grid item>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}