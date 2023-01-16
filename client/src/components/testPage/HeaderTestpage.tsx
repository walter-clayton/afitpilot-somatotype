import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import check from "../../image/check.png";
import biceps from "../../image/biceps.png";
import graphSoma from "../../image/graphSoma.png";
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
  const xxs = useMediaQuery("(max-width:390px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        backgroundColor: "RGB(51, 164, 116)",
        padding: md ? "50px 0" : "100px 0",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography
          variant="h1"
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: "54px",
            lineHeight: "71px",
            fontWeight: 600,
            marginBottom: md ? "30px" : "",
          }}
        >
          Free Somatotype Test
        </Typography>
        <Box
          sx={{
            display: "flex",
            transform: md ? "0" : "translateY(calc(121px + 100px))",
            marginTop: md ? "" : "-121px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: md ? "column" : "row",
            width: "100%",
          }}
        >
          {icons.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: md ? (xs ? "90%" : "70%") : "300px",
                height: md ? "" : "250px",
                paddingBottom: md ? "0" : "20px",
                display: "flex",
                flexDirection: md ? "row" : "column",
                alignItems: "center",
                justifyContent: "start",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: 4,
                marginTop: md ? "20px" : "",
                marginRight: md
                  ? "0"
                  : index === icons.length - 1
                  ? "0"
                  : "20px",
                backgroundColor: "RGBA(255, 255, 255, 0.8)",
              }}
            >
              <Box
                sx={{
                  padding: "0",
                  width: md ? "100px" : "100%",
                  height: md ? "" : "150px",
                  color: "black",
                  position: "relative",
                  "& > img": {
                    position: md ? "relative" : "absolute",
                    width: md ? (xs ? "80px" : "100px") : "100%",
                    height: md ? "" : "129.5px",
                    objectFit: "contain",
                    backgroundColor: md ? "" : `${item.bgColor}`,
                    padding: md ? "0 20px" : "20px 0",
                  },
                }}
              >
                <img src={item.icon} alt="icon" />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: xxs ? "102.5px" : "auto",
                  padding: "10px",
                }}
                display="flex"
                flexDirection={"column"}
                justifyContent={"center"}
              >
                <Typography
                  variant={xs ? "body1" : "h5"}
                  sx={{
                    textAlign: md ? "left" : "center",
                    mt: "10px",
                    fontSize: xs ? "15px" : "auto",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    textAlign: md ? "left" : "center",
                    fontSize: xs ? "15px" : "19px",
                    mt: xs ? "5px" : "auto",
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default HeaderTestpage;
