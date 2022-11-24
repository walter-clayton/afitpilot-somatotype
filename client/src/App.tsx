import Landing from "./components/Landing";
import "./App.css";
import ResponsiveAppBar from "./components/AppNavBar";
import { useState, useEffect } from "react";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Snackbar } from "@mui/material";
import Resetpass from "./components/Resetpass";
import Forget from "./components/Forget";
import Dashboard from "./components/Dashboard";
import Add from "./components/Add";
import Footer from "./components/CTA/Footer";
import Contact from "./components/CTA/Contact";
import TermsCondition from "./components/CTA/TermsCondition";
import Privacy from "./components/CTA/Privacy";
import Types from "./components/CTA/TypesPage";

export interface ISomatotype {
  endomorphy?: number | undefined;
  mesomorphy?: number | undefined;
  ectomorphy?: number | undefined;
  createdAt?: string | undefined;
  _id?: string | undefined;
}

export interface IAnthropometric {
  height?: number | undefined;
  weight?: number | undefined;
  supraspinal_skinfold?: number | undefined;
  subscapular_skinfold?: number | undefined;
  tricep_skinfold?: number | undefined;
  femur_breadth?: number | undefined;
  humerus_breadth?: number | undefined;
  calf_girth?: number | undefined;
  bicep_girth?: number | undefined;
}

export interface IData {
  somatotype?: ISomatotype | undefined;
  anthropometric?: IAnthropometric | undefined;
}

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [open, setOpen] = useState<boolean>(false);
  const [resultsSaved, setResultsSaved] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  const [data, setData] = useState<IData | undefined>(undefined);

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
        setData={setData}
      />
      <Routes>
        <Route
          path="/"
          element={
            cookies.user ? (
              <Dashboard />
            ) : (
              <Landing
                setData={setData}
                resultsSaved={resultsSaved}
                setResultsSaved={setResultsSaved}
              />
            )
          }
        />
        {/* <Route path="/Landing" element={<Landing />} /> */}
        <Route
          path="/Signup"
          element={
            (cookies.user && data) || !cookies.user ? (
              <Signup
                data={data}
                setData={setData}
                setOpen={setOpen}
                setSnackbarMessage={setSnackbarMessage}
                setResultsSaved={setResultsSaved}
              />
            ) : null
          }
        />
        <Route
          path="/Login"
          element={
            !cookies.user && (
              <Login
                setOpen={setOpen}
                data={data}
                setData={setData}
                setSnackbarMessage={setSnackbarMessage}
                setResultsSaved={setResultsSaved}
              />
            )
          }
        />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/Resetpass" element={<Resetpass />} />
        {/* <Route path="/Add" element={<Add setData={setData} />} /> */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="/TermsConditions" element={<TermsCondition />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Types" element={<Types />} />
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
        {/* <Route path="/Dashboard" element={cookies.user && <Dashboard />} /> */}
      </Routes>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message={snackbarMessage}
        onClose={handleClose}
      />
      <Footer />
    </Router>
  );
}

export default App;
