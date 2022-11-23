import * as React from 'react';
import { useState, useEffect, useRef, FC } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Grid, Typography } from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { calculateSomatotype } from './Calculation'
import ResultsTable from './ResultsTable';
import { useNavigate } from "react-router-dom";
// import { LargeNumberLike } from 'crypto';
import { IAnthropometric, IData, ISomatotype } from '../App';
import SomatotypeGraph from './SomatotypeGraph';
import AnthropometricForm from './AnthropometricForm';
const theme = createTheme();

interface ILanding {
    setData: (data: IData) => void
}
const Add: FC<ILanding> = (props) => {
    const [showResults, setShowResults] = useState(false);
    const [toggleGraph, setToggleGraph] = useState(false);
    const navigate = useNavigate();

    const [somatotype, setSomatotype] = useState<ISomatotype | undefined>(undefined);
    const [anthropometric, setAnthropometric] = useState<IAnthropometric | undefined>(undefined);

    useEffect(() => {
        setAnthropometric(anthropometric => ({
            height: 180,
            weight: 80,
            supraspinal_skinfold: 12,
            subscapular_skinfold: 12,
            tricep_skinfold: 12,
            femur_breadth: 8,
            humerus_breadth: 7,
            calf_girth: 38,
            bicep_girth: 38
        }))
    }, []);

    const handleSaveDatasClick = () => {
        props.setData({ somatotype: { ...somatotype }, anthropometric: { ...anthropometric } })
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Typography variant="h3" gutterBottom m={3} textAlign='center'>
                Add New
            </Typography>
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
                    margin: "20px auto"
                    }}
                    xs={12} md={8} lg={6} 
                >
                    <AnthropometricForm anthropometric={anthropometric} setAnthropometric={setAnthropometric}/>
                </Grid>
                {/* button */}
                <Grid item sx={{
                    flexGrow: 1,
                    alignItems: "center",
                    margin: "20px auto"
                }}
                    xs={12} md={8} lg={6}>
                    <Box sx={{ textalign: 'center' }}>
                        <Button variant="contained"
                            type="submit"
                            onClick={() => {
                                setShowResults(true);
                                setToggleGraph(!toggleGraph);}} >
                            Submit
                        </Button>
                    </Box>
                </Grid>
                {/* Results Table */}
                {
                    showResults ?
                        <Grid
                            item
                            sx={{
                                flexGrow: 1,
                                alignItems: "center",
                                margin: "20px 0"
                            }}
                            xs={12} md={8} lg={6}
                            width={"100%"}>
                            {/* <ResultsTable endomorphy={somatotype?.endomorphy} mesomorphy={somatotype?.mesomorphy} ectomorphy={somatotype?.ectomorphy} showHistory={false} /> */}
                        </Grid>
                        :
                        null
                }

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
                        {showResults && <SomatotypeGraph updateGraph={toggleGraph} somatotype={somatotype} anthropometric={anthropometric} setSomatotype={setSomatotype}/>}
                </Grid>

                {
                    showResults ?
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center"
                        }}
                        >
                            <Button
                                sx={{ margin: "10px auto", marginRight: "20px", padding: "5px 15px", maxWidth: "sm" }}
                                variant="outlined"
                                onClick={() => {
                                    handleSaveDatasClick();
                                    navigate("/Dashboard");
                                }}
                            >
                                GO BACK
                            </Button>
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
                        :
                        null
                }
            </Grid>
        </ThemeProvider>
    )
}

export default Add
