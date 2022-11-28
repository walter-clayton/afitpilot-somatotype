import { Alert, Box, Button, Grid, Snackbar, Typography } from "@mui/material";
import React, { useEffect, useState, useRef, FC } from "react";
import { calculateSomatotype, IPoints } from "./Calculation";
import ResultsTable from "./ResultsTable";
import { useNavigate } from "react-router-dom";
import { IAnthropometric, IData, ISomatotype } from "../App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SomatotypeGraph from "./SomatotypeGraph";
import axios from "axios";
import { useCookies } from "react-cookie";
import Add from "./Add";

const theme = createTheme();

interface IDashboard {
  resultsSaved?: boolean;
  setResultsSaved?: (bool: boolean) => void;
}

const Dashboard: FC<IDashboard> = (props) => {
  //Somatotype values should come from backend (data saved from the landing page)
  const navigate = useNavigate();

  const [somatotype, setSomatotype] = useState<ISomatotype | undefined>(
    undefined
  );

  const [anthropometric, setAnthropometric] = useState<
    IAnthropometric | undefined
  >(undefined);

  const [cookies, setCookie] = useCookies(["user"]);

  const [somatotypes, setSomatotypes] = useState<ISomatotype[]>([]);
  const [anthropometrics, setAnthropometrics] = useState<IAnthropometric[]>([]);

  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

  const [isAdding, setIsAdding] = useState<boolean>(false);

  const [idRow, setIdRow] = useState<string>("");

  const [idSomatotype, setIdSomatotype] = useState<string>("");

  const [toggleGraph, setToggleGraph] = useState(false);
  const [pointsArray, setPointsArray] = useState<IPoints[]>([]);

  const [snackBarOpen, setSnackBarOpen] = useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = useState<string>("");
  const [snackBarState, setSnackBarState] = React.useState({
    vertical: "bottom",
    horizontal: "center",
  });

  const [showNoResultsMessage, setShowNoResultsMessage] =
    useState<boolean>(false);

  const getUserDatas = async () => {
    const headers = {
      "Content-Type": "application/json",
      access_key: process.env.REACT_APP_ACCESS_KEY,
      Authorization: `Bearer ${cookies.user.token}`,
    };

    try {
      const response = await axios.get(
        process.env.REACT_APP_GETUSERDATAS_URL!,
        { headers: headers }
      );

      setSomatotypes(response.data.data.somatotypes);
      setAnthropometrics(response.data.data.anthropometrics);
      setToggleGraph(!toggleGraph);
    } catch (error) {
      // if (error.response) {
      //     error.response.data.message
      //       ? setSnackbarMessage(error.response.data.message)
      //       : setSnackbarMessage(error.response.statusText);
      //   } else {
      //     setSnackbarMessage("Error with the server");
      //   }
      console.log("error ", error);
    }
  };

  useEffect(() => {
    getUserDatas();

    const timeId = setTimeout(() => {
      props.setResultsSaved!(false);
    }, 6000);

    return () => {
      clearTimeout(timeId);
      props.setResultsSaved!(false);
    };
  }, []);

  useEffect(() => {
    if (openAddModal) {
      props.setResultsSaved!(false);
    } else {
      getUserDatas();
    }
  }, [openAddModal]);

  useEffect(() => {
    if (somatotypes.length === 0) {
      setShowNoResultsMessage(true);
    } else {
      setShowNoResultsMessage(false);
    }
  }, [somatotypes]);

  const handleSnackBarClose = () => {
    setSnackBarOpen(false);
  };

  return (
    <>
      {openAddModal ? (
        <Add
          setOpenAddModal={setOpenAddModal}
          isAdding={isAdding}
          getUserDatas={getUserDatas}
          idRow={idRow}
          anthropometrics={anthropometrics}
          idSomatotype={idSomatotype}
          setDashboardSnackBarOpen={setSnackBarOpen}
          setDashboardSnackBarMessage={setSnackBarMessage}
        />
      ) : (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Typography variant="h3" gutterBottom m={3} textAlign="center">
            Dashboard
          </Typography>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
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
            {showNoResultsMessage ? (
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
            ) : null}

            {/* Results Table */}
            {!showNoResultsMessage ? (
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
                <ResultsTable
                  somatotypes={somatotypes}
                  showHistory={true}
                  getUserDatas={getUserDatas}
                  setOpenAddModal={setOpenAddModal}
                  setIsAdding={setIsAdding}
                  setIdRow={setIdRow}
                  idRow={idRow}
                  setIdSomatotype={setIdSomatotype}
                  idSomatotype={idSomatotype}
                  setPointsArray={setPointsArray}
                  toggleGraph={toggleGraph}
                  setToggleGraph={setToggleGraph}
                  setDashboardSnackBarOpen={setSnackBarOpen}
                  setDashboardSnackBarMessage={setSnackBarMessage}
                />
              </Grid>
            ) : null}
            {/* Graph */}
            {!showNoResultsMessage ? (
              <Grid
                item
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "20px 0",
                }}
                xs={12}
                md={9}
                lg={7}
                width={"100%"}
              >
                <SomatotypeGraph
                  updateGraph={toggleGraph}
                  pointsArray={pointsArray}
                />
              </Grid>
            ) : null}

            <Button
              sx={{ margin: "10px 0" }}
              variant="contained"
              onClick={() => {
                setIsAdding(true);
                setOpenAddModal(true);
                window.scrollTo(0, 0);
              }}
            >
              Add new
            </Button>
          </Grid>
        </ThemeProvider>
      )}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackBarOpen}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
        message={snackBarMessage}
      />
    </>
  );
};

export default Dashboard;
