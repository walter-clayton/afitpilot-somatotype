import { ITypesSkin } from "../Avatar";
import { IColorSkin } from "../variablesAvatar/VariableAvatar";
import { getCSkinFem } from "./females/CentralFem";
import {
  getBEcSkinFem,
  getEnEcSkinFem,
  getMEcSkinFem,
} from "./females/EctomorphFem";
import {
  getBEnSkinFem,
  getEcEnSkinFem,
  getMEnSkinFem,
} from "./females/EndomorphsFem";
import {
  getHybridEnEcSkinFem,
  getHybridMEcSkinFem,
  getHybridMEnSkinFem,
} from "./females/HybridFem";
import {
  getBMSkinFem,
  getEcMSkinFem,
  getEnMSkinFem,
} from "./females/MesomorphsFem";
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
  colorsSkin: IColorSkin,
  cloth: boolean
): React.SVGProps<SVGGElement> => {
  const skins: ITypesSkin = {
    BM:
      gender === "male"
        ? getBMSkin(colorsSkin)
        : getBMSkinFem(colorsSkin, cloth),
    EnM:
      gender === "male"
        ? getEnMSkin(colorsSkin)
        : getEnMSkinFem(colorsSkin, cloth),
    EcM:
      gender === "male"
        ? getEcMSkin(colorsSkin)
        : getEcMSkinFem(colorsSkin, cloth),
    MEc:
      gender === "male"
        ? getMEcSkin(colorsSkin)
        : getMEcSkinFem(colorsSkin, cloth),
    BEc:
      gender === "male"
        ? getBEcSkin(colorsSkin)
        : getBEcSkinFem(colorsSkin, cloth),
    EnEc:
      gender === "male"
        ? getEnEcSkin(colorsSkin)
        : getEnEcSkinFem(colorsSkin, cloth),
    EcEn:
      gender === "male"
        ? getEcEnSkin(colorsSkin)
        : getEcEnSkinFem(colorsSkin, cloth),
    BEn:
      gender === "male"
        ? getBEnSkin(colorsSkin)
        : getBEnSkinFem(colorsSkin, cloth),
    MEn:
      gender === "male"
        ? getMEnSkin(colorsSkin)
        : getMEnSkinFem(colorsSkin, cloth),
    "M-Ec":
      gender === "male"
        ? getHybridMEcSkin(colorsSkin)
        : getHybridMEcSkinFem(colorsSkin, cloth),
    "En-Ec":
      gender === "male"
        ? getHybridEnEcSkin(colorsSkin)
        : getHybridEnEcSkinFem(colorsSkin, cloth),
    "M-En":
      gender === "male"
        ? getHybridMEnSkin(colorsSkin)
        : getHybridMEnSkinFem(colorsSkin, cloth),
    C:
      gender === "male" ? getCSkin(colorsSkin) : getCSkinFem(colorsSkin, cloth),
  };

  return (skins as any)[skin];
};
