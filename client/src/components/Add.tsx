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

    const handleHeightChange = (event: React.FormEvent<any>) => {
        setAnthropometric({ ...anthropometric, height: parseFloat(event.currentTarget.value) });
    }

    const handleBodyWeightChange = (event: React.FormEvent<any>) => {
        setAnthropometric({ ...anthropometric, weight: parseFloat(event.currentTarget.value) });
    }

    const handleTricepChange = (event: React.FormEvent<any>) => {
        setAnthropometric({ ...anthropometric, tricep_skinfold: parseFloat(event.currentTarget.value) });
    }

    const handleSubscapularChange = (event: React.FormEvent<any>) => {
        setAnthropometric({ ...anthropometric, subscapular_skinfold: parseFloat(event.currentTarget.value) });
    }

    const handleSupraspinalChange = (event: React.FormEvent<any>) => {
        setAnthropometric({ ...anthropometric, supraspinal_skinfold: parseFloat(event.currentTarget.value) });
    }

    const handleHumerusChange = (event: React.FormEvent<any>) => {
        setAnthropometric({ ...anthropometric, humerus_breadth: parseFloat(event.currentTarget.value) });
    }

    const handleFemurChange = (event: React.FormEvent<any>) => {
        setAnthropometric({ ...anthropometric, femur_breadth: parseFloat(event.currentTarget.value) });
    }

    const handleCalfChange = (event: React.FormEvent<any>) => {
        setAnthropometric({ ...anthropometric, calf_girth: parseFloat(event.currentTarget.value) });
    }

    const handleBicepChange = (event: React.FormEvent<any>) => {
        setAnthropometric({ ...anthropometric, bicep_girth: parseFloat(event.currentTarget.value) });
    }

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
                    xs={12} md={8} lg={6}>
                    <FormControl sx={{width:"100%"}} variant="filled">
                        <FormHelperText >Height</FormHelperText>
                        <FilledInput
                            id="height"
                            placeholder='180'
                            endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                            onChange={handleHeightChange} />
                    </FormControl>

                    <FormControl sx={{width:"100%"}} variant="filled">
                        <FormHelperText >Bodyweight</FormHelperText>
                        <FilledInput
                            id="bodyweight"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="filled-weight-helper-text"
                            placeholder='80'
                            onChange={handleBodyWeightChange} />
                    </FormControl>

                    <FormControl sx={{width:"100%"}} variant="filled">
                        <FormHelperText >Tricep skin fold </FormHelperText>
                        <FilledInput
                            id="tricep"
                            endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                            aria-describedby="filled-weight-helper-text"
                            placeholder='12'
                            onChange={handleTricepChange} />
                    </FormControl>

                    <FormControl sx={{width:"100%"}} variant="filled">
                        <FormHelperText>Subscapular skin fold</FormHelperText>
                        <FilledInput
                            id="subscapular"
                            placeholder='12'
                            endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                            aria-describedby="filled-weight-helper-text"
                            onChange={handleSubscapularChange} />
                    </FormControl>

                    <FormControl sx={{width:"100%"}} variant="filled">
                        <FormHelperText >Supraspinal skin fold
                        </FormHelperText>
                        <FilledInput
                            id="supraspinal"
                            placeholder='12'
                            endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                            aria-describedby="filled-weight-helper-text"
                            onChange={handleSupraspinalChange} />
                    </FormControl>

                    <FormControl sx={{width:"100%"}} variant="filled">
                        <FormHelperText >Humerus breadth </FormHelperText>
                        <FilledInput
                            id="humerus"
                            placeholder='7'
                            endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                            aria-describedby="filled-weight-helper-text"
                            onChange={handleHumerusChange} />
                    </FormControl>

                    <FormControl sx={{width:"100%"}} variant="filled">
                        <FormHelperText >Femur breadth</FormHelperText>
                        <FilledInput
                            id="femur"
                            placeholder='8'
                            endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                            aria-describedby="filled-weight-helper-text"
                            onChange={handleFemurChange} />
                    </FormControl>

                    <FormControl sx={{width:"100%"}} variant="filled">
                        <FormHelperText>Calf circumference</FormHelperText>
                        <FilledInput
                            id="calf"
                            placeholder='38'
                            endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                            aria-describedby="filled-weight-helper-text"
                            onChange={handleCalfChange} />
                    </FormControl>

                    <FormControl sx={{width:"100%"}} variant="filled">
                        <FormHelperText>Bicep circumference</FormHelperText>
                        <FilledInput
                            id="bicep"
                            placeholder='38'
                            endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                            aria-describedby="filled-weight-helper-text"
                            onChange={handleBicepChange} />
                    </FormControl>
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
                            <ResultsTable endomorphy={somatotype?.endomorphy} mesomorphy={somatotype?.mesomorphy} ectomorphy={somatotype?.ectomorphy} showHistory={false} />
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
