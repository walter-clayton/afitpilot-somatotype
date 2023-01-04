import { ITypesSkin } from "../../Avatar";
import { IColorSkin } from "../../CustomAvatar";
import { getCSkin } from "./Central";
import { getBEcSkin, getEnEcSkin, getMEcSkin } from "./Ectomorphs";
import { getBEnSkin, getEcEnSkin, getMEnSkin } from "./Endomorphs";
import {
  getHybridEnEcSkin,
  getHybridMEcSkin,
  getHybridMEnSkin,
} from "./Hybrid";
import { getBMSkin, getEcMSkin, getEnMSkin } from "./Mesomorphs";

export const getMaleSkin = (
  skin: string,
  colorsSkin: IColorSkin
): React.SVGProps<SVGGElement> => {
  const skins: ITypesSkin = {
    BM: getBMSkin(colorsSkin),
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
