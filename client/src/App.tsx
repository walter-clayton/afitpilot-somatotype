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
import Footer from "./components/CTA/Footer";
import Contact from "./components/CTA/Contact";
import TermsCondition from "./components/CTA/TermsCondition";
import Privacy from "./components/CTA/Privacy";
import Types from "./components/CTA/TypesPage";
import BalancedEndomorph from "./components/CTA/BalancedEndomorph";
import TestPage from "./components/TestPage";
import BlogPage from "./components/BlogPage";
import Home from "./components/HomePage";
import FooterCTA from "./components/CTA/FooterCTA";
import BlogArticlePage from "./components/BlogArticlePage";
import AddPage from "./components/AddPage";
import Error404 from "./components/CTA/Error404";
import CommentPage from "./components/CTA/CommentPage";
import TypeExample from "./components/CTA/TypeExample";

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
  const [cookies, setCookie, removeCookie] = useCookies(["user", "data"]);
  const [open, setOpen] = useState<boolean>(false);
  const [resultsSaved, setResultsSaved] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  const [data, setData] = useState<IData | undefined>(undefined);

  const [isAdding, setIsAdding] = useState<boolean>(true);
  const [idRow, setIdRow] = useState<string>("");
  const [idSomatotype, setIdSomatotype] = useState<string>("");
  const [dashboardSnackBarOpen, setDashboardSnackBarOpen] =
    useState<boolean>(false);
  const [dashboardSnackBarMessage, setDashboardSnackBarMessage] =
    useState<string>("");

  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    cookies.data && setData(cookies.data);
  }, [data, cookies.data]);

  return (
    <Router>
      <ResponsiveAppBar
        setOpen={setOpen}
        setSnackbarMessage={setSnackbarMessage}
        setData={setData}
        setIsAdding={setIsAdding}
      />
      <Routes>
        <Route
          path="/"
          element={
            cookies.user ? (
              <Dashboard
                resultsSaved={resultsSaved}
                setResultsSaved={setResultsSaved}
                setIsAdding={setIsAdding}
                idRow={idRow}
                setIdRow={setIdRow}
                idSomatotype={idSomatotype}
                setIdSomatotype={setIdSomatotype}
                dashboardSnackBarOpen={dashboardSnackBarOpen}
                setDashboardSnackBarOpen={setDashboardSnackBarOpen}
                dashboardSnackBarMessage={dashboardSnackBarMessage}
                setDashboardSnackBarMessage={setDashboardSnackBarMessage}
              />
            ) : (
              <Home />
            )
          }
        />
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
        <Route path="/Contact" element={<Contact />} />
        <Route path="/TermsConditions" element={<TermsCondition />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Types" element={<Types />} />
        <Route path="/FooterCTA" element={<FooterCTA />} />
        <Route path="/Error404" element={<Error404 />} />
        <Route path="/CommentPage" element={<CommentPage />} />
        <Route path="/TypeExample" element={<TypeExample />} />
        <Route
          path="/Test"
          element={
            <TestPage
              setData={setData}
              data={data!}
              resultsSaved={resultsSaved}
              setResultsSaved={setResultsSaved}
            />
          }
        />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Blog/:idBlog" element={<BlogArticlePage />} />
        <Route path="/Balanced-endomorph" element={<BalancedEndomorph />} />
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
        <Route
          path="/Add"
          element={
            <AddPage
              isAdding={isAdding}
              idRow={idRow}
              idSomatotype={idSomatotype}
              setDashboardSnackBarOpen={setDashboardSnackBarOpen}
              setDashboardSnackBarMessage={setDashboardSnackBarMessage}
            />
          }
        />
      </Routes>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message={snackbarMessage}
        onClose={handleClose}
      />
      {/* <BalancedEndomorph /> */}
      <Footer />
    </Router>
  );
}

export default App;
