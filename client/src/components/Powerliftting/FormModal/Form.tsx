import React, { useState } from "react";
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

const FormPage: React.FC = () => {
  const [formState, setFormState] = useState<ExerciseFormState>({
    exerciseName: "",
    unit: "",
    intendedScore: 0,
    prescribedRPE: 1,
    actualRPE: 1,
    date: new Date().toISOString().split("T")[0], // Getting date in YYYY-MM-DD format
    notes: "",
  });

  const [errors, setErrors] = useState<Partial<ExerciseFormState>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      setFormState((prev) => ({
        ...prev,
        intendedScore: 0, // Adjust your logic here based on unit selection
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      console.log(formState);
      // Handle form submission logic here

      // Reset formState to its initial state
      setFormState({
        exerciseName: "",
        unit: "",
        intendedScore: 0,
        prescribedRPE: 1,
        actualRPE: 1,
        date: new Date().toISOString().split("T")[0],
        notes: "",
      });
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
      style={{
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: "20px",
        maxWidth: "100%",
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
            width: "100%",
            padding: " 10px 60px",
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
              placeholder="140 kg"
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
              value={formState.date}
              onChange={(e) => handleChange(e, "date")}
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
