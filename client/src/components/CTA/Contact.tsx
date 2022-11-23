import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import { Grid, Box } from "@mui/material/";
import { Typography, Container, Link } from "@mui/material/";
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Group from '../image/Group.svg'
import IconButton from '@mui/material/IconButton';

const Contact = () => {
    return (
        <div>
            <Container component="main">
                <CssBaseline />
                <Grid container sx={{}}>
                    <Grid xs={12} md={6} lg={6} sm={12}>
                        <Box
                            sx={{
                                marginTop: 4,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <img src={Group} alt="sitting girl" />
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} lg={6} sm={12}>
                        <Box
                            sx={{
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: 'flex-end',
                                marginRight: "20px",
                                marginLeft: "7px",
                                // backgroundColor:'#33a474',
                            }}
                        >
                            <Typography component="h1" variant="h4" sx={{ color: 'black' }}>
                                Contact Us
                            </Typography>
                            <Typography mt={1.5} sx={{ lineHeight: 2, fontSize: 19 }} variant="subtitle1">
                                Please send us your questions.
                            </Typography>
                            <Typography mt={1.5} sx={{ display: 'flex', justifyContent: 'flex-end' }} color="inherit" variant="body1">
                                <Link
                                    href="https://matomo.org/privacy-policy/"
                                >
                                    info.afitpilot@gmail.com
                                </Link>
                            </Typography>
                            <Typography mt={1.5} sx={{ display: 'flex', justifyContent: 'flex-end', fontWeight: 700, fontSize: 19 }} component='h1' variant="body1">
                                Afitpilot
                            </Typography>
                            <Typography mt={1.5} sx={{ display: 'flex', justifyContent: 'flex-end' }} variant="body1">
                                Registered in Belgium
                            </Typography>
                            <Stack direction="row" spacing={5} mt={1.5}>
                                <IconButton sx={{
                                    backgroundColor: '#3f5b96', color: 'white', "&.MuiButtonBase-root:hover": { bgcolor: "#3f5b96" }
                                }} >
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton href='https://www.instagram.com/afitpilot/?igshid=YmMyMTA2M2Y%3D' sx={{
                                    backgroundColor: '#C13584', color: 'white', "&.MuiButtonBase-root:hover": { bgcolor: "#C13584" }
                                }} >
                                    <InstagramIcon />
                                </IconButton  >
                                <IconButton sx={{
                                    backgroundColor: '#2a9fee', color: 'white', "&.MuiButtonBase-root:hover": { bgcolor: "#2a9fee" }
                                }} >
                                    <TwitterIcon />
                                </IconButton>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Contact
