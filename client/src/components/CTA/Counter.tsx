import React, { useState } from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, Container, Box } from "@mui/material/";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Divider from '@mui/material/Divider';

const Counter = () => {
    const [count, setCount] = useState(0)
    console.log(useState)

    const style = {
        width: '100%',
        bgcolor: 'background.paper',
    };
    return (
        <Container component="main" maxWidth="xl">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: "center",
                }}>
                <Divider sx={style} />
                <Box sx={{ mt: 5 }}>
                    <Stack direction="row" textAlign={'center'} spacing={5} mt={1.5} mb={0.5}>
                        <Box>
                            <Typography variant="h4" sx={{ color: "#9b9faa", }}>
                                {count}+
                                <Typography component={"span"} variant="caption" sx={{ color: "#9b9faa", pl: "7px" }}>
                                    SHARES
                                </Typography>
                            </Typography>

                        </Box>
                        <IconButton
                            onClick={() => setCount(count + 1)}
                            href="https://www.facebook.com/profile.php?id=100087953628158"
                            target="_blank"
                            sx={{
                                backgroundColor: "#3f5b96", borderRadius: '50%', borderColor: '#51596a', border: 1.3,
                                color: "#fff",
                                "&.MuiButtonBase-root:hover": { bgcolor: "#3f5b96" },
                            }}
                        >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => setCount(count + 1)}
                            href="https://www.instagram.com/afitpilot/?igshid=YmMyMTA2M2Y%3D"
                            target="_blank"
                            sx={{
                                backgroundColor: " #cd486b", borderRadius: '50%', borderColor: '#51596a', border: 1.3,
                                color: "#fff",
                                "&.MuiButtonBase-root:hover": { bgcolor: " #cd486b" },
                            }}
                        >
                            <InstagramIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Box>
        </Container>
    )
}

export default Counter
