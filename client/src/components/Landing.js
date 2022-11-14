import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import { Box, Button } from '@mui/material/';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material/';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Modal from '@mui/material/Modal';
import { myform } from './Calculation'
const theme = createTheme();

export default function Landing() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    alignItems: "center",
                    // borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar>
                    <Typography variant="h5" color="inherit" noWrap>
                        Somatotype
                    </Typography>
                </Toolbar>
            </AppBar>


<Box>
<Box sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "center",
                marginTop: "40px"
                //  minHeight:"550px",
            }} >
                <Grid >
                    <Grid item xs={12} >
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                            <FormHelperText id="filled-weight-helper-text" position="top">Height</FormHelperText>

                            <FilledInput
                                id="height"
                                placeholder='180'
                                endAdornment={<InputAdornment position="end">cm</InputAdornment>}

                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={12} md={8}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                            <FormHelperText id="filled-weight-helper-text" position="top">Bodyweight</FormHelperText>

                            <FilledInput
                                id="bodyweight"
                                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                aria-describedby="filled-weight-helper-text"
                                placeholder='80'
                            />
                        </FormControl>

                    </Grid>     <Grid item xs={12} md={8} >
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                            <FormHelperText id="filled-weight-helper-text" position="top">Tricep skin fold </FormHelperText>

                            <FilledInput
                                id="tricep"
                                endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                                aria-describedby="filled-weight-helper-text"
                                placeholder='12'
                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={12} md={8}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                            <FormHelperText id="filled-weight-helper-text" position="top">Subscapular skin fold</FormHelperText>

                            <FilledInput
                                id="subscapular"
                                placeholder='12'
                                endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                                aria-describedby="filled-weight-helper-text"
                            // label="With normal TextField"

                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={12} md={8}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                            <FormHelperText id="filled-weight-helper-text" position="top">Supraspinal skin fold
                            </FormHelperText>

                            <FilledInput
                                id="supraspinal"
                                placeholder='12'
                                endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                                aria-describedby="filled-weight-helper-text"
                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={12} md={8}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                            <FormHelperText id="filled-weight-helper-text" position="top">Humerus breadth
                            </FormHelperText>

                            <FilledInput
                                id="humerus"
                                placeholder='7'
                                endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                aria-describedby="filled-weight-helper-text"


                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={12} md={8}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                            <FormHelperText id="filled-weight-helper-text" position="top">Femur breadth</FormHelperText>

                            <FilledInput
                                id="femur"
                                placeholder='8'
                                endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                aria-describedby="filled-weight-helper-text"

                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={12} md={8}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                            <FormHelperText id="filled-weight-helper-text" position="top">Calf circumference</FormHelperText>

                            <FilledInput
                                id="calf"
                                placeholder='38'
                                endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                aria-describedby="filled-weight-helper-text"


                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={12} md={8}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                            <FormHelperText id="filled-weight-helper-text" position="top">Bicep circumference</FormHelperText>

                            <FilledInput
                                id="bicep"
                                placeholder='38'
                                endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                aria-describedby="filled-weight-helper-text"
                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={12} md={8}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                            <FormHelperText id="filled-weight-helper-text" position="top">Subscapular skin fold</FormHelperText>

                            <FilledInput
                                id="filled-adornment-weight"
                                placeholder='12'
                                endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                                aria-describedby="filled-weight-helper-text"
                                label="With normal TextField"

                            />
                        </FormControl>

                    </Grid>
                    <Grid item xs={12} md={8}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                            <FormHelperText id="filled-weight-helper-text" position="top">Subscapular skin fold</FormHelperText>

                            <FilledInput
                                id="filled-adornment-weight"
                                placeholder='12'
                                endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                                aria-describedby="filled-weight-helper-text"
                                label="With normal TextField"
                            />
                        </FormControl>

                    </Grid>
                    {/* button */}
                    <Grid item xs={12} md={8}>
                    <Box sx={{textalign:'center'}}>
                        <Button variant="contained" 
                            // onClick={handleOpen}
                            type="submit"

                            onClick={myform}
                            >
                            Result</Button>
                    </Box>

                    </Grid>

                  
                </Grid>
            </Box>
            <Box item xs={12} sm={12}>
<Grid>
                        <Box sx={{display:'flex',justifyContent:'center'}}>
                        <canvas id="somatotypeCanvas"
                      height="577.5" width = "494"
                            ></canvas>
                        </Box>
    
                    </Grid>

</Box>

</Box>

        </ThemeProvider>
    );
}