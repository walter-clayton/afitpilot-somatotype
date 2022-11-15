import { Button, Grid, IconButton, InputAdornment, Snackbar, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Profile = () => {

    const defaultEmail = "john.doe@gmail.com";
    const defaultUsername = "JohnDoe";
    const defaultPassword = "Password123$";

    const [isEditing, setIsEditing] = useState(false);
    const [hasChanges, setHasChanges] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState(defaultEmail);
    const [username, setUsername] = useState(defaultUsername);
    const [password, setPassword] = useState(defaultPassword);

    const [emailIsIncorrect, setEmailIsIncorrect] = useState(false);
    const [usernameIsIncorrect, setUsernameIsIncorrect] = useState(false);
    const [passwordIsIncorrect, setPasswordIsIncorrect] = useState(false);

    const [snackBarMessage, setSnackBarMessage] = useState('');
    const [snackBarState, setSnackBarState] = React.useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
    });

  const handleEditProfile = () => {
    setIsEditing(true);
  }  

  const handleDeleteAccount = () => {
    console.log('delete account');
  }   

  const handleSaveChanges = () => {
    if(isEmailValid(email) && isPasswordValid(password) && isUsernameValid(username)){
        setSnackBarMessage('Changes saved!');
        setHasChanges(false);
        setIsEditing(false);
        setEmailIsIncorrect(false);
        setUsernameIsIncorrect(false);
        setPasswordIsIncorrect(false);
    }
    if(!isEmailValid(email)){
        setSnackBarMessage('Invalid Email!');
    }
    if(!isUsernameValid(username)){
        setSnackBarMessage('Invalid Username!');
    }
    if(!isPasswordValid(password)){
        setSnackBarMessage('Invalid Password!');
    }
    setSnackBarState({open:true, vertical:'bottom', horizontal:'center'})
  } 
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.FormEvent<any>) => {
    event.preventDefault();
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(String(event.currentTarget.value).toLowerCase());
    if(!isEmailValid(event.currentTarget.value)){
        setEmailIsIncorrect(true);
    }
    else{
        setEmailIsIncorrect(false);
    }
    setHasChanges(true);
  };

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUsername(event.currentTarget.value);
    if(!isUsernameValid(event.currentTarget.value)){
        setUsernameIsIncorrect(true);
    }
    else{
        setUsernameIsIncorrect(false);
    }
    setHasChanges(true);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.currentTarget.value);
    if(!isPasswordValid(event.currentTarget.value)){
        setPasswordIsIncorrect(true);
    }
    else{
        setPasswordIsIncorrect(false);
    }
    setHasChanges(true);
  };

  const handleSnackBarClose = () => {
    setSnackBarState({...snackBarState, open:false})
  }

  const isEmailValid = (email: string | undefined): boolean => {
    const isValid =
      email?.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) !== null;
    return isValid;
  };

  const isUsernameValid = (username: string | undefined): boolean => {
    const isValid = username?.match(/^[a-zA-Z0-9]+$/) !== null;
    return isValid;
  };

  const isPasswordValid = (pwd: string | undefined): boolean => {
    const isValid =
      pwd?.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/) !==
      null;
    return isValid;
  };


  return (
    <>
        <Grid container maxWidth='sm' sx={{textAlign:'center', margin:'0 auto', display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <Typography variant="h3" gutterBottom m={3}>Profile</Typography>
            <TextField error={emailIsIncorrect ? true : false} onChange={handleChangeEmail} id="email" label="Email" variant="outlined" disabled={isEditing ? false : true} defaultValue={defaultEmail} margin="normal"/>
            {emailIsIncorrect ? 
                <Typography variant="caption" display="block" gutterBottom color='#ff0000'>• Please enter a valid email !</Typography> 
                : null
            }
            
            <TextField error={usernameIsIncorrect ? true : false} onChange={handleChangeUsername} id="username" label="Username" variant="outlined" disabled={isEditing ? false : true} defaultValue={defaultUsername} margin="normal"/>
            {usernameIsIncorrect ? 
                <Typography variant="caption" display="block" gutterBottom color='#ff0000'>• Username can't contain any symbols and/or spaces !</Typography>
                : null
            }

            <TextField error={passwordIsIncorrect ? true : false} onChange={handleChangePassword} id="password" label="Password" variant="outlined" type={showPassword ? 'text' : 'password'} disabled={isEditing ? false : true} defaultValue={defaultPassword} margin="normal" 
            InputProps={{
                endAdornment:(
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
            />
            {passwordIsIncorrect ? 
                <>
                    <Typography variant="caption" display="block" gutterBottom color='#ff0000'>• Password must contains at least: 6 characters !</Typography>
                    <Typography variant="caption" display="block" gutterBottom color='#ff0000'>• Password must contains 1 lowercase letter !</Typography>
                    <Typography variant="caption" display="block" gutterBottom color='#ff0000'>• Password must contains 1 uppercase letter !</Typography>
                    <Typography variant="caption" display="block" gutterBottom color='#ff0000'>• Password must contains 1 symbol as !@#$%^&* !</Typography>
                    <Typography variant="caption" display="block" gutterBottom color='#ff0000'>• Password must contains 1 number !</Typography>
                </>
                 : null
            }
            
            {hasChanges ? 
                <Button sx={{margin:'10px 0'}} variant="contained" onClick={handleSaveChanges}>Save changes</Button> :
                null
            }

            <Button sx={{margin:'10px 0'}} variant="contained" onClick={handleEditProfile} disabled={isEditing ? true : false}>Edit Profile</Button>
            <Button sx={{margin:'10px 0'}} variant="contained" onClick={handleDeleteAccount} color='error'>Delete account</Button>
        </Grid>
        <Snackbar
            anchorOrigin={{ vertical:'bottom', horizontal:'center' }}
            open={snackBarState.open}
            onClose={handleSnackBarClose}
            message={snackBarMessage}
        />
    </>
  )
}

export default Profile