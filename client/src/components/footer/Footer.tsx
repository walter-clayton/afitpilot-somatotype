import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button } from "@mui/material/";
import { Typography, Container } from "@mui/material/";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Don't render the Footer if the current route is '/rpescore'
  if (location.pathname === "/RPEScore" || "/RPEDashboard") {
    return null;
  }

  const style = {
    width: "100%",
    bgcolor: "background.paper",
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div>
      <Container component="main" maxWidth="xl">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "sticky",
            bottom: 0,
          }}
        >
          <Divider sx={style} />
          <Typography variant="body1" mt={3} color={"#abafb8"}>
            © {getCurrentYear()} Afitpilot, All Rights Reserved.
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Stack
              spacing={{ xs: 1, sm: 1 }}
              direction={{ xs: "column", sm: "row" }}
            >
              <Button
                onClick={() => {
                  navigate("/Contact");
                  window.scrollTo(0, 0);
                }}
              >
                Contact
              </Button>
              <Button
                onClick={() => {
                  navigate("/TermsConditions");
                  window.scrollTo(0, 0);
                }}
              >
                Terms and Conditions
              </Button>
              <Button
                onClick={() => {
                  navigate("/Privacy");
                  window.scrollTo(0, 0);
                }}
              >
                Privacy Policy
              </Button>
            </Stack>
          </Box>
          <Box sx={{ mt: 1 }}>
            <Stack direction="row" spacing={5} mt={1.5} mb={1.5}>
              <IconButton
                href="https://www.facebook.com/profile.php?id=100087953628158"
                target="_blank"
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  borderColor: "#51596a",
                  border: 1.3,
                  color: "#51596a",
                  "&.MuiButtonBase-root:hover": { bgcolor: "#fff" },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/afitpilot/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  borderColor: "#51596a",
                  border: 1.3,
                  color: "#51596a",
                  "&.MuiButtonBase-root:hover": { bgcolor: "#fff" },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
