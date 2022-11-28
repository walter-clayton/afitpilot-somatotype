import * as React from "react";
import { useState, useEffect, useRef, FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, Grid, Typography } from "@mui/material/";
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
const theme = createTheme();

interface IAdding {
  setData?: (data: IData) => void;
  setOpenAddModal?: (openModal: boolean) => void;
  isAdding?: boolean;
  getUserDatas?: () => void;
  idRow?: string;
  anthropometrics?: IAnthropometric[];
  idSomatotype?: string;
  setDashboardSnackBarOpen?: (open: boolean) => void;
  setDashboardSnackBarMessage?: (msg: string) => void;
}
const Add: FC<IAdding> = (props: any) => {
  const [showResults, setShowResults] = useState(false);
  const [toggleGraph, setToggleGraph] = useState(false);

  const [somatotype, setSomatotype] = useState<ISomatotype | undefined>(
    undefined
  );
  const [anthropometric, setAnthropometric] = useState<
    IAnthropometric | undefined
  >(undefined);

  const [cookies, setCookie] = useCookies(["user"]);

  const [pointsArray, setPointsArray] = useState<IPoints[]>([]);

  useEffect(() => {
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
      : setAnthropometric(props.anthropometrics[props.idRow]);
  }, []);

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
      const response = await axios.post(
        url,
        { somatotype, anthropometric },
        { headers: headers }
      );
      props.setOpenAddModal!(false);
      window.scrollTo(0, 0);
      console.log(response.data);
      props.setDashboardSnackBarOpen(true);
      props.isAdding
        ? props.setDashboardSnackBarMessage("New Somatotype saved !")
        : props.setDashboardSnackBarMessage("Somatotype changes saved !");

      //TO DO Set snackbar message to say deleted sucessfully
      props.getUserDatas();
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h3" gutterBottom m={3} textAlign="center">
        {props.isAdding ? "Add new somatotype" : "Edit somatotype"}
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
        {/* Form Inputs */}
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
              sx={{
                margin: "10px auto",
                marginRight: "20px",
                padding: "5px 15px",
                maxWidth: "sm",
              }}
              variant="outlined"
              onClick={() => {
                props.setOpenAddModal!(false);
                window.scrollTo(0, 0);
              }}
            >
              GO BACK
            </Button>
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
          </Grid>
        ) : null}

        {/* Graph */}
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
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{ margin: "10px auto", padding: "5px 25px", maxWidth: "sm" }}
              variant="contained"
              onClick={() => {
                handleSaveDatasClick();
              }}
            >
              SAVE
            </Button>
          </Box>
        ) : null}
      </Grid>
    </ThemeProvider>
  );
};

export default Add;
