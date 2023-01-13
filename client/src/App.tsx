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
import Types from "./components/TypesPages/TypesPage";
import BEc from "./components/TypesPages/Types/BEc";
import BEn from "./components/TypesPages/Types/BEn";
import BM from "./components/TypesPages/Types/BM";
import C from "./components/TypesPages/Types/C";
import EcEn from "./components/TypesPages/Types/EcEn";
import EcM from "./components/TypesPages/Types/EcM";
import En_Ec from "./components/TypesPages/Types/En-Ec";
import EnEc from "./components/TypesPages/Types/EnEc";
import EnM from "./components/TypesPages/Types/EnM";
import M_Ec from "./components/TypesPages/Types/M-Ec";
import M_En from "./components/TypesPages/Types/M-En";
import MEc from "./components/TypesPages/Types/MEc";
import MEn from "./components/TypesPages/Types/MEn";
import TestPage from "./components/TestPage";
import BlogPage from "./components/BlogPage";
import Home from "./components/HomePage";
import FooterCTA from "./components/CTA/FooterCTA";
import BlogArticlePage from "./components/BlogArticlePage";
import Error404 from "./components/CTA/Error404";
import CommentPage from "./components/CTA/CommentPage";
import TypeExample from "./components/TypesPages/TypeCarousel";
import Nutrition from "./components/CTA/Nutrition";
import Training from "./components/CTA/Training";
import TypesPage1 from "./components/TypesPages/TypesPage1";
import Disconnection from "./components/Disconnection";
import Library from "./components/CTA/Library";
import Optimisation from "./components/CTA/Optimisation";
import axios from "axios";

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
}

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user", "data"]);
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

  const [fetching, setFetching] = useState<boolean>(false);

  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    cookies.data && setData(cookies.data);
  }, [data, cookies.data]);

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

      setAvatar(response.data.avatar);
      setFetching(false);
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
        <Route path="/Types" element={<Types />} />
        <Route path="/FooterCTA" element={<FooterCTA />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/CommentPage" element={<CommentPage />} />
        <Route path="/TypeExample" element={<TypeExample />} />
        <Route path="/Nutrition" element={<Nutrition />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Optimisation" element={<Optimisation />} />
        <Route path="/TypesPage1" element={<TypesPage1 />} />
        <Route path="/Library" element={<Library />} />
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
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Blog/:idBlog" element={<BlogArticlePage />} />
        <Route path="/BEc" element={<BEc />} />
        <Route path="/BEn" element={<BEn />} />
        <Route path="/BM" element={<BM />} />
        <Route path="/C" element={<C />} />
        <Route path="/EcEn" element={<EcEn />} />
        <Route path="/EcM" element={<EcM />} />
        <Route path="/En-Ec" element={<En_Ec />} />
        <Route path="/EnEc" element={<EnEc />} />
        <Route path="/EnM" element={<EnM />} />
        <Route path="/M-Ec" element={<M_Ec />} />
        <Route path="/M-En" element={<M_En />} />
        <Route path="/MEc" element={<MEc />} />
        <Route path="/MEn" element={<MEn />} />
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
      {/* <BalancedEndomorph /> */}
      <Footer />
    </Router>
  );
}

export default App;
