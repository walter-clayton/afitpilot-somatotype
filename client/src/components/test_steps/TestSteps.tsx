import React, { FC, useState, useEffect, useRef } from "react";
import {
  Box,
  OutlinedInput,
  InputAdornment,
  Typography,
  Select,
  Button,
  Slider,
  MenuItem,
} from "@mui/material";
import ForwardIcon from "@mui/icons-material/Forward";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { styled } from "@mui/system";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";

const CircularProgressWithLabel = (props: any) => {
  return (
    <Box
      sx={{
        position: "absolute",
        display: "inline-flex",
        bottom: "20px",
        left: "20px",
      }}
    >
      <CircularProgress
        sx={{ color: "RGB(108, 77, 123)" }}
        variant="determinate"
        {...props}
        size="4rem"
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          fontSize={16}
          fontWeight={600}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

const PrettoSlider = styled(Slider)({
  color: "RGB(108, 77, 123)",
  height: 10,
  width: "80%",
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 16,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "RGB(108, 77, 123)",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const Next = styled(Button)({
  color: "white",
  borderRadius: "20px",
  padding: "10px 50px",
  backgroundColor: "RGB(108, 77, 123)",
  alignSelf: "end",
  marginRight: "20px",

  "&:hover": {
    backgroundColor: "RGB(108, 77, 123)",
  },

  "&:hover > svg": {
    transform: "translateX(35px)",
    opacity: "1",
  },
});

const Input = styled(OutlinedInput)({
  marginTop: "50px",
  // input label when focused
  "&.Mui-focused": {
    color: "RGB(108, 77, 123)",
  },
  maxWidth: "110px",
  // focused color for input with variant='standard'
  // "&.MuiInput-underline:after": {
  //   borderBottomColor: "blue",
  // },
  // focused color for input with variant='filled'
  // "&.MuiFilledInput-underline:after": {
  //   borderBottomColor: "yellow",
  // },
  // focused color for input with variant='outlined'
  "&.MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "RGB(108, 77, 123)",
    },
  },
});

const Unity = styled("div")({
  marginLeft: "10px",
  fontWeight: 600,
  fontSize: 20,
  color: "RGB(108, 77, 123)",
});

const Question = styled("div")({
  backgroundColor: "RGB(108, 77, 123)",
  color: "white",
  fontWeight: "600",
  textAlign: "center",
  padding: "20px 0",
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

interface ICircle {
  active: boolean;
}

const Circle = styled("div")<ICircle>((props) => ({
  width: "20px",
  height: "20px",
  cursor: "pointer",
  background: props.active ? "RGB(108, 77, 123)" : "lightgray",
  borderRadius: "50%",
  marginLeft: "5px",
  "&:first-of-type": {
    marginLeft: "0px",
  },
}));

const Circles = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  padding: "50px 0 20px 0",
});

const TestSteps: FC = () => {
  interface ISteps {
    label: string;
    question: string;
    unity?: string;
    min?: string;
    max?: string;
  }

  const steps: ISteps[] = [
    {
      label: "age",
      question: "Your age is:",
      unity: "years",
      min: "13",
      max: "120",
    },
    {
      label: "gender",
      question: "Your gender is:",
    },
    {
      label: "height",
      question: "Your height is:",
      unity: "cm",
      min: "120",
      max: "250",
    },
    {
      label: "weight",
      question: "Your weight is:",
      unity: "kg",
      min: "30",
      max: "300",
    },
    {
      label: "bodyFat",
      question: "Your body Fat is:",
      unity: "%",
      min: "2",
      max: "50",
    },
    {
      label: "arm",
      question: "Your arm circumference is:",
      unity: "cm",
      min: "20",
      max: "55",
    },
    {
      label: "calf",
      question: "Your calf circumference is:",
      unity: "cm",
      min: "20",
      max: "55",
    },
  ];
  const [currentStep, setCurrentStep] = useState<number>(0);
  const boxRef = useRef<HTMLDivElement>(null);
  interface IValues {
    age: string;
    gender: string;
    height: string;
    weight: string;
    bodyFat: string;
    arm: string;
    calf: string;
  }

  const [values, setValues] = useState<IValues>({
    age: "33",
    gender: "male",
    height: "180",
    weight: "80",
    bodyFat: "20",
    arm: "35",
    calf: "35",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let valuesTemp: IValues = { ...values };
    (valuesTemp as any)[steps[currentStep].label] = String(event.target.value);
    console.log(event.target.value);

    setValues({ ...valuesTemp });
  };

  interface IInputSelect {
    label: string;
  }

  const bodyFatPercent: string[] = [
    "5-10",
    "10-15",
    "15-20",
    "20-25",
    "25-30",
    ">30",
  ];
  const InputSelect: FC<IInputSelect> = (props) => {
    return (
      <Select
        onChange={(event: any) => {
          handleChange(event);
        }}
        sx={{
          width: "110px",
          color: "RGB(108, 77, 123)",
          "&.MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "RGB(108, 77, 123)",
            },
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={(values as any)[props.label]}
      >
        {props.label === "gender" && <MenuItem value={"male"}>Male</MenuItem>}
        {props.label === "gender" && (
          <MenuItem value={"female"}>Female</MenuItem>
        )}
        {bodyFatPercent.map(
          (item, index) =>
            props.label === "bodyFat" && (
              <MenuItem value={item}>{item}</MenuItem>
            )
        )}
      </Select>
    );
  };

  return (
    <Box
      ref={boxRef}
      sx={{
        padding: "0 0 20px 0",
        margin: "100px auto",
        borderRadius: "20px",
        boxShadow: 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
      maxWidth="600px"
    >
      <Question>
        {steps[currentStep].question}
        <QuestionMarkIcon sx={{ position: "absolute", right: "20px" }} />
      </Question>

      {steps.map(
        (item, index) =>
          index === currentStep && (
            <Box
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              {item.label !== "gender" ? (
                <PrettoSlider
                  sx={{ marginTop: "20px" }}
                  valueLabelDisplay="on"
                  aria-label="pretto slider"
                  defaultValue={(values as any)[item.label]}
                  min={Number(item.min)}
                  max={Number(item.max)}
                  step={1}
                  onChange={(event: any) => {
                    handleChange(event);
                  }}
                />
              ) : (
                <InputSelect label={item.label} />
              )}
              <Unity>{item.unity}</Unity>
            </Box>
          )
      )}

      <Circles>
        {steps.map((item, index) => (
          <Circle
            key={index}
            active={index === currentStep}
            onClick={() => {
              setCurrentStep(index);
            }}
          />
        ))}
      </Circles>
      <Next
        onClick={() => {
          currentStep < steps.length - 1 && setCurrentStep((c) => c + 1);
          window.scrollTo(0, boxRef.current?.offsetTop! - 20);
        }}
      >
        {currentStep === steps.length - 1 ? "Finish" : "Next"}
        {currentStep < steps.length - 1 && (
          <ForwardIcon
            sx={{
              marginLeft: "10px",
              transition: ".2s ease-out",
              position: "absolute",
              transform: "translateX(-35px)",
              opacity: "0",
            }}
          />
        )}
      </Next>

      <CircularProgressWithLabel
        value={(100 / steps.length) * (currentStep + 1)}
      />
    </Box>
  );
};

export default TestSteps;
