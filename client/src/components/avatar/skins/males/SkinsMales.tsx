import { ITypesSkin } from "../../Avatar";
import { BMSkin } from "./BalancedMesoSkin";

export const getMaleSkin = (skin: string): React.SVGProps<SVGGElement> => {
  const skins: ITypesSkin = {
    BM: BMSkin,
  };

  return (skins as any)[skin];
};
