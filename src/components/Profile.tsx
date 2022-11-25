import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const Profile = (props: any) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const defaultEmail = cookies.user.email;
  const defaultPassword = "*********";
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [fetching, setFetching] = React.useState<boolean>(false);

  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);

  const [emailIsIncorrect, setEmailIsIncorrect] = useState(false);
  const [passwordIsIncorrect, setPasswordIsIncorrect] = useState(false);

  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarState, setSnackBarState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleDeleteAccount = async () => {
    try {
      setFetching(true);
      const headers = {
        "Content-Type": "application/json",
        access_key: process.env.REACT_APP_ACCESS_KEY,
        Authorization: `Bearer ${cookies.user.token}`,
      };
      const response = await axios.delete(process.env.REACT_APP_DELETE_URL!, {
        headers: headers,
        params: {
          email: cookies.user.email,
        },
      });
      console.log(response.data.message);
      setFetching(false);
      removeCookie("user", { path: "/", sameSite: "none", secure: true });
      props.setOpen(true);
      props.setSnackbarMessage("Account deleted successfully");
      navigate("/Login");
    } catch (error: any) {
      // if (error.response) {
      //   error.response.data.message
      //     ? setSnackbarMessage(error.response.data.message)
      //     : setSnackbarMessage(error.response.statusText);
      // } else {
      //   setSnackbarMessage("Error with the server");
      // }

      console.log("error ", error);
      setFetching(false);
    }
  };

  const handleSaveChanges = () => {
    if (isEmailValid(email) && isPasswordValid(password)) {
      setSnackBarMessage("Changes saved!");
      setHasChanges(false);
      setIsEditing(false);
      setEmailIsIncorrect(false);
      setPasswordIsIncorrect(false);
    }
    if (!isEmailValid(email)) {
      setSnackBarMessage("Invalid Email!");
    }
    if (!isPasswordValid(password)) {
      setSnackBarMessage("Invalid Password!");
    }
    setSnackBarState({ open: true, vertical: "bottom", horizontal: "center" });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.FormEvent<any>) => {
    event.preventDefault();
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

  const handleSnackBarClose = () => {
    setSnackBarState({ ...snackBarState, open: false });
  };

  const isEmailValid = (email: string | undefined): boolean => {
    const isValid =
      email?.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) !== null;
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
      <Grid
        container
        maxWidth="sm"
        sx={{
          textAlign: "center",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" gutterBottom m={3}>
          Profile
        </Typography>

        <Grid container>
          <Grid container justifyContent={"center"} alignContent={"center"}>
            <Grid item>
              <TextField
                error={emailIsIncorrect ? true : false}
                onChange={handleChangeEmail}
                id="email"
                label="Email"
                variant="outlined"
                disabled={isEditing ? false : true}
                defaultValue={defaultEmail}
                margin="normal"
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
            </Grid>
            <Grid item>
              <Button variant="contained">
                <EditIcon />
              </Button>
            </Grid>
          </Grid>

          <Grid container justifyContent={"center"} alignContent={"center"}>
            <Grid item>
              <TextField
                error={passwordIsIncorrect ? true : false}
                onChange={handleChangePassword}
                id="password"
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                disabled={isEditing ? false : true}
                defaultValue={defaultPassword}
                margin="normal"
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
              />
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
            </Grid>
            <Grid item>
              <Button variant="contained">
                <EditIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {hasChanges ? (
          <Button
            sx={{ margin: "10px 0" }}
            variant="contained"
            onClick={handleSaveChanges}
          >
            Save changes
          </Button>
        ) : null}

        <Button
          sx={{ margin: "10px 0" }}
          variant="contained"
          onClick={handleEditProfile}
          disabled={isEditing ? true : false}
        >
          Edit Profile
        </Button>
        <Button
          sx={{ margin: "10px 0" }}
          variant="contained"
          onClick={handleDeleteAccount}
          color="error"
          disabled={fetching}
        >
          {fetching ? <CircularProgress size={25} /> : "Delete account"}
        </Button>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackBarState.open}
        onClose={handleSnackBarClose}
        message={snackBarMessage}
      />
    </>
  );
};

export default Profile;
