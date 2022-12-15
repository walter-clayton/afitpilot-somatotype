import React, { FC } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import CircleIcon from "@mui/icons-material/Circle";

const Circles = styled("div")({
  svg: {
    fill: "lightgray",
    cursor: "pointer",
    background: "red",
  },
});

const TestSteps: FC = () => {
  const steps: any[] = [
    {
      label: "age",
      question: "Your age is:",
    },
    {
      label: "gender",
      question: "Your gender is:",
    },
    {
      label: "height",
      question: "Your height is:",
    },
    {
      label: "weight",
      question: "Your weight is:",
    },
    {
      label: "body fat",
      question: "Your body Fat is:",
    },
    {
      label: "arm",
      question: "Your arm circumference is:",
    },
    {
      label: "calf",
      question: "Your calf circumference is:",
    },
  ];
  return (
    <Box sx={{ padding: "65px 0" }}>
      <Circles>
        {steps.map((item, index) => (
          <CircleIcon key={index} />
        ))}
      </Circles>
    </Box>
  );
};

export default TestSteps;
