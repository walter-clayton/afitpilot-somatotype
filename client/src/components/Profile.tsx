import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  Modal,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { CookiesProvider, useCookies } from "react-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const Profile = (props: any) => {
  const { height, width } = useWindowDimensions();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const defaultEmail = cookies.user.email;
  const defaultName = cookies.user.name;
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [emailhasChanges, setEmailHasChanges] = useState(false);
  const [nameHasChanges, setNameHasChanges] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showPwdConfirmation, setShowPwdConfirmation] = useState(false);

  const [fetching, setFetching] = React.useState<boolean>(false);

  const [email, setEmail] = useState(defaultEmail);
  const [name, setName] = useState(defaultName);
  const [newPassword, setNewPassword] = useState("");
  const [pwdConfirmation, setPwdConfirmation] = useState("");

  const [emailIsIncorrect, setEmailIsIncorrect] = useState(false);
  const [nameIsIncorrect, setNameIsIncorrect] = useState(false);
  const [newPasswordIsIncorrect, setNewPasswordIsIncorrect] = useState(false);
  const [pwdAreNotEquals, setPwdAreNotEquals] = useState(false);

  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarState, setSnackBarState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const [openEditPwdModal, setEditPwdModal] = React.useState(false);
  const handleEditPwdModalOpen = () => setEditPwdModal(true);
  const handleEditPwdModalClose = () => setEditPwdModal(false);

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width:
      width < 400 ? "90%" : width < 550 ? "80%" : width < 1000 ? "50%" : "35%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: "15px",
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleEditPassword = () => {
    handleEditPwdModalOpen();
  };

  // useEffect(() => {
  //   console.log(isNameValid(name));
  // }, [name]);

  const handleSaveNewEmail = async () => {
    try {
      setFetching(true);
      const headers = {
        "Content-Type": "application/json",
        access_key: process.env.REACT_APP_ACCESS_KEY,
        Authorization: `Bearer ${cookies.user.token}`,
      };
      const response = await axios.post(
        process.env.REACT_APP_EDITEMAIL_URL!,
        {
          email: email,
        },
        {
          headers: headers,
        }
      );

      setEmail(response.data.user.email);

      setSnackBarMessage("Changes saved!");
      setEmailHasChanges(false);
      setNameHasChanges(false);
      setIsEditing(false);
      setEmailIsIncorrect(false);
      setNameIsIncorrect(false);

      setFetching(false);
    } catch (error: any) {
      // if (error.response) {
      //   error.response.data.message
      //     ? setSnackbarMessage(error.response.data.message)
      //     : setSnackbarMessage(error.response.statusText);
      // } else {
      //   setSnackbarMessage("Error with the server");
      // }

      setSnackBarMessage("Changes failed to save!");
      setEmailHasChanges(false);
      setNameHasChanges(false);
      setIsEditing(false);
      setEmailIsIncorrect(false);
      setNameIsIncorrect(false);
      console.log("error ", error);
      setFetching(false);
    }
  };

  const handleSaveNewName = async () => {
    try {
      setFetching(true);
      const headers = {
        "Content-Type": "application/json",
        access_key: process.env.REACT_APP_ACCESS_KEY,
        Authorization: `Bearer ${cookies.user.token}`,
      };
      const response = await axios.post(
        process.env.REACT_APP_EDITNAME_URL!,
        {
          name: name,
        },
        {
          headers: headers,
        }
      );

      setName(response.data.user.name);

      setFetching(false);

      setSnackBarMessage("Changes saved!");
      setEmailHasChanges(false);
      setNameHasChanges(false);
      setIsEditing(false);
      setEmailIsIncorrect(false);
      setNameIsIncorrect(false);
    } catch (error: any) {
      // if (error.response) {
      //   error.response.data.message
      //     ? setSnackbarMessage(error.response.data.message)
      //     : setSnackbarMessage(error.response.statusText);
      // } else {
      //   setSnackbarMessage("Error with the server");
      // }

      setSnackBarMessage("Changes failed to save!");
      setEmailHasChanges(false);
      setNameHasChanges(false);
      setIsEditing(false);
      setEmailIsIncorrect(false);
      setNameIsIncorrect(false);
      console.log("error ", error);
      setFetching(false);
    }
  };

  const handleSaveNewPassword = async () => {
    try {
      setFetching(true);
      const headers = {
        "Content-Type": "application/json",
        access_key: process.env.REACT_APP_ACCESS_KEY,
        Authorization: `Bearer ${cookies.user.token}`,
      };
      const response = await axios.post(
        process.env.REACT_APP_EDITPASSWORD_URL!,
        {
          newPassword: newPassword,
          confirmNewPassword: pwdConfirmation,
        },
        {
          headers: headers,
        }
      );
      props.setOpen(true);
      props.setSnackbarMessage("Password edited successfully");
      setFetching(false);
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

      setFetching(false);
      removeCookie("user", { path: "/", sameSite: "none", secure: true });
      props.setOpen(true);
      props.setSnackbarMessage("Account deleted successfully");
      navigate("/Login");
      window.scrollTo(0, 0);
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
    if (isEmailValid(email) && isNameValid(name)) {
      if (emailhasChanges) {
        handleSaveNewEmail();
      }
      if (nameHasChanges) {
        handleSaveNewName();
      }
      if (emailhasChanges || nameHasChanges) {
        const user = {
          email: email,
          name: name,
          token: cookies.user.token,
        };
        setCookie("user", user, {
          path: "/",
          sameSite: "none",
          secure: true,
          maxAge: 3600,
        });
      }
    }
    if (!isEmailValid(email)) {
      setSnackBarMessage("Invalid Email!");
    }
    if (!isNameValid(name)) {
      setSnackBarMessage("Invalid Name!");
    }
    setSnackBarState({ open: true, vertical: "bottom", horizontal: "center" });
  };

  const handleDiscardChanges = () => {
    setEmail(defaultEmail);
    setName(defaultName);
    setEmailHasChanges(false);
    setNameHasChanges(false);
    setIsEditing(false);
    setEmailIsIncorrect(false);
    setNameIsIncorrect(false);
  };

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleClickShowPwdConfirmation = () => {
    setShowPwdConfirmation(!showPwdConfirmation);
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
    setEmailHasChanges(true);
  };

  const handleChangeName = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(event.currentTarget.value);
    if (!isNameValid(event.currentTarget.value)) {
      setNameIsIncorrect(true);
    } else {
      setNameIsIncorrect(false);
    }
    setNameHasChanges(true);
  };

  const handleChangeNewPassword = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewPassword(event.currentTarget.value);
    if (!isPasswordValid(event.currentTarget.value)) {
      setNewPasswordIsIncorrect(true);
    } else {
      setNewPasswordIsIncorrect(false);
    }
    if (event.currentTarget.value === pwdConfirmation) {
      setPwdAreNotEquals(false);
    } else {
      setPwdAreNotEquals(true);
    }
  };

  const handleChangePwdConfirmation = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPwdConfirmation(event.currentTarget.value);
    if (event.currentTarget.value === newPassword) {
      setPwdAreNotEquals(false);
    } else {
      setPwdAreNotEquals(true);
    }
  };

  const handleCancelNewPwd = () => {
    handleEditPwdModalClose();
  };

  const handleSaveNewPwd = () => {
    handleEditPwdModalClose();
    handleSaveNewPassword();
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

  const isNameValid = (name: string): boolean => {
    const isValid: boolean = name !== "" && /^[a-z\s]*$/.test(name);
    return isValid;
  };

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0px 15px",
        }}
        width={"100%"}
      >
        <Grid item m={3} sx={{}} xs={12} md={8} lg={6} alignSelf={"center"}>
          <Typography variant="h3">Profile</Typography>
        </Grid>

        <Grid
          item
          sx={{
            flexGrow: 1,
          }}
          width={"100%"}
          xs={12}
          md={8}
          lg={6}
          alignSelf={"center"}
        >
          <TextField
            error={emailIsIncorrect ? true : false}
            onChange={handleChangeEmail}
            id="email"
            label="Email"
            variant="outlined"
            disabled={isEditing ? false : true}
            value={email}
            margin="normal"
            sx={{ width: "100%" }}
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

          <TextField
            error={nameIsIncorrect ? true : false}
            onChange={handleChangeName}
            id="name"
            label="Name"
            variant="outlined"
            disabled={isEditing ? false : true}
            value={name}
            margin="normal"
            sx={{ width: "100%" }}
          />
          {nameIsIncorrect ? (
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              color="#ff0000"
            >
              • Name can only contains lowercase letters !
            </Typography>
          ) : null}
        </Grid>

        {isEditing ? (
          <Grid
            item
            sx={{
              flexGrow: 1,
            }}
            width={"100%"}
            xs={12}
            md={8}
            lg={6}
            alignSelf={"center"}
          >
            <Grid
              container
              display={"flex"}
              flexDirection={"row"}
              width={"100%"}
              spacing={0}
              justifyContent={"center"}
            >
              <Grid item xs={6} textAlign={"center"}>
                <Button
                  sx={{ margin: "10px 0" }}
                  variant="outlined"
                  onClick={handleDiscardChanges}
                  color={"error"}
                >
                  Discard changes
                </Button>
              </Grid>
              <Grid item xs={6} textAlign={"center"}>
                <Button
                  sx={{ margin: "10px 0" }}
                  variant="contained"
                  onClick={handleSaveChanges}
                  disabled={
                    (!emailhasChanges && !nameHasChanges) ||
                    emailIsIncorrect ||
                    nameIsIncorrect
                  }
                  color={"success"}
                >
                  Save changes
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ) : null}

        <Grid
          item
          sx={{
            flexGrow: 1,
          }}
          width={"100%"}
          xs={12}
          md={8}
          lg={6}
          alignSelf={"center"}
          textAlign={"center"}
        >
          <Button
            sx={{ margin: "10px 0", width: "50%" }}
            variant="contained"
            onClick={handleEditProfile}
            disabled={isEditing ? true : false}
          >
            Edit Profile
          </Button>
        </Grid>

        <Grid
          item
          sx={{
            flexGrow: 1,
          }}
          width={"100%"}
          xs={12}
          md={8}
          lg={6}
          alignSelf={"center"}
          textAlign={"center"}
        >
          <Button
            sx={{ margin: "10px 0", width: "50%" }}
            variant="contained"
            onClick={handleEditPassword}
            disabled={isEditing ? true : false}
          >
            Edit Password
          </Button>
        </Grid>

        <Grid
          item
          sx={{
            flexGrow: 1,
          }}
          width={"100%"}
          xs={12}
          md={8}
          lg={6}
          alignSelf={"center"}
          textAlign={"center"}
        >
          <Button
            sx={{ margin: "10px 0", width: "50%" }}
            variant="contained"
            onClick={handleDeleteAccount}
            color="error"
            disabled={fetching || isEditing}
          >
            {fetching ? <CircularProgress size={25} /> : "Delete account"}
          </Button>
        </Grid>
      </Grid>

      <Modal
        open={openEditPwdModal}
        onClose={handleEditPwdModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            width={"100%"}
          >
            <Grid
              item
              sx={{
                flexGrow: 1,
              }}
              width={"100%"}
              xs={12}
              alignSelf={"center"}
            >
              <TextField
                error={newPasswordIsIncorrect}
                onChange={handleChangeNewPassword}
                id="newPassword"
                label="New Password"
                variant="outlined"
                type={showNewPassword ? "text" : "password"}
                margin="normal"
                sx={{ width: "100%" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowNewPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {newPasswordIsIncorrect ? (
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
                error={newPasswordIsIncorrect || pwdAreNotEquals}
                onChange={handleChangePwdConfirmation}
                id="pwdConfirmation"
                label="Confirm New Password"
                variant="outlined"
                type={showPwdConfirmation ? "text" : "password"}
                margin="normal"
                sx={{ width: "100%" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPwdConfirmation}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPwdConfirmation ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {pwdAreNotEquals ? (
                <>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    color="#ff0000"
                  >
                    • Password and confirmation must be the same !
                  </Typography>
                </>
              ) : null}
            </Grid>
          </Grid>

          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            spacing={2}
            sx={{ mt: 0 }}
          >
            <Grid item>
              <Button
                variant="outlined"
                color="error"
                onClick={handleCancelNewPwd}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="success"
                onClick={handleSaveNewPwd}
                disabled={
                  pwdAreNotEquals ||
                  newPasswordIsIncorrect ||
                  newPassword === "" ||
                  pwdConfirmation === ""
                }
              >
                Confirm
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>

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
