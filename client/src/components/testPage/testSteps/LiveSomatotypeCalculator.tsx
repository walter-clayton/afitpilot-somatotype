import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import ForwardIcon from "@mui/icons-material/Forward";
import {
  Box,
  Container,
  buttonStyle,
  formInputs,
  formStyle,
  results,
  resultsDesc,
  resultsDescName,
  resultsDescTitle,
  topTitle,
} from "./Styles";
import { ISomatotype } from "../../../App";

interface IStep {
  label: string;
  unity: string;
  min: number;
  max: number;
}

const steps: IStep[] = [
  { label: "age", unity: "years", min: 13, max: 120 },
  { label: "height", unity: "cm", min: 120, max: 250 },
  { label: "weight", unity: "kg", min: 30, max: 300 },
  { label: "bodyFat", unity: "%", min: 2, max: 50 },
  { label: "Bicep", unity: "cm", min: 20, max: 70 },
  { label: "calf", unity: "cm", min: 20, max: 70 },
  { label: "humerus", unity: "cm", min: 5, max: 10 },
  { label: "femur", unity: "cm", min: 6, max: 12 },
];

//function to calculate for somatotype
const estimateSomatotype = (
  age: number,
  height: number,
  weight: number,
  calf: number,
  bicep: number,
  bodyFat: number,
  femurs: number,
  humerus: number
): { title: string; code: string } => {
  const endo =
    -0.7182 + 0.1451 * -0.00068 * Math.pow(0, 2) + 0.0000014 * Math.pow(0, 3);
  const meso =
    0.858 * humerus +
    0.601 * femurs +
    0.188 * bicep +
    0.161 * calf -
    0.131 * height +
    4.5;

  //ecto function is not accurate things to do:
  const ecto = (height + calf + humerus) / 200;

  const soma: { endomorphy: number; mesomorphy: number; ectomorphy: number } = {
    endomorphy: endo,
    mesomorphy: meso,
    ectomorphy: ecto,
  };

  const isMinTwoDigit = (soma: ISomatotype): boolean => {
    return (
      Math.abs(soma.endomorphy! - soma.mesomorphy!) <= 2 ||
      Math.abs(soma.endomorphy! - soma.ectomorphy!) <= 2 ||
      Math.abs(soma.mesomorphy! - soma.ectomorphy!) <= 2
    );
  };
  const isCentral = (soma: ISomatotype): boolean => {
    const condition = [2, 3, 4];
    soma.endomorphy = Number(soma.endomorphy?.toFixed());
    soma.mesomorphy = Number(soma.mesomorphy?.toFixed());
    soma.ectomorphy = Number(soma.ectomorphy?.toFixed());
    let i: number = 0;
    let matchCondition: boolean = true;

    while (matchCondition && i < Object.values(soma).length) {
      matchCondition = condition.includes(Object.values(soma)[i]);
      i++;
    }

    if (matchCondition) {
      matchCondition =
        Math.abs(soma.endomorphy! - soma.mesomorphy!) <= 1 &&
        Math.abs(soma.endomorphy! - soma.ectomorphy!) <= 1 &&
        Math.abs(soma.mesomorphy! - soma.ectomorphy!) <= 1;
    }

    return matchCondition;
  };
  const isBalancedMeso = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.endomorphy! === soma.ectomorphy! &&
      soma.mesomorphy! > soma.endomorphy! &&
      soma.mesomorphy! > soma.ectomorphy!
    );
  };

  const isEctomorphicMeso = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.ectomorphy! > soma.endomorphy! &&
      soma.mesomorphy! > soma.endomorphy! &&
      soma.mesomorphy! > soma.ectomorphy!
    );
  };

  const isMesoEcto = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.ectomorphy! > soma.endomorphy! &&
      soma.mesomorphy! === soma.ectomorphy!
    );
  };

  const isMesomorphicEcto = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.ectomorphy! > soma.endomorphy! &&
      soma.ectomorphy! > soma.mesomorphy! &&
      soma.mesomorphy! > soma.endomorphy!
    );
  };

  const isBalancedEcto = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.endomorphy! === soma.mesomorphy! &&
      soma.ectomorphy! > soma.endomorphy!
    );
  };

  const isEndomorphicEcto = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.endomorphy! > soma.mesomorphy! &&
      soma.ectomorphy! > soma.endomorphy! &&
      soma.ectomorphy! > soma.mesomorphy!
    );
  };

  const isEndoEcto = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.endomorphy! === soma.ectomorphy! &&
      soma.endomorphy! > soma.mesomorphy! &&
      soma.ectomorphy! > soma.mesomorphy!
    );
  };

  const isEctomorphicEndo = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.ectomorphy! > soma.mesomorphy! &&
      soma.endomorphy! > soma.ectomorphy! &&
      soma.endomorphy! > soma.mesomorphy!
    );
  };

  const isBalancedEndo = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.endomorphy! > soma.ectomorphy! &&
      soma.endomorphy! > soma.mesomorphy! &&
      soma.mesomorphy! === soma.ectomorphy!
    );
  };

  const isMesomorphicEndo = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.endomorphy! > soma.ectomorphy! &&
      soma.endomorphy! > soma.mesomorphy! &&
      soma.mesomorphy! > soma.ectomorphy!
    );
  };

  const isMesoEndo = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.endomorphy! === soma.mesomorphy! &&
      soma.endomorphy! > soma.ectomorphy!
    );
  };

  const isEndomorphicMeso = (soma: ISomatotype): boolean => {
    return (
      isMinTwoDigit(soma) &&
      soma.endomorphy! > soma.ectomorphy! &&
      soma.mesomorphy! > soma.endomorphy! &&
      soma.mesomorphy! > soma.ectomorphy!
    );
  };

  const getSomatotypeInfo = (
    title: string,
    code: string
  ): { title: string; code: string } => {
    return { title, code };
  };

  let result: { title: string; code: string } = { title: "", code: "" };

  if (isCentral(soma)) {
    result = getSomatotypeInfo("Central", "C");
  } else if (isBalancedMeso(soma)) {
    result = getSomatotypeInfo("Balanced Mesomorph", "BM");
  } else if (isEctomorphicMeso(soma)) {
    result = getSomatotypeInfo("Ectomorphic Mesomorph", "EcM");
  } else if (isMesoEcto(soma)) {
    result = getSomatotypeInfo("Mesomorph Ectomorph", "M-Ec");
  } else if (isMesomorphicEcto(soma)) {
    result = getSomatotypeInfo("Mesomorphic Ectomorph", "MEc");
  } else if (isBalancedEcto(soma)) {
    result = getSomatotypeInfo("Balanced Ectomorph", "BEc");
  } else if (isEndomorphicEcto(soma)) {
    result = getSomatotypeInfo("Endomorphic Ectomorph", "EnEc");
  } else if (isEndoEcto(soma)) {
    result = getSomatotypeInfo("Endomorph Ectomorph", "En-Ec");
  } else if (isEctomorphicEndo(soma)) {
    result = getSomatotypeInfo("Ectomorphic Endomorph", "EcEn");
  } else if (isBalancedEndo(soma)) {
    result = getSomatotypeInfo("Balanced Endomorph", "BEn");
  } else if (isMesomorphicEndo(soma)) {
    result = getSomatotypeInfo("Mesomorphic Endomorph", "MEn");
  } else if (isMesoEndo(soma)) {
    result = getSomatotypeInfo("Mesomorph Endomorph", "M-En");
  } else if (isEndomorphicMeso(soma)) {
    result = getSomatotypeInfo("Endomorphic Mesomorph", "EnM");
  }

  return result;
};

//  calcuations to testing  the application
const age = 27;
const height = 150;
const weight = 88;
const calf = 0;
const bicep = 0;
const bodyFat = 0;
const femurs = 0;
const humerus = 0;

const somatotypess = estimateSomatotype(
  age,
  height,
  weight,
  calf,
  bicep,
  bodyFat,
  femurs,
  humerus
);

console.log("somatotypess values11: ", somatotypess);

const calculateSomatotype = (values: any) => {
  //Placeholder logic - replace this with actual somatotype calculation
  const endo = Math.min(7, Math.max(1, values.bodyFat / 7)); // Just a mock formula
  const meso = Math.min(7, Math.max(1, values.weight / 40)); // Just a mock formula
  const ecto = Math.min(7, Math.max(1, 200 / values.height)); // Just a mock formula

  return {
    endo: Math.round(endo),
    meso: Math.round(meso),
    ecto: Math.round(ecto),
  };
};

export const LiveSomatotypeCalculator: React.FC = () => {
  const [somatotype, setSomatotype] = useState({ title: "", code: "" });
  const [somatotypeValues, setSomatotypeValues] = useState({
    endo: 0,
    meso: 0,
    ecto: 0,
  });
  // console.log("somatotypeValues:", somatotypeValues);
  // console.log("somatotype:", somatotype);

  const [sliderValues, setSliderValues] = useState(() =>
    steps.reduce((acc, { label, min }) => {
      acc[label] = min; // Initialize at the minimum value
      return acc;
    }, {} as Record<string, number>)
  );
  // console.log("sliderValues", sliderValues);
  const handleSliderChange = (label: string, newValue: number) => {
    setSliderValues((prevValues) => {
      const updatedValues = { ...prevValues, [label]: newValue };

      // Assuming bodyFat, weight, and height are directly related to the somatotype calculation
      const newSomatotype = estimateSomatotype(
        updatedValues.age,
        updatedValues.height,
        updatedValues.weight,
        updatedValues.calf,
        updatedValues.Bicep,
        updatedValues.bodyFat,
        updatedValues.femur,
        updatedValues.humerus
      );
      setSomatotype(newSomatotype);
      // Update somatotype based on new slider values

      // Now calculate the new somatotype values using updatedValues
      const newSomatotypeValues = calculateSomatotype(updatedValues);
      // Update the somatotype values in the state
      setSomatotypeValues(newSomatotypeValues);

      return updatedValues;
    });
  };

  return (
    <Container>
      <Box>
        <div style={topTitle}>Live Somatotype</div>
        <form style={formStyle}>
          {steps.map((step) => (
            <div key={step.label} style={formInputs}>
              <label
                htmlFor={step.label}
                style={{ textTransform: "capitalize", fontWeight: "bold" }}
              >
                {step.label}
              </label>
              <Slider
                name={step.label}
                max={step.max}
                min={step.min}
                value={sliderValues[step.label]}
                size="medium"
                valueLabelDisplay="auto"
                aria-label={`Adjust your ${step.label}`}
                step={
                  [
                    "height",
                    "weight",
                    "femur",
                    "humerus",
                    "calf",
                    "Bicep",
                  ].includes(step.label)
                    ? 0.1
                    : 1
                }
                sx={{
                  color: "#6C4D7B",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80%",
                  maxWidth: "600px",
                }}
                onChange={(event, value) =>
                  handleSliderChange(step.label, value as number)
                }
              />
              <div style={{ fontWeight: "bold" }}>
                <span>
                  {[
                    "height",
                    "weight",
                    "femur",
                    "humerus",
                    "calf",
                    "Bicep",
                  ].includes(step.label)
                    ? sliderValues[step.label]
                    : sliderValues[step.label]}
                </span>

                <span> {step.unity}</span>
              </div>
            </div>
          ))}
        </form>
        {/* Display somatotype values from the  and not below or  the range */}
        {/* Display somatotype values dynamically from state */}
        <div style={results}>
          {somatotypeValues.endo} - {somatotypeValues.meso} -{" "}
          {somatotypeValues.ecto}
        </div>

        <div style={resultsDesc}>
          {/* Display the somatotypeTitle  */}
          <span style={resultsDescTitle}>{somatotype.title}</span>
          {/* Display the somatotypeCode  */}
          <span style={resultsDescName}>{somatotype.code}</span>
        </div>
        <button style={buttonStyle}>
          <span>Compare</span>
          <ForwardIcon
            sx={{ marginLeft: "10px", fontSize: "30px", cursor: "pointer" }}
          />
        </button>
      </Box>
    </Container>
  );
};
