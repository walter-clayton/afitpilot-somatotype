import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Typography,
  Container,
  Box,
  useMediaQuery,
} from "@mui/material/";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import PinterestIcon from "@mui/icons-material/Pinterest";
import {
  FacebookShareButton,
  EmailShareButton,
  PinterestShareButton,
  WhatsappShareButton,
} from "react-share";

const CounterShare = () => {
  const storedValueAsNumber = Number(localStorage.getItem("count"));
  const [count, setCount] = useState(
    Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0
  );
  useEffect(() => {
    localStorage.setItem("count", String(count));
  }, [count]);

  var url = window.location.href;
  const title = "Afitpilot";

  const style = {
    width: "100%",
    bgcolor: "background.paper",
  };

  const xxs = useMediaQuery("(max-width:380px)");

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Divider sx={style} />
        <Box sx={{ mt: 5 }} width={"100%"}>
          <Stack
            direction="row"
            textAlign={"center"}
            spacing={xxs ? 2 : 3}
            my={1}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{ color: "#9b9faa", fontSize: xxs ? "150%" : "220%" }}
              >
                {count}
                <Typography
                  component={"span"}
                  variant="caption"
                  sx={{
                    color: "#9b9faa",
                    pl: xxs ? "3px" : "7px",
                    fontSize: xxs ? "32%" : "35%",
                  }}
                >
                  SHARES
                </Typography>
              </Typography>
            </Box>
            <Box
              onClick={() => setCount(count + 1)}
              sx={{
                backgroundColor: "#3f5b96",
                border: 1.3,
                color: "#fff",
                borderRadius: "50%",
                "&.MuiButtonBase-root:hover": { bgcolor: "#3f5b96" },
                width: xxs ? "35px" : "50px",
                height: xxs ? "35px" : "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FacebookShareButton url={url} quote={title}>
                <FacebookIcon
                  sx={{ marginTop: "5px", fontSize: xxs ? "120%" : "180%" }}
                />
              </FacebookShareButton>
            </Box>
            <Box
              onClick={() => setCount(count + 1)}
              sx={{
                backgroundColor: "#34b7f1",
                border: 1.3,
                color: "#fff",
                borderRadius: "50%",
                "&.MuiButtonBase-root:hover": { bgcolor: " #33a474" },
                width: xxs ? "35px" : "50px",
                height: xxs ? "35px" : "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EmailShareButton title={title} url={url}>
                <EmailIcon
                  sx={{ marginTop: "5px", fontSize: xxs ? "120%" : "180%" }}
                />
              </EmailShareButton>
            </Box>
            <Box
              onClick={() => setCount(count + 1)}
              sx={{
                backgroundColor: " #25d366",
                border: 1.3,
                color: "#fff",
                borderRadius: "50%",
                "&.MuiButtonBase-root:hover": { bgcolor: " #33a474" },
                width: xxs ? "35px" : "50px",
                height: xxs ? "35px" : "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <WhatsappShareButton url={url} title={title}>
                <WhatsappIcon
                  sx={{ marginTop: "5px", fontSize: xxs ? "120%" : "180%" }}
                />
              </WhatsappShareButton>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default CounterShare;
