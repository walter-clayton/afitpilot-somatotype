import {
  FilledInput,
  FormControl,
  FormHelperText,
  InputAdornment,
  Typography,
} from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { IAnthropometric } from "../App";

interface IAnthropometricForm {
  anthropometric?: IAnthropometric | undefined;
  setAnthropometric?: (
    anthropometric: IAnthropometric | undefined
  ) => void | undefined;
  setAnthropometricFormHasError?: (hasError: boolean) => void;
  isFetching?: boolean;
}

const AnthropometricForm: FC<IAnthropometricForm> = (props): any => {
  const [defaultValuesAreSet, setDefaultValuesAreSet] =
    useState<boolean>(false);

  const [defaultAnthropometricValues, setDefaultAnthropometricValues] =
    useState<IAnthropometric>();

  const [heightIsIncorrect, setHeightIsIncorrect] = useState<boolean>(false);
  const [bodyWeightIsIncorrect, setBodyWeightIsIncorrect] =
    useState<boolean>(false);
  const [tricepIsIncorrect, setTricepIsIncorrect] = useState<boolean>(false);
  const [subscapularIsIncorrect, setSubscapularIsIncorrect] =
    useState<boolean>(false);
  const [supraspinalIsIncorrect, setSupraspinalIsIncorrect] =
    useState<boolean>(false);
  const [HumerusIsIncorrect, setHumerusIsIncorrect] = useState<boolean>(false);
  const [femurIsIncorrect, setFemurIsIncorrect] = useState<boolean>(false);
  const [calfIsIncorrect, setCalfIsIncorrect] = useState<boolean>(false);
  const [bicepIsIncorrect, setBicepIsIncorrect] = useState<boolean>(false);

  const IsValidInput = (input: string) => {
    const bool: boolean = input.match(/^[0-9]*$/) === null ? false : true;
    return bool;
  };

  const handleHeightChange = (event: React.FormEvent<any>) => {
    if (IsValidInput(event.currentTarget.value)) {
      let value = event.currentTarget.value;
      if (event.currentTarget.value === "") {
        value = defaultAnthropometricValues?.height;
      }
      setHeightIsIncorrect(false);
      props.setAnthropometric?.({
        ...props.anthropometric,
        height: parseFloat(value),
      });
      if (
        !bodyWeightIsIncorrect &&
        !tricepIsIncorrect &&
        !subscapularIsIncorrect &&
        !supraspinalIsIncorrect &&
        !HumerusIsIncorrect &&
        !femurIsIncorrect &&
        !calfIsIncorrect &&
        !bicepIsIncorrect
      ) {
        props.setAnthropometricFormHasError!(false);
      }
    } else {
      setHeightIsIncorrect(true);
      props.setAnthropometricFormHasError!(true);
    }
  };

  const handleBodyWeightChange = (event: React.FormEvent<any>) => {
    if (IsValidInput(event.currentTarget.value)) {
      let value = event.currentTarget.value;
      if (event.currentTarget.value === "") {
        value = defaultAnthropometricValues?.weight;
      }
      setBodyWeightIsIncorrect(false);
      props.setAnthropometric?.({
        ...props.anthropometric,
        weight: parseFloat(value),
      });
      if (
        !heightIsIncorrect &&
        !tricepIsIncorrect &&
        !subscapularIsIncorrect &&
        !supraspinalIsIncorrect &&
        !HumerusIsIncorrect &&
        !femurIsIncorrect &&
        !calfIsIncorrect &&
        !bicepIsIncorrect
      ) {
        props.setAnthropometricFormHasError!(false);
      }
    } else {
      setBodyWeightIsIncorrect(true);
      props.setAnthropometricFormHasError!(true);
    }
  };

  const handleTricepChange = (event: React.FormEvent<any>) => {
    if (IsValidInput(event.currentTarget.value)) {
      let value = event.currentTarget.value;
      if (event.currentTarget.value === "") {
        value = defaultAnthropometricValues?.tricep_skinfold;
      }
      setTricepIsIncorrect(false);
      props.setAnthropometric?.({
        ...props.anthropometric,
        tricep_skinfold: parseFloat(value),
      });
      if (
        !heightIsIncorrect &&
        !bodyWeightIsIncorrect &&
        !subscapularIsIncorrect &&
        !supraspinalIsIncorrect &&
        !HumerusIsIncorrect &&
        !femurIsIncorrect &&
        !calfIsIncorrect &&
        !bicepIsIncorrect
      ) {
        props.setAnthropometricFormHasError!(false);
      }
    } else {
      setTricepIsIncorrect(true);
      props.setAnthropometricFormHasError!(true);
    }
  };

  const handleSubscapularChange = (event: React.FormEvent<any>) => {
    if (IsValidInput(event.currentTarget.value)) {
      let value = event.currentTarget.value;
      if (event.currentTarget.value === "") {
        value = defaultAnthropometricValues?.subscapular_skinfold;
      }
      setSubscapularIsIncorrect(false);
      props.setAnthropometric?.({
        ...props.anthropometric,
        subscapular_skinfold: parseFloat(value),
      });
      if (
        !heightIsIncorrect &&
        !bodyWeightIsIncorrect &&
        !tricepIsIncorrect &&
        !supraspinalIsIncorrect &&
        !HumerusIsIncorrect &&
        !femurIsIncorrect &&
        !calfIsIncorrect &&
        !bicepIsIncorrect
      ) {
        props.setAnthropometricFormHasError!(false);
      }
    } else {
      setSubscapularIsIncorrect(true);
      props.setAnthropometricFormHasError!(true);
    }
  };

  const handleSupraspinalChange = (event: React.FormEvent<any>) => {
    if (IsValidInput(event.currentTarget.value)) {
      let value = event.currentTarget.value;
      if (event.currentTarget.value === "") {
        value = defaultAnthropometricValues?.supraspinal_skinfold;
      }
      setSupraspinalIsIncorrect(false);
      props.setAnthropometric?.({
        ...props.anthropometric,
        supraspinal_skinfold: parseFloat(value),
      });
      if (
        !heightIsIncorrect &&
        !bodyWeightIsIncorrect &&
        !tricepIsIncorrect &&
        !subscapularIsIncorrect &&
        !HumerusIsIncorrect &&
        !femurIsIncorrect &&
        !calfIsIncorrect &&
        !bicepIsIncorrect
      ) {
        props.setAnthropometricFormHasError!(false);
      }
    } else {
      setSupraspinalIsIncorrect(true);
      props.setAnthropometricFormHasError!(true);
    }
  };

  const handleHumerusChange = (event: React.FormEvent<any>) => {
    if (IsValidInput(event.currentTarget.value)) {
      let value = event.currentTarget.value;
      if (event.currentTarget.value === "") {
        value = defaultAnthropometricValues?.humerus_breadth;
      }
      setHumerusIsIncorrect(false);
      props.setAnthropometric?.({
        ...props.anthropometric,
        humerus_breadth: parseFloat(value),
      });
      if (
        !heightIsIncorrect &&
        !bodyWeightIsIncorrect &&
        !tricepIsIncorrect &&
        !subscapularIsIncorrect &&
        !supraspinalIsIncorrect &&
        !femurIsIncorrect &&
        !calfIsIncorrect &&
        !bicepIsIncorrect
      ) {
        props.setAnthropometricFormHasError!(false);
      }
    } else {
      setHumerusIsIncorrect(true);
      props.setAnthropometricFormHasError!(true);
    }
  };

  const handleFemurChange = (event: React.FormEvent<any>) => {
    if (IsValidInput(event.currentTarget.value)) {
      let value = event.currentTarget.value;
      if (event.currentTarget.value === "") {
        value = defaultAnthropometricValues?.femur_breadth;
      }
      setFemurIsIncorrect(false);
      props.setAnthropometric?.({
        ...props.anthropometric,
        femur_breadth: parseFloat(value),
      });
      if (
        !heightIsIncorrect &&
        !bodyWeightIsIncorrect &&
        !tricepIsIncorrect &&
        !subscapularIsIncorrect &&
        !supraspinalIsIncorrect &&
        !HumerusIsIncorrect &&
        !calfIsIncorrect &&
        !bicepIsIncorrect
      ) {
        props.setAnthropometricFormHasError!(false);
      }
    } else {
      setFemurIsIncorrect(true);
      props.setAnthropometricFormHasError!(true);
    }
  };

  const handleCalfChange = (event: React.FormEvent<any>) => {
    if (IsValidInput(event.currentTarget.value)) {
      let value = event.currentTarget.value;
      if (event.currentTarget.value === "") {
        value = defaultAnthropometricValues?.calf_girth;
      }
      setCalfIsIncorrect(false);
      props.setAnthropometric?.({
        ...props.anthropometric,
        calf_girth: parseFloat(value),
      });
      if (
        !heightIsIncorrect &&
        !bodyWeightIsIncorrect &&
        !tricepIsIncorrect &&
        !subscapularIsIncorrect &&
        !supraspinalIsIncorrect &&
        !HumerusIsIncorrect &&
        !femurIsIncorrect &&
        !bicepIsIncorrect
      ) {
        props.setAnthropometricFormHasError!(false);
      }
    } else {
      setCalfIsIncorrect(true);
      props.setAnthropometricFormHasError!(true);
    }
  };

  const handleBicepChange = (event: React.FormEvent<any>) => {
    if (IsValidInput(event.currentTarget.value)) {
      let value = event.currentTarget.value;
      if (event.currentTarget.value === "") {
        value = defaultAnthropometricValues?.bicep_girth;
      }

      setBicepIsIncorrect(false);
      props.setAnthropometric?.({
        ...props.anthropometric,
        bicep_girth: parseFloat(value),
      });
      if (
        !heightIsIncorrect &&
        !bodyWeightIsIncorrect &&
        !tricepIsIncorrect &&
        !subscapularIsIncorrect &&
        !supraspinalIsIncorrect &&
        !HumerusIsIncorrect &&
        !femurIsIncorrect &&
        !calfIsIncorrect
      ) {
        props.setAnthropometricFormHasError!(false);
      }
    } else {
      setBicepIsIncorrect(true);
      props.setAnthropometricFormHasError!(true);
    }
  };

  useEffect(() => {
    if (props.anthropometric !== undefined && !defaultValuesAreSet) {
      setDefaultAnthropometricValues(props.anthropometric);
      setDefaultValuesAreSet(true);
    }
  }, [props.anthropometric]);

  return (
    <>
      <FormControl
        sx={{ width: "100%", marginBottom: "10px" }}
        variant="filled"
        disabled={props.isFetching ? true : false}
      >
        <FormHelperText
          sx={{ color: heightIsIncorrect ? "#ff0000" : "rgba(0,0,0,0.6)" }}
        >
          Height
        </FormHelperText>
        <FilledInput
          sx={{
            "&::before": heightIsIncorrect ? { borderBottom: 0 } : {},
            border: heightIsIncorrect ? 1 : 0,
            borderColor: "red",
          }}
          id="height"
          placeholder={
            props.isFetching ? "" : String(defaultAnthropometricValues?.height)
          }
          endAdornment={<InputAdornment position="end">cm</InputAdornment>}
          onChange={handleHeightChange}
        />
      </FormControl>
      {heightIsIncorrect ? (
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          color="#ff0000"
          marginTop={0.5}
        >
          • Please enter a valid input, it can only contains digits !
        </Typography>
      ) : null}

      <FormControl
        sx={{ width: "100%", marginBottom: "10px" }}
        variant="filled"
        disabled={props.isFetching ? true : false}
      >
        <FormHelperText
          sx={{ color: bodyWeightIsIncorrect ? "#ff0000" : "rgba(0,0,0,0.6)" }}
        >
          Bodyweight
        </FormHelperText>
        <FilledInput
          sx={{
            "&::before": bodyWeightIsIncorrect ? { borderBottom: 0 } : {},
            border: bodyWeightIsIncorrect ? 1 : 0,
            borderColor: "red",
          }}
          id="bodyweight"
          endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          aria-describedby="filled-weight-helper-text"
          placeholder={
            props.isFetching ? "" : String(defaultAnthropometricValues?.weight)
          }
          onChange={handleBodyWeightChange}
        />
      </FormControl>
      {bodyWeightIsIncorrect ? (
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          color="#ff0000"
          marginTop={0.5}
        >
          • Please enter a valid input, it can only contains digits !
        </Typography>
      ) : null}

      <FormControl
        sx={{ width: "100%", marginBottom: "10px" }}
        variant="filled"
        disabled={props.isFetching ? true : false}
      >
        <FormHelperText
          sx={{ color: tricepIsIncorrect ? "#ff0000" : "rgba(0,0,0,0.6)" }}
        >
          Tricep skin fold{" "}
        </FormHelperText>
        <FilledInput
          sx={{
            "&::before": tricepIsIncorrect ? { borderBottom: 0 } : {},
            border: tricepIsIncorrect ? 1 : 0,
            borderColor: "red",
          }}
          id="tricep"
          endAdornment={<InputAdornment position="end">mm</InputAdornment>}
          aria-describedby="filled-weight-helper-text"
          placeholder={
            props.isFetching
              ? ""
              : String(defaultAnthropometricValues?.tricep_skinfold)
          }
          onChange={handleTricepChange}
        />
      </FormControl>
      {tricepIsIncorrect ? (
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          color="#ff0000"
          marginTop={0.5}
        >
          • Please enter a valid input, it can only contains digits !
        </Typography>
      ) : null}

      <FormControl
        sx={{ width: "100%", marginBottom: "10px" }}
        variant="filled"
        disabled={props.isFetching ? true : false}
      >
        <FormHelperText
          sx={{ color: subscapularIsIncorrect ? "#ff0000" : "rgba(0,0,0,0.6)" }}
        >
          Subscapular skin fold
        </FormHelperText>
        <FilledInput
          sx={{
            "&::before": subscapularIsIncorrect ? { borderBottom: 0 } : {},
            border: subscapularIsIncorrect ? 1 : 0,
            borderColor: "red",
          }}
          id="subscapular"
          placeholder={
            props.isFetching
              ? ""
              : String(defaultAnthropometricValues?.subscapular_skinfold)
          }
          endAdornment={<InputAdornment position="end">mm</InputAdornment>}
          aria-describedby="filled-weight-helper-text"
          onChange={handleSubscapularChange}
        />
      </FormControl>
      {subscapularIsIncorrect ? (
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          color="#ff0000"
          marginTop={0.5}
        >
          • Please enter a valid input, it can only contains digits !
        </Typography>
      ) : null}

      <FormControl
        sx={{ width: "100%", marginBottom: "10px" }}
        variant="filled"
        disabled={props.isFetching ? true : false}
      >
        <FormHelperText
          sx={{ color: supraspinalIsIncorrect ? "#ff0000" : "rgba(0,0,0,0.6)" }}
        >
          Supraspinal skin fold
        </FormHelperText>
        <FilledInput
          sx={{
            "&::before": supraspinalIsIncorrect ? { borderBottom: 0 } : {},
            border: supraspinalIsIncorrect ? 1 : 0,
            borderColor: "red",
          }}
          id="supraspinal"
          placeholder={
            props.isFetching
              ? ""
              : String(defaultAnthropometricValues?.supraspinal_skinfold)
          }
          endAdornment={<InputAdornment position="end">mm</InputAdornment>}
          aria-describedby="filled-weight-helper-text"
          onChange={handleSupraspinalChange}
        />
      </FormControl>
      {supraspinalIsIncorrect ? (
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          color="#ff0000"
          marginTop={0.5}
        >
          • Please enter a valid input, it can only contains digits !
        </Typography>
      ) : null}

      <FormControl
        sx={{ width: "100%", marginBottom: "10px" }}
        variant="filled"
        disabled={props.isFetching ? true : false}
      >
        <FormHelperText
          sx={{ color: HumerusIsIncorrect ? "#ff0000" : "rgba(0,0,0,0.6)" }}
        >
          Humerus breadth{" "}
        </FormHelperText>
        <FilledInput
          sx={{
            "&::before": HumerusIsIncorrect ? { borderBottom: 0 } : {},
            border: HumerusIsIncorrect ? 1 : 0,
            borderColor: "red",
          }}
          id="humerus"
          placeholder={
            props.isFetching
              ? ""
              : String(defaultAnthropometricValues?.humerus_breadth)
          }
          endAdornment={<InputAdornment position="end">cm</InputAdornment>}
          aria-describedby="filled-weight-helper-text"
          onChange={handleHumerusChange}
        />
      </FormControl>
      {HumerusIsIncorrect ? (
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          color="#ff0000"
          marginTop={0.5}
        >
          • Please enter a valid input, it can only contains digits !
        </Typography>
      ) : null}

      <FormControl
        sx={{ width: "100%", marginBottom: "10px" }}
        variant="filled"
        disabled={props.isFetching ? true : false}
      >
        <FormHelperText
          sx={{ color: femurIsIncorrect ? "#ff0000" : "rgba(0,0,0,0.6)" }}
        >
          Femur breadth
        </FormHelperText>
        <FilledInput
          sx={{
            "&::before": femurIsIncorrect ? { borderBottom: 0 } : {},
            border: femurIsIncorrect ? 1 : 0,
            borderColor: "red",
          }}
          id="femur"
          placeholder={
            props.isFetching
              ? ""
              : String(defaultAnthropometricValues?.femur_breadth)
          }
          endAdornment={<InputAdornment position="end">cm</InputAdornment>}
          aria-describedby="filled-weight-helper-text"
          onChange={handleFemurChange}
        />
      </FormControl>
      {femurIsIncorrect ? (
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          color="#ff0000"
          marginTop={0.5}
        >
          • Please enter a valid input, it can only contains digits !
        </Typography>
      ) : null}

      <FormControl
        sx={{ width: "100%", marginBottom: "10px" }}
        variant="filled"
        disabled={props.isFetching ? true : false}
      >
        <FormHelperText
          sx={{ color: calfIsIncorrect ? "#ff0000" : "rgba(0,0,0,0.6)" }}
        >
          Calf circumference
        </FormHelperText>
        <FilledInput
          sx={{
            "&::before": calfIsIncorrect ? { borderBottom: 0 } : {},
            border: calfIsIncorrect ? 1 : 0,
            borderColor: "red",
          }}
          id="calf"
          placeholder={
            props.isFetching
              ? ""
              : String(defaultAnthropometricValues?.calf_girth)
          }
          endAdornment={<InputAdornment position="end">cm</InputAdornment>}
          aria-describedby="filled-weight-helper-text"
          onChange={handleCalfChange}
        />
      </FormControl>
      {calfIsIncorrect ? (
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          color="#ff0000"
          marginTop={0.5}
        >
          • Please enter a valid input, it can only contains digits !
        </Typography>
      ) : null}

      <FormControl
        sx={{ width: "100%" }}
        variant="filled"
        disabled={props.isFetching ? true : false}
      >
        <FormHelperText
          sx={{ color: bicepIsIncorrect ? "#ff0000" : "rgba(0,0,0,0.6)" }}
        >
          Bicep circumference
        </FormHelperText>
        <FilledInput
          sx={{
            "&::before": bicepIsIncorrect ? { borderBottom: 0 } : {},
            border: bicepIsIncorrect ? 1 : 0,
            borderColor: "red",
          }}
          id="bicep"
          placeholder={
            props.isFetching
              ? ""
              : String(defaultAnthropometricValues?.bicep_girth)
          }
          endAdornment={<InputAdornment position="end">cm</InputAdornment>}
          aria-describedby="filled-weight-helper-text"
          onChange={handleBicepChange}
        />
      </FormControl>
      {bicepIsIncorrect ? (
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          color="#ff0000"
          marginTop={0.5}
        >
          • Please enter a valid input, it can only contains digits !
        </Typography>
      ) : null}
    </>
  );
};

export default AnthropometricForm;
