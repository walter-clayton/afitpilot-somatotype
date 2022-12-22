import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState, useRef, FC } from "react";
import { calculateSomatotype, IPoints } from "./Calculation";
import ResultsTable from "./ResultsTable";
import { IAnthropometric, IData, ISomatotype } from "../App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SomatotypeGraph from "./SomatotypeGraph";
import axios from "axios";
import { useCookies } from "react-cookie";
import CounterShare from "./CTA/CounterShare";
import AddPage from "./AddPage";
import { useNavigate } from "react-router-dom";
import avatar from "./image/manu-tribesman.png";

const theme = createTheme();

interface IDashboard {
  resultsSaved?: boolean;
  setResultsSaved?: (bool: boolean) => void;
  setIsAdding?: (bool: boolean) => void;
  idRow?: string;
  setIdRow?: (idRow: string) => void;
  idSomatotype?: string;
  setIdSomatotype?: (idRow: string) => void;
  dashboardSnackBarOpen?: boolean;
  setDashboardSnackBarOpen?: (bool: boolean) => void;
  dashboardSnackBarMessage?: string;
  setDashboardSnackBarMessage?: (msg: string) => void;
}

const Dashboard: FC<IDashboard> = (props) => {
  const [somatotype, setSomatotype] = useState<ISomatotype | undefined>(
    undefined
  );

  const [anthropometric, setAnthropometric] = useState<
    IAnthropometric | undefined
  >(undefined);

  const [cookies, setCookie] = useCookies(["user"]);

  const [somatotypes, setSomatotypes] = useState<ISomatotype[]>([]);

  const [toggleGraph, setToggleGraph] = useState(false);
  const [pointsArray, setPointsArray] = useState<IPoints[]>([]);

  const [snackBarState, setSnackBarState] = React.useState({
    vertical: "bottom",
    horizontal: "center",
  });

  const [showNoResultsMessage, setShowNoResultsMessage] =
    useState<boolean>(false);

  const [fetching, setFetching] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const [typeResult, setTypeResult] = useState<string>("");

  const small = useMediaQuery("(max-width:600px)");
  const xSmall = useMediaQuery("(max-width:450px)");
  const xxs = useMediaQuery("(max-width:380px)");
  const xxxs = useMediaQuery("(max-width:320px)");

  const getUserDatas = async () => {
    const headers = {
      "Content-Type": "application/json",
      access_key: process.env.REACT_APP_ACCESS_KEY,
      Authorization: `Bearer ${cookies.user.token}`,
    };

    try {
      setFetching(true);
      const response = await axios.get(
        process.env.REACT_APP_GETUSERDATAS_URL!,
        { headers: headers }
      );
      setSomatotypes(response.data.data.somatotypes);
      setToggleGraph(!toggleGraph);
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

  useEffect(() => {
    const timeId = setTimeout(() => {
      props.setResultsSaved!(false);
    }, 6000);

    return () => {
      clearTimeout(timeId);
      props.setResultsSaved!(false);
    };
  }, []);

  useEffect(() => {
    getUserDatas();
  }, []);

  useEffect(() => {
    if (somatotypes.length === 0) {
      setShowNoResultsMessage(true);
    } else {
      setShowNoResultsMessage(false);
    }
  }, [somatotypes]);

  const handleSnackBarClose = () => {
    props.setDashboardSnackBarOpen!(false);
  };

  const formatTypeResultText = (typeResultText: string) => {
    let croppedTextResult = typeResultText.slice(0, typeResultText.length - 2);
    let resultsTexts: string[] = croppedTextResult.split(" (");
    return resultsTexts;
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography
          variant="h3"
          p={3}
          textAlign="center"
          color={"white"}
          sx={{ backgroundColor: "#B78260" }}
        >
          Dashboard
        </Typography>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "start",
            padding: "0px 15px",
          }}
          width={"100%"}
        >
          {props.resultsSaved ? (
            <Grid
              item
              sx={{
                flexGrow: 1,
                alignItems: "center",
                margin: "20px 0",
              }}
              xs={12}
              md={9}
              lg={7}
              width={"100%"}
            >
              <Alert
                onClose={() => {
                  props.setResultsSaved!(false);
                }}
              >
                Results saved successfully!
              </Alert>
            </Grid>
          ) : null}

          {/* No Results Message */}
          {showNoResultsMessage && (
            <Grid
              item
              sx={{
                flexGrow: 1,
                alignItems: "center",
                margin: "20px 0",
              }}
              xs={12}
              md={9}
              lg={7}
              width={"100%"}
            >
              <Typography variant="h5" gutterBottom m={3} textAlign="center">
                There are no somatotypes saved on your profile. Please add one
                to see your results.
              </Typography>
            </Grid>
          )}

          {/* Result Card   */}
          {!showNoResultsMessage && (
            <Grid
              item
              sx={{
                alignItems: "center",
                marginTop: "20px",
              }}
              xs={12}
              md={6}
              width={"100%"}
              padding={2}
            >
              <Grid
                container
                padding={2}
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "10px solid #B78260",
                  borderRadius: "25px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#B78260",
                    textAlign: "start",
                    alignSelf: "start",
                  }}
                >
                  Name
                </Typography>
                <img
                  src={avatar}
                  alt="manu tribesman"
                  style={{ width: "100px" }}
                />
                <Grid
                  item
                  width={"100%"}
                  marginBottom={1}
                  sx={{
                    color: "black",
                    backgroundColor: "#e4ae3a",
                    textAlign: "center",
                    borderRadius: "25px",
                  }}
                >
                  <Grid
                    container
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    columnSpacing={3}
                  >
                    <Grid item>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        {fetching || somatotypes.length <= 0
                          ? ""
                          : somatotypes[0].endomorphy?.toFixed()}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        -
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        {fetching || somatotypes.length <= 0
                          ? ""
                          : somatotypes[0].mesomorphy?.toFixed()}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        -
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        {fetching || somatotypes.length <= 0
                          ? ""
                          : somatotypes[0].ectomorphy?.toFixed()}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Typography
                  marginBottom={0.3}
                  variant="h5"
                  sx={{ color: "#B78260", textAlign: "center" }}
                >
                  {formatTypeResultText(typeResult)[0]}
                </Typography>
                <Typography
                  marginBottom={-8}
                  variant="h5"
                  sx={{ color: "#e4ae3a", textAlign: "center" }}
                >
                  {formatTypeResultText(typeResult)[1]}
                </Typography>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  width={"100%"}
                >
                  <SomatotypeGraph
                    updateGraph={toggleGraph}
                    pointsArray={pointsArray}
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  borderColor: "#B78260",
                  color: "#B78260",
                  padding: "14px 30px",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: "30px",
                  fontSize: "18px",
                  borderRadius: "40px",
                  textTransform: "initial",
                  marginTop: "20px",
                  width: small
                    ? xSmall
                      ? xxs
                        ? xxxs
                          ? "90%"
                          : "80%"
                        : "75%"
                      : "70%"
                    : "60%",
                  mx: small
                    ? xSmall
                      ? xxs
                        ? xxxs
                          ? "5%"
                          : "10%"
                        : "12.5%"
                      : "15%"
                    : "20%",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#B78260",
                    color: "#ffffff",
                    borderColor: "#B78260",
                  },
                }}
                variant="outlined"
                onClick={() => {
                  console.log("share");
                }}
              >
                Share
              </Button>
            </Grid>
          )}

          {/* Results Table */}
          {!showNoResultsMessage && (
            <Grid
              item
              sx={{
                alignItems: "center",
                marginTop: "20px",
              }}
              xs={12}
              md={6}
              width={"100%"}
              padding={2}
            >
              <ResultsTable
                somatotypes={somatotypes}
                showHistory={true}
                getUserDatas={getUserDatas}
                setIsAdding={props.setIsAdding}
                setIdRow={props.setIdRow}
                idRow={props.idRow}
                setIdSomatotype={props.setIdSomatotype}
                idSomatotype={props.idSomatotype}
                setPointsArray={setPointsArray}
                toggleGraph={toggleGraph}
                setToggleGraph={setToggleGraph}
                setDashboardSnackBarOpen={props.setDashboardSnackBarOpen}
                setDashboardSnackBarMessage={props.setDashboardSnackBarMessage}
                isFetching={fetching}
                setTypeResult={setTypeResult}
              />
              <Button
                sx={{
                  backgroundColor: "#B78260",
                  padding: "14px 30px",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: "30px",
                  fontSize: "18px",
                  borderRadius: "40px",
                  textTransform: "initial",
                  marginTop: "20px",
                  width: small
                    ? xSmall
                      ? xxs
                        ? xxxs
                          ? "90%"
                          : "80%"
                        : "75%"
                      : "70%"
                    : "60%",
                  mx: small
                    ? xSmall
                      ? xxs
                        ? xxxs
                          ? "5%"
                          : "10%"
                        : "12.5%"
                      : "15%"
                    : "20%",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#B78260",
                  },
                }}
                variant="contained"
                onClick={() => {
                  props.setIsAdding!(true);
                  navigate("/Add");
                  window.scrollTo(0, 0);
                }}
              >
                Add new
              </Button>
              <Button
                sx={{
                  backgroundColor: "#111111",
                  color: "#ffffff",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: "30px",
                  fontSize: "18px",
                  textTransform: "initial",
                  padding: "14px 30px",
                  borderRadius: "40px",
                  marginTop: "20px",
                  width: small
                    ? xSmall
                      ? xxs
                        ? xxxs
                          ? "90%"
                          : "80%"
                        : "75%"
                      : "70%"
                    : "60%",
                  mx: small
                    ? xSmall
                      ? xxs
                        ? xxxs
                          ? "5%"
                          : "10%"
                        : "12.5%"
                      : "15%"
                    : "20%",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#111111",
                  },
                }}
                variant="contained"
                onClick={() => {
                  console.log("compare");
                }}
              >
                Compare
              </Button>
            </Grid>
          )}

          {showNoResultsMessage && (
            <Grid item xs={12}>
              <Button
                sx={{
                  backgroundColor: "#B78260",
                  padding: "14px 30px",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: "30px",
                  fontSize: "18px",
                  borderRadius: "40px",
                  textTransform: "initial",
                  width: "80%",
                  mx: "10%",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#B78260",
                  },
                }}
                variant="contained"
                onClick={() => {
                  props.setIsAdding!(true);
                  navigate("/Add");
                  window.scrollTo(0, 0);
                }}
              >
                Add new
              </Button>
            </Grid>
          )}
        </Grid>
        <CounterShare />
      </ThemeProvider>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={props.dashboardSnackBarOpen}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
        message={props.dashboardSnackBarMessage}
      />
    </>
  );
};

export default Dashboard;
