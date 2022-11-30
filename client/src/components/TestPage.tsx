import React, { FC, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IAnthropometric, IData, ISomatotype } from "../App";
import { Alert, Box, Button, CssBaseline, Grid, Snackbar } from "@mui/material";
import AnthropometricForm from "./AnthropometricForm";
import { AddPoint, calculateSomatotype, IPoints } from "./Calculation";
import ResultsTable from "./ResultsTable";
import SomatotypeGraph from "./SomatotypeGraph";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Typography from '@mui/material/Typography';

const theme = createTheme();

interface ITesting {
  setData: (data: IData) => void;
  resultsSaved: boolean;
  setResultsSaved: (bool: boolean) => void;
}

const TestPage: FC<ITesting> = (props) => {
  const [showResults, setShowResults] = useState(false);
  const [toggleGraph, setToggleGraph] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarState, setSnackBarState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const [somatotype, setSomatotype] = useState<ISomatotype | undefined>(
    undefined
  );

  const [anthropometric, setAnthropometric] = useState<
    IAnthropometric | undefined
  >(undefined);

  const [pointsArray, setPointsArray] = useState<IPoints[]>([]);

  useEffect(() => {
    setAnthropometric((anthropometric) => ({
      height: 180,
      weight: 80,
      supraspinal_skinfold: 12,
      subscapular_skinfold: 12,
      tricep_skinfold: 12,
      femur_breadth: 8,
      humerus_breadth: 7,
      calf_girth: 38,
      bicep_girth: 38,
    }));
  }, []);

  const getSomatotypeType = (
    endomorphy: number | undefined,
    mesomorphy: number | undefined,
    ectomorphy: number | undefined
  ) => {
    if (endomorphy! === ectomorphy || endomorphy === mesomorphy || ectomorphy === mesomorphy) {
      return "You are a Central Type";
    }
    else if (endomorphy! > mesomorphy! && ectomorphy && mesomorphy! === ectomorphy) {
      return "You are a Balanced Endomorph Type";
    } else if (
      endomorphy! > mesomorphy! &&
      ectomorphy &&
      mesomorphy! > ectomorphy
    ) {
      return "You are a Mesomorphic Endomorph Type";
    } else if (
      endomorphy! === mesomorphy! &&
      mesomorphy! &&
      endomorphy > ectomorphy!
    ) {
      return "You are a Mesomorph-Endomorph Type";
    } else if (
      mesomorphy! > endomorphy! &&
      ectomorphy &&
      endomorphy! > ectomorphy
    ) {
      return "You are an Endomorphic Mesomorph Type";
    } else if (
      mesomorphy! > endomorphy! &&
      ectomorphy &&
      endomorphy! === ectomorphy
    ) {
      return "You are a Balanced Mesomorph Type";
    } else if (
      mesomorphy! > endomorphy! &&
      mesomorphy! > ectomorphy! &&
      endomorphy! < ectomorphy!
    ) {
      return "You are an Ectomorphic Mesomorph Type";
    } else if (
      (mesomorphy! === ectomorphy) && (ectomorphy! > endomorphy!) && (mesomorphy! > endomorphy!)) {
      return "You are a Mesomorph-Ectomorph Type";
    } else if (
      ectomorphy! > mesomorphy! &&
      endomorphy &&
      mesomorphy! > endomorphy!
    ) {
      return "You are a Mesomorphic-Ectomorph Type";
    } else if (
      ectomorphy! > mesomorphy! &&
      endomorphy &&
      mesomorphy! === endomorphy!
    ) {
      return "You are a Balanced Ectomorph Type";
    } else if (
      (ectomorphy! > mesomorphy!) &&
      (endomorphy! > mesomorphy!) &&
      (ectomorphy! > endomorphy!)
    ) {
      return "You are an Endomorphic Ectomorph Type";
    } else if (endomorphy! === ectomorphy! && endomorphy! && ectomorphy > mesomorphy!) {
      return "You are an Endomorph-Ectomorph Type";
    } else if (endomorphy! >= ectomorphy! && ectomorphy! >= mesomorphy!) {
      return "You are an Ectomorphic Endomorph Type";
    }
    else {
      return "Try again";
    }
  };
  const typeResult = getSomatotypeType(7, 3, 4);
  console.log(typeResult);
  const saveDatas = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.user.token}`,
      };

      const response = await axios.post(
        process.env.REACT_APP_SAVEDATA_URL!,
        {
          data: {
            somatotype: { ...somatotype },
            anthropometric: { ...anthropometric },
          },
        },
        { headers: headers }
      );
      window.scrollTo(0, 0);
      props.setResultsSaved(response.data.dataSaved);
    } catch (error: any) {
      if (error.response) {
        error.response.data.message
          ? setSnackBarMessage(error.response.data.message)
          : setSnackBarMessage(error.response.statusText);
      } else {
        setSnackBarMessage("Error with the server");
      }
      console.log("error ", error);
    }
  };

  const handleSaveDatasClick = () => {
    if (!cookies.user) {
      props.setData({
        somatotype: { ...somatotype },
        anthropometric: { ...anthropometric },
      });
      navigate("/Signup");
      window.scrollTo(0, 0);
    } else {
      saveDatas();
    }
  };

  const handleSnackBarClose = () => {
    setSnackBarState({ ...snackBarState, open: false });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
        {/* Form Inputs */}
        <Grid
          item
          sx={{
            flexGrow: 1,
            alignItems: "center",
            margin: "20px 0",
          }}
          width={"100%"}
          xs={12}
          md={8}
          lg={6}
        >
          {props.resultsSaved && (
            <Alert
              onClose={() => {
                props.setResultsSaved(false);
              }}
              severity="success"
              sx={{ margin: "50px auto" }}
            >
              Results saved successfully
            </Alert>
          )}
          <AnthropometricForm
            anthropometric={anthropometric}
            setAnthropometric={setAnthropometric}
          />
        </Grid>
        {/* button */}
        <Grid
          item
          sx={{
            flexGrow: 1,
            alignItems: "center",
            margin: "20px auto",
          }}
          xs={12}
          md={8}
          lg={6}
        >
          <Box sx={{ textalign: "center" }}>
            <Button
              variant="contained"
              type="submit"
              onClick={() => {
                setShowResults(true);
                setToggleGraph(!toggleGraph);

                const somatotypeResults = calculateSomatotype(anthropometric!);

                let pointsResultsArray: IPoints[] = [];
                const point = AddPoint(
                  somatotypeResults[0],
                  somatotypeResults[1],
                  somatotypeResults[2]
                );
                pointsResultsArray.push(point);
                setPointsArray(pointsResultsArray);

                setSomatotype?.({
                  endomorphy: somatotypeResults[0],
                  mesomorphy: somatotypeResults[1],
                  ectomorphy: somatotypeResults[2],
                });
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
        {/* Results Table */}
        {showResults ? (
          <Grid
            item
            sx={{
              flexGrow: 1,
              alignItems: "center",
              margin: "20px 0",
            }}
            xs={12}
            md={8}
            lg={6}
            width={"100%"}
          >
            <ResultsTable
              showHistory={false}
              multipleResults={false}
              singleSomatotype={somatotype}
              setPointsArray={setPointsArray}
              toggleGraph={toggleGraph}
              setToggleGraph={setToggleGraph}
            />
            <Typography textAlign={"center"} variant="h6">
              {typeResult}
            </Typography>

          </Grid>
        ) : null}

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
          md={8}
          lg={6}
          width={"100%"}
        >
          {showResults && (
            <SomatotypeGraph
              updateGraph={toggleGraph}
              pointsArray={pointsArray}
            />
          )}
        </Grid>

        {showResults ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{ margin: "10px auto", maxWidth: "sm" }}
              variant="contained"
              onClick={() => {
                handleSaveDatasClick();
              }}
            >
              Save Your Results
            </Button>
          </Box>
        ) : null}
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackBarState.open}
        onClose={handleSnackBarClose}
        message={snackBarMessage}
      />
    </ThemeProvider>
  );
};

export default TestPage;