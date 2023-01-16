import { Box } from "@mui/material";
import React, { FC } from "react";
import { IColors } from "../../datas/Colors";
import { getClothFemale } from "./clothes/female/ClothesFemale";
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
  testRef?: any;
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
  const code = props.typeSoma;

  const skinBody: React.ReactNode = getSkin(
    // props.typeSoma,
    props.gender,
    code,
    props.colorsSkin,
    props.cloth
  ) as React.ReactNode;

  const head: React.ReactNode = getHead(
    props.gender,
    code,
    props.hair,
    props.beard,
    props.face,
    props.colorsSkin,
    props.colorsHair
  ) as React.ReactNode;

  const cloth: React.ReactNode = (
    props.cloth ? (
      props.gender === "male" ? (
        (getClothMale(props.mainColor!) as any)[code]
      ) : (
        (getClothFemale(props.mainColor!) as any)[code]
      )
    ) : (
      <g></g>
    )
  ) as React.ReactNode;

  return (
    <Box
      ref={props.testRef}
      sx={{
        maxWidth: "250px",
        width: "100%",
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
        viewBox={props.gender === "male" ? "0 0 140 351" : "0 0 144 342"}
      >
        <g id="body">{skinBody}</g>

        <g id="cloth">{cloth}</g>
        <g id="head-container">{head}</g>
      </svg>
    </Box>
  );
};

export default Avatar;
