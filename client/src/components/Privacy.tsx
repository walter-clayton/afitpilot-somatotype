import React from 'react'
import { Typography, Link, Box } from "@mui/material/";
import { useHref, useNavigate } from "react-router-dom";


const Privacy = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h3" textAlign={'center'}> Privacy Policy</Typography>
                <Typography component="h6" variant="h6" >
                    <Link
                        href="https://matomo.org/privacy-policy/"
                    >
                        Please follow this link
                    </Link>
                </Typography>


            </Box>
        </div>
    )
}

export default Privacy
