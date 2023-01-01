import { ITypesSkin } from "../../Avatar";
import { BMHairs } from "./BalancedMesoHair";

export const getMaleHair = (
  skin: string,
  hair: string
): React.SVGProps<SVGGElement> => {
  const hairs: ITypesSkin = {
    BM: (BMHairs as any)[hair],
  };

  return (hairs as any)[skin];
};
