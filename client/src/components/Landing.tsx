import * as React from "react";
import { useState, useEffect, useRef, FC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Alert, Box, Button, Grid } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { myform } from "./Calculation";
import ResultsTable from "./ResultsTable";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import { LargeNumberLike } from "crypto";
import axios from "axios";
import { IAnthropometric, IData, ISomatotype } from "../App";
const theme = createTheme();

interface ILanding {
  setData: (data: IData) => void;
  resultsSaved: boolean;
  setResultsSaved: (bool: boolean) => void;
}

const Landing: FC<ILanding> = (props) => {
  const [showResults, setShowResults] = useState(false);
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

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

  const handleHeightChange = (event: React.FormEvent<any>) => {
    setAnthropometric({...anthropometric, height:parseFloat(event.currentTarget.value)});
  };

  const handleBodyWeightChange = (event: React.FormEvent<any>) => {
    setAnthropometric({...anthropometric, weight:parseFloat(event.currentTarget.value)});
  };

  const handleTricepChange = (event: React.FormEvent<any>) => {
    setAnthropometric({
      ...anthropometric,
      tricep_skinfold: parseFloat(event.currentTarget.value),
    });
  };

  const handleSubscapularChange = (event: React.FormEvent<any>) => {
    setAnthropometric({
      ...anthropometric,
      subscapular_skinfold: parseFloat(event.currentTarget.value),
    });
  };

  const handleSupraspinalChange = (event: React.FormEvent<any>) => {
    setAnthropometric({
      ...anthropometric,
      supraspinal_skinfold: parseFloat(event.currentTarget.value),
    });
  };

  const handleHumerusChange = (event: React.FormEvent<any>) => {
    setAnthropometric({
      ...anthropometric,
      humerus_breadth: parseFloat(event.currentTarget.value),
    });
  };

  const handleFemurChange = (event: React.FormEvent<any>) => {
    setAnthropometric({
      ...anthropometric,
      femur_breadth: parseFloat(event.currentTarget.value),
    });
  };

  const handleCalfChange = (event: React.FormEvent<any>) => {
    setAnthropometric({
      ...anthropometric,
      calf_girth: parseFloat(event.currentTarget.value),
    });
  };

  const handleBicepChange = (event: React.FormEvent<any>) => {
    setAnthropometric({
      ...anthropometric,
      bicep_girth: parseFloat(event.currentTarget.value),
    });
  };

  const handleResultClick = () => {
    if(canvasRef.current?.style.width != null && 
        canvasRef.current?.style.height != null){
            canvasRef.current!.style.width = "100%";
            canvasRef.current!.style.height = `${canvasRef.current?.offsetWidth! * 1.17}px`;
    }


    const somatotypeInputs:IAnthropometric = {
        weight : anthropometric?.weight, 
        height : anthropometric?.height, 
        tricep_skinfold : anthropometric?.tricep_skinfold, 
        subscapular_skinfold : anthropometric?.subscapular_skinfold, 
        supraspinal_skinfold : anthropometric?.supraspinal_skinfold, 
        humerus_breadth : anthropometric?.humerus_breadth, 
        femur_breadth : anthropometric?.femur_breadth, 
        calf_girth : anthropometric?.calf_girth, 
        bicep_girth : anthropometric?.bicep_girth
    };

    const somatotypeResults = myform(somatotypeInputs, canvasRef.current?.offsetWidth, canvasRef.current?.offsetHeight, canvasRef.current);

    setSomatotype((somatotype) => ({
      endomorphy: somatotypeResults[0],
      mesomorphy: somatotypeResults[1],
      ectomorphy: somatotypeResults[2],
    }));

    function handleResize() {
        if(canvasRef.current?.style.width !== undefined){
            canvasRef.current!.style.width = "100%";
            canvasRef.current!.style.height = `${canvasRef.current?.offsetWidth * 1.17}px`;

            const somatotypeInputs:IAnthropometric = {
                weight : anthropometric?.weight, 
                height : anthropometric?.height, 
                tricep_skinfold : anthropometric?.tricep_skinfold, 
                subscapular_skinfold : anthropometric?.subscapular_skinfold, 
                supraspinal_skinfold : anthropometric?.supraspinal_skinfold, 
                humerus_breadth : anthropometric?.humerus_breadth, 
                femur_breadth : anthropometric?.femur_breadth, 
                calf_girth : anthropometric?.calf_girth, 
                bicep_girth : anthropometric?.bicep_girth
            }
            
            myform(somatotypeInputs, canvasRef.current?.offsetWidth, canvasRef.current?.offsetHeight, canvasRef.current);
        }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
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
      <Grid container sx={{
          display: "flex",
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: "center",
          padding:'0px 15px'}}
          width={"100%"}
      >
        {/* Form Inputs */}
        <Grid item sx={{
            flexGrow: 1,
            alignItems: "center",
            margin: "20px 0"}}
            width={"100%"}
            xs={12} md={8} lg={6}>
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
          <FormControl sx={{width:"100%"}} variant="filled">
            <FormHelperText>Height</FormHelperText>
            <FilledInput
              id="height"
              placeholder="180"
              endAdornment={<InputAdornment position="end">cm</InputAdornment>}
              onChange={handleHeightChange}
            />
          </FormControl>

          <FormControl sx={{width:"100%"}} variant="filled">
            <FormHelperText>Bodyweight</FormHelperText>
            <FilledInput
              id="bodyweight"
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="filled-weight-helper-text"
              placeholder="80"
              onChange={handleBodyWeightChange}
            />
          </FormControl>

          <FormControl sx={{width:"100%"}} variant="filled">
            <FormHelperText>Tricep skin fold </FormHelperText>
            <FilledInput
              id="tricep"
              endAdornment={<InputAdornment position="end">mm</InputAdornment>}
              aria-describedby="filled-weight-helper-text"
              placeholder="12"
              onChange={handleTricepChange}
            />
          </FormControl>

          <FormControl sx={{width:"100%"}} variant="filled">
            <FormHelperText>Subscapular skin fold</FormHelperText>

            <FilledInput
              id="subscapular"
              placeholder="12"
              endAdornment={<InputAdornment position="end">mm</InputAdornment>}
              aria-describedby="filled-weight-helper-text"
              onChange={handleSubscapularChange}
            />
          </FormControl>

          <FormControl sx={{width:"100%"}} variant="filled">
            <FormHelperText>Supraspinal skin fold</FormHelperText>
            <FilledInput
              id="supraspinal"
              placeholder="12"
              endAdornment={<InputAdornment position="end">mm</InputAdornment>}
              aria-describedby="filled-weight-helper-text"
              onChange={handleSupraspinalChange}
            />
          </FormControl>

          <FormControl sx={{width:"100%"}} variant="filled">
            <FormHelperText>Humerus breadth </FormHelperText>
            <FilledInput
              id="humerus"
              placeholder="7"
              endAdornment={<InputAdornment position="end">cm</InputAdornment>}
              aria-describedby="filled-weight-helper-text"
              onChange={handleHumerusChange}
            />
          </FormControl>

          <FormControl sx={{width:"100%"}} variant="filled">
            <FormHelperText>Femur breadth</FormHelperText>
            <FilledInput
              id="femur"
              placeholder="8"
              endAdornment={<InputAdornment position="end">cm</InputAdornment>}
              aria-describedby="filled-weight-helper-text"
              onChange={handleFemurChange}
            />
          </FormControl>

          <FormControl sx={{width:"100%"}} variant="filled">
            <FormHelperText>Calf circumference</FormHelperText>
            <FilledInput
              id="calf"
              placeholder="38"
              endAdornment={<InputAdornment position="end">cm</InputAdornment>}
              aria-describedby="filled-weight-helper-text"
              onChange={handleCalfChange}
            />
          </FormControl>

          <FormControl sx={{width:"100%"}} variant="filled">
            <FormHelperText>Bicep circumference</FormHelperText>
            <FilledInput
              id="bicep"
              placeholder="38"
              endAdornment={<InputAdornment position="end">cm</InputAdornment>}
              aria-describedby="filled-weight-helper-text"
              onChange={handleBicepChange}
            />
          </FormControl>
        </Grid>
        {/* button */}
        <Grid item sx={{
            flexGrow: 1,
            alignItems: "center",
            margin: "20px auto"}}
            xs={12} md={8} lg={6}>
          <Box sx={{ textalign: "center" }}>
            <Button
              variant="contained"
              type="submit"
              onClick={() => {
                setShowResults(true);
                handleResultClick()}}
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
              endomorphy={somatotype?.endomorphy}
              mesomorphy={somatotype?.mesomorphy}
              ectomorphy={somatotype?.ectomorphy}
              showHistory={false}
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
          <canvas id="somatotypeCanvas" style={{border: showResults ? `1px solid black` : ""}} width="0" height="0" ref={canvasRef}></canvas>
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
export default Landing;
