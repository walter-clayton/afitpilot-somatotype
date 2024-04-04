import React, { FC, useState, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import {
  Box,
  OutlinedInput,
  Typography,
  Select,
  Button,
  Slider,
  MenuItem,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import ForwardIcon from "@mui/icons-material/Forward";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { styled } from "@mui/system";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import {
  IAnthropometric,
  IData,
  IParamsAvatar,
  ISomatotype,
} from "../../../App";
import ResultsTable from "../../dashboard/ResultsTable";
import ModalImg from "./Modal";
import bicepsImg from "../../../image/bicepsImg.jpeg";
import calfImg from "../../../image/calfImg.jpeg";
import BFImg from "../../../image/BFImg.jpeg";
import CustomAvatar, {
  IIndexes,
  ISetters,
  Plane,
} from "../../avatar/CustomAvatar";
import Avatar from "../../avatar/Avatar";
import Stack from "@mui/material/Stack";
import { getSomatotypeType } from "../TestPage";
import SomatotypeGraph from "../../somatotypeGraph/SomatotypeGraph";
import {
  AddPoint,
  calculateSomatotype,
  IPoints,
} from "../../../datas/Calculation";
import {
  beards,
  colorsHair,
  colorsSkin,
  faces,
  hairs,
  hairsFemale,
} from "../../avatar/variablesAvatar/VariableAvatar";
import CircleIcon from "@mui/icons-material/Circle";
import { getSpecificColors } from "../../../datas/Colors";
import axios, { toFormData } from "axios";
import html2canvas from "html2canvas";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import femurVideo from "../../../videos/femur_video.mp4";
import humerusVideo from "../../../videos/humerus_video.mp4";
import humerusPng from "../../../image/humerus.png";
import femurPng from "../../../image/femur.png";

const PrettoSlider = styled(Slider)({
  color: "RGB(108, 77, 123)",
  height: 10,
  width: "80%",
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 15,
    background: "unset",
    padding: 20,
    width: 45,
    height: 45,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "RGB(108, 77, 123)",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const Input = styled(OutlinedInput)({
  marginTop: "50px",
  // input label when focused
  "&.Mui-focused": {
    color: "RGB(108, 77, 123)",
  },
  maxWidth: "110px",
  // focused color for input with variant='standard'
  // "&.MuiInput-underline:after": {
  //   borderBottomColor: "blue",
  // },
  // focused color for input with variant='filled'
  // "&.MuiFilledInput-underline:after": {
  //   borderBottomColor: "yellow",
  // },
  // focused color for input with variant='outlined'
  "&.MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "RGB(108, 77, 123)",
    },
  },
});

const Unity = styled("div")({
  marginLeft: "10px",
  fontWeight: 600,
  fontSize: 20,
  color: "RGB(108, 77, 123)",
});

interface ICircle {
  active: boolean;
}

const Circle = styled("div")<ICircle>((props) => ({
  width: "20px",
  height: "20px",
  cursor: "pointer",
  background: props.active ? "RGB(108, 77, 123)" : "lightgray",
  borderRadius: "50%",
  marginLeft: "5px",
  "&:first-of-type": {
    marginLeft: "0px",
  },
}));

const Circles = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  width: "100%",
  padding: "50px 0 20px 0",
});

interface ITestSteps {
  setData: (data: IData | undefined) => void;
  data: IData;
  isAdding?: boolean;
  idRow?: number;
  idSomatotype?: string;
  setDashboardSnackBarOpen?: (open: boolean) => void;
  setDashboardSnackBarMessage?: (msg: string) => void;
  avatar?: IParamsAvatar;
  setAvatar?: (avatar: IParamsAvatar) => void;
}

const TestSteps: FC<ITestSteps> = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user", "data"]);
  const navigate = useNavigate();
  const xs = useMediaQuery("(max-width:680px)");

  const [datas, setDatas] = useState<IData | undefined>(undefined);

  const [somatotypeTitle, setSomatotypeTitle] = useState("");
  const [somatotypeCode, setSomatotypeCode] = useState("");

  const mesoCode = ["EnM", "BM", "EcM"];
  const ectoCode = ["MEc", "BEc", "EnEc"];
  const endoCode = ["EcEn", "BEn", "MEn"];
  const hybridCode = ["M-Ec", "En-Ec", "M-En"];
  const centralCode = ["C"];

  const [stepAvatar, setStepAvatar] = useState(1);

  const [indexHair, setIndexHair] = useState<number>(0);
  const [indexFace, setIndexFace] = useState<number>(0);
  const [indexBeard, setIndexBeard] = useState<number>(0);
  const [indexColorSkin, setIndexColorSkin] = useState<number>(0);
  const [indexColorHair, setIndexColorHair] = useState<number>(0);

  const [mainColor, setMainColor] = useState(
    !cookies.user ? 0 : cookies.user.mainColor
  );

  const [fetching, setFetching] = useState<boolean>(false);
  const [somatotype, setSomatotype] = useState<ISomatotype | undefined>(
    undefined
  );
  const [anthropometric, setAnthropometric] = useState<
    IAnthropometric | undefined
  >(undefined);

  // for ModalImg
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [warningPredict, setWarningPredict] = useState(false);

  const Question = styled("div")({
    backgroundColor: "RGB(108, 77, 123)",
    fontSize: xs ? "20px" : "24px",
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    padding: "20px 0",
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px 20px 0 0",
  });

  const Next = styled(Button)({
    color: "white",
    borderRadius: "20px",
    padding: "10px 50px",
    backgroundColor: "RGB(108, 77, 123)",
    alignSelf: xs ? "center" : "end",
    width: xs ? "90%" : "auto",
    marginTop: xs ? "20px" : "0",

    "&:hover": {
      backgroundColor: "RGB(108, 77, 123)",
    },
  });

  const Predict = styled(Next)({
    marginTop: "0",
    marginRight: xs ? "0" : "20px",
    backgroundColor: "#1774A3",
  });

  const CircularProgressWithLabel = (props: any) => {
    return (
      <Box
        sx={{
          position: xs ? "relative" : "absolute",
          display: "inline-flex",
          bottom: xs ? "0" : "20px",
          left: xs ? "0" : "20px",
          mt: xs ? 4 : 0,
        }}
      >
        <CircularProgress
          sx={{ color: "RGB(108, 77, 123)" }}
          variant="determinate"
          value={props.value}
          size="4rem"
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
            fontSize={16}
            fontWeight={600}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  };

  interface ISteps {
    label: string;
    question: string;
    unity?: string;
    min?: string;
    max?: string;
    img?: string;
    video?: any;
    poster?: string;
  }

  // if we are logged, we don't allow to change the gender
  const steps: ISteps[] = !cookies.user
    ? [
        {
          label: "age",
          question: "Your age is:",
          unity: "years",
          min: "13",
          max: "120",
        },
        {
          label: "gender",
          question: "Your gender is:",
        },
        {
          label: "height",
          question: "Your height is:",
          unity: "cm",
          min: "120",
          max: "250",
        },
        {
          label: "weight",
          question: "Your weight is:",
          unity: "kg",
          min: "30",
          max: "300",
        },
        {
          label: "bodyFat",
          question: "Your body Fat is:",
          unity: "%",
          min: "2",
          max: "50",
          img: BFImg,
        },
        {
          label: "arm",
          question: "Your arm circumference is:",
          unity: "cm",
          min: "20",
          max: "70",
          img: bicepsImg,
        },
        {
          label: "calf",
          question: "Your calf circumference is:",
          unity: "cm",
          min: "20",
          max: "70",
          img: calfImg,
        },
        {
          label: "femur",
          question: "Your femur breadth is:",
          unity: "cm",
          min: "6",
          max: "12",
          video: femurVideo,
          poster: femurPng,
        },
        {
          label: "humerus",
          question: "Your humerus breadth is:",
          unity: "cm",
          min: "5",
          max: "10",
          video: humerusVideo,
          poster: humerusPng,
        },
      ]
    : [
        {
          label: "age",
          question: "Your age is:",
          unity: "years",
          min: "13",
          max: "120",
        },
        {
          label: "height",
          question: "Your height is:",
          unity: "cm",
          min: "120",
          max: "250",
        },
        {
          label: "weight",
          question: "Your weight is:",
          unity: "kg",
          min: "30",
          max: "300",
        },
        {
          label: "bodyFat",
          question: "Your body Fat is:",
          unity: "%",
          min: "2",
          max: "50",
          img: BFImg,
        },
        {
          label: "arm",
          question: "Your arm circumference is:",
          unity: "cm",
          min: "20",
          max: "70",
          img: bicepsImg,
        },
        {
          label: "calf",
          question: "Your calf circumference is:",
          unity: "cm",
          min: "20",
          max: "70",
          img: calfImg,
        },
        {
          label: "femur",
          question: "Your femur breadth is:",
          unity: "cm",
          min: "6",
          max: "12",
          video: femurVideo,
          poster: femurPng,
        },
        {
          label: "humerus",
          question: "Your humerus breadth is:",
          unity: "cm",
          min: "5",
          max: "10",
          video: humerusVideo,
          poster: humerusPng,
        },
      ];

  const [currentStep, setCurrentStep] = useState<number>(0);
  const stepProgress: number = (100 / steps.length) * (currentStep + 1);

  const boxRef = useRef<HTMLDivElement>(null);
  interface IValues {
    age: string;
    gender: string;
    height: string;
    weight: string;
    bodyFat: string;
    arm: string;
    calf: string;
    femur: string;
    humerus: string;
  }

  const defaultValues: IValues = {
    age: "33",
    gender: "male",
    height: "180",
    weight: "80",
    bodyFat: "20",
    arm: "35",
    calf: "35",
    femur: "8",
    humerus: "7",
  };

  const [values, setValues] = useState<IValues>({ ...defaultValues });

  const handleChange = (value: any) => {
    let valuesTemp: IValues = { ...values };
    (valuesTemp as any)[steps[currentStep].label] = String(value);

    setValues({ ...valuesTemp });
  };

  useEffect(() => {
    if (cookies.user) {
      getUserDatas();
    }
  }, []);

  const getUserDatas = async () => {
    const headers = {
      "Content-Type": "application/json",
      access_key: process.env.REACT_APP_ACCESS_KEY,
      Authorization: `Bearer ${cookies.user.token}`,
    };

    try {
      setFetching(true);
      const response = await axios.get(
        process.env.REACT_APP_GETUSERDATAS_URL!,
        { headers: headers }
      );
      props.isAdding
        ? setAnthropometric((anthropometric) => ({
            height: 180,
            weight: 80,
            supraspinal_skinfold: 12,
            subscapular_skinfold: 12,
            tricep_skinfold: 12,
            femur_breadth: 8,
            humerus_breadth: 7,
            calf_girth: 38,
            bicep_girth: 38,
            body_fat: 20,
          }))
        : setAnthropometric(
            response.data.data.anthropometrics.reverse()[props.idRow!]
          );

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
  const testRef = useRef<any>(null);

  const getFemur = (): number => {
    const toFoot = Number(values.height) * 0.0328084; // convert height cm to Foot Unit
    return (toFoot - 0.9) / 0.60375;
  };

  const getHumerus = (femur: number) => {
    return femur - 2;
  };

  const handleFinish = async () => {
    window.scrollTo(0, boxRef.current?.offsetTop! - 20);

    setFetching(true);

    const BF = Number(values.bodyFat);
    const BD = 1 / ((BF + 450) / 495);

    const getTwoSumSkinfolds = () => {
      if (values.gender === "male") {
        return Math.abs((BD - 1.1043) / (0.001327 + 0.00131));
      } else {
        return Math.abs((BD - 1.0764) / (0.0008 + 0.00088));
      }
    };

    const anthropometrics: IAnthropometric = {
      height: Number(values.height),
      weight: Number(values.weight),
      // femur_breadth: getFemur(),
      // humerus_breadth: getHumerus(getFemur()),
      femur_breadth: Number(values.femur),
      humerus_breadth: Number(values.humerus),
      supraspinal_skinfold: getTwoSumSkinfolds() / 2,
      subscapular_skinfold: getTwoSumSkinfolds() / 2,
      tricep_skinfold: getTwoSumSkinfolds() / 2,
      calf_girth: Number(values.calf),
      bicep_girth: Number(values.arm),
      body_fat: Number(values.bodyFat),
    };

    setAnthropometric((anthropometric) => anthropometrics);

    // somatotype calcule

    // endomorphy
    const threeSumSkinfolds = (getTwoSumSkinfolds() / 2) * 3; // conversion for endomorphy
    const x = threeSumSkinfolds * (170.18 / Number(anthropometrics.height)); // endomorph variable
    const endo =
      -0.7182 +
      0.1451 * x -
      0.00068 * Math.pow(x, 2) +
      0.0000014 * Math.pow(x, 3);

    // mesomorphy
    const meso =
      0.858 * anthropometrics.humerus_breadth! +
      0.601 * anthropometrics.femur_breadth! +
      0.188 * anthropometrics.bicep_girth! +
      0.161 * anthropometrics.calf_girth! -
      0.131 * anthropometrics.height! +
      4.5;

    // ectomorphy
    const heightWeightRatio =
      anthropometrics.height! / Math.cbrt(anthropometrics.weight!);
    let ecto;
    if (heightWeightRatio >= 40.75) {
      ecto = 0.732 * heightWeightRatio - 28.58;
    } else if (heightWeightRatio < 40.75 && heightWeightRatio > 38.25) {
      ecto = 0.463 * heightWeightRatio - 17.63;
    } else {
      ecto = 0.1;
    }

    let somatotype: ISomatotype = {
      endomorphy: endo,
      mesomorphy: meso,
      ectomorphy: ecto,
    };

    const type: string = getSomatotypeType(
      somatotype.endomorphy,
      somatotype!.mesomorphy,
      somatotype!.ectomorphy
    );

    const typeTitle = type.split(/\(|\)/)[0];
    const typeCode = type.split(/\(|\)/)[1];

    setSomatotypeTitle(typeTitle);
    setSomatotypeCode(typeCode);

    somatotype = {
      ...somatotype,
      titleSomatotype: typeTitle,
      codeSomatotype: typeCode,
    };

    const data: IData = {
      anthropometric: anthropometrics,
      somatotype: somatotype,
    };

    if (cookies.user && props.avatar !== undefined) {
      data.avatar = {
        ...props.avatar,
        titleSoma: typeTitle,
        codeSoma: typeCode,
      };
      saveResults(data);
    } else {
      setDatas(data);
    }
  };

  const saveResults = async (data: IData) => {
    let url: string;
    props.isAdding
      ? (url = process.env.REACT_APP_SAVEDATA_URL!)
      : (url = `${process.env.REACT_APP_EDITSOMATOTYPE_URL}`!);

    const headers = {
      "Content-Type": "application/json",
      access_key: process.env.REACT_APP_ACCESS_KEY,
      Authorization: `Bearer ${cookies.user.token}`,
    };

    try {
      setFetching(true);

      const response = await axios.post(
        url,
        { data, id: props.idSomatotype },
        { headers: headers }
      );

      let newAvatar = props.avatar ? { ...props.avatar } : { ...data.avatar };

      newAvatar.codeSoma = data.avatar?.codeSoma;

      (props.isAdding || props.idRow === 0) &&
        props.setAvatar!({ ...newAvatar });

      navigate("/");
      window.scrollTo(0, 0);
      props.setDashboardSnackBarOpen!(true);
      props.isAdding
        ? props.setDashboardSnackBarMessage!("New Somatotype saved !")
        : props.setDashboardSnackBarMessage!("Somatotype changes saved !");

      setFetching(false);
      getUserDatas();
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

  const getColorCode = () => {
    let colorHex = { light: "", dark: "" };

    if (mesoCode.includes(somatotypeCode)) {
      colorHex.light = "#E7CACA";
      colorHex.dark = "#B76060";
    } else if (endoCode.includes(somatotypeCode)) {
      colorHex.light = "#DCD0E2";
      colorHex.dark = "#6C4D7B";
    } else if (ectoCode.includes(somatotypeCode)) {
      colorHex.light = "#F2E2BF";
      colorHex.dark = "#DCB051";
    } else if (hybridCode.includes(somatotypeCode)) {
      colorHex.light = "#D5E8DD";
      colorHex.dark = "#56A278";
    } else if (centralCode.includes(somatotypeCode)) {
      colorHex.light = "#A0CBDA";
      colorHex.dark = "#1874A3";
    }

    return colorHex;
  };

  interface IInputSelect {
    label: string;
  }

  const bodyFatPercent: string[] = [
    "5-10",
    "10-15",
    "15-20",
    "20-25",
    "25-30",
    ">30",
  ];
  const InputSelect: FC<IInputSelect> = (props) => {
    return (
      <Select
        onChange={(event: any) => {
          handleChange(event.target.value);
        }}
        sx={{
          width: "110px",
          marginTop: "30px",
          color: "RGB(108, 77, 123)",
          "&.MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "RGB(108, 77, 123)",
            },
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={(values as any)[props.label]}
      >
        {props.label === "gender" && <MenuItem value={"male"}>Male</MenuItem>}
        {props.label === "gender" && (
          <MenuItem value={"female"}>Female</MenuItem>
        )}
        {bodyFatPercent.map(
          (item, index) =>
            props.label === "bodyFat" && (
              <MenuItem value={item}>{item}</MenuItem>
            )
        )}
      </Select>
    );
  };

  const md = useMediaQuery("(max-width:980px)");

  const AvatarStep1: FC = () => {
    const indexes: IIndexes = {
      indexHair: indexHair,
      indexBeard: indexBeard,
      indexFace: indexFace,
      indexColorHair: indexColorHair,
      indexColorSkin: indexColorSkin,
    };

    const setters: ISetters = {
      setIndexHair: setIndexHair,
      setIndexBeard: setIndexBeard,
      setIndexFace: setIndexFace,
      setIndexColorHair: setIndexColorHair,
      setIndexColorSkin: setIndexColorSkin,
    };

    return (
      <Box>
        <Box sx={{ backgroundColor: "#F6F6F7" }}>
          <Typography
            variant="h4"
            py={2}
            sx={{
              textAlign: "center",
              color: "#606161",
              fontWeight: "500",
            }}
          >
            Your somatotype is:
          </Typography>
          <CustomAvatar
            typeCode={somatotypeCode}
            gender={!cookies.user ? values.gender : cookies.user.gender}
            indexes={indexes}
            setters={setters}
          />
        </Box>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          py={1}
          sx={{
            fontWeight: "bold",
            fontSize: "30px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <span>
            {datas!.somatotype?.endomorphy?.toFixed() === "0" ||
            Number(datas!.somatotype?.endomorphy) < 0
              ? "1"
              : datas!.somatotype?.endomorphy?.toFixed()}
          </span>
          <span>-</span>
          <span>
            {datas!.somatotype?.mesomorphy?.toFixed() === "0" ||
            Number(datas!.somatotype?.mesomorphy) < 0
              ? "1"
              : datas!.somatotype?.mesomorphy?.toFixed()}
          </span>
          <span>-</span>
          <span>
            {datas!.somatotype?.ectomorphy?.toFixed() === "0" ||
            Number(datas!.somatotype?.ectomorphy) < 0
              ? "1"
              : datas!.somatotype?.ectomorphy?.toFixed()}
          </span>
        </Stack>
        <Box py={2}>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: "bold",
              textAlign: "center",
              color: "black",
            }}
          >
            {somatotypeTitle}
          </Typography>
          <Typography
            mt={2}
            sx={{
              fontSize: "28px",
              fontWeight: "bold",
              textAlign: "center",
              color: "#4a4a4a",
            }}
          >
            {somatotypeCode}
          </Typography>
        </Box>
      </Box>
    );
  };

  const AvatarStep2: FC = () => {
    const point: IPoints = AddPoint(
      datas!.somatotype?.endomorphy!,
      datas!.somatotype?.mesomorphy!,
      datas!.somatotype?.ectomorphy!,
      "#6C4D7B"
    );

    let points: IPoints[] = [];
    points.push(point);

    return (
      <Box>
        <Typography
          variant="h4"
          py={2}
          sx={{
            textAlign: "center",
            color: "#606161",
            fontWeight: "500",
          }}
        >
          Your Results:
        </Typography>
        <Box
          m={2}
          p={2}
          borderRadius="20px"
          sx={{ backgroundColor: "#F6F6F7" }}
        >
          <Box>
            <SomatotypeGraph graphColor={"#5c5c5c"} pointsArray={points} />
          </Box>
        </Box>
      </Box>
    );
  };

  const AvatarStep3: FC = () => {
    const pickColors = ["#6C4D7B", "#4298B4", "#B78260", "#56A278", "#B76060"];

    return (
      <Box>
        <Box
          sx={{
            backgroundColor: getSpecificColors(mainColor).clearColor,
            position: "relative",
            zIndex: 0,
          }}
        >
          <Typography
            variant="h4"
            py={2}
            sx={{
              textAlign: "center",
              color: "#606161",
              fontWeight: "500",
            }}
          >
            Your Avatar:
          </Typography>

          <Avatar
            testRef={testRef}
            typeSoma={somatotypeCode}
            hair={
              !cookies.user
                ? values.gender === "male"
                  ? hairs[indexHair]
                  : hairsFemale[indexHair]
                : cookies.user.gender === "male"
                ? hairs[indexHair]
                : hairsFemale[indexHair]
            }
            face={faces[indexFace]}
            beard={beards[indexBeard]}
            gender={!cookies.user ? values.gender : cookies.user.gender}
            colorsSkin={colorsSkin[indexColorSkin]}
            colorsHair={colorsHair[indexColorHair]}
            cloth={true}
            mainColor={mainColor}
          />

          <Plane />
        </Box>

        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          py={1}
          sx={{
            fontWeight: "bold",
            fontSize: "30px",
            backgroundColor: getSpecificColors(mainColor).darkColor,
            color: "white",
          }}
        >
          <span>
            {datas!.somatotype?.endomorphy?.toFixed() === "0" ||
            Number(datas!.somatotype?.endomorphy) < 0
              ? "1"
              : datas!.somatotype?.endomorphy?.toFixed()}
          </span>
          <span>-</span>
          <span>
            {datas!.somatotype?.mesomorphy?.toFixed() === "0" ||
            Number(datas!.somatotype?.mesomorphy) < 0
              ? "1"
              : datas!.somatotype?.mesomorphy?.toFixed()}
          </span>
          <span>-</span>
          <span>
            {datas!.somatotype?.ectomorphy?.toFixed() === "0" ||
            Number(datas!.somatotype?.ectomorphy) < 0
              ? "1"
              : datas!.somatotype?.ectomorphy?.toFixed()}
          </span>
        </Stack>
        {!cookies.user && (
          <Box>
            <Typography
              variant="h5"
              textAlign="center"
              fontWeight="bold"
              mt={2}
            >
              Color Picker
            </Typography>
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
              spacing={2}
              mt={2}
            >
              {pickColors.map((item, index) => (
                <IconButton
                  key={index}
                  sx={{ padding: 0 }}
                  onClick={() => {
                    setMainColor(index);
                  }}
                >
                  <CircleIcon
                    sx={{
                      color: getSpecificColors(index).normalColor,
                      fontSize: "50px",
                      cursor: "pointer",
                      "&:hover": {
                        opacity: 0.5,
                      },
                    }}
                  />
                </IconButton>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    );
  };

  const createExportImageAvatar = async () => {
    const element: HTMLDivElement = testRef.current;
    const canvas = await html2canvas(element, { backgroundColor: null });

    const data = canvas.toDataURL("image/png");

    return data;
  };

  const createExportImageLogo = async () => {
    const element: HTMLDivElement = testRef.current;
    const canvas = await html2canvas(element, { backgroundColor: null });

    const data = canvas.toDataURL("image/png");

    return data;
  };

  const handleSave = async () => {
    const data: IData = { ...datas };

    data.user = { gender: values.gender, mainColor: mainColor };
    data.svgAvatar = await createExportImageAvatar();

    // data.logo = createExportImageLogo();

    data.avatar = {
      indexHair,
      indexColorHair,
      indexBeard,
      indexColorSkin,
      indexFace,
      titleSoma: somatotypeTitle,
      codeSoma: somatotypeCode,
    };

    props.setData(data);
    if (!cookies.user) {
      navigate("/signup");
    } else {
      saveResults(data);
    }
  };

  return (
    <Box
      sx={{
        marginTop: md ? "100px" : "220px",
      }}
    >
      {/* if datas has somatotypes then we show the second step (steps of avatar svg) else we show the first step (questions's steps) */}
      {datas ? (
        <Box
          boxShadow="3"
          sx={{
            margin: "0 auto 100px auto",
            maxWidth: "600px",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {stepAvatar === 1 && <AvatarStep1 />}
          {stepAvatar === 2 && <AvatarStep2 />}
          {stepAvatar === 3 && <AvatarStep3 />}
          <Stack
            mb={2}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: xs ? "column" : "row",
              padding: xs ? "20px 0" : "20px 20px 0 0",
            }}
          >
            <Next
              onClick={() => {
                stepAvatar < 3 ? setStepAvatar((s) => s + 1) : handleSave();
              }}
            >
              {stepAvatar < 3 ? "Next" : "Save"}
              <ForwardIcon
                sx={{
                  marginLeft: "10px",
                }}
              />
            </Next>
          </Stack>
        </Box>
      ) : (
        <Box
          ref={boxRef}
          sx={{
            padding: "0 0 20px 0",
            margin: "100px auto",
            borderRadius: "20px",
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
          maxWidth="700px"
        >
          <Question>
            {steps[currentStep].question}
            {(steps[currentStep].label === "arm" ||
              steps[currentStep].label === "calf" ||
              steps[currentStep].label === "bodyFat" ||
              steps[currentStep].label === "femur" ||
              steps[currentStep].label === "humerus") && (
              <QuestionMarkIcon
                onClick={handleOpen}
                sx={{
                  position: xs ? "relative" : "absolute",
                  right: xs ? "0" : "20px",
                  marginLeft: xs ? "10px" : "unset",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
              />
            )}
          </Question>

          <ModalImg
            open={open}
            handleClose={handleClose}
            img={steps[currentStep].img!}
            video={steps[currentStep].video!}
            poster={steps[currentStep].poster!}
          />

          {steps.map(
            (item, index) =>
              index === currentStep && (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "50px",
                  }}
                >
                  {item.label !== "gender" ? (
                    <PrettoSlider
                      sx={{ marginTop: "20px" }}
                      valueLabelDisplay="on"
                      aria-label="pretto slider"
                      defaultValue={Number((defaultValues as any)[item.label])}
                      value={Number((values as any)[item.label])}
                      min={Number(item.min)}
                      max={Number(item.max)}
                      // Checking  if the current item requires decimal step
                      step={
                        [
                          "height",
                          "weight",
                          "femur",
                          "humerus",
                          "calf",
                          "arm",
                        ].includes(item.label)
                          ? 0.1
                          : 1
                      }
                      onChange={(event: any) => {
                        handleChange(event.target.value);
                      }}
                    />
                  ) : (
                    <InputSelect label={item.label} />
                  )}
                  <Unity>{item.unity}</Unity>
                </Box>
              )
          )}

          {warningPredict && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#1774A3",
                paddingTop: "20px",

                svg: {
                  marginRight: "10px",
                  fontSize: "35px",
                },
              }}
            >
              <WarningAmberIcon />
              Predictions will be less accurate.
            </Box>
          )}

          <Circles>
            {steps.map((item, index) => (
              <Circle
                key={index}
                active={index === currentStep}
                onClick={() => {
                  warningPredict && setWarningPredict(false);
                  setCurrentStep(index);
                }}
              />
            ))}
          </Circles>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: xs ? "column" : "row",
              padding: xs ? "20px 0" : "20px 20px 0 0",
            }}
          >
            {(steps[currentStep].label === "femur" ||
              steps[currentStep].label === "humerus") && (
              <Predict
                onClick={() => {
                  let value =
                    steps[currentStep].label === "femur"
                      ? String(getFemur().toFixed())
                      : String(getHumerus(getFemur()).toFixed());

                  handleChange(value);
                  setWarningPredict(true);
                }}
              >
                Predict
              </Predict>
            )}
            <Next
              onClick={() => {
                warningPredict && setWarningPredict(false);
                currentStep < steps.length - 1 && setCurrentStep((c) => c + 1);

                currentStep === steps.length - 1 && handleFinish();
              }}
              disabled={fetching}
            >
              {currentStep === steps.length - 1 ? "Finish" : "Next"}
              {currentStep < steps.length - 1 && (
                <ForwardIcon
                  sx={{
                    marginLeft: "10px",
                  }}
                />
              )}
            </Next>
          </Box>

          <CircularProgressWithLabel value={stepProgress} />
        </Box>
      )}
    </Box>
  );
};

export default TestSteps;
