import React from "react";
import { Grid, Box, Button, Typography, useMediaQuery } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TableCompare, { IComparison } from "../dashboard/TableCompare";
import SomatotypeGraph from "../somatotypeGraph/SomatotypeGraph";
import { IPoints } from "../../datas/Calculation";
import { useCookies } from "react-cookie";
import axios from "axios";
import { comparisonDatas } from "../../datas/ComparisonDatas";
import SearchLibrary from "./SearchLibrary";

const Library = () => {
  const [tableComparePage, setTableComparePage] = useState<number>(0);
  const [comparisonState, setcomparisonState] = useState<string>("Tribes");
  const [compareTribesResults, setCompareTribesResults] = useState<
    IComparison[]
  >([]);
  const [compareSportsResults, setCompareSportsResults] = useState<
    IComparison[]
  >([]);
  const [compareOccupationResults, setCompareOccupationResults] = useState<
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

  useEffect(() => {
    getCompareDatas();
  }, []);

  useEffect(() => {
    let tribesArray: IComparison[] = [];
    let sportsArray: IComparison[] = [];
    let occupationArray: IComparison[] = [];

    compareResults.forEach((comparison) => {
      if (comparison.group === "Tribe") {
        tribesArray.push(comparison);
      }
      if (comparison.group === "Sport") {
        sportsArray.push(comparison);
      }
      if (comparison.group === "Occupation") {
        occupationArray.push(comparison);
      }
    });
    setCompareSportsResults(sportsArray);
    setCompareTribesResults(tribesArray);
    setCompareOccupationResults(occupationArray);
  }, [compareResults]);

  useEffect(() => {
    setcomparisonState("Tribes");
    setCompareResultsToShow(compareTribesResults);
  }, [compareTribesResults]);

  const getCompareDatas = () => {
    setCompareResults(comparisonDatas);
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
              {compareOccupationResults.length}
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
              {compareSportsResults.length}
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
              {compareTribesResults.length}
            </Typography>
            <Typography sx={{ color: "black", textAlign: "center" }}>
              Tribes
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
            <Box width={"100%"} mb={5}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: small
                    ? extraSmall
                      ? xxs
                        ? xxxs
                          ? "column"
                          : "column"
                        : "column"
                      : "column"
                    : "row",
                }}
              >
                <Button
                  sx={{
                    backgroundColor:
                      comparisonState === "Tribes" ? "#000000" : "#ffffff",
                    color: comparisonState === "Tribes" ? "#ffffff" : "#000000",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: "30px",
                    fontSize: "18px",
                    textTransform: "initial",
                    padding: "14px 30px",
                    borderRadius: "40px",
                    marginTop: "10px",
                    width: small
                      ? extraSmall
                        ? xxs
                          ? xxxs
                            ? "90%"
                            : "80%"
                          : "75%"
                        : "70%"
                      : "35%",
                    mx: small
                      ? extraSmall
                        ? xxs
                          ? xxxs
                            ? "5%"
                            : "10%"
                          : "12.5%"
                        : "15%"
                      : "10px",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor:
                        comparisonState === "Tribes" ? "#000000" : "#ffffff",
                    },
                    display: "flex",
                    "&:hover": {
                      bgcolor:
                        comparisonState === "Tribes" ? "#000000" : "#ffffff",
                    },
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
                    backgroundColor:
                      comparisonState === "Sports" ? "#000000" : "#ffffff",
                    color: comparisonState === "Sports" ? "#ffffff" : "#000000",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: "30px",
                    fontSize: "18px",
                    textTransform: "initial",
                    padding: "14px 30px",
                    borderRadius: "40px",
                    marginTop: "10px",
                    width: small
                      ? extraSmall
                        ? xxs
                          ? xxxs
                            ? "90%"
                            : "80%"
                          : "75%"
                        : "70%"
                      : "35%",
                    mx: small
                      ? extraSmall
                        ? xxs
                          ? xxxs
                            ? "5%"
                            : "10%"
                          : "12.5%"
                        : "15%"
                      : "10px",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor:
                        comparisonState === "Sports" ? "#000000" : "#ffffff",
                    },
                    display: "flex",
                    "&:hover": {
                      bgcolor:
                        comparisonState === "Sports" ? "#000000" : "#ffffff",
                    },
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
                <Button
                  sx={{
                    backgroundColor:
                      comparisonState === "Occupations" ? "#000000" : "#ffffff",
                    color:
                      comparisonState === "Occupations" ? "#ffffff" : "#000000",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: "30px",
                    fontSize: "18px",
                    textTransform: "initial",
                    padding: "14px 30px",
                    borderRadius: "40px",
                    marginTop: "10px",
                    width: small
                      ? extraSmall
                        ? xxs
                          ? xxxs
                            ? "90%"
                            : "80%"
                          : "75%"
                        : "70%"
                      : "35%",
                    mx: small
                      ? extraSmall
                        ? xxs
                          ? xxxs
                            ? "5%"
                            : "10%"
                          : "12.5%"
                        : "15%"
                      : "10px",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor:
                        comparisonState === "Occupations"
                          ? "#000000"
                          : "#ffffff",
                    },
                    display: "flex",
                    "&:hover": {
                      bgcolor:
                        comparisonState === "Occupations"
                          ? "#000000"
                          : "#ffffff",
                    },
                  }}
                  variant="contained"
                  onClick={() => {
                    setTableComparePage(0);
                    setcomparisonState("Occupations");
                    setCompareResultsToShow(compareOccupationResults);
                  }}
                >
                  Occupations
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
      <SearchLibrary />
    </Box>
  );
};
export default Library;
