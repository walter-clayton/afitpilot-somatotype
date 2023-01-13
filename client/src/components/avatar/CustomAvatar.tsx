import {
  Box,
  Stack,
  styled,
  SxProps,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { FC, useState, useEffect } from "react";
import Avatar from "./Avatar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  beards,
  colorsHair,
  colorsSkin,
  faces,
  hairs,
  hairsFemale,
} from "./variablesAvatar/VariableAvatar";

export const Plane = styled(Box)({
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

export interface IIndexes {
  indexHair: number;
  indexFace: number;
  indexBeard: number;
  indexColorSkin: number;
  indexColorHair: number;
}

export interface ISetters {
  setIndexHair: (i: number) => void;
  setIndexFace: (i: number) => void;
  setIndexBeard: (i: number) => void;
  setIndexColorSkin: (i: number) => void;
  setIndexColorHair: (i: number) => void;
}
interface ICustomAvatar {
  typeCode: string;
  gender: string;
  indexes: IIndexes;
  setters: ISetters;
  clothes?: boolean;
  mainColor?: number;
  setHasChanges?: (hasChanges: boolean) => void;
}

const CustomAvatar: FC<ICustomAvatar> = (props) => {
  const typeSoma: string = props.typeCode;
  const gender: string = props.gender;

  const xs = useMediaQuery("(max-width: 580px)");

  const handleColorHairClick = (direction: string): void => {
    if (props.setHasChanges !== undefined) {
      props.setHasChanges!(true);
    }
    if (direction === "back") {
      props.indexes.indexColorHair === 0
        ? props.setters.setIndexColorHair(colorsHair.length - 1)
        : props.setters.setIndexColorHair(props.indexes.indexColorHair - 1);
    } else {
      props.indexes.indexColorHair === colorsHair.length - 1
        ? props.setters.setIndexColorHair(0)
        : props.setters.setIndexColorHair(props.indexes.indexColorHair + 1);
    }
  };

  const handleColorSkinClick = (direction: string): void => {
    if (props.setHasChanges !== undefined) {
      props.setHasChanges!(true);
    }
    if (direction === "back") {
      props.indexes.indexColorSkin === 0
        ? props.setters.setIndexColorSkin(colorsSkin.length - 1)
        : props.setters.setIndexColorSkin(props.indexes.indexColorSkin - 1);
    } else {
      props.indexes.indexColorSkin === colorsSkin.length - 1
        ? props.setters.setIndexColorSkin(0)
        : props.setters.setIndexColorSkin(props.indexes.indexColorSkin + 1);
    }
  };

  const handleHairClick = (direction: string): void => {
    if (props.setHasChanges !== undefined) {
      props.setHasChanges!(true);
    }
    if (direction === "back") {
      props.indexes.indexHair === 0
        ? props.setters.setIndexHair(
            gender === "male" ? hairs.length - 1 : hairsFemale.length - 1
          )
        : props.setters.setIndexHair(props.indexes.indexHair - 1);
    } else {
      props.indexes.indexHair ===
      (gender === "male" ? hairs.length - 1 : hairsFemale.length - 1)
        ? props.setters.setIndexHair(0)
        : props.setters.setIndexHair(props.indexes.indexHair + 1);
    }
  };

  const handleFaceClick = (direction: string): void => {
    if (props.setHasChanges !== undefined) {
      props.setHasChanges!(true);
    }
    if (direction === "back") {
      props.indexes.indexFace === 0
        ? props.setters.setIndexFace(faces.length - 1)
        : props.setters.setIndexFace(props.indexes.indexFace - 1);
    } else {
      props.indexes.indexFace === faces.length - 1
        ? props.setters.setIndexFace(0)
        : props.setters.setIndexFace(props.indexes.indexFace + 1);
    }
  };

  const handleBeardClick = (direction: string): void => {
    if (props.setHasChanges !== undefined) {
      props.setHasChanges!(true);
    }
    if (direction === "back") {
      props.indexes.indexBeard === 0
        ? props.setters.setIndexBeard(props.indexes.indexBeard - 1)
        : props.setters.setIndexBeard(props.indexes.indexBeard - 1);
    } else {
      props.indexes.indexBeard === beards.length - 1
        ? props.setters.setIndexBeard(0)
        : props.setters.setIndexBeard(props.indexes.indexBeard + 1);
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
      width={"100%"}
    >
      <Plane />

      <Avatar
        typeSoma={typeSoma}
        hair={
          gender === "male"
            ? hairs[props.indexes.indexHair]
            : hairsFemale[props.indexes.indexHair]
        }
        face={faces[props.indexes.indexFace]}
        beard={beards[props.indexes.indexBeard]}
        gender={gender}
        colorsSkin={colorsSkin[props.indexes.indexColorSkin]}
        colorsHair={colorsHair[props.indexes.indexColorHair]}
        cloth={props.clothes!}
        mainColor={props.mainColor!}
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
        {gender === "male" && (
          <Stack direction="row" spacing={2} sx={stylesStack}>
            <ArrowBackIosNewIcon
              sx={{ cursor: "pointer", fontSize: xs ? "20px" : "30px" }}
              onClick={() => {
                handleBeardClick("back");
              }}
            />
            <Typography
              variant={xs ? "body1" : "h5"}
              sx={{ fontWeight: "bold" }}
            >
              Beard
            </Typography>
            <ArrowForwardIosIcon
              sx={{ cursor: "pointer", fontSize: xs ? "20px" : "30px" }}
              onClick={() => {
                handleBeardClick("next");
              }}
            />
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default CustomAvatar;
