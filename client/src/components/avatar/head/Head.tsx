import { getBeardMale } from "../beard/males/BeardMale";
import { IColorHair, IColorSkin } from "../variablesAvatar/VariableAvatar";
import { getFacesMales } from "../faces/males/FacesMales";
import { getHairMale } from "../hairs/males/HairsMales";

export const getHead = (
  skin: string,
  hair: string,
  beard: string,
  face: string,
  colorsSkin: IColorSkin,
  colorsHair: IColorHair
): React.SVGProps<SVGGElement> => {
  interface ITransformHead {
    BM: string;
    EnM: string;
    EcM: string;
    MEc: string;
    BEc: string;
    EnEc: string;
    EcEn: string;
    BEn: string;
    MEn: string;
    "M-Ec": string;
    "En-Ec": string;
    "M-En": string;
    C: string;
  }

  const transformHead: ITransformHead = {
    BM: "translate(23.652 .806)",
    EnM: "translate(23.652 .806)",
    EcM: "translate(23.652 .806)",
    MEc: "translate(23.652 .806)",
    BEc: "translate(23.926 .95)",
    EnEc: "translate(24.178 .95)",
    EcEn: "translate(25.335 .95)",
    BEn: "translate(23.877 .95)",
    MEn: "translate(23.652 .806)",
    "M-Ec": "translate(23.652 .806)",
    "En-Ec": "translate(23.495 .95)",
    "M-En": "translate(23.852 .806)",
    C: "translate(23.877 .95)",
  };

  return (
    <g transform={(transformHead as any)[skin]}>
      <g id="neck">
        <path
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M189.823 81.332c0-9.98-6.756-18.07-15.092-18.07-8.337 0-15.094 8.09-15.094 18.07v7.414c0 9.98 6.757 18.071 15.094 18.071 8.336 0 15.092-8.091 15.092-18.071v-7.414z"
          transform="translate(-128.151)"
        ></path>
        <path
          fill={colorsSkin.strong}
          fillRule="nonzero"
          d="M169.181 102.439l-8.238-3.959a1.842 1.842 0 10-1.596 3.319l8.239 3.961a1.841 1.841 0 101.595-3.321zM179.194 102.439l8.239-3.959a1.843 1.843 0 012.459.861 1.843 1.843 0 01-.863 2.458l-8.238 3.961a1.842 1.842 0 01-1.597-3.321zM177.31 64.477h-5.854c-6.72 0-12.167 5.447-12.167 12.166v4.992c0 6.719 5.447 12.166 12.167 12.166h5.854c6.719 0 12.166-5.447 12.166-12.166v-4.992c0-6.719-5.447-12.166-12.166-12.166z"
          transform="translate(-128.151)"
        ></path>
      </g>
      <g id="ears">
        <path
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M196.283 53.888h-42.537c-4.863 0-8.806 4.027-8.806 8.995 0 4.969 3.943 8.996 8.806 8.996h42.537c4.863 0 8.807-4.027 8.807-8.996 0-4.968-3.944-8.995-8.807-8.995z"
          transform="matrix(.98337 0 0 1 .28 0) translate(-128.151)"
        ></path>
        <path
          fill={colorsSkin.strong}
          fillRule="nonzero"
          d="M195.649 55.248h-42.042c-3.638 0-6.586 3.003-6.586 6.708s2.948 6.709 6.586 6.709h42.042c3.637 0 6.586-3.004 6.586-6.709 0-3.705-2.949-6.708-6.586-6.708z"
          transform="matrix(.98337 0 0 1 .28 0) matrix(1.01842 0 0 1 -130.859 0)"
        ></path>
      </g>
      <path
        id="head"
        fill={colorsSkin.light}
        fillRule="nonzero"
        d="M180.931 27.735H168.34c-10.431 0-18.888 8.456-18.888 18.888v22.384c0 10.433 8.457 18.89 18.888 18.89h12.591c10.431 0 18.888-8.457 18.888-18.89V46.623c0-10.432-8.457-18.888-18.888-18.888z"
        transform="translate(-128.151)"
      ></path>
      <g id="chin">
        <path
          fill={colorsSkin.light}
          fillRule="nonzero"
          d="M180.532 85.336h-11.765a2.304 2.304 0 000 4.608h11.765a2.304 2.304 0 000-4.608z"
          transform="translate(-128.151)"
        ></path>
        <path
          fill={colorsSkin.strong}
          fillRule="nonzero"
          d="M176.549 82.761h-3.402a.493.493 0 00-.492.493v.29c0 .272.22.493.492.493h3.402a.493.493 0 00.492-.493v-.29a.493.493 0 00-.492-.493z"
          transform="translate(-128.151)"
        ></path>
      </g>
      <g id="nose">
        <path
          fill={colorsSkin.strong}
          fillRule="nonzero"
          d="M178.315 61.001a3.698 3.698 0 10-7.397 0v6.526a3.7 3.7 0 007.397 0v-6.526z"
          transform="translate(-128.151)"
        ></path>
        <path
          fill={colorsSkin.strong}
          fillRule="nonzero"
          d="M174.211 68.387l-3.439-2.923a1.351 1.351 0 00-1.749 2.058l3.439 2.923a1.351 1.351 0 001.749-2.058zM175.155 68.387l3.439-2.923a1.35 1.35 0 111.749 2.058l-3.44 2.923a1.351 1.351 0 01-1.748-2.058zM172.298 54.231a1.036 1.036 0 10-2.073 0v1.255a1.037 1.037 0 002.073 0v-1.255zM179.182 54.231a1.036 1.036 0 10-2.073 0v1.255a1.037 1.037 0 002.073 0v-1.255z"
          transform="translate(-128.151)"
        ></path>
      </g>
      <g id="eyes" transform="translate(-128.151)">
        <path
          id="eye-right"
          fill="#61534B"
          fillRule="nonzero"
          d="M165.654 56.376a2.314 2.314 0 10-4.629 0v.927a2.314 2.314 0 004.629 0v-.927z"
        ></path>
        <path
          id="eye-left"
          fill="#61534B"
          fillRule="nonzero"
          d="M188.163 56.376a2.314 2.314 0 10-4.629 0v.926a2.314 2.314 0 104.629 0v-.926z"
        ></path>
      </g>
      <g id="faces" transform="translate(-128.151)">
        {(getFacesMales(colorsSkin) as any)[face]}
      </g>
      <g id="hairs" transform="matrix(.98169 0 0 1.01033 .365 -.639)">
        {(getHairMale(colorsHair) as any)[hair]}
      </g>
      <g id="beards" transform="matrix(.9809 0 0 1 .397 0)">
        {(getBeardMale(colorsHair) as any)[beard]}
      </g>
    </g>
  );
};
