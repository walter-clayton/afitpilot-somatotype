import * as React from "react";
import { useState, useEffect, useRef, FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Collapse,
  Grid,
  Typography,
  Stack,
} from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { AddPoint, calculateSomatotype, IPoints } from "./Calculation";
import ResultsTable from "./ResultsTable";
import { useNavigate } from "react-router-dom";
// import { LargeNumberLike } from 'crypto';
import { IAnthropometric, IData, ISomatotype } from "../App";
import SomatotypeGraph from "./SomatotypeGraph";
import AnthropometricForm from "./AnthropometricForm";
import { useCookies } from "react-cookie";
import axios from "axios";
import { somatotypesStandard } from "./TestPage";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const theme = createTheme();

interface IAdding {
  setData?: (data: IData) => void;
  isAdding?: boolean;
  idRow?: string;
  idSomatotype?: string;
  setDashboardSnackBarOpen?: (open: boolean) => void;
  setDashboardSnackBarMessage?: (msg: string) => void;
}
const AddPage: FC<IAdding> = (props: any) => {
  const [showResults, setShowResults] = useState(false);
  const [toggleGraph, setToggleGraph] = useState(false);
  const [exceeded, setExceeded] = useState(false);
  const [notStandard, setNotStandard] = useState(false);
  const [msgErr, setMsgErr] = useState<String>("");
  const [manually, setManually] = useState<boolean>(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const [somatotype, setSomatotype] = useState<ISomatotype | undefined>(
    undefined
  );
  const [anthropometric, setAnthropometric] = useState<
    IAnthropometric | undefined
  >(undefined);

  const [cookies, setCookie] = useCookies(["user"]);

  const [pointsArray, setPointsArray] = useState<IPoints[]>([]);

  const [fetching, setFetching] = useState<boolean>(false);

  const [anthropometricHasError, setAnthropometricHasError] =
    useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    // setAnthropometric((anthropometric) => ({
    //   height: 180,
    //   weight: 80,
    //   supraspinal_skinfold: 12,
    //   subscapular_skinfold: 12,
    //   tricep_skinfold: 12,
    //   femur_breadth: 8,
    //   humerus_breadth: 7,
    //   calf_girth: 38,
    //   bicep_girth: 38,
    // }));
    getUserDatas();
  }, []);

  useEffect(() => {
    if (exceeded || notStandard) {
      window.scrollTo(0, Number(gridRef.current?.offsetTop));
      setShowResults(false);
    }
  }, [exceeded, notStandard]);

  const handleSaveDatasClick = async () => {
    let url: string;
    props.isAdding
      ? (url = process.env.REACT_APP_SAVEDATA_URL!)
      : (url =
          `${process.env.REACT_APP_EDITSOMATOTYPE_URL}/${props.idSomatotype}`!);

    const headers = {
      "Content-Type": "application/json",
      access_key: process.env.REACT_APP_ACCESS_KEY,
      Authorization: `Bearer ${cookies.user.token}`,
    };

    try {
      setFetching(true);
      const response = await axios.post(
        url,
        { somatotype, anthropometric },
        { headers: headers }
      );
      navigate("/");
      window.scrollTo(0, 0);
      props.setDashboardSnackBarOpen(true);
      props.isAdding
        ? props.setDashboardSnackBarMessage("New Somatotype saved !")
        : props.setDashboardSnackBarMessage("Somatotype changes saved !");

      setFetching(false);
      getUserDatas();
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

  const isExceeded = (soma: number[]): boolean => {
    const endo: number | undefined =
      Number(soma[0]) < 1 ? 1 : Number(soma[0]?.toFixed());
    const meso: number | undefined =
      Number(soma[1]) < 1 ? 1 : Number(soma[1]?.toFixed());
    const ecto: number | undefined =
      Number(soma[2]) < 1 ? 1 : Number(soma[2]?.toFixed());
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
        somatotypeResults[2],
        "#B78260"
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
      props.isAdding
        ? setAnthropometric((anthropometric) => ({
            height: 180,
            weight: 80,
            supraspinal_skinfold: 12,
            subscapular_skinfold: 12,
            tricep_skinfold: 12,
            femur_breadth: 8,
            humerus_breadth: 7,
            calf_girth: 38,
            bicep_girth: 38,
          }))
        : setAnthropometric(
            response.data.data.anthropometrics.reverse()[props.idRow]
          );

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h3" gutterBottom m={3} textAlign="center">
        {props.isAdding ? "Add new somatotype" : "Edit somatotype"}
      </Typography>
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
              setAnthropometricFormHasError={setAnthropometricHasError}
              isFetching={fetching}
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
          <Box sx={{ textalign: "center" }}>
            <Stack spacing={2} direction={"row"}>
              <Button
                sx={{
                  maxWidth: "sm",
                  color: "white",
                  backgroundColor: "RGB(108, 77, 123)",
                  padding: "7px 15px",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: "30px",
                  fontSize: "18px",
                  borderRadius: "40px",
                  textTransform: "initial",
                  minWidth: "140px",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "RGB(108, 77, 123)",
                  },
                }}
                // variant="outlined"
                onClick={() => {
                  props.setOpenAddModal!(false);
                  window.scrollTo(0, 0);
                }}
              >
                Go Back
              </Button>
              <Button
                variant="contained"
                type="submit"
                onClick={handleSubmit}
                sx={{
                  maxWidth: "sm",
                  color: "white",
                  backgroundColor: "RGB(108, 77, 123)",
                  padding: "7px 15px",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: "30px",
                  fontSize: "18px",
                  borderRadius: "40px",
                  textTransform: "initial",
                  minWidth: "140px",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "RGB(108, 77, 123)",
                  },
                }}
              >
                Submit
              </Button>
            </Stack>
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
              sx={{
                backgroundColor: "RGB(108, 77, 123)",
                padding: "14px 30px",
                fontWeight: 600,
                textAlign: "center",
                lineHeight: "30px",
                fontSize: "18px",
                borderRadius: "40px",
                textTransform: "initial",
                margin: "0px 80px",
                minWidth: "240px",
                "&.MuiButtonBase-root:hover": { bgcolor: "RGB(108, 77, 123)" },
              }}
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
    </ThemeProvider>
  );
};

export default AddPage;
