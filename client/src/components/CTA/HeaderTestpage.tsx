import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import check from "../image/check.png";
import biceps from "../image/biceps.png";
import graphSoma from "../image/graphSoma.svg";
import { setFips } from "crypto";

const theme = createTheme();
theme.typography.h1 = {
  "@media (max-width:600px)": {
    fontSize: "36px",
    lineHeight: "46px",
    margin: "0px 0px 10px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "54px",
  },
};

const icons: any[] = [
  {
    icon: check,
    title: "Complete the test",
    desc: "Take accurate measurements",
    bgColor: "#DFEAEE",
  },
  {
    icon: graphSoma,
    title: "View detailed results",
    desc: "Learn where you are",
    bgColor: "#EBE7DC",
  },
  {
    icon: biceps,
    title: "Unlock your potential",
    desc: "Optimize your body shape",
    bgColor: "#ECE3F2",
  },
];

const HeaderTestpage = () => {
  const md = useMediaQuery("(max-width:980px)");
  const xs = useMediaQuery("(max-width:680px)");

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          justifyContent: "center",
          backgroundColor: "RGB(51, 164, 116)",
          padding: md ? "100px 0" : "100px 0 230px 0",
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography
            variant="h1"
            sx={{
              color: "#FFFF",
              textAlign: "center",
              fontSize: "54px",
              marginBottom: "20px",
              lineHeight: "71px",
              fontWeight: 600,
            }}
          >
            Free Somatotype Test
          </Typography>
        </ThemeProvider>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: md ? "80px" : "-129px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: md ? "column" : "row",
        }}
      >
        {icons.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: xs ? "280px" : "300px",
              height: "250px",
              paddingBottom: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: 4,
              marginTop: md ? "20px" : "0",
              marginRight: md ? "0" : index === icons.length - 1 ? "0" : "20px",
            }}
          >
            <Box
              sx={{
                backgroundColor: `${item.bgColor}`,
                padding: "20px 0",
                width: "100%",
                height: "150px",
                color: "black",
                position: "relative",
                "& > img": {
                  position: "absolute",
                  width: "100%",
                  height: "89.5px",
                  objectFit: "contain",
                },
              }}
            >
              <img src={item.icon} alt="icon" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                mt: "20px",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "19px",
                mt: "20px",
              }}
            >
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HeaderTestpage;
