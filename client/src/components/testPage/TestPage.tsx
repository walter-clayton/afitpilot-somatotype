import React, { FC, useEffect, useRef, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IAnthropometric, IData, IParamsAvatar, ISomatotype } from "../../App";
import {
  Alert,
  Box,
  Button,
  Collapse,
  CssBaseline,
  Fade,
  Grid,
  Snackbar,
  Stack,
} from "@mui/material";
import {
  AddPoint,
  calculateSomatotype,
  IPoints,
} from "../../datas/Calculation";
import ResultsTable from "../dashboard/ResultsTable";
import SomatotypeGraph from "../somatotypeGraph/SomatotypeGraph";
import axios from "axios";
import { matchRoutes, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import Typography from "@mui/material/Typography";
import HeaderTestpage from "./HeaderTestpage";
import CounterShare from "../shares/CounterShare";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TestSteps from "./testSteps/TestSteps";
import { LiveSomatotypeCalculator } from "./testSteps/LiveSomatotypeCalculator";

const theme = createTheme();

interface ITesting {
  setData: (data: IData | undefined) => void;
  data: IData;
  resultsSaved: boolean;
  setResultsSaved: (bool: boolean) => void;
  isAdding?: boolean;
  idRow?: number;
  idSomatotype?: string;
  setDashboardSnackBarOpen?: (open: boolean) => void;
  setDashboardSnackBarMessage?: (msg: string) => void;
  avatar?: IParamsAvatar;
  setAvatar?: (avatar: IParamsAvatar) => void;
}

interface ISomatotypesStandard {
  balancedMeso: String[];
  central: String[];
  endoEcto: String[];
  mesoEcto: String[];
  balancedEcto: String[];
  balancedEndo: String[];
  mesoEndo: String[];
  ectomorphicMeso: String[];
  mesomorphicEcto: String[];
  endomorphicEcto: String[];
  ectomorphicEndo: String[];
  mesomorphicEndo: String[];
  endomorphicMeso: String[];
}

export const somatotypesStandard: ISomatotypesStandard = {
  balancedMeso: ["353", "252", "363", "262", "272", "171", "181", "191"],
  central: ["343", "444", "333", "434", "344", "334", "433", "443"],
  endoEcto: ["424", "414", "515"],
  mesoEcto: ["244", "144", "155"],
  balancedEcto: ["335", "225", "336", "226", "227", "117", "118", "119"],
  balancedEndo: ["533", "522", "633", "622", "722", "711", "811", "911"],
  mesoEndo: ["442", "552", "441", "551", "661", "771", "881", "991"],
  ectomorphicMeso: [
    "354",
    "243",
    "254",
    "253",
    "154",
    "153",
    "263",
    "164",
    "163",
    "162",
    "173",
    "172",
    "182",
  ],
  mesomorphicEcto: [
    "234",
    "345",
    "235",
    "245",
    "236",
    "135",
    "145",
    "126",
    "136",
    "146",
    "127",
    "137",
    "128",
    "129",
  ],
  endomorphicEcto: [
    "324",
    "435",
    "425",
    "415",
    "325",
    "315",
    "416",
    "316",
    "326",
    "216",
    "317",
    "217",
    "218",
    "219",
  ],
  ectomorphicEndo: [
    "534",
    "524",
    "514",
    "614",
    "513",
    "523",
    "623",
    "613",
    "713",
    "612",
    "712",
  ],
  mesomorphicEndo: [
    "432",
    "543",
    "542",
    "532",
    "632",
    "642",
    "541",
    "651",
    "641",
    "631",
    "621",
    "721",
    "731",
    "741",
    "751",
    "761",
    "871",
    "861",
    "851",
    "841",
    "831",
    "821",
    "921",
    "931",
    "941",
    "951",
    "961",
    "971",
    "981",
  ],
  endomorphicMeso: [
    "342",
    "453",
    "352",
    "362",
    "261",
    "372",
    "271",
    "281",
    "291",
    "452",
    "351",
    "462",
    "361",
    "371",
    "381",
    "391",
    "451",
    "461",
    "471",
    "481",
    "491",
    "561",
    "571",
    "581",
    "591",
    "671",
    "681",
    "691",
    "781",
    "791",
    "891",
  ],
};

const isMinTwoDigit = (soma: ISomatotype): boolean => {
  let matchCondition: boolean;

  matchCondition =
    Math.abs(soma.endomorphy! - soma.mesomorphy!) <= 2 ||
    Math.abs(soma.endomorphy! - soma.ectomorphy!) <= 2 ||
    Math.abs(soma.mesomorphy! - soma.ectomorphy!) <= 2;

  return matchCondition;
};

const isCentral = (soma: ISomatotype): boolean => {
  // digit has to be 2, 3 or 4
  const condition = [2, 3, 4];
  soma.endomorphy = Number(soma.endomorphy?.toFixed());
  soma.mesomorphy = Number(soma.mesomorphy?.toFixed());
  soma.ectomorphy = Number(soma.ectomorphy?.toFixed());
  let i: number = 0;
  let matchCondition: boolean = true;

  while (matchCondition && i < Object.values(soma).length) {
    matchCondition = condition.includes(Object.values(soma)[i]);

    i++;
  }

  // not more than 1 between digits
  if (matchCondition) {
    matchCondition =
      Math.abs(soma.endomorphy! - soma.mesomorphy!) <= 1 &&
      Math.abs(soma.endomorphy! - soma.ectomorphy!) <= 1 &&
      Math.abs(soma.mesomorphy! - soma.ectomorphy!) <= 1;
  }

  return matchCondition;
};

const isBalancedMeso = (soma: ISomatotype): boolean => {
  return (
    isMinTwoDigit(soma) &&
    soma.endomorphy! === soma.ectomorphy! &&
    soma.mesomorphy! > soma.endomorphy! &&
    soma.mesomorphy! > soma.ectomorphy!
  );
};

const isEctomorphicMeso = (soma: ISomatotype): boolean => {
  return (
    isMinTwoDigit(soma) &&
    soma.ectomorphy! > soma.endomorphy! &&
    soma.mesomorphy! > soma.endomorphy! &&
    soma.mesomorphy! > soma.ectomorphy!
  );
};

const isMesoEcto = (soma: ISomatotype): boolean => {
  return (
    isMinTwoDigit(soma) &&
    soma.ectomorphy! > soma.endomorphy! &&
    soma.mesomorphy! === soma.ectomorphy!
  );
};

const isMesomorphicEcto = (soma: ISomatotype): boolean => {
  return (
    isMinTwoDigit(soma) &&
    soma.ectomorphy! > soma.endomorphy! &&
    soma.ectomorphy! > soma.mesomorphy! &&
    soma.mesomorphy! > soma.endomorphy!
  );
};

const isBalancedEcto = (soma: ISomatotype): boolean => {
  return (
    isMinTwoDigit(soma) &&
    soma.endomorphy! === soma.mesomorphy! &&
    soma.ectomorphy! > soma.endomorphy!
  );
};

const isEndomorphicEcto = (soma: ISomatotype): boolean => {
  return (
    isMinTwoDigit(soma) &&
    soma.endomorphy! > soma.mesomorphy! &&
    soma.ectomorphy! > soma.endomorphy! &&
    soma.ectomorphy! > soma.mesomorphy!
  );
};

const isEndoEcto = (soma: ISomatotype): boolean => {
  return (
    isMinTwoDigit(soma) &&
    soma.endomorphy! === soma.ectomorphy! &&
    soma.endomorphy! > soma.mesomorphy! &&
    soma.ectomorphy! > soma.mesomorphy!
  );
};

const isEctomorphicEndo = (soma: ISomatotype): boolean => {
  return (
    isMinTwoDigit(soma) &&
    soma.ectomorphy! > soma.mesomorphy! &&
    soma.endomorphy! > soma.ectomorphy! &&
    soma.endomorphy! > soma.mesomorphy!
  );
};

const isBalancedEndo = (soma: ISomatotype): boolean => {
  return (
    isMinTwoDigit(soma) &&
    soma.endomorphy! > soma.ectomorphy! &&
    soma.endomorphy! > soma.mesomorphy! &&
    soma.mesomorphy! === soma.ectomorphy!
  );
};

const isMesomorphicEndo = (soma: ISomatotype): boolean => {
  return (
    isMinTwoDigit(soma) &&
    soma.endomorphy! > soma.ectomorphy! &&
    soma.endomorphy! > soma.mesomorphy! &&
    soma.mesomorphy! > soma.ectomorphy!
  );
};

const isMesoEndo = (soma: ISomatotype): boolean => {
  return (
    isMinTwoDigit(soma) &&
    soma.endomorphy! === soma.mesomorphy! &&
    soma.endomorphy! > soma.ectomorphy!
  );
};

const isEndomorphicMeso = (soma: ISomatotype): boolean => {
  return (
    isMinTwoDigit(soma) &&
    soma.endomorphy! > soma.ectomorphy! &&
    soma.mesomorphy! > soma.endomorphy! &&
    soma.mesomorphy! > soma.ectomorphy!
  );
};

export const getSomatotypeType = (
  endomorphy: number | undefined,
  mesomorphy: number | undefined,
  ectomorphy: number | undefined
) => {
  let result: string = "";

  const soma: ISomatotype = {
    endomorphy: Number(endomorphy) < 1 ? 1 : Number(endomorphy?.toFixed(1)),
    mesomorphy: Number(mesomorphy) < 1 ? 1 : Number(mesomorphy?.toFixed(1)),
    ectomorphy: Number(ectomorphy) < 1 ? 1 : Number(ectomorphy?.toFixed(1)),
  };

  if (isCentral(soma)) {
    result = " Central (C).";
  } else if (isBalancedMeso(soma)) {
    result = "Balanced Mesomorph (BM).";
  } else if (isEctomorphicMeso(soma)) {
    result = "Ectomorphic Mesomorph (EcM).";
  } else if (isMesoEcto(soma)) {
    result = " Mesomorph Ectomorph (M-Ec).";
  } else if (isMesomorphicEcto(soma)) {
    result = "Mesomorphic Ectomorph (MEc).";
  } else if (isBalancedEcto(soma)) {
    result = "Balanced Ectomorph (BEc).";
  } else if (isEndomorphicEcto(soma)) {
    result = "Endomorphic Ectomorph (EnEc).";
  } else if (isEndoEcto(soma)) {
    result = "Endomorph Ectomorph (En-Ec).";
  } else if (isEctomorphicEndo(soma)) {
    result = "Ectomorphic Endomorph (EcEn).";
  } else if (isBalancedEndo(soma)) {
    result = "Balanced Endomorph (BEn).";
  } else if (isMesomorphicEndo(soma)) {
    result = "Mesomorphic Endomorph (MEn).";
  } else if (isMesoEndo(soma)) {
    result = "Mesomorph Endomorph (M-En).";
  } else if (isEndomorphicMeso(soma)) {
    result = "Endomorphic Mesomorph (EnM).";
  }

  return result;
};

const TestPage: FC<ITesting> = (props) => {
  const naviguate = useNavigate();

  const [showResults, setShowResults] = useState(false);
  const [exceeded, setExceeded] = useState(false);
  const [notStandard, setNotStandard] = useState(false);
  const [msgErr, setMsgErr] = useState<String>("");
  const [manually, setManually] = useState<boolean>(false);
  const [modalTakeScan, setModalTakeScan] = useState<boolean>(false);
  const [toggleGraph, setToggleGraph] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const gridRef = useRef<HTMLDivElement>(null);

  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarState, setSnackBarState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const [somatotype, setSomatotype] = useState<ISomatotype | undefined>(
    undefined
  );

  const [anthropometric, setAnthropometric] = useState<
    IAnthropometric | undefined
  >(undefined);

  const [anthropometricHasError, setAnthropometricHasError] =
    useState<boolean>(false);

  const [pointsArray, setPointsArray] = useState<IPoints[]>([]);

  const handleSnackBarClose = () => {
    setSnackBarState({ ...snackBarState, open: false });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderTestpage />
      <TestSteps
        setData={props.setData}
        data={props.data}
        isAdding={props.isAdding}
        idRow={props.idRow}
        idSomatotype={props.idSomatotype}
        setDashboardSnackBarOpen={props.setDashboardSnackBarOpen}
        setDashboardSnackBarMessage={props.setDashboardSnackBarMessage}
        avatar={props.avatar}
        setAvatar={props.setAvatar}
      />
      {/* <LiveSomatotypeCalculator /> */}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackBarState.open}
        onClose={handleSnackBarClose}
        message={snackBarMessage}
      />
      <CounterShare />
    </ThemeProvider>
  );
};

export default TestPage;
