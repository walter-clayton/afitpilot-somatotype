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
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { CookiesProvider, useCookies } from "react-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { getSpecificColors, IColors } from "../../datas/Colors";
import CircleIcon from "@mui/icons-material/Circle";
import Avatar from "../avatar/Avatar";
import {
  beards,
  colorsHair,
  colorsSkin,
  faces,
  hairs,
  hairsFemale,
} from "../avatar/variablesAvatar/VariableAvatar";
import { IParamsAvatar } from "../../App";
import CustomAvatar, { IIndexes, ISetters } from "../avatar/CustomAvatar";

const Profile = (props: any) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const defaultEmail = cookies.user.email;
  const defaultName = cookies.user.name;
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [emailhasChanges, setEmailHasChanges] = useState(false);
  const [nameHasChanges, setNameHasChanges] = useState(false);
  const [colorhasChanges, setColorHasChanges] = useState(false);
  const [avatarhasChanges, setAvatarHasChanges] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showPwdConfirmation, setShowPwdConfirmation] = useState(false);

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

  const [openDeleteConfirmModal, setOpenDeleteConfirmModal] =
    React.useState(false);
  const handleDeleteConfirmModalOpen = () => setOpenDeleteConfirmModal(true);
  const handleDeleteConfirmModalClose = () => setOpenDeleteConfirmModal(false);

  const defaultColor = getSpecificColors(cookies.user.mainColor);
  const [colorPicked, setColorPicked] = useState<IColors>(defaultColor);

  const [colorPickedIndex, setColorPickedIndex] = useState<number>(
    cookies.user.mainColor
  );
  const [previousColorIndex, setPreviousColorIndex] = useState<number>(
    cookies.user.mainColor
  );

  const medium = useMediaQuery("(max-width:1000px)");
  const small = useMediaQuery("(max-width:600px)");
  const xSmall = useMediaQuery("(max-width:550px)");
  const xxSmall = useMediaQuery("(max-width:450px)");
  const xxs = useMediaQuery("(max-width:400px)");
  const xxxs = useMediaQuery("(max-width:320px)");

  const [indexHair, setIndexHair] = useState<number>(0);
  const [indexFace, setIndexFace] = useState<number>(0);
  const [indexBeard, setIndexBeard] = useState<number>(0);
  const [indexColorSkin, setIndexColorSkin] = useState<number>(0);
  const [indexColorHair, setIndexColorHair] = useState<number>(0);

  useEffect(() => {
    if (props.avatar !== undefined) {
      setIndexHair(props.avatar.indexHair);
      setIndexFace(props.avatar.indexFace);
      setIndexBeard(props.avatar.indexBeard);
      setIndexColorHair(props.avatar.indexColorHair);
      setIndexColorSkin(props.avatar.indexColorSkin);
      console.log(props.avatar, 5);
    }
  }, [props.avatar]);

  let indexes: IIndexes = {
    indexHair: indexHair,
    indexBeard: indexBeard,
    indexFace: indexFace,
    indexColorHair: indexColorHair,
    indexColorSkin: indexColorSkin,
  };

  const setters: ISetters = {
    setIndexHair: setIndexHair,
    setIndexBeard: setIndexBeard,
    setIndexFace: setIndexFace,
    setIndexColorHair: setIndexColorHair,
    setIndexColorSkin: setIndexColorSkin,
  };

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: xxs ? "90%" : xSmall ? "80%" : medium ? "50%" : "35%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "25px",
  };

  // useEffect(() => {
  //   if (props.avatar !== undefined) {
  //     setIndexHair(props.avatar.indexHair!);
  //     setIndexFace(props.avatar.indexFace!);
  //     setIndexBeard(props.avatar.indexBeard!);
  //     setIndexColorSkin(props.avatar.indexColorSkin!);
  //     setIndexColorHair(props.avatar.indexColorHair!);
  //   }
  // }, [props.avatar]);

  useEffect(() => {
    if (colorPickedIndex !== undefined) {
      setColorPicked(getSpecificColors(colorPickedIndex));
    }
  }, [colorPickedIndex]);

  useEffect(() => {
    console.log(props.avatar);
  });

  const handleEditProfile = () => {
    setPreviousColorIndex(cookies.user.mainColor);
    setIsEditing(true);
  };

  const handleEditPassword = () => {
    handleEditPwdModalOpen();
  };

  const handleDeleteAccountModal = () => {
    handleDeleteConfirmModalOpen();
  };

  const handleSaveNewEmail = async () => {
    try {
      props.setFetching(true);
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

      const now = new Date();
      const seconds = Math.floor(now.getTime() / 1000);

      const cookieUser = { ...cookies.user };
      cookieUser.email = response.data.user.email;

      setCookie(
        "user",
        { ...cookieUser, createdAt: seconds },
        {
          path: "/",
          sameSite: "none",
          secure: true,
          maxAge: 3600,
        }
      );

      setSnackBarMessage("Changes saved!");
      setEmailHasChanges(false);
      setNameHasChanges(false);
      setColorHasChanges(false);
      setAvatarHasChanges(false);
      setIsEditing(false);
      setEmailIsIncorrect(false);
      setNameIsIncorrect(false);

      props.setFetching(false);
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
      setColorHasChanges(false);
      setAvatarHasChanges(false);
      setIsEditing(false);
      setEmailIsIncorrect(false);
      setNameIsIncorrect(false);
      console.log("error ", error);
      props.setFetching(false);
    }
  };

  const handleSaveNewName = async () => {
    try {
      props.setFetching(true);
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

      const now = new Date();
      const seconds = Math.floor(now.getTime() / 1000);

      const cookieUser = { ...cookies.user };
      cookieUser.name = response.data.user.name;

      setCookie(
        "user",
        { ...cookieUser, createdAt: seconds },
        {
          path: "/",
          sameSite: "none",
          secure: true,
          maxAge: 3600,
        }
      );

      props.setFetching(false);

      setSnackBarMessage("Changes saved!");
      setEmailHasChanges(false);
      setNameHasChanges(false);
      setColorHasChanges(false);
      setAvatarHasChanges(false);
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
      setColorHasChanges(false);
      setAvatarHasChanges(false);
      setIsEditing(false);
      setEmailIsIncorrect(false);
      setNameIsIncorrect(false);
      console.log("error ", error);
      props.setFetching(false);
    }
  };

  const handleSaveNewPassword = async () => {
    try {
      props.setFetching(true);
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
      props.setFetching(false);
    } catch (error: any) {
      // if (error.response) {
      //   error.response.data.message
      //     ? setSnackbarMessage(error.response.data.message)
      //     : setSnackbarMessage(error.response.statusText);
      // } else {
      //   setSnackbarMessage("Error with the server");
      // }

      console.log("error ", error);
      props.setFetching(false);
    }
  };

  const handleSaveNewMainColor = async () => {
    try {
      props.setFetching(true);
      const headers = {
        "Content-Type": "application/json",
        access_key: process.env.REACT_APP_ACCESS_KEY,
        Authorization: `Bearer ${cookies.user.token}`,
      };

      const response = await axios.post(
        process.env.REACT_APP_EDITMAINCOLOR_URL!,
        {
          mainColor: colorPickedIndex,
        },
        {
          headers: headers,
        }
      );

      const now = new Date();
      const seconds = Math.floor(now.getTime() / 1000);

      const cookieUser = { ...cookies.user };
      cookieUser.mainColor = colorPickedIndex;

      setCookie(
        "user",
        { ...cookieUser, createdAt: seconds },
        {
          path: "/",
          sameSite: "none",
          secure: true,
          maxAge: 3600,
        }
      );

      setSnackBarMessage("Changes saved!");
      setEmailHasChanges(false);
      setNameHasChanges(false);
      setColorHasChanges(false);
      setAvatarHasChanges(false);
      setIsEditing(false);
      setEmailIsIncorrect(false);
      setNameIsIncorrect(false);

      props.setFetching(false);
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
      setColorHasChanges(false);
      setAvatarHasChanges(false);
      setIsEditing(false);
      setEmailIsIncorrect(false);
      setNameIsIncorrect(false);
      console.log("error ", error);
      props.setFetching(false);
    }
  };

  const handleSaveNewAvatar = async () => {
    let newAvatar: IParamsAvatar = {};

    newAvatar.indexBeard = indexBeard;
    newAvatar.indexColorHair = indexColorHair;
    newAvatar.indexColorSkin = indexColorSkin;
    newAvatar.indexFace = indexFace;
    newAvatar.indexHair = indexHair;
    console.log(newAvatar);

    try {
      props.setFetching(true);
      const headers = {
        "Content-Type": "application/json",
        access_key: process.env.REACT_APP_ACCESS_KEY,
        Authorization: `Bearer ${cookies.user.token}`,
      };

      const response = await axios.post(
        process.env.REACT_APP_EDITAVATAR_URL!,
        { avatar: newAvatar, id: props.avatar._id },
        {
          headers: headers,
        }
      );

      props.setAvatar((prevState: IParamsAvatar) => ({
        ...prevState,
        ...newAvatar,
      }));

      setSnackBarMessage("Changes saved!");
      setEmailHasChanges(false);
      setNameHasChanges(false);
      setColorHasChanges(false);
      setAvatarHasChanges(false);
      setIsEditing(false);
      setEmailIsIncorrect(false);
      setNameIsIncorrect(false);

      props.setFetching(false);
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
      setColorHasChanges(false);
      setAvatarHasChanges(false);
      setIsEditing(false);
      setEmailIsIncorrect(false);
      setNameIsIncorrect(false);
      console.log("error ", error);
      props.setFetching(false);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      props.setFetching(true);
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

      props.setFetching(false);
      handleDeleteConfirmModalClose();
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
      props.setFetching(false);
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
      if (colorhasChanges) {
        handleSaveNewMainColor();
      }
      if (avatarhasChanges) {
        handleSaveNewAvatar();
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
    setColorPickedIndex(previousColorIndex);
    setEmail(defaultEmail);
    setName(defaultName);
    setEmailHasChanges(false);
    setNameHasChanges(false);
    setColorHasChanges(false);
    setAvatarHasChanges(false);
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

  const handleCancelDeleteAccount = () => {
    handleDeleteConfirmModalClose();
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

  const setMainColor = (colorIndex: number) => {
    setColorPickedIndex(colorIndex);
    setColorHasChanges(true);
  };

  useEffect(() => {
    if (cookies.user) {
      props.getAvatar!();
    }
  }, []);

  return (
    <>
      <Typography
        variant="h3"
        p={3}
        textAlign="center"
        color={"white"}
        sx={{ backgroundColor: colorPicked!.darkColor }}
      >
        Profile
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px 15px",
          marginTop: "20px",
        }}
        marginX={"auto"}
        width={"100%"}
        maxWidth={"600px"}
      >
        <Grid item width={"100%"} xs={12} paddingTop={2}>
          <Grid
            container
            paddingTop={2}
            width={"100%"}
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: `10px solid ${colorPicked!.darkColor}`,
              borderBottom: "none",
              borderTopLeftRadius: "25px",
              borderTopRightRadius: "25px",
              backgroundColor: colorPicked!.clearColor,
            }}
          >
            {!props.fetching &&
              (props.avatar !== undefined ? (
                isEditing ? (
                  <CustomAvatar
                    typeCode={props.avatar.codeSoma}
                    gender={cookies.user.gender}
                    indexes={indexes!}
                    setters={setters}
                    clothes={true}
                    mainColor={colorPickedIndex}
                    setHasChanges={setAvatarHasChanges}
                  />
                ) : (
                  <Avatar
                    typeSoma={props.avatar.codeSoma}
                    hair={
                      cookies.user.gender === "male"
                        ? hairs[props.avatar!.indexHair!]
                        : hairsFemale[props.avatar!.indexHair!]
                    }
                    face={faces[props.avatar.indexFace!]}
                    beard={beards[props.avatar.indexBeard!]}
                    gender={cookies.user.gender}
                    colorsSkin={colorsSkin[props.avatar.indexColorSkin!]}
                    colorsHair={colorsHair[props.avatar.indexColorHair!]}
                    cloth={true}
                    mainColor={colorPickedIndex}
                  />
                )
              ) : (
                <Typography
                  variant="h4"
                  p={3}
                  textAlign="center"
                  color={"black"}
                >
                  You have no somatotype registered on this account. Please add
                  one to be able to see your avatar!
                </Typography>
              ))}
          </Grid>
          <Grid
            container
            paddingTop={2}
            width={"100%"}
            sx={{
              marginTop: "-2px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              border: `10px solid ${colorPicked!.darkColor}`,
              borderTop: "none",
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
              backgroundColor: colorPicked!.normalColor,
            }}
          >
            <Box
              width={"100%"}
              padding={1}
              sx={{
                borderBottomLeftRadius: "12.5px",
                borderBottomRightRadius: "12.5px",
              }}
            >
              <TextField
                error={nameIsIncorrect ? true : false}
                onChange={handleChangeName}
                id="name"
                variant="outlined"
                disabled={isEditing ? false : true}
                value={name}
                sx={{
                  width: "80%",
                  backgroundColor: isEditing
                    ? "#ffffff"
                    : colorPicked!.normalColor,
                  borderRadius: "25px",

                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: nameIsIncorrect
                        ? "2px solid #ff0000"
                        : "0px solid #ffffff",
                      borderRadius: "25px",
                    },
                    "&.Mui-focused fieldset": {
                      border: nameIsIncorrect
                        ? "2px solid #ff0000"
                        : "0px solid #ffffff",
                      borderRadius: "25px",
                    },
                  },

                  "input:-webkit-autofill": {
                    WebkitTextFillColor: isEditing
                      ? colorPicked!.darkColor
                      : "#ffffff",
                    transition: `background-color 600000s 0s`,
                    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                    fontWeight: 400,
                    fontSize: small
                      ? xxs
                        ? xxxs
                          ? "80%"
                          : "100%"
                        : "120%"
                      : "150%",
                    lineHeight: "1.4375em",
                    borderRadius: "25px",
                  },

                  input: {
                    width: "100%",
                    textAlign: "center",
                    color: isEditing ? colorPicked!.darkColor : "#ffffff",
                    padding: 0.25,
                    fontSize: small
                      ? xxs
                        ? xxxs
                          ? "80%"
                          : "100%"
                        : "120%"
                      : "150%",
                    "&.Mui-disabled": {
                      WebkitTextFillColor: isEditing
                        ? colorPicked!.darkColor
                        : "#ffffff",
                    },
                  },
                }}
              />
            </Box>
          </Grid>
          {nameIsIncorrect && (
            <Typography
              variant="caption"
              display="block"
              color="#ff0000"
              alignSelf={"start"}
              marginTop={0.5}
            >
              • Name can only contains lowercase letters !
            </Typography>
          )}
        </Grid>

        <Grid item width={"100%"} xs={12} paddingTop={2}>
          <Box
            sx={{
              backgroundColor: colorPicked!.darkColor,
              marginTop: 2,
              padding: 2,
              borderRadius: "25px",
            }}
          >
            <TextField
              error={emailIsIncorrect ? true : false}
              onChange={handleChangeEmail}
              id="email"
              variant="outlined"
              disabled={isEditing ? false : true}
              value={email}
              sx={{
                width: "100%",
                backgroundColor: isEditing ? "#ffffff" : colorPicked!.darkColor,
                borderRadius: "25px",

                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: emailIsIncorrect
                      ? "2px solid #ff0000"
                      : "0px solid #ffffff",
                    borderRadius: "25px",
                  },
                  "&.Mui-focused fieldset": {
                    border: emailIsIncorrect
                      ? "2px solid #ff0000"
                      : "0px solid #ffffff",
                    borderRadius: "25px",
                  },
                },

                "input:-webkit-autofill": {
                  WebkitTextFillColor: isEditing
                    ? colorPicked!.darkColor
                    : "#ffffff",
                  transition: `background-color 600000s 0s`,
                  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                  fontWeight: 400,
                  fontSize: small
                    ? xxs
                      ? xxxs
                        ? "80%"
                        : "100%"
                      : "120%"
                    : "150%",
                  lineHeight: "1.4375em",
                  borderRadius: "25px",
                },

                input: {
                  width: "100%",
                  textAlign: "center",
                  color: isEditing ? colorPicked!.darkColor : "#ffffff",
                  padding: 1,
                  fontSize: small
                    ? xxs
                      ? xxxs
                        ? "80%"
                        : "100%"
                      : "120%"
                    : "150%",
                  "&.Mui-disabled": {
                    WebkitTextFillColor: isEditing
                      ? colorPicked!.darkColor
                      : "#ffffff",
                  },
                },
              }}
            />
          </Box>
          {emailIsIncorrect ? (
            <Typography
              variant="caption"
              display="block"
              color="#ff0000"
              marginTop={0.5}
            >
              • Please enter a valid email !
            </Typography>
          ) : null}
        </Grid>

        {isEditing && (
          <Grid item width={"100%"} xs={12} marginTop={4}>
            <Typography
              textAlign={"center"}
              color={"#000000"}
              sx={{
                fontSize: small
                  ? xxs
                    ? xxxs
                      ? "80%"
                      : "100%"
                    : "120%"
                  : "150%",
              }}
            >
              Color Picker
            </Typography>
            <Grid
              container
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              columnSpacing={xxSmall ? (xxs ? (xxxs ? 0.3 : 0.5) : 0.75) : 2}
            >
              <Grid item>
                <IconButton
                  sx={{ padding: 0 }}
                  onClick={() => {
                    setMainColor(0);
                  }}
                >
                  <CircleIcon
                    sx={{
                      color: getSpecificColors(0).normalColor,
                      fontSize: xxSmall
                        ? xxs
                          ? xxxs
                            ? "150%"
                            : "165%"
                          : "175%"
                        : "200%",
                      cursor: "pointer",
                      "&:hover": {
                        color: getSpecificColors(0).lightColor,
                      },
                    }}
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  sx={{ padding: 0 }}
                  onClick={() => {
                    setMainColor(1);
                  }}
                >
                  <CircleIcon
                    sx={{
                      color: getSpecificColors(1).normalColor,
                      fontSize: xxSmall
                        ? xxs
                          ? xxxs
                            ? "150%"
                            : "165%"
                          : "175%"
                        : "200%",
                      cursor: "pointer",
                      "&:hover": {
                        color: getSpecificColors(1).lightColor,
                      },
                    }}
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  sx={{ padding: 0 }}
                  onClick={() => {
                    setMainColor(2);
                  }}
                >
                  <CircleIcon
                    sx={{
                      color: getSpecificColors(2).normalColor,
                      fontSize: xxSmall
                        ? xxs
                          ? xxxs
                            ? "150%"
                            : "165%"
                          : "175%"
                        : "200%",
                      cursor: "pointer",
                      "&:hover": {
                        color: getSpecificColors(2).lightColor,
                      },
                    }}
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  sx={{ padding: 0 }}
                  onClick={() => {
                    setMainColor(3);
                  }}
                >
                  <CircleIcon
                    sx={{
                      color: getSpecificColors(3).normalColor,
                      fontSize: xxSmall
                        ? xxs
                          ? xxxs
                            ? "150%"
                            : "165%"
                          : "175%"
                        : "200%",
                      cursor: "pointer",
                      "&:hover": {
                        color: getSpecificColors(3).lightColor,
                      },
                    }}
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  sx={{ padding: 0 }}
                  onClick={() => {
                    setMainColor(4);
                  }}
                >
                  <CircleIcon
                    sx={{
                      color: getSpecificColors(4).normalColor,
                      fontSize: xxSmall
                        ? xxs
                          ? xxxs
                            ? "150%"
                            : "165%"
                          : "175%"
                        : "200%",
                      cursor: "pointer",
                      "&:hover": {
                        color: getSpecificColors(4).lightColor,
                      },
                    }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        )}

        {isEditing ? (
          <Grid
            item
            sx={{
              flexGrow: 1,
            }}
            width={"100%"}
          >
            <Grid
              container
              display={"flex"}
              flexDirection={"row"}
              width={"100%"}
              columnSpacing={{ xs: 0, md: 2 }}
              justifyContent={"center"}
              marginTop={4}
            >
              <Grid item xs={12} textAlign={"center"} order={{ xs: 2, md: 1 }}>
                <Button
                  sx={{
                    borderColor: "#000000",
                    color: "#000000",
                    padding: "14px 30px",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: "30px",
                    fontSize: small
                      ? xxs
                        ? xxxs
                          ? "70%"
                          : "80%"
                        : "100%"
                      : "120%",
                    borderRadius: "40px",
                    textTransform: "uppercase",
                    marginBottom: 2,
                    width: "100%",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#000000",
                      color: "#ffffff",
                      borderColor: "#000000",
                    },
                  }}
                  variant="outlined"
                  onClick={handleDiscardChanges}
                >
                  Discard changes
                </Button>
              </Grid>
              <Grid item xs={12} textAlign={"center"} order={{ xs: 1, md: 2 }}>
                <Button
                  sx={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: "30px",
                    fontSize: small
                      ? xxs
                        ? xxxs
                          ? "70%"
                          : "80%"
                        : "100%"
                      : "120%",
                    textTransform: "uppercase",
                    padding: "14px 30px",
                    borderRadius: "40px",
                    marginBottom: 2,
                    width: "100%",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#000000",
                    },
                    display: "flex",
                    "&:hover": { bgcolor: "#000000" },
                  }}
                  variant="contained"
                  onClick={handleSaveChanges}
                  disabled={
                    (!emailhasChanges &&
                      !nameHasChanges &&
                      !colorhasChanges &&
                      !avatarhasChanges) ||
                    emailIsIncorrect ||
                    nameIsIncorrect
                  }
                >
                  Save changes
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ) : null}

        {!isEditing && (
          <Grid
            item
            sx={{
              flexGrow: 1,
            }}
            width={"100%"}
            xs={12}
          >
            <Button
              sx={{
                backgroundColor: "#000000",
                color: "#ffffff",
                fontWeight: 600,
                textAlign: "center",
                lineHeight: "30px",
                fontSize: small
                  ? xxs
                    ? xxxs
                      ? "70%"
                      : "80%"
                    : "100%"
                  : "120%",
                textTransform: "uppercase",
                padding: "14px 30px",
                borderRadius: "40px",
                marginTop: 4,
                width: "100%",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#000000",
                },
                display: "flex",
                "&:hover": { bgcolor: "#000000" },
              }}
              variant="contained"
              onClick={handleEditProfile}
              disabled={props.fetching}
            >
              Edit Profile
            </Button>
            <Button
              sx={{
                backgroundColor: "#000000",
                color: "#ffffff",
                fontWeight: 600,
                textAlign: "center",
                lineHeight: "30px",
                fontSize: small
                  ? xxs
                    ? xxxs
                      ? "70%"
                      : "80%"
                    : "100%"
                  : "120%",
                textTransform: "uppercase",
                padding: "14px 30px",
                borderRadius: "40px",
                marginTop: 2,
                width: "100%",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#000000",
                },
                display: "flex",
                "&:hover": { bgcolor: "#000000" },
              }}
              variant="contained"
              onClick={handleEditPassword}
              disabled={props.fetching}
            >
              Edit Password
            </Button>
            <Button
              sx={{
                borderColor: "#000000",
                color: "#000000",
                padding: "14px 30px",
                fontWeight: 600,
                textAlign: "center",
                lineHeight: "30px",
                fontSize: small
                  ? xxs
                    ? xxxs
                      ? "70%"
                      : "80%"
                    : "100%"
                  : "120%",
                borderRadius: "40px",
                textTransform: "uppercase",
                marginTop: 10,
                width: "100%",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#000000",
                  color: "#ffffff",
                  borderColor: "#000000",
                },
              }}
              variant="outlined"
              onClick={handleDeleteAccountModal}
              disabled={props.fetching}
            >
              {props.fetching ? (
                <CircularProgress size={25} />
              ) : (
                "Delete account"
              )}
            </Button>
          </Grid>
        )}
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
                sx={{
                  borderColor: "#000000",
                  color: "#000000",
                  padding: "14px 30px",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: "30px",
                  fontSize: "18px",
                  borderRadius: "40px",
                  textTransform: "initial",
                  width: "100%",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#000000",
                    color: "#ffffff",
                    borderColor: "#000000",
                  },
                }}
                variant="outlined"
                onClick={handleCancelNewPwd}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: "30px",
                  fontSize: "18px",
                  textTransform: "initial",
                  padding: "14px 30px",
                  borderRadius: "40px",
                  width: "100%",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#000000",
                  },
                  display: "flex",
                  "&:hover": { bgcolor: "#000000" },
                }}
                variant="contained"
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
      <Modal
        open={openDeleteConfirmModal}
        onClose={handleDeleteConfirmModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-modal-description"
            fontSize={"150%"}
            textAlign={"center"}
          >
            Do you want to
            <Typography
              fontWeight={"bold"}
              fontSize={"100%"}
              component={"span"}
            >
              {" "}
              delete{" "}
            </Typography>
            your account?
          </Typography>
          <Grid
            container
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Grid item>
              <Button
                sx={{
                  borderColor: "#000000",
                  color: "#000000",
                  padding: "14px 30px",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: "30px",
                  fontSize: "18px",
                  borderRadius: "40px",
                  textTransform: "initial",
                  width: "100%",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#000000",
                    color: "#ffffff",
                    borderColor: "#000000",
                  },
                }}
                variant="outlined"
                onClick={handleCancelDeleteAccount}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: "30px",
                  fontSize: "18px",
                  textTransform: "initial",
                  padding: "14px 30px",
                  borderRadius: "40px",
                  width: "100%",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#000000",
                  },
                  display: "flex",
                  "&:hover": { bgcolor: "#000000" },
                }}
                variant="contained"
                onClick={handleDeleteAccount}
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
