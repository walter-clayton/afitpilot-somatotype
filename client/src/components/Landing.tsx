import * as React from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button,Grid } from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { myform } from './Calculation'
import ResultsTable from './ResultsTable';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
const theme = createTheme();

export default function Landing() {

    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();
    const [height, setHeight] = useState(180);
    const [bodyweight, setBodyweight] = useState(80);
    const [tricep, setTricep] = useState(12);
    const [subscapular, setSubscapular] = useState(12);
    const [supraspinal, setSupraspinal] = useState(12);
    const [humerus, setHumerus] = useState(7);
    const [femur, setFemur] = useState(8);
    const [calf, setCalf] = useState(38);
    const [bicep, setBicep] = useState(38);

    const handleHeightChange = (event: React.FormEvent<any>) => {
        setHeight(event.currentTarget.value);
    }

    const handleBodyWeightChange = (event: React.FormEvent<any>) => {
        setBodyweight(event.currentTarget.value);
    }

    const handleTricepChange = (event: React.FormEvent<any>) => {
        setTricep(event.currentTarget.value);
    }

    const handleSubscapularChange = (event: React.FormEvent<any>) => {
        setSubscapular(event.currentTarget.value);
    }

    const handleSupraspinalChange = (event: React.FormEvent<any>) => {
        setSupraspinal(event.currentTarget.value);
    }

    const handleHumerusChange = (event: React.FormEvent<any>) => {
        setHumerus(event.currentTarget.value);
    }

    const handleFemurChange = (event: React.FormEvent<any>) => {
        setFemur(event.currentTarget.value);
    }

    const handleCalfChange = (event: React.FormEvent<any>) => {
        setCalf(event.currentTarget.value);
    }

    const handleBicepChange = (event: React.FormEvent<any>) => {
        setBicep(event.currentTarget.value);
    }

    const handleResultClick = () => {
        const somatotype = {
            bodyweight : bodyweight, 
            height : height, 
            tricep : tricep, 
            subscapular : subscapular, 
            supraspinal : supraspinal, 
            humerus : humerus, 
            femur : femur, 
            calf : calf, 
            bicep : bicep,
        }
        myform(somatotype);
        setShowResults(true);
    }

    const handleSaveDatasClick = () => {
        console.log("go to the sign up page to save your datas");
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box >
                <Box sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "40px"}} >
                    <Grid>
                        <Grid item xs={12} >
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText >Height</FormHelperText>
                                <FilledInput
                                    id="height"
                                    placeholder='180'
                                    endAdornment={<InputAdornment position="end">cm</InputAdornment>} 
                                    onChange={handleHeightChange}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText >Bodyweight</FormHelperText>
                                <FilledInput
                                    id="bodyweight"
                                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text"
                                    placeholder='80'
                                    onChange={handleBodyWeightChange} />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={8} >
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText >Tricep skin fold </FormHelperText>
                                <FilledInput
                                    id="tricep"
                                    endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text"
                                    placeholder='12' 
                                    onChange={handleTricepChange}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText>Subscapular skin fold</FormHelperText>

                                <FilledInput
                                    id="subscapular"
                                    placeholder='12'
                                    endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text" 
                                    onChange={handleSubscapularChange}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText >Supraspinal skin fold
                                </FormHelperText>
                                <FilledInput
                                    id="supraspinal"
                                    placeholder='12'
                                    endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text" 
                                    onChange={handleSupraspinalChange}/>
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText >Humerus breadth </FormHelperText>
                                <FilledInput
                                    id="humerus"
                                    placeholder='7'
                                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text" 
                                    onChange={handleHumerusChange}/>
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText >Femur breadth</FormHelperText>
                                <FilledInput
                                    id="femur"
                                    placeholder='8'
                                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text" 
                                    onChange={handleFemurChange}/>
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText>Calf circumference</FormHelperText>
                                <FilledInput
                                    id="calf"
                                    placeholder='38'
                                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text" 
                                    onChange={handleCalfChange}/>
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText>Bicep circumference</FormHelperText>
                                <FilledInput
                                    id="bicep"
                                    placeholder='38'
                                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text" 
                                    onChange={handleBicepChange}/>
                            </FormControl>

                        </Grid>
                        {/* button */}
                        <Grid item xs={12} md={8}>
                            <Box sx={{ textalign: 'center' }}>
                                <Button variant="contained"
                                    type="submit"
                                    onClick={handleResultClick} >
                                    Result
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                {
                    showResults ? 
                    <Grid
                        container
                        maxWidth="sm"
                        sx={{
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                        }}
                    >
                    <ResultsTable endomorphy={5} mesomorphy={4} ectomorphy={4}/>
                    </Grid>
                    :
                    null
                }

                <Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginLeft: "30px" }}>
                        <canvas id="somatotypeCanvas" height="577.5" width="494"></canvas>
                    </Box>
                </Grid>

                {
                    showResults ?
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"}}
                    >
                        <Button
                            sx={{ margin: "10px auto", maxWidth:"sm"}}
                            variant="contained"
                            onClick={() => {
                                handleSaveDatasClick();
                                navigate("/Signup");
                              }}
                        >
                            Save Datas
                        </Button>
                    </Box>
                    :
                    null
                }
            </Box>
        </ThemeProvider>
    );
}