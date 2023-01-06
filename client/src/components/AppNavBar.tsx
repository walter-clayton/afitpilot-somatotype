import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Grid, MenuItem, useMediaQuery } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Avatar from "@mui/material/Avatar";
import logoIcon from "./image/Afitpilot_logo_outlined.png";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import Divider from "@mui/material/Divider";

const pages = [
  { title: "Homepage", path: "/Home" },
  { title: "Somatotypes", path: "/Types" },
  { title: "Blogs", path: "/Blog" },
  { title: "Library", path: "/Library" },
];

const profilePages = [
  { title: "My Profile", path: "/Profile" },
  { title: "Dashboard", path: "/" },
];

const dividerStyle = {
  width: "100%",
  bgcolor: "background.paper",
};

const ResponsiveAppBar = (props: any) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElNavLogged, setAnchorElNavLogged] = useState(null);
  const [anchorElNavProfile, setAnchorElNavProfile] = useState(null);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user", "data"]);

  const large = useMediaQuery("(min-width:1200px)");
  const xxs = useMediaQuery("(max-width:380px)");
  const xxxs = useMediaQuery("(max-width:320px)");

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenNavLoggedMenu = (event: any) => {
    setAnchorElNavLogged(event.currentTarget);
  };

  const handleOpenNavProfileMenu = (event: any) => {
    setAnchorElNavProfile(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseNavLoggedMenu = () => {
    setAnchorElNavLogged(null);
  };

  const handleCloseNavProfileMenu = () => {
    setAnchorElNavProfile(null);
  };

  const handleLogout = () => {
    handleCloseNavMenu();
    handleCloseNavLoggedMenu();
    handleCloseNavProfileMenu();
    removeCookie("user", { path: "/", sameSite: "none", secure: true });
    props.setOpen(true);
    props.setSnackbarMessage("Log out successfully");
    props.setData(undefined);
    clearInterval(props.clearInterval);
    props.setClearInterval(undefined);
    navigate("/Login");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    function handleResize() {
      handleCloseNavMenu();
      handleCloseNavLoggedMenu();
      handleCloseNavProfileMenu();
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <AppBar position="static" sx={{ width: "100%", background: "black" }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Grid container alignItems={"center"}>
            <Grid
              item
              xs={3.5}
              sx={{ display: large ? "flex" : "none", cursor: "pointer" }}
              flexDirection={"row"}
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            >
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="logo" src={logoIcon} sx={{ borderRadius: "0" }} />
              </IconButton>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mx: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  alignSelf: "center",
                }}
              >
                AFITPILOT
              </Typography>
            </Grid>

            <Grid
              item
              xs={10}
              sx={{
                display: large ? "none" : "flex",
                justifyContent: "start",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            >
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="logo"
                  src={logoIcon}
                  sx={{
                    width: { xs: 32, sm: 48 },
                    height: { xs: 32, sm: 48 },
                    borderRadius: "0",
                  }}
                />
              </IconButton>

              <Typography
                variant="h5"
                noWrap
                sx={{
                  mx: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: { xs: ".22rem", sm: ".3rem" },
                  color: "inherit",
                  textDecoration: "none",
                  alignSelf: "center",
                  fontSize: { xs: "100%", sm: "150%" },
                }}
              >
                AFITPILOT
              </Typography>
            </Grid>

            <Grid
              item
              xs={2}
              sx={{
                justifyContent: "end",
                display: large ? "none" : "flex",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(e) => {
                  cookies.user
                    ? handleOpenNavLoggedMenu(e)
                    : handleOpenNavMenu(e);
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-logged-appbar"
                anchorEl={anchorElNavLogged}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNavLogged)}
                onClose={handleCloseNavLoggedMenu}
                sx={{
                  display: large ? "none" : "block",
                }}
              >
                <MenuItem sx={{ justifyContent: "center" }}>
                  <Button
                    sx={{
                      borderRadius: "40px",
                      backgroundColor: "RGB(108, 77, 123)",
                      fontSize: "16px",
                      fontWeight: 600,
                      textTransform: "initial",
                      width: "160px",
                      textAlign: "center",
                      "&.MuiButtonBase-root:hover": {
                        bgcolor: "RGB(108, 77, 123)",
                      },
                    }}
                    variant="contained"
                    onClick={() => {
                      props.setIsAdding!(true);
                      navigate("/Test");
                      handleCloseNavLoggedMenu();
                      window.scrollTo(0, 0);
                    }}
                  >
                    Add new
                    <ArrowForwardSharpIcon fontSize="small" />
                  </Button>
                </MenuItem>
                <MenuItem sx={{ minHeight: "0" }}>
                  <Divider sx={dividerStyle} />
                </MenuItem>
                {profilePages.map((profilePage, index) => (
                  <MenuItem
                    sx={{
                      minHeight: "36px",
                    }}
                    key={index}
                    onClick={() => {
                      handleCloseNavLoggedMenu();
                      navigate(profilePage.path);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Typography textAlign="center">
                      {profilePage.title}
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem sx={{ minHeight: "0" }}>
                  <Divider sx={dividerStyle} />
                </MenuItem>
                {pages.map((page, index) => (
                  <MenuItem
                    sx={{ minHeight: "36px" }}
                    key={index}
                    onClick={() => {
                      handleCloseNavLoggedMenu();
                      navigate(page.path);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
                <MenuItem sx={{ minHeight: "0" }}>
                  <Divider sx={dividerStyle} />
                </MenuItem>
                <MenuItem sx={{ justifyContent: "center" }}>
                  <Button
                    onClick={() => {
                      handleCloseNavLoggedMenu();
                      handleLogout();
                      window.scrollTo(0, 0);
                    }}
                    sx={{
                      color: "white",
                      backgroundColor: "black",
                      cursor: "pointer",
                      "&:hover": { backgroundColor: "#262626" },
                      fontSize: "16px",
                      fontWeight: 600,
                      textTransform: "initial",
                      width: "160px",
                      borderRadius: "40px",
                    }}
                    variant="contained"
                  >
                    Log out
                  </Button>
                </MenuItem>
              </Menu>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: large ? "none" : "block",
                }}
              >
                <MenuItem sx={{ justifyContent: "center" }}>
                  <Button
                    sx={{
                      borderRadius: "40px",
                      backgroundColor: "RGB(108, 77, 123)",
                      fontSize: "16px",
                      fontWeight: 600,
                      textTransform: "initial",
                      textAlign: "center",
                      "&.MuiButtonBase-root:hover": {
                        bgcolor: "RGB(108, 77, 123)",
                      },
                      width: "160px",
                    }}
                    variant="contained"
                    onClick={() => {
                      navigate("/Test");
                      handleCloseNavMenu();
                      window.scrollTo(0, 0);
                    }}
                  >
                    {cookies.data ? "Save results" : "Take the Test"}
                    <ArrowForwardSharpIcon fontSize="small" />
                  </Button>
                </MenuItem>
                <MenuItem sx={{ minHeight: "0" }}>
                  <Divider sx={dividerStyle} />
                </MenuItem>
                {pages.map((page, index) => (
                  <MenuItem
                    sx={{ minHeight: "36px" }}
                    key={index}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(page.path);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
                <MenuItem sx={{ minHeight: "0" }}>
                  <Divider sx={dividerStyle} />
                </MenuItem>
                <MenuItem sx={{ justifyContent: "center" }}>
                  <Button
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate("/Login");
                      window.scrollTo(0, 0);
                    }}
                    sx={{
                      color: "white",
                      backgroundColor: "black",
                      cursor: "pointer",
                      "&:hover": { backgroundColor: "#262626" },
                      fontSize: "16px",
                      fontWeight: 600,
                      textTransform: "initial",
                      width: "160px",
                      borderRadius: "40px",
                    }}
                    variant="contained"
                  >
                    Log in
                  </Button>
                </MenuItem>
              </Menu>
            </Grid>
            <Grid
              item
              xs={5}
              sx={{
                justifyContent: "center",
                display: large ? "flex" : "none",
              }}
            >
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(page.path);
                    window.scrollTo(0, 0);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              ))}
            </Grid>
            <Grid
              item
              xs={3.5}
              sx={{
                justifyContent: "end",
                display: large ? "flex" : "none",
              }}
            >
              <Grid
                container
                justifyContent={"end"}
                alignItems={"center"}
                spacing={large ? 2 : 0.5}
              >
                {cookies.user ? (
                  <Grid item>
                    <Box>
                      <Tooltip title="Profile options">
                        <IconButton
                          size="large"
                          aria-label="Profile of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleOpenNavProfileMenu}
                          color="inherit"
                          sx={{ p: 0 }}
                        >
                          <AccountCircleIcon
                            sx={{
                              color: "white",
                              fontSize: xxs ? "2rem" : "3rem",
                              "&:hover": { color: "lightgrey" },
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        id="menu-profile-appbar"
                        anchorEl={anchorElNavProfile}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        open={Boolean(anchorElNavProfile)}
                        onClose={handleCloseNavProfileMenu}
                        sx={{
                          display: { xs: "block" },
                        }}
                      >
                        {profilePages.map((profilePage, index) => (
                          <MenuItem
                            sx={{ minHeight: "36px" }}
                            key={index}
                            onClick={() => {
                              handleCloseNavProfileMenu();
                              navigate(profilePage.path);
                              window.scrollTo(0, 0);
                            }}
                          >
                            <Typography textAlign="center">
                              {profilePage.title}
                            </Typography>
                          </MenuItem>
                        ))}
                        <MenuItem sx={{ minHeight: "0" }}>
                          <Divider sx={dividerStyle} />
                        </MenuItem>
                        <MenuItem sx={{ justifyContent: "center" }}>
                          <Button
                            onClick={() => {
                              handleLogout();
                              handleCloseNavProfileMenu();
                              window.scrollTo(0, 0);
                            }}
                            sx={{
                              color: "white",
                              backgroundColor: "black",
                              cursor: "pointer",
                              "&:hover": { backgroundColor: "#262626" },
                              fontSize: "16px",
                              fontWeight: 600,
                              textTransform: "initial",
                              width: "160px",
                              borderRadius: "40px",
                            }}
                            variant="contained"
                          >
                            Log out
                          </Button>
                        </MenuItem>
                      </Menu>
                    </Box>
                  </Grid>
                ) : (
                  <Grid item>
                    <Button
                      onClick={() => {
                        navigate("/Login");
                        window.scrollTo(0, 0);
                      }}
                      sx={{
                        color: "white",
                        cursor: "pointer",
                        fontSize: xxs ? "60%" : { xs: "80%", sm: "100%" },
                        paddingY: xxs ? 0.25 : { xs: 0.5, sm: 1 },
                        paddingX: xxs ? 0.5 : { xs: 1.5, sm: 3 },
                        minWidth: xxs ? "50px" : "0px",
                        "&:hover": { backgroundColor: "#ffffff1e" },
                        textTransform: "initial",
                        borderRadius: "40px",
                      }}
                      variant="text"
                    >
                      Log in
                    </Button>
                  </Grid>
                )}

                <Grid item>
                  <Button
                    sx={{
                      borderRadius: "40px",
                      backgroundColor: "RGB(108, 77, 123)",
                      fontSize: "16px",
                      fontWeight: 600,
                      textTransform: "initial",
                      width: "160px",
                      textAlign: "center",
                      "&.MuiButtonBase-root:hover": {
                        bgcolor: "RGB(108, 77, 123)",
                      },
                    }}
                    variant="contained"
                    onClick={() => {
                      navigate("/Test");
                      window.scrollTo(0, 0);
                    }}
                  >
                    {cookies.user
                      ? "Add new"
                      : cookies.data
                      ? "Save results"
                      : "Take the Test"}
                    <ArrowForwardSharpIcon fontSize="small" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
