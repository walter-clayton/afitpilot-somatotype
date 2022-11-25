import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button } from "@mui/material/";
import { Typography, Container } from "@mui/material/";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="body1">
                        © 2022 Afitpilot, All Rights Reserved.
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <Stack spacing={{ xs: 1, sm: 1 }} direction={{ xs: 'column', sm: 'row' }}>
                            <Button onClick={() => { navigate("/Contact") }}>Contact</Button>
                            <Button onClick={() => { navigate("/TermsConditions") }} >Terms and Conditions</Button>
                            <Button onClick={() => { navigate("/Privacy") }} >Privacy Policy</Button>
                        </Stack>
                    </Box>
                    <Box sx={{ mt: 1 }}>
                        <Stack direction="row" spacing={5} mt={1.5} mb={1.5}>
                            <IconButton href='https://www.facebook.com/profile.php?id=100087953628158' target="_blank"
                                sx={{ backgroundColor: '#3f5b96', color: 'white', "&.MuiButtonBase-root:hover": { bgcolor: "#3f5b96" } }} >
                                <FacebookIcon />
                            </IconButton>
                            <IconButton href='https://www.instagram.com/afitpilot/?igshid=YmMyMTA2M2Y%3D' target="_blank"
                                sx={{ backgroundColor: '#C13584', color: 'white', "&.MuiButtonBase-root:hover": { bgcolor: "#C13584" } }}>
                                <InstagramIcon />
                            </IconButton  >
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Footer
