import * as React from "react";
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
import { MenuItem } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Avatar from "@mui/material/Avatar";
import logoIcon from "./image/logo-white.png";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const pages = [
  { title: "Test", path: "/Test" },
  { title: "Somatotypes", path: "/Types" },
  { title: "Blog", path: "/Blog" },
];

const ResponsiveAppBar = (props: any) => {
  const { height, width } = useWindowDimensions();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    removeCookie("user", { path: "/", sameSite: "none", secure: true });
    props.setOpen(true);
    props.setSnackbarMessage("Logout successfully");
    props.setData(undefined);
    navigate("/Login");
    window.scrollTo(0, 0);
  };

  return (
    <AppBar position="static" sx={{ width: "100%", background: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, cursor: "pointer" }}
            flexDirection={"row"}
            onClick={() => {
              props.setOpenAddModal(false);
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
                flexGrow: 1,
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
          </Box>

          <Box sx={{ flexGrow: 0.5, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={() => {
                    if (page.path === "/Blog") {
                      props.setOpenBlogArticleModal(false);
                    }
                    handleCloseNavMenu();
                    navigate(page.path);
                    window.scrollTo(0, 0);
                  }}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 0.5,
              cursor: "pointer",
            }}
            flexDirection={"row"}
            onClick={() => {
              props.setOpenAddModal(false);
              navigate("/");
              window.scrollTo(0, 0);
            }}
          >
            {width < 320 ? null : (
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
            )}
            <Typography
              variant="h5"
              noWrap
              sx={{
                mx: 1,
                flexGrow: 1,
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
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => {
                  if (page.path === "/Blog") {
                    props.setOpenBlogArticleModal(false);
                  }
                  handleCloseNavMenu();
                  navigate(page.path);
                  window.scrollTo(0, 0);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, marginRight: "10px" }}>
            {width < 380 ? (
              <Button
                onClick={() => {
                  cookies.user ? handleLogout() : navigate("/Login");
                  window.scrollTo(0, 0);
                }}
                sx={{
                  backgroundColor: "grey",
                  cursor: "pointer",
                  fontSize: "60%",
                  paddingY: 0.25,
                  paddingX: 0.5,
                  minWidth: "50px",
                }}
                variant="contained"
              >
                {cookies.user ? "Logout" : "Sign In"}
              </Button>
            ) : (
              <Button
                onClick={() => {
                  cookies.user ? handleLogout() : navigate("/Login");
                  window.scrollTo(0, 0);
                }}
                sx={{
                  backgroundColor: "grey",
                  cursor: "pointer",
                  fontSize: { xs: "80%", sm: "100%" },
                  paddingY: { xs: 0.5, sm: 1 },
                  paddingX: { xs: 1.5, sm: 3 },
                }}
                variant="contained"
              >
                {cookies.user ? "Logout" : "Sign In"}
              </Button>
            )}
          </Box>

          {cookies.user && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip
                title="Open profile page"
                onClick={() => {
                  navigate("/Profile");
                  window.scrollTo(0, 0);
                }}
              >
                <IconButton sx={{ p: 0 }}>
                  {width < 380 ? (
                    <AccountCircleIcon
                      sx={[
                        {
                          color: "white",
                          fontSize: "2rem",
                        },
                        { "&:hover": { color: "lightgrey" } },
                      ]}
                    />
                  ) : (
                    <AccountCircleIcon
                      sx={[
                        {
                          color: "white",
                          fontSize: "3rem",
                        },
                        { "&:hover": { color: "lightgrey" } },
                      ]}
                    />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
