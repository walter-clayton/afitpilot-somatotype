import React, { useRef, useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { SelectChangeEvent } from "@mui/material/Select";
import { ExerciseFormState, units } from "./UtilTypes";
import { useSnackbar } from "notistack";
import { v4 as uuidv4 } from "uuid";

export interface FormPageProps {
  addExercise: (newExercise: ExerciseFormState) => void;
  onExerciseAdded?: () => void; // New prop
}

const FormPage: React.FC<FormPageProps> = ({
  addExercise,
  onExerciseAdded,
}) => {
  // const [showForm, setShowForm] = useState<boolean>(true);
  const [formState, setFormState] = useState<ExerciseFormState>({
    id: "",
    exerciseName: "",
    unit: "",
    adjustedPerformance: 0,
    intendedScore: 0,
    prescribedRPE: 1,
    actualRPE: 1,
    date: new Date().toLocaleDateString("en-GB"),
    notes: "",
  });
  const currentDate = new Date().toLocaleDateString("en-GB");
  // Parse the current date string
  const parts = currentDate.split("/");
  const formattedCurrentDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

  const [errors, setErrors] = useState<Partial<ExerciseFormState>>({});
  const formRef = useRef<HTMLDivElement>(null);
  const { enqueueSnackbar } = useSnackbar();

  const calculateAdjustedPerformance = (
    actualRPE: number,
    intendedScore: number
  ): number => {
    let adjustmentFactor = 1 - (actualRPE - 4) / 10;
    adjustmentFactor = Math.max(adjustmentFactor, 0.9);

    const adjustedScore = intendedScore * adjustmentFactor;

    // Round the adjusted score to the nearest whole number
    return Math.round(adjustedScore);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    const { value } = e.target;

    if (name === "actualRPE") {
      // Update actualRPE directly
      setFormState((prev) => ({
        ...prev,
        actualRPE: parseFloat(value) || 1,
      }));
    } else {
      // Update other fields
      setFormState((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Calculate adjusted performance if either actualRPE or intendedScore changes
    if (name === "actualRPE" || name === "intendedScore") {
      const actualRPEValue =
        name === "actualRPE" ? parseFloat(value) || 1 : formState.actualRPE;
      const intendedScoreValue =
        name === "intendedScore"
          ? parseFloat(value) || 0
          : formState.intendedScore;

      const adjustedPerformance = calculateAdjustedPerformance(
        actualRPEValue as number,
        intendedScoreValue as number
      );
      console.log("from handleCHANGE");
      console.log("intendedScoreValue", intendedScoreValue);
      console.log("actualRPEValue", actualRPEValue);
      console.log("adjustedPerformance", adjustedPerformance);

      setFormState((prev) => ({
        ...prev,
        adjustedPerformance: adjustedPerformance,
      }));
    }
  };

  const defaultIntendedScore: Record<string, number> = {
    time: 0,
    reps: 10,
    calories: 0,
    kilograms: 50,
    kilometers: 5,
    "kilometers per hour": 0,
    meters: 100,
    "meters per second": 0,
    miles: 2,
    "miles per hour": 0,
    "minutes per kilometer": 0,
    percent: 0,
    points: 0,
    rounds: 1,
    RPM: 0,
    score: 0,
    steps: 1000,
    watts: 0,
  };

  const handleSelectChange = (
    e: SelectChangeEvent<string | number>,
    name: string
  ) => {
    const { value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors for the field being changed
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    // Adjust intended score based on unit selection
    if (name === "unit") {
      let newIntendedScore = 0;
      let helperText = "";

      switch (value) {
        case "time":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter time in minutes (e.g., 90 for 1 hour 30 minutes)";
          break;
        case "reps":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the number of repetitions";
          break;
        case "calories":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the number of calories burned";
          break;
        case "kilograms":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the weight in kilograms";
          break;
        case "kilometers":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the distance in kilometers";
          break;
        case "kilometers per hour":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the speed in kilometers per hour";
          break;
        case "meters":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the distance in meters";
          break;
        case "meters per second":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the speed in meters per second";
          break;
        case "miles":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the distance in miles";
          break;
        case "miles per hour":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the speed in miles per hour";
          break;
        case "minutes per kilometer":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the pace in minutes per kilometer";
          break;
        case "percent":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the percentage";
          break;
        case "points":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the points";
          break;
        case "rounds":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the number of rounds";
          break;
        case "RPM":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the RPM (Revolutions Per Minute)";
          break;
        case "score":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the score";
          break;
        case "steps":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the number of steps";
          break;
        case "watts":
          newIntendedScore = defaultIntendedScore[value];
          helperText = "Enter the watts";
          break;
        default:
          newIntendedScore = 0;
          helperText = "";
      }

      // Set the intended score and helper text in form state
      setFormState((prev) => ({
        ...prev,
        intendedScore: newIntendedScore,
      }));

      // Calculate adjusted performance based on the new intended score
      const actualRPEValue = formState.actualRPE || 1;
      const intendedScoreValue =
        typeof newIntendedScore === "number" ? newIntendedScore : 0;

      const adjustedPerformance = calculateAdjustedPerformance(
        actualRPEValue as number,
        intendedScoreValue
      );

      setFormState((prev) => ({
        ...prev,
        adjustedPerformance: adjustedPerformance,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        intendedScore: helperText,
      }));
    } else if (name === "actualRPE") {
      // If actualRPE is changed, recalculate adjusted performance
      const newActualRPE = parseFloat(value as string) || 1;
      const intendedScoreValue =
        parseFloat(formState.intendedScore as string) || 0;

      const adjustedPerformance = calculateAdjustedPerformance(
        newActualRPE,
        intendedScoreValue
      );
      console.log("from handleSelectchange");
      console.log("  intendedScoreValue", intendedScoreValue);
      console.log("  newActualRPE", newActualRPE);
      console.log(
        " handleSelectchange adjustedPerformance",
        adjustedPerformance
      );

      setFormState((prev) => ({
        ...prev,
        actualRPE: newActualRPE,
        adjustedPerformance: adjustedPerformance,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      const exerciseId = uuidv4();

      // a new exercise object without the id property from formState
      const { id, ...exerciseData } = formState;
      const newExercise = { id: exerciseId, ...exerciseData };

      //addExercise function passed from props
      addExercise(newExercise);

      // Reset
      setFormState({
        id: "",
        exerciseName: "",
        unit: "",
        intendedScore: 0,
        prescribedRPE: 1,
        actualRPE: 1,
        date: new Date().toLocaleDateString("en-GB"),
        notes: "",
      });
      enqueueSnackbar("Exercise added successfully!", { variant: "success" });
      if (onExerciseAdded) {
        onExerciseAdded();
      }
    } else {
      // Scroll to the first error, ensure the current ref is not null
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors: { [key: string]: string } = {};

    if (!formState.exerciseName) {
      errors.exerciseName = " Exercise name is required";
      valid = false;
    }

    if (!formState.unit) {
      errors.unit = "Unit Type is required";
      valid = false;
    }

    if (!formState.intendedScore) {
      errors.intendedScore = "Intended Score is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  return (
    <div
      ref={formRef}
      style={{
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: "20px",
        width: "100%",
        maxWidth: "100%",
        height: "auto",
        paddingBottom: "10px",
      }}
    >
      <Grid
        container
        sx={{
          bgcolor: "#5c3e6a",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "12px",
        }}
      >
        <Typography>Add Exercise</Typography>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "400px",
            maxWidth: "100%",
            padding: "10px 60px",
            gap: "15px",
          }}
        >
          <Grid item xs={12}>
            <Typography sx={{ fontWeight: "bold" }}>Name</Typography>
            <TextField
              error={!!errors.exerciseName}
              helperText={errors.exerciseName}
              variant="outlined"
              value={formState.exerciseName}
              onChange={(e) => handleChange(e, "exerciseName")}
              fullWidth
              placeholder="squat"
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography sx={{ fontWeight: "bold" }}>Unit Type</Typography>
            <Select
              error={!!errors.unit} //  the presence of errors for the unit field
              value={formState.unit}
              onChange={(e) => handleSelectChange(e, "unit")}
              displayEmpty
              fullWidth
              size="small"
            >
              <MenuItem
                disabled
                value=""
                style={{ fontWeight: "bold", fontSize: ".80rem" }}
              >
                reps, kg, time, percentage
              </MenuItem>
              {units.map((unit) => (
                <MenuItem
                  key={unit}
                  value={unit}
                  style={{
                    fontWeight: "bold",
                    fontSize: ".80rem",
                  }}
                >
                  {unit}
                </MenuItem>
              ))}
            </Select>
            {errors.unit && (
              <Typography
                sx={{
                  color: "#f44336",
                  fontSize: ".75rem",
                  marginLeft: "15px",
                }}
              >
                {errors.unit}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <Typography sx={{ fontWeight: "bold" }}>Intended Score</Typography>
            <TextField
              error={!!errors.intendedScore}
              helperText={errors.intendedScore}
              type="number"
              variant="outlined"
              value={formState.intendedScore}
              onChange={(e) => handleChange(e, "intendedScore")}
              fullWidth
              // placeholder="140 kg"
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography sx={{ color: "#56A278", fontWeight: "bold" }}>
              Prescribed RPE
            </Typography>
            <Select
              label="Prescribed RPE"
              value={formState.prescribedRPE}
              onChange={(e) => handleSelectChange(e, "prescribedRPE")}
              style={{
                backgroundColor: "#56A278",
                color: "white",
                height: "40px",
              }}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((rpe) => (
                <MenuItem key={rpe} value={rpe}>
                  {rpe}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12}>
            <Typography sx={{ color: "#9B361A", fontWeight: "bold" }}>
              Actual RPE
            </Typography>
            <Select
              label="Actual RPE"
              value={formState.actualRPE}
              onChange={(e) => handleSelectChange(e, "actualRPE")}
              style={{
                backgroundColor: "#9B361A",
                color: "white",
                height: "40px",
              }}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((rpe) => (
                <MenuItem key={rpe} value={rpe}>
                  {rpe}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12}>
            <Typography sx={{ fontWeight: "bold" }}>Date</Typography>
            <TextField
              type="date"
              variant="outlined"
              value={formattedCurrentDate}
              onChange={(e) => handleChange(e, "date")}
              size="small"
              sx={{
                width: "64%",

                "& input": {
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  outline: "none",
                  transition: "border-color 0.3s",
                  "&:focus": {
                    borderColor: "#5c3e6a",
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography sx={{ fontWeight: "bold" }}>Notes</Typography>
            <TextField
              multiline
              rows={1}
              variant="outlined"
              value={formState.notes}
              onChange={(e) => handleChange(e, "notes")}
              fullWidth
              placeholder="5 sets of 10"
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "#6C4D7B",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "flex-start",
                width: "75%",
                textTransform: "capitalize",
                padding: "13px",
                "&:hover": {
                  bgcolor: "#554364",
                },
              }}
            >
              <AddIcon />
              Add exercise
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormPage;
