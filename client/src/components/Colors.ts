export interface IColors {
  index?: number;
  name?: string;
  darkColor?: string;
  normalColor?: string;
  lightColor?: string;
  clearColor?: string;
}

const colorsArray: IColors[] = [
  {
    index: 0,
    name: "yellow",
    darkColor: "#B88C2E",
    normalColor: "#DCB051",
    lightColor: "#E8CB8C",
    clearColor: "#FFF7DA",
  },
  {
    index: 1,
    name: "blue",
    darkColor: "#145F85",
    normalColor: "#1874A3",
    lightColor: "#1D8EC8",
    clearColor: "#E1EFF4",
  },
  {
    index: 2,
    name: "green",
    darkColor: "#478563",
    normalColor: "#56A278",
    lightColor: "#7AB896",
    clearColor: "#D5E8DD",
  },
  {
    index: 3,
    name: "red",
    darkColor: "#693030",
    normalColor: "#974444",
    lightColor: "#B76060",
    clearColor: "#E7CACA",
  },
  {
    index: 4,
    name: "purple",
    darkColor: "#533B5E",
    normalColor: "#6C4D7B",
    lightColor: "#8A629D",
    clearColor: "#DCD0E1",
  },
];

let mainColor: IColors = colorsArray[0];

export function setColors(colorIndex: number) {
  mainColor = colorsArray[colorIndex];
}

export function getSpecificColors(colorIndex: number) {
  return colorsArray[colorIndex];
}

export function getColors() {
  return mainColor;
}
