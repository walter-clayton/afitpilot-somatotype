import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { calculateSomatotype } from "./Calculation";
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

const Dashboard = () => {
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
  }, []);

  useEffect(() => {
    console.log(somatotypes);
  }, [somatotypes]);

  return (
    <>
      {openAddModal ? (
        <Add setOpenAddModal={setOpenAddModal} isAdding={isAdding} getUserDatas={getUserDatas} idRow={idRow} anthropometrics={anthropometrics}/>
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
            {/* Results Table */}
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
                somatotypes={somatotypes}
                showHistory={true}
                getUserDatas={getUserDatas}
                setOpenAddModal={setOpenAddModal}
                setIsAdding={setIsAdding}
                setIdRow={setIdRow}
                idRow={idRow}
              />
            </Grid>
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
              <SomatotypeGraph
                somatotype={somatotype}
                anthropometric={anthropometric}
                setSomatotype={setSomatotype}
              />
            </Grid>
            <Button
              sx={{ margin: "10px 0" }}
              variant="contained"
              onClick={() => {
                setIsAdding(true);
                setOpenAddModal(true);
                window.scrollTo(0,0);
              }}
            >
              Add new
            </Button>
          </Grid>
        </ThemeProvider>
      )}
    </>
  );
};

export default Dashboard;
