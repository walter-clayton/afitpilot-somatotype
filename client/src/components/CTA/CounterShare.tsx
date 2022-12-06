import React, { useState, useEffect } from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, Container, Box, Button } from "@mui/material/";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from '@mui/icons-material/Email';
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Divider from '@mui/material/Divider';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { FacebookShareButton, EmailShareButton, PinterestShareButton, } from 'react-share';

const CounterShare = () => {
    const storedValueAsNumber = Number(localStorage.getItem('count'));
    const [count, setCount] = useState(
        Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0
    );
    useEffect(() => {
        localStorage.setItem('count', String(count));
    }, [count]);

    const shareUrl = 'http://github.com';
    const title = 'GitHub';

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
                                {count}
                                <Typography component={"span"} variant="caption" sx={{ color: "#9b9faa", pl: "7px" }}>
                                    SHARES
                                </Typography>
                            </Typography>
                        </Box>
                        <IconButton
                            onClick={() => setCount(count + 1)}
                            sx={{
                                backgroundColor: "#3f5b96", borderColor: '#51596a', border: 1.3,
                                color: "#fff", borderRadius: '50%', p: "0px 12px ",
                                "&.MuiButtonBase-root:hover": { bgcolor: "#3f5b96" },
                            }}>
                            <FacebookShareButton
                                url={shareUrl}
                                quote={title}
                            >
                                <FacebookIcon onClick={() => setCount(count + 1)} />
                            </FacebookShareButton>

                        </IconButton>
                        <IconButton
                            onClick={() => setCount(count + 1)}
                            sx={{
                                backgroundColor: " #33a474", borderColor: '#51596a', border: 1.3,
                                color: "#fff", borderRadius: '50%', p: "0px 12px ",
                                "&.MuiButtonBase-root:hover": { bgcolor: " #33a474" },
                            }}>
                            <EmailShareButton
                                url={shareUrl}
                                title={title}
                            >
                                <EmailIcon onClick={() => setCount(count + 1)} />
                            </EmailShareButton>
                        </IconButton>
                        <IconButton
                            onClick={() => setCount(count + 1)}
                            sx={{
                                backgroundColor: "#e3102e", borderColor: '#51596a', border: 1.3,
                                color: "#fff", borderRadius: '210px', p: "12px",
                                "&.MuiButtonBase-root:hover": { bgcolor: " #e3102e" },
                            }} >
                            <PinterestShareButton
                                url={String(window.location)}
                                media={`${String(window.location)}`}
                            >
                                <PinterestIcon onClick={() => setCount(count + 1)} />
                            </PinterestShareButton>
                        </IconButton>
                    </Stack>
                </Box>
            </Box>
        </Container >
    )
}

export default CounterShare
