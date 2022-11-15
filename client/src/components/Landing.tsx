import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button } from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material/';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { myform } from './Calculation'
const theme = createTheme();

export default function Landing() {
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
                                    endAdornment={<InputAdornment position="end">cm</InputAdornment>} />
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText >Bodyweight</FormHelperText>
                                <FilledInput
                                    id="bodyweight"
                                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text"
                                    placeholder='80' />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={8} >
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText >Tricep skin fold </FormHelperText>
                                <FilledInput
                                    id="tricep"
                                    endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text"
                                    placeholder='12' />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText>Subscapular skin fold</FormHelperText>

                                <FilledInput
                                    id="subscapular"
                                    placeholder='12'
                                    endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text" />
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
                                    aria-describedby="filled-weight-helper-text" />
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText >Humerus breadth </FormHelperText>
                                <FilledInput
                                    id="humerus"
                                    placeholder='7'
                                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text" />
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText >Femur breadth</FormHelperText>
                                <FilledInput
                                    id="femur"
                                    placeholder='8'
                                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text" />
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText>Calf circumference</FormHelperText>
                                <FilledInput
                                    id="calf"
                                    placeholder='38'
                                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text" />
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText>Bicep circumference</FormHelperText>
                                <FilledInput
                                    id="bicep"
                                    placeholder='38'
                                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text" />
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText >Subscapularskin fold</FormHelperText>
                                <FilledInput
                                    id="filled-adornment-weight"
                                    placeholder='12'
                                    endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text"/>
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} md={8}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <FormHelperText >Subscapular skin fold</FormHelperText>
                                <FilledInput
                                    id="filled-adornment-weight"
                                    placeholder='12'
                                    endAdornment={<InputAdornment position="end">mm</InputAdornment>}
                                    aria-describedby="filled-weight-helper-text"/>
                            </FormControl>

                        </Grid>
                        {/* button */}
                        <Grid item xs={12} md={8}>
                            <Box sx={{ textalign: 'center' }}>
                                <Button variant="contained"
                                    type="submit"
                                    onClick={myform} >
                                    Result
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginLeft: "30px" }}>
                        <canvas id="somatotypeCanvas" height="577.5" width="494"></canvas>
                    </Box>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}