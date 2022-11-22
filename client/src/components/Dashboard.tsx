import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'
import { calculateSomatotype } from './Calculation';
import ResultsTable from './ResultsTable'
import { useNavigate } from "react-router-dom";
import { IAnthropometric, IData, ISomatotype } from '../App';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SomatotypeGraph from './SomatotypeGraph';

const theme = createTheme();

const Dashboard = () => {

    //Somatotype values should come from backend (data saved from the landing page)
    const navigate = useNavigate();
    
    const [somatotype, setSomatotype]= useState<ISomatotype | undefined>(undefined);
    
    const [anthropometric, setAnthropometric] = useState<IAnthropometric | undefined>(undefined);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Typography variant="h3" gutterBottom m={3} textAlign='center'>
            Dashboard
            </Typography>
            <Grid container sx={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "center",
                padding:'0px 15px'}}
                width={"100%"}
            >
                {/* Results Table */}
                <Grid
                    item
                    sx={{
                        flexGrow: 1,
                        alignItems: "center",
                        margin: "20px 0"}}
                        xs={12} md={8} lg={6}
                        width={"100%"}>
                    <ResultsTable endomorphy={somatotype?.endomorphy} mesomorphy={somatotype?.mesomorphy} ectomorphy={somatotype?.ectomorphy} showHistory={false}/>
                </Grid>
                {/* Graph */}
                <Grid
                item
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "20px 0"}}
                    xs={12} md={8} lg={6}
                    width={"100%"}>
                        <SomatotypeGraph somatotype={somatotype} anthropometric={anthropometric} setSomatotype={setSomatotype}/>
                </Grid>
                <Button
                    sx={{ margin: "10px 0" }}
                    variant="contained"
                    onClick={() => {
                        navigate("/Add");
                      }}
                >
                    Add new
                </Button>
            </Grid>
        </ThemeProvider>
    )
}

export default Dashboard