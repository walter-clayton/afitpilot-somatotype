import { Box } from "@mui/material";
import React, { FC } from "react";
import { IColors } from "../Colors";
import { getClothMale } from "./clothes/male/ClothesMale";
import { Plane } from "./CustomAvatar";
import { getHead } from "./head/Head";
import { getSkin } from "./skins/Skins";
import { IColorHair, IColorSkin } from "./variablesAvatar/VariableAvatar";

export interface ITypesSkin {
  BM: React.SVGProps<SVGGElement>;
  EnM: React.SVGProps<SVGGElement>;
  EcM: React.SVGProps<SVGGElement>;
  MEc: React.SVGProps<SVGGElement>;
  BEc: React.SVGProps<SVGGElement>;
  EnEc: React.SVGProps<SVGGElement>;
  EcEn: React.SVGProps<SVGGElement>;
  BEn: React.SVGProps<SVGGElement>;
  MEn: React.SVGProps<SVGGElement>;
  "M-Ec": React.SVGProps<SVGGElement>;
  "En-Ec": React.SVGProps<SVGGElement>;
  "M-En": React.SVGProps<SVGGElement>;
  C: React.SVGProps<SVGGElement>;
}

interface IAvatar {
  typeSoma: string;
  hair: string;
  face: string;
  beard: string;
  gender: string;
  colorsSkin: IColorSkin;
  colorsHair: IColorHair;
  cloth: boolean;
  mainColor?: number;
}

const Avatar: FC<IAvatar> = (props) => {
  // const code = props.typeSoma;
  const code = "BM";
  const gen: string = "female";

  const skinBody: React.ReactNode = getSkin(
    // props.typeSoma,
    gen,
    code,
    props.colorsSkin
  ) as React.ReactNode;

  const head: React.ReactNode = getHead(
    code,
    props.hair,
    props.beard,
    props.face,
    props.colorsSkin,
    props.colorsHair
  ) as React.ReactNode;

  const cloth: React.ReactNode = (
    props.cloth ? (getClothMale(props.mainColor!) as any)[code] : <g></g>
  ) as React.ReactNode;

  return (
    <Box
      sx={{
        maxWidth: "250px",
        width: "70%",
        px: 2,
        margin: "0 auto",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox={gen === "male" ? "0 0 140 351" : "0 0 144 342"}
      >
        <g id="body">{skinBody}</g>

        <g id="cloth">{cloth}</g>
        <g id="head-container">{head}</g>
      </svg>
    </Box>
  );
};

export default Avatar;
