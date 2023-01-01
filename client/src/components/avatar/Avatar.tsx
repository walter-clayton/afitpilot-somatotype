import React, { FC } from "react";
import { getMaleHair } from "./hairs/males/HairsMales";
import { getMaleSkin } from "./skins/males/SkinsMales";

export interface ITypesSkin {
  BM: React.SVGProps<SVGGElement>;
}

const Avatar: FC = () => {
  const skin: string = "BM";
  const skinn: React.ReactNode = getMaleSkin(skin) as React.ReactNode;
  const hair: string = "large";
  const hairr: React.ReactNode = getMaleHair(skin, hair) as React.ReactNode;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 351 351"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
    >
      {skinn}
      <g id="hair" transform="matrix(1.03247,0,0,1,-6.73595,0)">
        {hairr}
      </g>
    </svg>
  );
};

export default Avatar;
