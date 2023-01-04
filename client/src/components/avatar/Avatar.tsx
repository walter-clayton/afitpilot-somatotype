import { Box } from "@mui/material";
import React, { FC } from "react";
import { IColorHair, IColorSkin } from "./CustomAvatar";
import { getHeadMale } from "./head/males/HeadMale";
import { getMaleSkin } from "./skins/males/SkinsMales";

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
}

const Avatar: FC<IAvatar> = (props) => {
  const skinBody: React.ReactNode = getMaleSkin(
    props.typeSoma,
    props.colorsSkin
  ) as React.ReactNode;

  const head: React.ReactNode = getHeadMale(
    props.hair,
    props.beard,
    props.face,
    props.colorsSkin,
    props.colorsHair
  ) as React.ReactNode;

  return (
    <Box
      sx={{
        maxWidth: "250px",
        width: "100%",
        px: 2,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 140 351"
      >
        <g id="body" transform="translate(-104.838 .675)">
          {skinBody}
        </g>
        <g id="head-container" transform="translate(22.558 .675)">
          {head}
        </g>
        {/* {skinn}
    <g id="hair" transform="matrix(1.03247,0,0,1,-6.73595,0)">
      {hairr}
    </g> */}
      </svg>
    </Box>
  );
};

export default Avatar;
