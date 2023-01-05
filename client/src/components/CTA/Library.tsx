import React from "react";
import { Grid, Box, Button, Typography, useMediaQuery } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import { useState, useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import { getColors } from "../Colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TableCompare, { IComparison } from "../TableCompare";
import SomatotypeGraph from "../SomatotypeGraph";
import { IPoints } from "../Calculation";
import { useCookies } from "react-cookie";
import axios from "axios";

const Library = () => {
  const [tableComparePage, setTableComparePage] = useState<number>(0);
  const [comparisonState, setcomparisonState] = useState<string>("Tribes");
  const [compareTribesResults, setCompareTribesResults] = useState<
    IComparison[]
  >([]);
  const [compareSportsResults, setCompareSportsResults] = useState<
    IComparison[]
  >([]);
  const [compareResultsToShow, setCompareResultsToShow] = useState<
    IComparison[]
  >([]);
  const [comparisonPointsArray, setComparisonPointsArray] = useState<IPoints[]>(
    []
  );
  const [compareResults, setCompareResults] = useState<IComparison[]>([]);
  const [toggleGraph, setToggleGraph] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);
  const [fetching, setFetching] = useState<boolean>(false);

  const navigate = useNavigate();
  const medium = useMediaQuery("(max-width:899px)");
  const small = useMediaQuery("(max-width:599px)");
  const extraSmall = useMediaQuery("(max-width:449px)");
  const xxs = useMediaQuery("(max-width:380px)");
  const xxxs = useMediaQuery("(max-width:320px)");

  const Datas = [
    {
      images: "manu_man",
      bodytype: "Manu man",
      SomatotypeType: "2 - 7 - 2",
      TypeCode: "BM",
    },
    {
      images: "eskimo woman",
      bodytype: "Eskimo woman",
      SomatotypeType: "6 - 4 - 1",
      TypeCode: "MEn",
    },
    {
      images: "nilote man",
      bodytype: "Nilote man",
      SomatotypeType: "2 - 3 - 6",
      TypeCode: "MEc",
    },
    {
      images: "brahmin man",
      bodytype: "Brahmin man",
      SomatotypeType: "2 - 4 - 4",
      TypeCode: "EcM",
    },
    {
      images: "manu woman",
      bodytype: "Manu woman",
      SomatotypeType: "2 - 5 - 2",
      TypeCode: "BM",
    },
    {
      images: "eskimo man",
      bodytype: "Eskimo man",
      SomatotypeType: "4 - 6 - 2",
      TypeCode: "EnM",
    },
    {
      images: "manu_man",
      bodytype: "Manu man",
      SomatotypeType: "2 - 7 - 2",
      TypeCode: "BM",
    },
    {
      images: "eskimo woman",
      bodytype: "Eskimo woman",
      SomatotypeType: "6 - 4 - 1",
      TypeCode: "MEn",
    },
    {
      images: "nilote man",
      bodytype: "Nilote man",
      SomatotypeType: "2 - 3 - 6",
      TypeCode: "MEc",
    },
    {
      images: "brahmin man",
      bodytype: "Brahmin man",
      SomatotypeType: "2 - 4 - 4",
      TypeCode: "EcM",
    },
    {
      images: "manu woman",
      bodytype: "Manu-woman",
      SomatotypeType: "2 - 5 - 2",
      TypeCode: "BM",
    },
    {
      images: "eskimo woman",
      bodytype: "Eskimo man",
      SomatotypeType: "4 - 6 - 2",
      TypeCode: "EnM",
    },
  ];
  const imagePerCard = 6;
  const [next, setNext] = useState(imagePerCard);
  const handleMoreCard = () => {
    setNext(next + imagePerCard);
  };
  // console.log(next)

  useEffect(() => {
    getCompareDatas();
  }, []);

  useEffect(() => {
    let tribesArray: IComparison[] = [];
    let sportsArray: IComparison[] = [];

    compareResults.forEach((comparison) => {
      if (comparison.group === "Tribe") {
        tribesArray.push(comparison);
      }
      if (comparison.group === "Sport") {
        sportsArray.push(comparison);
      }
    });
    setCompareSportsResults(sportsArray);
    setCompareTribesResults(tribesArray);
  }, [compareResults]);

  useEffect(() => {
    setcomparisonState("Tribes");
    setCompareResultsToShow(compareTribesResults);
  }, [compareTribesResults]);

  const getCompareDatas = async () => {
    const headers = {
      "Content-Type": "application/json",
      access_key: process.env.REACT_APP_ACCESS_KEY,
    };

    try {
      setFetching(true);
      const response = await axios.get(process.env.REACT_APP_COMPARE_URL!, {
        headers: headers,
      });
      setCompareResults(response.data.comparisons);
      setFetching(false);
    } catch (error) {
      // if (error.response) {
      //     error.response.data.message
      //       ? setSnackbarMessage(error.response.data.message)
      //       : setSnackbarMessage(error.response.statusText);
      //   } else {
      //     setSnackbarMessage("Error with the server");
      //   }
      console.log("error ", error);
      setFetching(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#F5F5F6",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "250px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: medium
              ? small
                ? extraSmall
                  ? "30px"
                  : "36px"
                : "54px"
              : "54px",
            color: "black",
            textAlign: "center",
            marginBottom: "20px",
            lineHeight: "71px",
            fontWeight: 600,
          }}
        >
          Library
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: "40px",
            fontSize: "18px",
            lineHeight: "30px",
            backgroundColor: "RGB(108, 77, 123)",
            padding: "14px 40px",
            fontWeight: 600,
            textAlign: "center",
            textTransform: "initial",
            marginTop: 0,
            mb: -15,
            "&.MuiButtonBase-root:hover": { bgcolor: "RGB(108, 77, 123)" },
          }}
          onClick={() => {
            navigate("/test");
          }}
        >
          Take the Test
        </Button>
      </Box>
      {/* number of other categories */}
      <Grid item xs={12} width={"100%"} mt={4}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            sx={{ marginBottom: "20px" }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#33a474",
                textAlign: "center",
                fontSize: "54px",
                marginBottom: "20px",
                lineHeight: "71px",
                fontWeight: 600,
              }}
            >
              0
            </Typography>
            <Typography sx={{ color: "black", textAlign: "center" }}>
              Occupations
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Typography
              variant="h1"
              sx={{
                color: "#4298b4",
                textAlign: "center",
                fontSize: "54px",
                marginBottom: "20px",
                lineHeight: "71px",
                fontWeight: 600,
              }}
            >
              13
            </Typography>
            <Typography sx={{ color: "black", textAlign: "center" }}>
              Sports
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Typography
              variant="h1"
              sx={{
                color: "#e4ae3a",
                textAlign: "center",
                fontSize: "54px",
                marginBottom: "20px",
                lineHeight: "71px",
                fontWeight: 600,
              }}
            >
              5
            </Typography>
            <Typography sx={{ color: "black", textAlign: "center" }}>
              Tribesman
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={"space-around"}>
          <Grid
            item
            xs={12}
            sm={10}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            width={"100%"}
            padding={2}
          >
            <SomatotypeGraph
              graphColor={"#5c5c5c"}
              updateGraph={toggleGraph}
              pointsArray={comparisonPointsArray}
            />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
            xs={12}
            sm={12}
            md={6}
            width={"100%"}
            padding={2}
          >
            <Box width={"100%"}>
              <Box>
                <Button
                  sx={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: "30px",
                    fontSize: "18px",
                    textTransform: "initial",
                    padding: "14px 30px",
                    borderRadius: "40px",
                    marginTop: "5px",
                    width: small
                      ? extraSmall
                        ? xxs
                          ? xxxs
                            ? "90%"
                            : "80%"
                          : "75%"
                        : "70%"
                      : "60%",
                    mx: small
                      ? extraSmall
                        ? xxs
                          ? xxxs
                            ? "5%"
                            : "10%"
                          : "12.5%"
                        : "15%"
                      : "20%",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#000000",
                    },
                    display: "flex",
                    "&:hover": { bgcolor: "#000000" },
                  }}
                  variant="contained"
                  onClick={() => {
                    setTableComparePage(0);
                    setcomparisonState("Tribes");
                    setCompareResultsToShow(compareTribesResults);
                  }}
                >
                  Tribes
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: "30px",
                    fontSize: "18px",
                    textTransform: "initial",
                    padding: "14px 30px",
                    borderRadius: "40px",
                    marginTop: "5px",
                    width: small
                      ? extraSmall
                        ? xxs
                          ? xxxs
                            ? "90%"
                            : "80%"
                          : "75%"
                        : "70%"
                      : "60%",
                    mx: small
                      ? extraSmall
                        ? xxs
                          ? xxxs
                            ? "5%"
                            : "10%"
                          : "12.5%"
                        : "15%"
                      : "20%",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#000000",
                    },
                    display: "flex",
                    "&:hover": { bgcolor: "#000000" },
                  }}
                  variant="contained"
                  onClick={() => {
                    setTableComparePage(0);
                    setcomparisonState("Sports");
                    setCompareResultsToShow(compareSportsResults);
                  }}
                >
                  Sports
                </Button>
              </Box>

              {!fetching && (
                <TableCompare
                  datas={compareResultsToShow}
                  isFetching={fetching}
                  setPointsArray={setComparisonPointsArray}
                  toggleGraph={toggleGraph}
                  setToggleGraph={setToggleGraph}
                  tableTitle={comparisonState}
                  page={tableComparePage}
                  setPage={setTableComparePage}
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* compare table */}

      {/* card */}
      <Grid
        container
        spacing={2}
        // sx={{
        //     margin: "0 auto",
        // }}
        alignItems={"center"}
        direction={{ xs: "column", sm: "row", md: "row", lg: "row", xl: "row" }}
      >
        {Datas?.slice(0, next)?.map((step, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ textAlign: "center", marginTop: 5, mb: 5 }}
              width={"100%"}
            >
              <Card
                sx={{
                  placeSelf: "center",
                  width: "90%",
                  borderRadius: "25px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ objectFit: "fill" }}
                  image={require("../image/" + step.images + ".svg")}
                />
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    backgroundColor: "#D9D9D9",
                  }}
                >
                  {step.bodytype}
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    backgroundColor: "#E7E7E7",
                  }}
                >
                  {step.SomatotypeType}
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    backgroundColor: "#F5F5F6",
                  }}
                >
                  {step.TypeCode}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {/* button */}
      {next < Datas?.length && (
        <Button
          variant="contained"
          sx={{
            borderRadius: "40px",
            fontSize: "18px",
            lineHeight: "30px",
            backgroundColor: "RGB(108, 77, 123)",
            padding: "14px 40px",
            fontWeight: 600,
            textAlign: "center",
            textTransform: "initial",
            marginTop: 0,
            mb: 2,
            "&.MuiButtonBase-root:hover": { bgcolor: "RGB(108, 77, 123)" },
          }}
          onClick={handleMoreCard}
        >
          Load More
        </Button>
      )}
    </Box>
  );
};
export default Library;
