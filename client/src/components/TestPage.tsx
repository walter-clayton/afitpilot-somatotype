import React, { FC, useEffect, useRef, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IAnthropometric, IData, ISomatotype } from "../App";
import {
  Alert,
  Box,
  Button,
  Collapse,
  CssBaseline,
  Fade,
  Grid,
  Snackbar,
  Stack,
} from "@mui/material";
import AnthropometricForm from "./AnthropometricForm";
import { AddPoint, calculateSomatotype, IPoints } from "./Calculation";
import ResultsTable from "./ResultsTable";
import SomatotypeGraph from "./SomatotypeGraph";
import axios from "axios";
import { matchRoutes, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import Typography from "@mui/material/Typography";
import HeaderTestpage from "./CTA/HeaderTestpage";
import CounterShare from "./CTA/CounterShare";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const theme = createTheme();

interface ITesting {
  setData: (data: IData) => void;
  resultsSaved: boolean;
  setResultsSaved: (bool: boolean) => void;
}

interface ISomatotypesStandard {
  balancedMeso: String[];
  central: String[];
  endoEcto: String[];
  mesoEcto: String[];
  balancedEcto: String[];
  balancedEndo: String[];
  mesoEndo: String[];
  ectomorphicMeso: String[];
  mesomorphicEcto: String[];
  endomorphicEcto: String[];
  ectomorphicEndo: String[];
  mesomorphicEndo: String[];
  endomorphicMeso: String[];
}

export const somatotypesStandard: ISomatotypesStandard = {
  balancedMeso: ["353", "252", "363", "262", "272", "171", "181", "191"],
  central: ["343", "444", "333", "434", "344", "334", "433", "443"],
  endoEcto: ["424", "414", "515"],
  mesoEcto: ["244", "144", "155"],
  balancedEcto: ["335", "225", "336", "226", "227", "117", "118", "119"],
  balancedEndo: ["533", "522", "633", "622", "722", "711", "811", "911"],
  mesoEndo: ["442", "552", "441", "551", "661", "771", "881", "991"],
  ectomorphicMeso: [
    "354",
    "243",
    "254",
    "253",
    "154",
    "153",
    "263",
    "164",
    "163",
    "162",
    "173",
    "172",
    "182",
  ],
  mesomorphicEcto: [
    "234",
    "345",
    "235",
    "245",
    "236",
    "135",
    "145",
    "126",
    "136",
    "146",
    "127",
    "137",
    "128",
    "129",
  ],
  endomorphicEcto: [
    "324",
    "435",
    "425",
    "415",
    "325",
    "315",
    "416",
    "316",
    "326",
    "216",
    "317",
    "217",
    "218",
    "219",
  ],
  ectomorphicEndo: [
    "534",
    "524",
    "514",
    "614",
    "513",
    "523",
    "623",
    "613",
    "713",
    "612",
    "712",
  ],
  mesomorphicEndo: [
    "432",
    "543",
    "542",
    "532",
    "632",
    "642",
    "541",
    "651",
    "641",
    "631",
    "621",
    "721",
    "731",
    "741",
    "751",
    "761",
    "871",
    "861",
    "851",
    "841",
    "831",
    "821",
    "921",
    "931",
    "941",
    "951",
    "961",
    "971",
    "981",
  ],
  endomorphicMeso: [
    "342",
    "453",
    "352",
    "362",
    "261",
    "372",
    "271",
    "281",
    "291",
    "452",
    "351",
    "462",
    "361",
    "371",
    "381",
    "391",
    "451",
    "461",
    "471",
    "481",
    "491",
    "561",
    "571",
    "581",
    "591",
    "671",
    "681",
    "691",
    "781",
    "791",
    "891",
  ],
};

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
  soma.endomorphy = Number(soma.endomorphy?.toFixed());
  soma.mesomorphy = Number(soma.mesomorphy?.toFixed());
  soma.ectomorphy = Number(soma.ectomorphy?.toFixed());
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

export const getSomatotypeType = (
  endomorphy: number | undefined,
  mesomorphy: number | undefined,
  ectomorphy: number | undefined
) => {
  let result: string = "";

  const soma: ISomatotype = {
    endomorphy: Number(endomorphy) < 1 ? 1 : Number(endomorphy?.toFixed(1)),
    mesomorphy: Number(mesomorphy) < 1 ? 1 : Number(mesomorphy?.toFixed(1)),
    ectomorphy: Number(ectomorphy) < 1 ? 1 : Number(ectomorphy?.toFixed(1)),
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

const TestPage: FC<ITesting> = (props) => {
  const naviguate = useNavigate();

  const [showResults, setShowResults] = useState(false);
  const [exceeded, setExceeded] = useState(false);
  const [notStandard, setNotStandard] = useState(false);
  const [msgErr, setMsgErr] = useState<String>("");
  const [manually, setManually] = useState<boolean>(false);
  const [toggleGraph, setToggleGraph] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const gridRef = useRef<HTMLDivElement>(null);

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

  const [anthropometricHasError, setAnthropometricHasError] =
    useState<boolean>(false);

  const [pointsArray, setPointsArray] = useState<IPoints[]>([]);
  // const [params, setParams] = useParams()
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

  useEffect(() => {
    if (exceeded || notStandard) {
      window.scrollTo(0, Number(gridRef.current?.offsetTop));
      setShowResults(false);
    }
  }, [exceeded, notStandard]);

  const isExceeded = (soma: number[]): boolean => {
    const endo: number | undefined = Number(soma[0]?.toFixed());
    const meso: number | undefined = Number(soma[1]?.toFixed());
    const ecto: number | undefined = Number(soma[2]?.toFixed());
    let isExceeded: boolean = false;
    //console.log(`${endo} ${meso} ${ecto}`);

    // endo limits: [1 - 15]
    // meso limits: [1 - 12]
    // ecto limits: [1 - 9]
    isExceeded =
      endo! < 1 ||
      endo! > 15 ||
      meso! < 1 ||
      meso! > 12 ||
      ecto! < 1 ||
      ecto! > 9;

    return isExceeded;
  };

  const isStandard = (soma: number[]): boolean => {
    const endo: number | undefined =
      Number(soma[0]) < 1 ? 1 : Number(soma[0]?.toFixed());
    const meso: number | undefined =
      Number(soma[1]) < 1 ? 1 : Number(soma[1]?.toFixed());
    const ecto: number | undefined =
      Number(soma[2]) < 1 ? 1 : Number(soma[2]?.toFixed());

    let isStandard: boolean = true;

    let valuesStandard: String[][] = Object.values(somatotypesStandard);

    valuesStandard.forEach((array: String[]) => {
      isStandard = array.includes(`${endo}${meso}${ecto}`);
    });

    return isStandard;
  };

  const handleSubmit = () => {
    if (!showResults) {
      window.scrollTo(0, Number(gridRef.current?.offsetTop));
    }
    notStandard && setNotStandard(false);
    exceeded && setExceeded(false);
    notStandard && setNotStandard(false);
    msgErr !== "" && setMsgErr("");

    const somatotypeResults = calculateSomatotype(anthropometric!);

    if (isExceeded(somatotypeResults)) {
      setExceeded(true);
      setMsgErr("Error values: somatotype exceeded");
    } else {
      setShowResults(true);
      setToggleGraph(!toggleGraph);

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
    }
  };

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
      <HeaderTestpage />
      <Button
        sx={{
          borderRadius: "40px",
          display: "flex",
          margin: "0 auto",
          backgroundColor: "RGB(51, 164, 116)",
          padding: "20px 50px",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "30px",
          "&:hover": { bgcolor: "#28835c" },
        }}
        variant="contained"
        onClick={() => {
          setManually((m) => !m);
        }}
      >
        Enter details manually
        <ArrowForwardIosIcon
          sx={{
            marginLeft: "10px",
            fontSize: "25px",
            transition: "all .3s ease-out",
            transform: manually ? "rotate(90deg)" : "rotate(0)",
          }}
        />
      </Button>
      <Grid
        ref={gridRef}
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px 15px",
          overflow: "hidden",
        }}
        width={"100%"}
      >
        {/* Form Inputs */}
        <Collapse in={manually} collapsedSize={0} easing={{ enter: "5" }}>
          <Grid
            item
            sx={{
              flexGrow: 1,
              alignItems: "center",
              margin: "20px auto",
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
            {(exceeded || notStandard) && (
              <Alert
                onClose={() => {
                  exceeded && setExceeded(false);
                  notStandard && setNotStandard(false);
                }}
                severity="error"
                sx={{ margin: "50px auto" }}
              >
                {msgErr}
              </Alert>
            )}
            <AnthropometricForm
              anthropometric={anthropometric}
              setAnthropometric={setAnthropometric}
            />
          </Grid>
        </Collapse>

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
          <Box>
            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit}
              disabled={anthropometricHasError}
              sx={{
                textalign: "center",
                fontSize: "20px",
                lineHeight: 1.67,
                padding: "14px 40px",
                fontWeight: 600,
                textAlign: "center",
                backgroundColor: "purple",
                borderRadius: "40px",
                textTransform: "initial",
                "&.MuiButtonBase-root:hover": { bgcolor: "purple" },
              }}
            >
              See Results <ArrowForwardSharpIcon />
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
      <CounterShare />
    </ThemeProvider>
  );
};

export default TestPage;
