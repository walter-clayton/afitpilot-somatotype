import Landing from "./components/Landing";
import "./App.css";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "./components/AppNavBar";
import { useState } from "react";
import Profile from "./Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Snackbar } from "@mui/material";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [open, setOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Router>
      <ResponsiveAppBar
        setOpen={setOpen}
        setSnackbarMessage={setSnackbarMessage}
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Signup" element={!cookies.user && <Signup />} />
        <Route
          path="/Login"
          element={
            !cookies.user && (
              <Login
                setOpen={setOpen}
                setSnackbarMessage={setSnackbarMessage}
              />
            )
          }
        />
        <Route
          path="/Profile"
          element={
            cookies.user && (
              <Profile
                setOpen={setOpen}
                setSnackbarMessage={setSnackbarMessage}
              />
            )
          }
        />
      </Routes>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message={snackbarMessage}
        onClose={handleClose}
      />
    </Router>
  );
}

export default App;
