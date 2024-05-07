import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
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
import logoIcon from "../../image/Afitpilot_logo_outlined.png";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const pages = [
  { title: "Homepage", path: "/Home" },
  { title: "Somatotypes", path: "/Types" },
  { title: "Blogs", path: "/Blog" },
  { title: "Library", path: "/Library" },
];
const Optimise = [
  { title: "Optimization", path: "/Optimisation" },
  { title: "Nutrition", path: "/Nutrition" },
  { title: "Training", path: "/Training" },
];

const RPEOptions = [
  { title: "RPE Score", path: "/RPEScore" },
  { title: "RPE Dashboard", path: "/RPEDashboard" },
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
  const [anchorElNavDropdown, setAnchorElNavDropdown] = useState(null);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user", "data"]);
  const [anchorElNavRPE, setAnchorElNavRPE] = useState(null);

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

  const handleOpenNavDropdown = (event: any) => {
    setAnchorElNavDropdown(event.currentTarget);
  };

  const handleOpenNavRPE = (event: any) => {
    setAnchorElNavRPE(event.currentTarget);
  };

  const handleCloseNavRPE = () => {
    setAnchorElNavRPE(null);
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

  const handleCloseNavDropdown = () => {
    setAnchorElNavDropdown(null);
  };

  const handleLogout = () => {
    handleCloseNavMenu();
    handleCloseNavLoggedMenu();
    handleCloseNavProfileMenu();
    handleCloseNavDropdown();
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
      handleCloseNavDropdown();
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        background: "black",
        margin: "-10px",
      }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Grid container alignItems={"center"}>
            <Grid
              item
              xs={large ? 3.5 : 10}
              sx={{ display: "flex", cursor: "pointer" }}
              flexDirection={"row"}
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
                    width: xxxs ? 32 : 48,
                    height: xxxs ? 32 : 48,
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
                  color: "inherit",
                  textDecoration: "none",
                  alignSelf: "center",
                  letterSpacing: xxxs ? ".2rem" : ".25rem",
                  fontSize: xxxs ? "90%" : "120%",
                }}
              >
                AFITPILOT
              </Typography>
            </Grid>

            {/* <Grid
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
                  color: "red",
                  textDecoration: "none",
                  alignSelf: "center",
                  letterSpacing: { xs: ".22rem", sm: ".3rem" },
                  fontSize: { xs: "100%", sm: "150%" },
                }}
              >
                AFITPILOT
              </Typography>
            </Grid> */}

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
                disableScrollLock={true}
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
                {Optimise.map((item, index) => (
                  <MenuItem
                    sx={{ minHeight: "36px" }}
                    key={index}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(item.path);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Typography textAlign="center">{item.title}</Typography>
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
                disableScrollLock={true}
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
                {Optimise.map((item, index) => (
                  <MenuItem
                    sx={{ minHeight: "36px" }}
                    key={index}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(item.path);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Typography textAlign="center">{item.title}</Typography>
                  </MenuItem>
                ))}
                <MenuItem sx={{ minHeight: "0" }}>
                  <Divider sx={dividerStyle} />
                </MenuItem>
                {RPEOptions.map((item, index) => (
                  <MenuItem
                    sx={{ minHeight: "36px" }}
                    key={index}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(item.path);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <Typography textAlign="center">{item.title}</Typography>
                  </MenuItem>
                ))}
                <MenuItem sx={{ minHeight: "0" }}>
                  <Divider sx={dividerStyle} />
                </MenuItem>
                <MenuItem
                  sx={{
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
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
                  <Button
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate("/NavSignup");
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
                    Sign up
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
              <Button
                sx={{ my: 2, color: "white", position: "relative" }}
                onClick={(e) => {
                  Boolean(anchorElNavDropdown)
                    ? handleCloseNavDropdown()
                    : handleOpenNavDropdown(e);
                }}
              >
                Optimize
                <ArrowForwardIosIcon
                  sx={{
                    marginLeft: "0px",
                    paddingBottom: "2px",
                    fontSize: "18px",
                    transition: "all .3s ease-out",
                    transform: Boolean(anchorElNavDropdown)
                      ? "rotate(90deg)"
                      : "rotate(0)",
                  }}
                />
              </Button>
              <Button
                sx={{ my: 2, color: "white", position: "relative" }}
                onClick={(e) => {
                  Boolean(anchorElNavRPE)
                    ? handleCloseNavRPE()
                    : handleOpenNavRPE(e);
                }}
              >
                RPE
                <ArrowForwardIosIcon
                  sx={{
                    marginLeft: "0px",
                    paddingBottom: "2px",
                    fontSize: "18px",
                    transition: "all .3s ease-out",
                    transform: Boolean(anchorElNavRPE)
                      ? "rotate(90deg)"
                      : "rotate(0)",
                  }}
                />
              </Button>
              {/* Dropdown */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNavRPE}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNavRPE)}
                onClose={handleCloseNavRPE}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "black",
                  },
                }}
                disableScrollLock={true}
              >
                {RPEOptions.map((item, index) => (
                  <MenuItem
                    sx={{ minHeight: "36px" }}
                    key={index}
                    onClick={() => {
                      navigate(`${item.path}`);
                      window.scrollTo(0, 0);
                      handleCloseNavRPE();
                    }}
                  >
                    <Typography textAlign="center" color={"white"}>
                      {item.title}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNavDropdown}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNavDropdown)}
                onClose={handleCloseNavDropdown}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "black",
                  },
                }}
                disableScrollLock={true}
              >
                {Optimise.map((item, index) => (
                  <MenuItem
                    sx={{ minHeight: "36px" }}
                    key={index}
                    onClick={() => {
                      navigate(`${item.path}`);
                      window.scrollTo(0, 0);
                      handleCloseNavDropdown();
                    }}
                  >
                    <Typography textAlign="center" color={"white"}>
                      {item.title}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
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
                        disableScrollLock={true}
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
                        fontSize: "16px",
                        paddingY: 1,
                        paddingX: 3,
                        minWidth: xxs ? "50px" : "0px",
                        "&:hover": { backgroundColor: "#ffffff1e" },
                        textTransform: "initial",
                        borderRadius: "40px",
                      }}
                      variant="text"
                    >
                      Log in
                    </Button>
                    <Button
                      onClick={() => {
                        navigate("/NavSignup");
                        window.scrollTo(0, 0);
                      }}
                      sx={{
                        color: "white",
                        cursor: "pointer",
                        fontSize: "16px",
                        paddingY: 1,
                        paddingX: 3,
                        minWidth: xxs ? "50px" : "0px",
                        "&:hover": { backgroundColor: "#ffffff1e" },
                        textTransform: "initial",
                        borderRadius: "40px",
                      }}
                      variant="text"
                    >
                      Sign up
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
