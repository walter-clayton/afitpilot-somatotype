import React from 'react'
import { Typography, Link, Box } from "@mui/material/";
import { useHref, useNavigate } from "react-router-dom";
const TermsCondition = () => {
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
                <Typography component="h1" variant="h3" textAlign={'center'}> Terms and Conditions</Typography>
                <Typography component="h6" variant="h6" >
                    <Link
                        href="https://docs.google.com/document/d/1LCeWzC86SgwYbz7DrkEm1UawI-pRKDsY5Y_Lp3mKNeQ/edit#heading=h.o57rgzsimwia"   >
                        Please follow this link
                    </Link>
                </Typography>


            </Box>

    </div>
  )
}

export default TermsCondition
