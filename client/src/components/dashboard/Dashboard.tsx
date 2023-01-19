import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState, useRef, FC } from "react";
import { calculateSomatotype, IPoints } from "../../datas/Calculation";
import ResultsTable from "./ResultsTable";
import { IAnthropometric, IData, IParamsAvatar, ISomatotype } from "../../App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SomatotypeGraph from "../somatotypeGraph/SomatotypeGraph";
import axios from "axios";
import { useCookies } from "react-cookie";
import CounterShare from "../shares/CounterShare";
import { useNavigate } from "react-router-dom";
import TableCompare, { IComparison } from "./TableCompare";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShareIcon from "@mui/icons-material/Share";
import html2canvas from "html2canvas";
import CircleIcon from "@mui/icons-material/Circle";
import Avatar from "../avatar/Avatar";
import {
  beards,
  colorsHair,
  colorsSkin,
  faces,
  hairs,
  hairsFemale,
} from "../avatar/variablesAvatar/VariableAvatar";
import { comparisonDatas } from "../../datas/ComparisonDatas";
import { getSpecificColors } from "../../datas/Colors";

const theme = createTheme();

interface IDashboard {
  resultsSaved?: boolean;
  setResultsSaved?: (bool: boolean) => void;
  setIsAdding?: (bool: boolean) => void;
  idRow?: number;
  setIdRow?: (idRow: number) => void;
  idSomatotype?: string;
  setIdSomatotype?: (idRow: string) => void;
  dashboardSnackBarOpen?: boolean;
  setDashboardSnackBarOpen?: (bool: boolean) => void;
  dashboardSnackBarMessage?: string;
  setDashboardSnackBarMessage?: (msg: string) => void;
  avatar?: IParamsAvatar | undefined;
  setAvatar?: (avatar: IParamsAvatar) => void;
  fetching?: boolean;
  setFetching?: (fetching: boolean) => void;
  getAvatar?: () => void;
}

const Dashboard: FC<IDashboard> = (props) => {
  const [somatotype, setSomatotype] = useState<ISomatotype | undefined>(
    undefined
  );
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [anthropometric, setAnthropometric] = useState<
    IAnthropometric | undefined
  >(undefined);

  const [cookies, setCookie] = useCookies(["user"]);

  const [somatotypes, setSomatotypes] = useState<ISomatotype[]>([]);

  const [toggleGraph, setToggleGraph] = useState(false);
  const [pointsArray, setPointsArray] = useState<IPoints[]>([]);
  const [comparisonPointsArray, setComparisonPointsArray] = useState<IPoints[]>(
    []
  );
  const [finalPointsArray, setFinalPointsArray] = useState<IPoints[]>([]);

  const [snackBarState, setSnackBarState] = React.useState({
    vertical: "bottom",
    horizontal: "center",
  });

  const [showNoResultsMessage, setShowNoResultsMessage] = useState<
    boolean | undefined
  >(undefined);

  const navigate = useNavigate();

  const [typeResult, setTypeResult] = useState<string>("");

  const [comparisonState, setcomparisonState] = useState<string>("Compare");
  const [compareResults, setCompareResults] = useState<IComparison[]>([]);
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
  const [showComparisonOptions, setShowComparisonOptions] =
    useState<boolean>(false);
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [tableComparePage, setTableComparePage] = useState<number>(0);

  const [isSharing, setIsSharing] = useState<boolean>(false);

  const [fetchingDashboard, setFetchingDashboard] = useState<boolean>(false);

  const [avatar, setAvatar] = useState<IParamsAvatar>({
    indexHair: 0,
    indexColorHair: 0,
    indexFace: 0,
    indexColorSkin: 0,
    indexBeard: 0,
  });

  const [colorIndex, setColorIndex] = useState<number>(cookies.user.mainColor);

  const xxl = useMediaQuery("(min-width:1401px)");
  const xlarge = useMediaQuery("(max-width:1400px)");
  const large = useMediaQuery("(max-width:1200px)");
  const medium = useMediaQuery("(max-width:900px)");
  const small = useMediaQuery("(max-width:600px)");
  const xSmall = useMediaQuery("(max-width:450px)");
  const xxs = useMediaQuery("(max-width:380px)");
  const xxxs = useMediaQuery("(max-width:320px)");

  const cardRef = useRef<HTMLDivElement>(null);

  const getUserDatas = async () => {
    const headers = {
      "Content-Type": "application/json",
      access_key: process.env.REACT_APP_ACCESS_KEY,
      Authorization: `Bearer ${cookies.user.token}`,
    };

    try {
      props.setFetching!(true);
      const response = await axios.get(
        process.env.REACT_APP_GETUSERDATAS_URL!,
        { headers: headers }
      );

      setSomatotypes(response.data.data.somatotypes);
      props.setFetching!(false);
      setIsFetching(false);
      setToggleGraph(!toggleGraph);
    } catch (error) {
      // if (error.response) {
      //     error.response.data.message
      //       ? setSnackbarMessage(error.response.data.message)
      //       : setSnackbarMessage(error.response.statusText);
      //   } else {
      //     setSnackbarMessage("Error with the server");
      //   }
      console.log("error ", error);
      props.setFetching!(false);
    }
  };

  useEffect(() => {
    if (!isFetching) {
      somatotypes.length > 0
        ? setSomatotype(somatotypes[0])
        : setSomatotype({});
    }
    // if (somatotypes.length > 0 && showNoResultsMessage === true) {
    //   setShowNoResultsMessage(false);
    // } else if (
    //   (somatotypes.length === 0 && showNoResultsMessage === false) ||
    //   showNoResultsMessage === undefined
    // ) {
    //   setShowNoResultsMessage(true);
    // }
  }, [somatotypes]);

  const getCompareDatas = () => {
    setCompareResults(comparisonDatas);
  };

  useEffect(() => {
    console.log(props.fetching);

    const timeId = setTimeout(() => {
      props.setResultsSaved!(false);
    }, 6000);

    return () => {
      clearTimeout(timeId);
      props.setResultsSaved!(false);
    };
  }, []);

  useEffect(() => {
    getUserDatas();
    getCompareDatas();
    setColorIndex(cookies.user.mainColor);
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
    setFinalPointsArray(pointsArray.concat(comparisonPointsArray));
    setToggleGraph(!toggleGraph);
  }, [pointsArray]);

  useEffect(() => {
    setFinalPointsArray(pointsArray.concat(comparisonPointsArray));
    setToggleGraph(!toggleGraph);
  }, [comparisonPointsArray]);

  // useEffect(() => {
  //   if (somatotypes !== undefined) {
  //     if (somatotypes.length === 0) {
  //       setShowNoResultsMessage(true);
  //     } else {
  //       setShowNoResultsMessage(false);
  //     }
  //   }
  // }, [somatotypes]);

  const handleSnackBarClose = () => {
    props.setDashboardSnackBarOpen!(false);
  };

  const formatTypeResultText = (typeResultText: string) => {
    let croppedTextResult = typeResultText.slice(0, typeResultText.length - 2);
    let resultsTexts: string[] = croppedTextResult.split(" (");
    return resultsTexts;
  };

  const createExportImage = async () => {
    const element: HTMLDivElement = cardRef.current!;
    const canvas = await html2canvas(element, { backgroundColor: null });

    const data = canvas.toDataURL("image/png");

    shareImage(data);

    // // Create image from canvas and export it
    // const link = document.createElement("a");

    // link.href = data;
    // link.download = "downloaded-image.png";

    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  const shareImage = async (dataToShare: any) => {
    const response = await fetch(dataToShare);
    const blob = await response.blob();
    const filesArray = [
      new File([blob], "avatar.png", {
        type: "image/png",
        lastModified: new Date().getTime(),
      }),
    ];
    const shareData = {
      files: filesArray,
    };
    navigator.share(shareData);
  };

  // useEffect(() => {
  //   document.onmouseenter = () => {
  //     setIsSharing(false);
  //   };
  // });

  useEffect(() => {
    if (cookies.user) {
      setIsFetching(true);
      props.getAvatar!();
    }
  }, []);

  return (
    <>
      <Box
        ref={cardRef}
        sx={{
          position: "absolute",
          top: 0,
          left: "-550px",
          width: "500px",
          zIndex: -10,
        }}
      >
        <Grid
          container
          padding={2}
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: `10px solid ${getSpecificColors(colorIndex).darkColor}`,
            borderRadius: "25px",
            backgroundColor: getSpecificColors(colorIndex).clearColor,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: getSpecificColors(colorIndex).normalColor,
              textAlign: "start",
              alignSelf: "start",
            }}
          >
            {cookies.user.name}
          </Typography>
          {!props.fetching && props.avatar !== undefined && (
            <Avatar
              typeSoma={props.avatar.codeSoma!}
              hair={
                cookies.user.gender === "male"
                  ? hairs[props.avatar!.indexHair!]
                  : hairsFemale[props.avatar!.indexHair!]
              }
              face={faces[props.avatar!.indexFace!]}
              beard={beards[props.avatar!.indexBeard!]}
              gender={cookies.user.gender}
              colorsSkin={colorsSkin[props.avatar!.indexColorSkin!]}
              colorsHair={colorsHair[props.avatar!.indexColorHair!]}
              cloth={true}
              mainColor={cookies.user.mainColor}
            />
          )}

          <Grid
            item
            width={"100%"}
            marginBottom={1}
            sx={{
              color: "black",
              backgroundColor: getSpecificColors(colorIndex).darkColor,
              textAlign: "center",
              borderRadius: "25px",
            }}
          >
            <Grid
              container
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              columnSpacing={small ? (xxs ? 1.5 : 3) : 5}
            >
              <Grid item>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 600,
                    fontSize: small ? (xxs ? "150%" : "200%") : "300%",
                    color: "#ffffff",
                  }}
                >
                  {props.fetching || !somatotype
                    ? ""
                    : somatotype!.endomorphy?.toFixed() === "0" ||
                      Number(somatotype!.endomorphy) < 0
                    ? "1"
                    : somatotype!.endomorphy?.toFixed()}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 600,
                    fontSize: small ? (xxs ? "150%" : "200%") : "300%",
                    color: "#ffffff",
                  }}
                >
                  -
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 600,
                    fontSize: small ? (xxs ? "150%" : "200%") : "300%",
                    color: "#ffffff",
                  }}
                >
                  {props.fetching || !somatotype
                    ? ""
                    : somatotype!.mesomorphy?.toFixed() === "0" ||
                      Number(somatotype!.mesomorphy) < 0
                    ? "1"
                    : somatotype!.mesomorphy?.toFixed()}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 600,
                    fontSize: small ? (xxs ? "150%" : "200%") : "300%",
                    color: "#ffffff",
                  }}
                >
                  -
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 600,
                    fontSize: small ? (xxs ? "150%" : "200%") : "300%",
                    color: "#ffffff",
                  }}
                >
                  {props.fetching || !somatotype
                    ? ""
                    : somatotype!.ectomorphy?.toFixed() === "0" ||
                      Number(somatotype!.ectomorphy) < 0
                    ? "1"
                    : somatotype!.ectomorphy?.toFixed()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Box
            sx={{
              width: "100%",
              borderBottom: `2px solid ${
                getSpecificColors(colorIndex).darkColor
              }`,
            }}
          >
            <Typography
              marginBottom={0.3}
              variant="h5"
              sx={{
                color: getSpecificColors(colorIndex).darkColor,
                textAlign: "center",
                fontWeight: 600,
                fontSize: xxl
                  ? "250%"
                  : xlarge
                  ? large
                    ? medium
                      ? small
                        ? xSmall
                          ? xxxs
                            ? "80%"
                            : "100%"
                          : "150%"
                        : "200%"
                      : "150%"
                    : "200%"
                  : "150%",
              }}
            >
              {props.avatar?.titleSoma}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: getSpecificColors(colorIndex).normalColor,
                textAlign: "center",
                fontWeight: 600,
                fontSize: xxl
                  ? "250%"
                  : xlarge
                  ? large
                    ? medium
                      ? small
                        ? xSmall
                          ? xxxs
                            ? "80%"
                            : "100%"
                          : "150%"
                        : "200%"
                      : "150%"
                    : "200%"
                  : "150%",
              }}
            >
              {props.avatar?.codeSoma}
            </Typography>
          </Box>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            width={"100%"}
          >
            <SomatotypeGraph
              graphColor={"#5c5c5c"}
              updateGraph={toggleGraph}
              pointsArray={finalPointsArray}
            />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            width={"100%"}
          >
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
              }}
              width={"100%"}
            >
              {pointsArray.length > 0 && (
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <CircleIcon
                    sx={{
                      marginRight: "10px",
                      fontSize: xSmall
                        ? xxs
                          ? xxxs
                            ? "60%"
                            : "70%"
                          : "80%"
                        : "100%",
                      color: getSpecificColors(colorIndex).darkColor,
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      color: getSpecificColors(colorIndex).darkColor,
                      textAlign: "center",
                      fontWeight: 600,
                      fontSize: xSmall
                        ? xxs
                          ? xxxs
                            ? "85%"
                            : "100%"
                          : "120%"
                        : "150%",
                    }}
                  >
                    You
                  </Typography>
                </Grid>
              )}
              {comparisonPointsArray.length > 0 && (
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <CircleIcon
                    sx={{
                      marginRight: "10px",
                      fontSize: xSmall
                        ? xxs
                          ? xxxs
                            ? "60%"
                            : "70%"
                          : "80%"
                        : "100%",
                      color: "#000000",
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#000000",
                      textAlign: "center",
                      fontWeight: 600,
                      fontSize: xSmall
                        ? xxs
                          ? xxxs
                            ? "85%"
                            : "100%"
                          : "120%"
                        : "150%",
                    }}
                  >
                    {comparisonState}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Typography
          variant="h3"
          p={3}
          textAlign="center"
          color={"white"}
          sx={{ backgroundColor: getSpecificColors(colorIndex).darkColor }}
        >
          Dashboard
        </Typography>

        {somatotype !== undefined && Object.keys(somatotype).length > 0 && (
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "start",
              padding: "0px 15px",
            }}
            width={"100%"}
          >
            {props.resultsSaved ? (
              <Box m={4} width={"100%"}>
                <Alert
                  onClose={() => {
                    props.setResultsSaved!(false);
                  }}
                >
                  Results saved successfully!
                </Alert>
              </Box>
            ) : null}

            {/* Result Card */}
            {!showNoResultsMessage && (
              <Grid
                item
                sx={{
                  alignItems: "center",
                  marginTop: "20px",
                }}
                xs={12}
                md={6}
                xl={4.5}
                width={"100%"}
                padding={2}
              >
                <Grid
                  container
                  padding={2}
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    border: `10px solid ${
                      getSpecificColors(colorIndex).darkColor
                    }`,
                    borderRadius: "25px",
                    backgroundColor: getSpecificColors(colorIndex).clearColor,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: getSpecificColors(colorIndex).normalColor,
                      textAlign: "start",
                      alignSelf: "start",
                    }}
                  >
                    {cookies.user.name}
                  </Typography>
                  {props.avatar !== undefined && (
                    <Avatar
                      typeSoma={props.avatar.codeSoma!}
                      hair={
                        cookies.user.gender === "male"
                          ? hairs[props.avatar!.indexHair!]
                          : hairsFemale[props.avatar!.indexHair!]
                      }
                      face={faces[props.avatar!.indexFace!]}
                      beard={beards[props.avatar!.indexBeard!]}
                      gender={cookies.user.gender}
                      colorsSkin={colorsSkin[props.avatar!.indexColorSkin!]}
                      colorsHair={colorsHair[props.avatar!.indexColorHair!]}
                      cloth={true}
                      mainColor={cookies.user.mainColor}
                    />
                  )}

                  <Grid
                    item
                    width={"100%"}
                    marginBottom={1}
                    sx={{
                      color: "black",
                      backgroundColor: getSpecificColors(colorIndex).darkColor,
                      textAlign: "center",
                      borderRadius: "25px",
                    }}
                  >
                    <Grid
                      container
                      display={"flex"}
                      flexDirection={"row"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      columnSpacing={small ? (xxs ? 1.5 : 3) : 5}
                    >
                      <Grid item>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 600,
                            fontSize: small ? (xxs ? "150%" : "200%") : "300%",
                            color: "#ffffff",
                          }}
                        >
                          {!somatotype
                            ? ""
                            : somatotype!.endomorphy?.toFixed() === "0" ||
                              Number(somatotype!.endomorphy) < 0
                            ? "1"
                            : somatotype!.endomorphy?.toFixed()}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 600,
                            fontSize: small ? (xxs ? "150%" : "200%") : "300%",
                            color: "#ffffff",
                          }}
                        >
                          -
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 600,
                            fontSize: small ? (xxs ? "150%" : "200%") : "300%",
                            color: "#ffffff",
                          }}
                        >
                          {!somatotype
                            ? ""
                            : somatotype!.mesomorphy?.toFixed() === "0" ||
                              Number(somatotype!.mesomorphy) < 0
                            ? "1"
                            : somatotype!.mesomorphy?.toFixed()}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 600,
                            fontSize: small ? (xxs ? "150%" : "200%") : "300%",
                            color: "#ffffff",
                          }}
                        >
                          -
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 600,
                            fontSize: small ? (xxs ? "150%" : "200%") : "300%",
                            color: "#ffffff",
                          }}
                        >
                          {!somatotype
                            ? ""
                            : somatotype!.ectomorphy?.toFixed() === "0" ||
                              Number(somatotype!.ectomorphy) < 0
                            ? "1"
                            : somatotype!.ectomorphy?.toFixed()}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Box
                    sx={{
                      width: "100%",
                      borderBottom: `2px solid ${
                        getSpecificColors(colorIndex).darkColor
                      }`,
                    }}
                  >
                    <Typography
                      marginBottom={0.3}
                      variant="h5"
                      sx={{
                        color: getSpecificColors(colorIndex).darkColor,
                        textAlign: "center",
                        fontWeight: 600,
                        fontSize: xxl
                          ? "250%"
                          : xlarge
                          ? large
                            ? medium
                              ? small
                                ? xSmall
                                  ? xxxs
                                    ? "80%"
                                    : "100%"
                                  : "150%"
                                : "200%"
                              : "150%"
                            : "200%"
                          : "150%",
                      }}
                    >
                      {props.avatar?.titleSoma}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: getSpecificColors(colorIndex).normalColor,
                        textAlign: "center",
                        fontWeight: 600,
                        fontSize: xxl
                          ? "250%"
                          : xlarge
                          ? large
                            ? medium
                              ? small
                                ? xSmall
                                  ? xxxs
                                    ? "80%"
                                    : "100%"
                                  : "150%"
                                : "200%"
                              : "150%"
                            : "200%"
                          : "150%",
                      }}
                    >
                      {props.avatar?.codeSoma}
                    </Typography>
                  </Box>
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    width={"100%"}
                  >
                    <SomatotypeGraph
                      graphColor={"#5c5c5c"}
                      updateGraph={toggleGraph}
                      pointsArray={finalPointsArray}
                    />
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    width={"100%"}
                  >
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                      width={"100%"}
                    >
                      {pointsArray.length > 0 && (
                        <Grid
                          item
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                        >
                          <CircleIcon
                            sx={{
                              marginRight: "10px",
                              fontSize: xSmall
                                ? xxs
                                  ? xxxs
                                    ? "60%"
                                    : "70%"
                                  : "80%"
                                : "100%",
                              color: getSpecificColors(colorIndex).darkColor,
                            }}
                          />
                          <Typography
                            variant="h5"
                            sx={{
                              color: getSpecificColors(colorIndex).darkColor,
                              textAlign: "center",
                              fontWeight: 600,
                              fontSize: xSmall
                                ? xxs
                                  ? xxxs
                                    ? "85%"
                                    : "100%"
                                  : "120%"
                                : "150%",
                            }}
                          >
                            You
                          </Typography>
                        </Grid>
                      )}
                      {comparisonPointsArray.length > 0 && (
                        <Grid
                          item
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                        >
                          <CircleIcon
                            sx={{
                              marginRight: "10px",
                              fontSize: xSmall
                                ? xxs
                                  ? xxxs
                                    ? "60%"
                                    : "70%"
                                  : "80%"
                                : "100%",
                              color: "#000000",
                            }}
                          />
                          <Typography
                            variant="h5"
                            sx={{
                              color: "#000000",
                              textAlign: "center",
                              fontWeight: 600,
                              fontSize: xSmall
                                ? xxs
                                  ? xxxs
                                    ? "85%"
                                    : "100%"
                                  : "120%"
                                : "150%",
                            }}
                          >
                            {comparisonState}
                          </Typography>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Button
                  sx={{
                    borderColor: getSpecificColors(colorIndex).darkColor,
                    color: getSpecificColors(colorIndex).darkColor,
                    padding: "14px 30px",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: "30px",
                    fontSize: "18px",
                    borderRadius: "40px",
                    textTransform: "initial",
                    marginTop: "20px",
                    width: small
                      ? xSmall
                        ? xxs
                          ? xxxs
                            ? "90%"
                            : "80%"
                          : "75%"
                        : "70%"
                      : "60%",
                    mx: small
                      ? xSmall
                        ? xxs
                          ? xxxs
                            ? "5%"
                            : "10%"
                          : "12.5%"
                        : "15%"
                      : "20%",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: getSpecificColors(colorIndex).darkColor,
                      color: "#ffffff",
                      borderColor: getSpecificColors(colorIndex).darkColor,
                    },
                  }}
                  variant="outlined"
                  onClick={() => {
                    createExportImage();
                    // setIsSharing(true);
                  }}
                  disabled={isSharing}
                >
                  <ShareIcon sx={{ marginRight: "10px" }} />
                  Share
                </Button>
              </Grid>
            )}

            {/* Results Table */}
            {!showNoResultsMessage && (
              <Grid
                item
                sx={{
                  alignItems: "center",
                  marginTop: "20px",
                }}
                xs={12}
                md={6}
                xl={4.5}
                width={"100%"}
                padding={2}
              >
                <ResultsTable
                  somatotypes={somatotypes}
                  showHistory={true}
                  getUserDatas={getUserDatas}
                  setIsAdding={props.setIsAdding}
                  setIdRow={props.setIdRow}
                  idRow={props.idRow}
                  setIdSomatotype={props.setIdSomatotype}
                  idSomatotype={props.idSomatotype}
                  setPointsArray={setPointsArray}
                  toggleGraph={toggleGraph}
                  setToggleGraph={setToggleGraph}
                  setDashboardSnackBarOpen={props.setDashboardSnackBarOpen}
                  setDashboardSnackBarMessage={
                    props.setDashboardSnackBarMessage
                  }
                  isFetching={props.fetching}
                  setTypeResult={setTypeResult}
                  colorIndex={cookies.user.mainColor}
                  setAvatar={props.setAvatar}
                  getAvatar={props.getAvatar}
                />
                <Button
                  sx={{
                    backgroundColor: getSpecificColors(colorIndex).darkColor,
                    padding: "14px 30px",
                    fontWeight: 600,
                    textAlign: "center",
                    lineHeight: "30px",
                    fontSize: "18px",
                    borderRadius: "40px",
                    textTransform: "initial",
                    marginTop: "20px",
                    width: small
                      ? xSmall
                        ? xxs
                          ? xxxs
                            ? "90%"
                            : "80%"
                          : "75%"
                        : "70%"
                      : "60%",
                    mx: small
                      ? xSmall
                        ? xxs
                          ? xxxs
                            ? "5%"
                            : "10%"
                          : "12.5%"
                        : "15%"
                      : "20%",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: getSpecificColors(colorIndex).darkColor,
                    },
                  }}
                  variant="contained"
                  onClick={() => {
                    props.setIsAdding!(true);
                    navigate("/Test");
                    window.scrollTo(0, 0);
                  }}
                >
                  Add new
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
                    marginTop: "20px",
                    width: small
                      ? xSmall
                        ? xxs
                          ? xxxs
                            ? "90%"
                            : "80%"
                          : "75%"
                        : "70%"
                      : "60%",
                    mx: small
                      ? xSmall
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
                    setShowComparisonOptions((m) => !m);
                  }}
                >
                  Compare
                  <ArrowForwardIosIcon
                    sx={{
                      marginLeft: "10px",
                      fontSize: "25px",
                      transition: "all .3s ease-out",
                      transform: showComparisonOptions
                        ? "rotate(90deg)"
                        : "rotate(0)",
                    }}
                  />
                </Button>

                {showComparisonOptions && (
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
                          ? xSmall
                            ? xxs
                              ? xxxs
                                ? "90%"
                                : "80%"
                              : "75%"
                            : "70%"
                          : "60%",
                        mx: small
                          ? xSmall
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
                        setShowComparisonOptions(false);
                        setShowComparison(true);
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
                          ? xSmall
                            ? xxs
                              ? xxxs
                                ? "90%"
                                : "80%"
                              : "75%"
                            : "70%"
                          : "60%",
                        mx: small
                          ? xSmall
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
                        setShowComparisonOptions(false);
                        setShowComparison(true);
                        setCompareResultsToShow(compareSportsResults);
                      }}
                    >
                      Sports
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
                          ? xSmall
                            ? xxs
                              ? xxxs
                                ? "90%"
                                : "80%"
                              : "75%"
                            : "70%"
                          : "60%",
                        mx: small
                          ? xSmall
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
                        setcomparisonState("Occupations");
                        setShowComparisonOptions(false);
                        setShowComparison(true);
                        setCompareResultsToShow(compareOccupationResults);
                      }}
                    >
                      Occupations
                    </Button>
                  </Box>
                )}

                {showComparison && (
                  <TableCompare
                    datas={compareResultsToShow}
                    isFetching={props.fetching}
                    setPointsArray={setComparisonPointsArray}
                    toggleGraph={toggleGraph}
                    setToggleGraph={setToggleGraph}
                    tableTitle={comparisonState}
                    page={tableComparePage}
                    setPage={setTableComparePage}
                  />
                )}
              </Grid>
            )}
          </Grid>
        )}

        {somatotype !== undefined && Object.keys(somatotype).length === 0 && (
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "start",
              padding: "0px 15px",
            }}
            width={"100%"}
          >
            {/* No Results Message */}
            <Grid
              item
              sx={{
                flexGrow: 1,
                alignItems: "center",
                margin: "20px 0",
              }}
              xs={12}
              md={9}
              lg={7}
              width={"100%"}
            >
              <Typography variant="h5" gutterBottom m={3} textAlign="center">
                There are no somatotypes saved on your profile. Please add one
                to see your results.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{
                  backgroundColor: getSpecificColors(colorIndex).darkColor,
                  padding: "14px 30px",
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: "30px",
                  fontSize: "18px",
                  borderRadius: "40px",
                  textTransform: "initial",
                  width: "80%",
                  mx: "10%",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: getSpecificColors(colorIndex).darkColor,
                  },
                }}
                variant="contained"
                onClick={() => {
                  props.setIsAdding!(true);
                  navigate("/Test");
                  window.scrollTo(0, 0);
                }}
              >
                Add new
              </Button>
            </Grid>
          </Grid>
        )}

        {isFetching && (
          <Box sx={{ margin: "100px auto", width: "min-content" }}>
            <CircularProgress size={75} />
          </Box>
        )}

        <CounterShare />
      </ThemeProvider>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={props.dashboardSnackBarOpen}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
        message={props.dashboardSnackBarMessage}
      />
    </>
  );
};

export default Dashboard;
