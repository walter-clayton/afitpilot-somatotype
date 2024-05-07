import "./App.css";
import ResponsiveAppBar from "./components/navbar/AppNavBar";
import { useState, useEffect } from "react";
import Profile from "./components/profile/Profile";
import Login from "./components/authentification/Login";
import Signup from "./components/authentification/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Snackbar } from "@mui/material";
import Resetpass from "./components/authentification/Resetpass";
import Forget from "./components/authentification/Forget";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import TermsCondition from "./components/termsAndPrivacy/TermsCondition";
import Privacy from "./components/termsAndPrivacy/Privacy";
import Types from "./components/TypesPages/TypesPage";
import TypeDescription from "./components/TypesPages/Types/TypeDescription";
import TestPage from "./components/testPage/TestPage";
import BlogPage from "./components/blogs/BlogPage";
import Home from "./components/home/HomePage";
import FooterCTA from "./components/CTA/FooterCTA";
import BlogArticlePage from "./components/blogs/BlogArticlePage";
import Error404 from "./components/errors/Error404";
import CommentPage from "./components/comments/CommentPage";
import TypeExample from "./components/TypesPages/TypeCarousel";
import Nutrition from "./components/optimization/nutrition/Nutrition";
import Training from "./components/optimization/training/Training";
import Disconnection from "./components/authentification/Disconnection";
import Library from "./components/library/Library";
import Optimisation from "./components/optimization/optimise/Optimisation";
import axios from "axios";
import ReactGA from "react-ga4";
import { typeDescriptionDatas } from "./datas/TypeDescriptions";
import Powerlifting from "./components/Powerliftting/Powerlifting";
import NavSignup from "./components/authentification/NavSignup";
import TrainingDiary from "./components/Powerliftting/TrainingDiary";
import { SnackbarProvider } from "notistack";
import RPEScore from "./components/RPE/RPEScore";
import RPEDashboard from "./components/RPE/RPEDashboard";

export interface ISomatotype {
  endomorphy?: number | undefined;
  mesomorphy?: number | undefined;
  ectomorphy?: number | undefined;
  titleSomatotype?: string | undefined;
  codeSomatotype?: string | undefined;
  somatotypeTitle?: string;
  somatotypeCode?: string;
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
  body_fat?: number | undefined;
}

export interface IParamsAvatar {
  titleSoma?: string;
  codeSoma?: string;
  indexHair?: number;
  indexColorHair?: number;
  indexBeard?: number;
  indexFace?: number;
  indexColorSkin?: number;
}

interface IUser {
  mainColor?: number | undefined;
  gender?: string | undefined;
}

export interface IData {
  somatotype?: ISomatotype | undefined;
  anthropometric?: IAnthropometric | undefined;
  user?: IUser;
  avatar?: IParamsAvatar;
  svgAvatar?: any;
  logo?: any;
}

function App() {
  const [cookies] = useCookies(["user", "data"]);
  const [open, setOpen] = useState<boolean>(false);
  const [resultsSaved, setResultsSaved] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  const [data, setData] = useState<IData | undefined>(undefined);

  const [isAdding, setIsAdding] = useState<boolean>(true);
  const [idRow, setIdRow] = useState<number>();
  const [idSomatotype, setIdSomatotype] = useState<string>("");
  const [dashboardSnackBarOpen, setDashboardSnackBarOpen] =
    useState<boolean>(false);
  const [dashboardSnackBarMessage, setDashboardSnackBarMessage] =
    useState<string>("");

  const [clearInterval, setClearInterval] = useState<number | undefined>(
    undefined
  );

  const [avatar, setAvatar] = useState<IParamsAvatar | undefined>(undefined);

  const [fetching, setFetching] = useState<boolean>(true);

  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    ReactGA.send({ hitType: "websiteView", page: window.location.pathname });
  }, []);

  useEffect(() => {
    cookies.data && setData(cookies.data);
  }, [data, cookies.data]);

  useEffect(() => {
    avatar && cookies.user && fetching && setFetching(false);
  }, [avatar]);

  const getAvatar = async () => {
    const headers = {
      "Content-Type": "application/json",
      access_key: process.env.REACT_APP_ACCESS_KEY,
      Authorization: `Bearer ${cookies.user.token}`,
    };

    try {
      setFetching(true);
      const response = await axios.get(process.env.REACT_APP_GETAVATAR_URL!, {
        headers: headers,
      });
      setFetching(false);
      setAvatar(response.data.avatar);
    } catch (error) {
      // if (error.response) {
      //     error.response.data.message
      //       ? setSnackbarMessage(error.response.data.message)
      //       : setSnackbarMessage(error.response.statusText);
      //   } else {
      //     setSnackbarMessage("Error with the server");
      //   }
      console.log("error ", error);
      setFetching(false);
    }
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Disconnection
          clearInterval={clearInterval}
          setClearInterval={setClearInterval}
        />

        <ResponsiveAppBar
          setOpen={setOpen}
          setSnackbarMessage={setSnackbarMessage}
          setData={setData}
          setIsAdding={setIsAdding}
          clearInterval={clearInterval}
          setClearInterval={setClearInterval}
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
                  setAvatar={setAvatar}
                  avatar={avatar}
                  fetching={fetching}
                  setFetching={setFetching}
                  getAvatar={getAvatar}
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

          <Route path="/Home" element={<Home />} />
          <Route path="/Forget" element={<Forget />} />
          <Route path="/Resetpass" element={<Resetpass />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/TermsConditions" element={<TermsCondition />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route
            path="/Types"
            element={<Types dataDescription={typeDescriptionDatas} />}
          />
          <Route path="/FooterCTA" element={<FooterCTA />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/CommentPage" element={<CommentPage />} />
          <Route path="/TypeExample" element={<TypeExample />} />
          <Route path="/Nutrition" element={<Nutrition />} />
          <Route path="/Training" element={<Training />} />
          <Route path="/Optimisation" element={<Optimisation />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/RPEScore" element={<RPEScore />} />
          <Route path="/RPEDashboard" element={<RPEDashboard />} />
          <Route
            path="/Test"
            element={
              <TestPage
                setData={setData}
                data={data!}
                resultsSaved={resultsSaved}
                setResultsSaved={setResultsSaved}
                isAdding={isAdding}
                idRow={idRow}
                idSomatotype={idSomatotype}
                setDashboardSnackBarOpen={setDashboardSnackBarOpen}
                setDashboardSnackBarMessage={setDashboardSnackBarMessage}
                avatar={avatar}
                setAvatar={setAvatar}
              />
            }
          />

          <Route
            path="/NavSignup"
            element={
              (cookies.user && data) || !cookies.user ? (
                <NavSignup
                  data={data}
                  setData={setData}
                  setOpen={setOpen}
                  setSnackbarMessage={setSnackbarMessage}
                  setResultsSaved={setResultsSaved}
                />
              ) : null
            }
          />
          <Route path="/TrainingDiary" element={<TrainingDiary />} />
          <Route path="/Powerlifting" element={<Powerlifting />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/Blog/:idBlog" element={<BlogArticlePage />} />
          <Route
            path="/:codeSoma"
            element={<TypeDescription dataDescription={typeDescriptionDatas} />}
          />
          <Route
            path="/Profile"
            element={
              cookies.user && (
                <Profile
                  setOpen={setOpen}
                  setSnackbarMessage={setSnackbarMessage}
                  avatar={avatar}
                  setAvatar={setAvatar}
                  fetching={fetching}
                  setFetching={setFetching}
                  getAvatar={getAvatar}
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
        <Footer />
      </Router>
    </SnackbarProvider>
  );
}

export default App;
