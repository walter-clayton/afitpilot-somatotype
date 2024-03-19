import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { SelectChangeEvent } from "@mui/material/Select";

interface ExerciseFormState {
  exerciseName: string;
  unit: string;
  intendedScore: number;
  prescribedRPE: number;
  actualRPE: number;
  date: string; // Changed to string for HTML date input
  notes: string;
}

const units: string[] = [
  "calories",
  "kilograms",
  "kilometers",
  "kilometers per hour",
  "meters",
  "meters per second",
  "miles",
  "miles per hour",
  "minutes per kilometer",
  "percent",
  "points",
  "reps",
  "rounds",
  "RPM",
  "score",
  "steps",
  "time",
  "watts",
];

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    const { value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
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
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState);
    // Handle form submission logic here
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        margin: "auto",
        backgroundColor: "white",
        color: "black",
        borderRadius: "20px",
      }}
    >
      <Grid
        container
        maxWidth="xs"
        sx={{
          bgcolor: "#5c3e6a",
          color: "white",
          borderRadius: "20px",
        }}
      >
        <Typography variant="h6">Add Exercise</Typography>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Name</Typography>
            <TextField
              variant="outlined"
              value={formState.exerciseName}
              onChange={(e) => handleChange(e, "exerciseName")}
              required
              placeholder="squat"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>Unit Type</Typography>
            <Select
              value={formState.unit}
              onChange={(e) => handleSelectChange(e, "unit")}
              displayEmpty
            >
              <MenuItem disabled value="" style={{ fontWeight: "bold" }}>
                reps, kg, time, percentage
              </MenuItem>
              {units.map((unit) => (
                <MenuItem
                  key={unit}
                  value={unit}
                  style={{ fontWeight: "bold" }}
                >
                  {unit}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12}>
            <Typography>Intended Score</Typography>
            <TextField
              type="number"
              variant="outlined"
              value={formState.intendedScore}
              onChange={(e) => handleChange(e, "intendedScore")}
              placeholder="  140                         kg"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography>Prescribed RPE</Typography>
            <Select
              label="Prescribed RPE"
              value={formState.prescribedRPE}
              onChange={(e) => handleSelectChange(e, "prescribedRPE")}
              style={{ backgroundColor: "#56A278", color: "white" }}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((rpe) => (
                <MenuItem key={rpe} value={rpe}>
                  {rpe}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12}>
            <Typography>Actual RPE</Typography>
            <Select
              label="Actual RPE"
              value={formState.actualRPE}
              onChange={(e) => handleSelectChange(e, "actualRPE")}
              style={{ backgroundColor: "#9B361A", color: "white" }}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((rpe) => (
                <MenuItem key={rpe} value={rpe}>
                  {rpe}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12}>
            <Typography>Date</Typography>
            <TextField
              type="date"
              variant="outlined"
              value={formState.date}
              onChange={(e) => handleChange(e, "date")}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography>Notes</Typography>
            <TextField
              multiline
              rows={1}
              variant="outlined"
              value={formState.notes}
              onChange={(e) => handleChange(e, "notes")}
              placeholder="5 sets of 10"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "#6C4D7B",
                borderRadius: "5",
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
    </Container>
  );
};

export default FormPage;
