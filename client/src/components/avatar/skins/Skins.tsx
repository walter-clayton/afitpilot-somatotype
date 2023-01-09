import { ITypesSkin } from "../Avatar";
import { IColorSkin } from "../variablesAvatar/VariableAvatar";
import { getBMSkinFem } from "./females/MesomorphsFem";
import { getCSkin } from "./males/Central";
import { getBEcSkin, getEnEcSkin, getMEcSkin } from "./males/Ectomorphs";
import { getBEnSkin, getEcEnSkin, getMEnSkin } from "./males/Endomorphs";
import {
  getHybridEnEcSkin,
  getHybridMEcSkin,
  getHybridMEnSkin,
} from "./males/Hybrid";
import { getBMSkin, getEcMSkin, getEnMSkin } from "./males/Mesomorphs";

export const getSkin = (
  gender: string,
  skin: string,
  colorsSkin: IColorSkin
): React.SVGProps<SVGGElement> => {
  const skins: ITypesSkin = {
    BM: gender === "male" ? getBMSkin(colorsSkin) : getBMSkinFem(colorsSkin),
    EnM: getEnMSkin(colorsSkin),
    EcM: getEcMSkin(colorsSkin),
    MEc: getMEcSkin(colorsSkin),
    BEc: getBEcSkin(colorsSkin),
    EnEc: getEnEcSkin(colorsSkin),
    EcEn: getEcEnSkin(colorsSkin),
    BEn: getBEnSkin(colorsSkin),
    MEn: getMEnSkin(colorsSkin),
    "M-Ec": getHybridMEcSkin(colorsSkin),
    "En-Ec": getHybridEnEcSkin(colorsSkin),
    "M-En": getHybridMEnSkin(colorsSkin),
    C: getCSkin(colorsSkin),
  };

  return (skins as any)[skin];
};
