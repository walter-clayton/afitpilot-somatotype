import React, { FC, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IAnthropometric, IData, ISomatotype } from "../App";
import { Alert, Box, Button, CssBaseline, Grid, Snackbar } from "@mui/material";
import AnthropometricForm from "./AnthropometricForm";
import { AddPoint, calculateSomatotype, IPoints } from "./Calculation";
import ResultsTable from "./ResultsTable";
import SomatotypeGraph from "./SomatotypeGraph";
import axios from "axios";
import { matchRoutes, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Typography from "@mui/material/Typography";

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

  const isMinTwoDigit = (soma: ISomatotype): boolean => {
    let matchCondition: boolean;

    matchCondition =
      Math.abs(soma.endomorphy! - soma.mesomorphy!) <= 2 ||
      Math.abs(soma.endomorphy! - soma.ectomorphy!) <= 2 ||
      Math.abs(soma.mesomorphy! - soma.ectomorphy!) <= 2;

    return matchCondition;
  };

  const isCentral = (soma: ISomatotype): boolean => {
    // digit has to be 2, 3 or 4
    const condition = [2, 3, 4];
    let i: number = 0;
    let matchCondition: boolean = true;

    while (matchCondition && i < Object.values(soma).length) {
      matchCondition = condition.includes(Object.values(soma)[i]);
      i++;
    }

    // not more than 1 between digits
    if (matchCondition) {
      matchCondition =
        Math.abs(soma.endomorphy! - soma.mesomorphy!) <= 1 &&
        Math.abs(soma.endomorphy! - soma.ectomorphy!) <= 1 &&
        Math.abs(soma.mesomorphy! - soma.ectomorphy!) <= 1;
    }

    return matchCondition;
  };

  const isBalancedMeso = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.endomorphy! === soma.ectomorphy! &&
      soma.mesomorphy! > soma.endomorphy! &&
      soma.mesomorphy! > soma.ectomorphy!
    );
  };

  const isEctomorphicMeso = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.ectomorphy! > soma.endomorphy! &&
      soma.mesomorphy! > soma.endomorphy! &&
      soma.mesomorphy! > soma.ectomorphy!
    );
  };

  const isMesoEcto = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.ectomorphy! > soma.endomorphy! &&
      soma.mesomorphy! === soma.ectomorphy!
    );
  };

  const isMesomorphicEcto = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.ectomorphy! > soma.endomorphy! &&
      soma.ectomorphy! > soma.mesomorphy! &&
      soma.mesomorphy! > soma.endomorphy!
    );
  };

  const isBalancedEcto = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.endomorphy! === soma.mesomorphy! &&
      soma.ectomorphy! > soma.endomorphy!
    );
  };

  const isEndomorphicEcto = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.endomorphy! > soma.mesomorphy! &&
      soma.ectomorphy! > soma.endomorphy! &&
      soma.ectomorphy! > soma.mesomorphy!
    );
  };

  const isEndoEcto = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.endomorphy! === soma.ectomorphy! &&
      soma.endomorphy! > soma.mesomorphy! &&
      soma.ectomorphy! > soma.mesomorphy!
    );
  };

  const isEctomorphicEndo = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.ectomorphy! > soma.mesomorphy! &&
      soma.endomorphy! > soma.ectomorphy! &&
      soma.endomorphy! > soma.mesomorphy!
    );
  };

  const isBalancedEndo = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.endomorphy! > soma.ectomorphy! &&
      soma.endomorphy! > soma.mesomorphy! &&
      soma.mesomorphy! === soma.ectomorphy!
    );
  };

  const isMesomorphicEndo = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.endomorphy! > soma.ectomorphy! &&
      soma.endomorphy! > soma.mesomorphy! &&
      soma.mesomorphy! > soma.ectomorphy!
    );
  };

  const isMesoEndo = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.endomorphy! === soma.mesomorphy! &&
      soma.endomorphy! > soma.ectomorphy!
    );
  };

  const isEndomorphicMeso = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.endomorphy! > soma.ectomorphy! &&
      soma.mesomorphy! > soma.endomorphy! &&
      soma.mesomorphy! > soma.ectomorphy!
    );
  };

  const getSomatotypeType = (
    endomorphy: number | undefined,
    mesomorphy: number | undefined,
    ectomorphy: number | undefined
  ) => {
    let result: string = "";

    const soma: ISomatotype = {
      endomorphy:
        Number(endomorphy?.toFixed()) === 0 ? 1 : Number(endomorphy?.toFixed()),
      mesomorphy:
        Number(mesomorphy?.toFixed()) === 0 ? 1 : Number(mesomorphy?.toFixed()),
      ectomorphy:
        Number(ectomorphy?.toFixed()) === 0 ? 1 : Number(ectomorphy?.toFixed()),
    };

    if (isCentral(soma)) {
      result = "You are a Central (C).";
    } else if (isBalancedMeso(soma)) {
      result = "You are a Balanced Mesomorph (BM).";
    } else if (isEctomorphicMeso(soma)) {
      result = "You are a Ectomorphic Mesomorph (EcM).";
    } else if (isMesoEcto(soma)) {
      result = "You are a Mesomorph Ectomorph (M-Ec).";
    } else if (isMesomorphicEcto(soma)) {
      result = "You are a Mesomorphic Ectomorph (MEc).";
    } else if (isBalancedEcto(soma)) {
      result = "You are a Balanced Ectomorph (BEc).";
    } else if (isEndomorphicEcto(soma)) {
      result = "You are a Endomorphic Ectomorph (EnEc).";
    } else if (isEndoEcto(soma)) {
      result = "You are a Endomorph Ectomorph (En-Ec).";
    } else if (isEctomorphicEndo(soma)) {
      result = "You are a Ectomorphic Endomorph (EcEn).";
    } else if (isBalancedEndo(soma)) {
      result = "You are a Balanced Endomorph (BEn).";
    } else if (isMesomorphicEndo(soma)) {
      result = "You are a Mesomorphic Endomorph (MEn).";
    } else if (isMesoEndo(soma)) {
      result = "You are a Mesomorph Endomorph (M-En).";
    } else if (isEndomorphicMeso(soma)) {
      result = "You are a Endomorphic Mesomorph (EnM).";
    }

    return result;
  };

  const typeResult = getSomatotypeType(
    somatotype?.endomorphy,
    somatotype?.mesomorphy,
    somatotype?.ectomorphy
  );
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
