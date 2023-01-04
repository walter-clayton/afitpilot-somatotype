import {
  Box,
  Stack,
  styled,
  SxProps,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { FC, useState } from "react";
import Avatar from "./Avatar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Plane = styled(Box)({
  position: "absolute",
  zIndex: -1,
  bottom: 0,
  left: 0,
  background: "white",
  width: "100%",
  height: "100px",
  clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
});

const stylesStack: SxProps = {
  p: 2,
  borderRadius: 2,
  border: 1,
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "transparent",
  color: "black",
};

export interface IColorSkin {
  light: string;
  medium: string;
  strong: string;
}

export interface IColorHair {
  light: string;
  medium: string;
}

const colorsSkin: IColorSkin[] = [
  { light: "#FDE9D9", medium: "#FCE3CF", strong: "#FBD5B7" },
  { light: "#EBCEB8", medium: "#E5C0A4", strong: "#DFB18E" },
  { light: "#C89D84", medium: "#C08F72", strong: "#B98262" },
  { light: "#9D6B5A", medium: "#906253", strong: "#81584A" },
  { light: "#865D55", medium: "#76524B", strong: "#664741" },
];

const colorsHair: IColorHair[] = [
  { light: "#565656", medium: "#4D4D4D" },
  { light: "#DBBEA6", medium: "#DEBE99" },
  { light: "#AA8C66", medium: "#AA8866" },
  { light: "#909090", medium: "#808080" },
];

const hairs: string[] = [
  "none",
  "short",
  "medium",
  "medium2",
  "large",
  "large2",
];

const faces: string[] = ["smiling", "neutral", "angry", "sad"];

const beards: string[] = ["none", "short", "medium", "large"];

interface ICustomAvatar {
  typeCode: string;
}

const CustomAvatar: FC<ICustomAvatar> = (props) => {
  const [indexHair, setIndexHair] = useState<number>(0);
  const [indexFace, setIndexFace] = useState<number>(0);
  const [indexBeard, setIndexBeard] = useState<number>(0);
  const [indexColorSkin, setIndexColorSkin] = useState<number>(0);
  const [indexColorHair, setIndexColorHair] = useState<number>(0);

  const typeSoma: string = props.typeCode;
  const gender: string = "male";

  const xs = useMediaQuery("(max-width: 580px)");

  const handleColorHairClick = (direction: string): void => {
    if (direction === "back") {
      indexColorHair === 0
        ? setIndexColorHair((i) => colorsHair.length - 1)
        : setIndexColorHair((i) => i - 1);
    } else {
      indexColorHair === colorsHair.length - 1
        ? setIndexColorHair((i) => 0)
        : setIndexColorHair((i) => i + 1);
    }
  };

  const handleColorSkinClick = (direction: string): void => {
    if (direction === "back") {
      indexColorSkin === 0
        ? setIndexColorSkin((i) => colorsSkin.length - 1)
        : setIndexColorSkin((i) => i - 1);
    } else {
      indexColorSkin === colorsSkin.length - 1
        ? setIndexColorSkin((i) => 0)
        : setIndexColorSkin((i) => i + 1);
    }
  };

  const handleHairClick = (direction: string): void => {
    if (direction === "back") {
      indexHair === 0
        ? setIndexHair((i) => hairs.length - 1)
        : setIndexHair((i) => i - 1);
    } else {
      indexHair === hairs.length - 1
        ? setIndexHair((i) => 0)
        : setIndexHair((i) => i + 1);
    }
  };

  const handleFaceClick = (direction: string): void => {
    if (direction === "back") {
      indexFace === 0
        ? setIndexFace((i) => faces.length - 1)
        : setIndexFace((i) => i - 1);
    } else {
      indexFace === faces.length - 1
        ? setIndexFace((i) => 0)
        : setIndexFace((i) => i + 1);
    }
  };

  const handleBeardClick = (direction: string): void => {
    if (direction === "back") {
      indexBeard === 0
        ? setIndexBeard((i) => beards.length - 1)
        : setIndexBeard((i) => i - 1);
    } else {
      indexBeard === beards.length - 1
        ? setIndexBeard((i) => 0)
        : setIndexBeard((i) => i + 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: xs ? "column-reverse" : "row",
        justifyContent: "center",
        alignItems: xs ? "center" : "start",
        position: "relative",
        zIndex: 0,
        pt: 4,
      }}
    >
      <Plane />

      <Avatar
        typeSoma={typeSoma}
        hair={hairs[indexHair]}
        face={faces[indexFace]}
        beard={beards[indexBeard]}
        gender={gender}
        colorsSkin={colorsSkin[indexColorSkin]}
        colorsHair={colorsHair[indexColorHair]}
      />

      <Stack
        direction="column"
        spacing={2}
        px={2}
        width={xs ? "100%" : "280px"}
      >
        <Stack direction="row" spacing={2} sx={stylesStack}>
          <ArrowBackIosNewIcon
            sx={{ cursor: "pointer", fontSize: xs ? "20px" : "30px" }}
            onClick={() => {
              handleColorSkinClick("back");
            }}
          />
          <Typography variant={xs ? "body1" : "h5"} sx={{ fontWeight: "bold" }}>
            Color Skin
          </Typography>
          <ArrowForwardIosIcon
            sx={{ cursor: "pointer", fontSize: xs ? "20px" : "30px" }}
            onClick={() => {
              handleColorSkinClick("next");
            }}
          />
        </Stack>
        <Stack direction="row" spacing={2} sx={stylesStack}>
          <ArrowBackIosNewIcon
            sx={{ cursor: "pointer", fontSize: xs ? "20px" : "30px" }}
            onClick={() => {
              handleHairClick("back");
            }}
          />
          <Typography variant={xs ? "body1" : "h5"} sx={{ fontWeight: "bold" }}>
            Hair
          </Typography>
          <ArrowForwardIosIcon
            sx={{ cursor: "pointer", fontSize: xs ? "20px" : "30px" }}
            onClick={() => {
              handleHairClick("next");
            }}
          />
        </Stack>
        <Stack direction="row" spacing={2} sx={stylesStack}>
          <ArrowBackIosNewIcon
            sx={{ cursor: "pointer", fontSize: xs ? "20px" : "30px" }}
            onClick={() => {
              handleColorHairClick("back");
            }}
          />
          <Typography variant={xs ? "body1" : "h5"} sx={{ fontWeight: "bold" }}>
            Color Hair
          </Typography>
          <ArrowForwardIosIcon
            sx={{ cursor: "pointer", fontSize: xs ? "20px" : "30px" }}
            onClick={() => {
              handleColorHairClick("next");
            }}
          />
        </Stack>
        <Stack direction="row" spacing={2} sx={stylesStack}>
          <ArrowBackIosNewIcon
            sx={{ cursor: "pointer", fontSize: xs ? "20px" : "30px" }}
            onClick={() => {
              handleFaceClick("back");
            }}
          />
          <Typography variant={xs ? "body1" : "h5"} sx={{ fontWeight: "bold" }}>
            Face
          </Typography>
          <ArrowForwardIosIcon
            sx={{ cursor: "pointer", fontSize: xs ? "20px" : "30px" }}
            onClick={() => {
              handleFaceClick("next");
            }}
          />
        </Stack>
        <Stack direction="row" spacing={2} sx={stylesStack}>
          <ArrowBackIosNewIcon
            sx={{ cursor: "pointer", fontSize: xs ? "20px" : "30px" }}
            onClick={() => {
              handleBeardClick("back");
            }}
          />
          <Typography variant={xs ? "body1" : "h5"} sx={{ fontWeight: "bold" }}>
            Beard
          </Typography>
          <ArrowForwardIosIcon
            sx={{ cursor: "pointer", fontSize: xs ? "20px" : "30px" }}
            onClick={() => {
              handleBeardClick("next");
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CustomAvatar;
