export interface IColorSkin {
  light: string;
  medium?: string;
  strong: string;
}

export interface IColorHair {
  light: string;
  medium: string;
}

export const colorsSkin: IColorSkin[] = [
  { light: "#ffe3cd", medium: "#ffcca2", strong: "#fbcfab" },
  { light: "#fdd0aa", medium: "#FCBA83", strong: "#fbbd8b" },
  { light: "#E0B18D", medium: "#DDA478", strong: "#CC9B75" },
  { light: "#D09D75", medium: "#C98F62", strong: "#C68858" },
  { light: "#b76b43", medium: "#B95D2B", strong: "#A55326" },
  { light: "#9D6B5A", medium: "#906253", strong: "#81584A" },
];

export const colorsHair: IColorHair[] = [
  { light: "#565656", medium: "#4D4D4D" },
  { light: "#f3de97", medium: "#fff0b9" },
  { light: "#d1ad7d", medium: "#AA8866" },
  { light: "#909090", medium: "#808080" },
];

export const hairs: string[] = [
  "none",
  "short",
  "medium",
  "medium2",
  "large",
  "large2",
];

export const hairsFemale: string[] = ["hair1", "hair2", "hair3"];

export const faces: string[] = ["smiling", "neutral", "angry", "sad"];

export const beards: string[] = ["none", "short", "medium", "large"];
