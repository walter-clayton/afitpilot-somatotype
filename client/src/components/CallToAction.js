import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
    Grid,
    Box,
    Button,
} from "@mui/material/";
import { Typography, Container } from "@mui/material/";
import Stack from '@mui/material/Stack';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import sitting from './image/sitting-2.svg'

const CallToAction = () => {
    return (
        <Container component="main">
            <CssBaseline />
            <Grid container sx={{ backgroundColor: '#f6f6f7', marginTop: 8 }} >
                <Grid xs={12} md={5} lg={6} sm={12}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: 'flex-end',
                            marginRight: "20px",
                            marginLeft: "7px"
                        }}
                    >
                        <Typography component="h1" variant="h4" sx={{ color: 'blue' }}>
                            Somatotypes
                        </Typography>
                        <Typography mt={1.5} component="h4" variant="h4">
                            Understand yourself
                        </Typography>
                        <Typography mt={1.5} sx={{ display: 'flex', justifyContent: 'flex-end' }} variant="body1">
                            In our free somatotype description you will learn what your body
                            types is capable of and the types of sport you have the most potential in.
                        </Typography>
                        <Stack mt={1.5} spacing={2} direction="row">
                            <Button sx={{ borderRadius: '20px', backgroundColor: 'green' }} variant="contained" >Somatotypes</Button>
                            <Button sx={{ color: 'blue' }} variant="text">Explore Theory <ArrowForwardSharpIcon /></Button>
                        </Stack>
                    </Box>
                </Grid>
                <Grid xs={12} md={7} lg={6} sm={12}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <img src={sitting} alt="sitting girl    " />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
export default CallToAction
