import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { ExerciseFormState } from "../FormModal/UtilTypes";
import { SelectChangeEvent } from "@mui/material/Select";
import { useSnackbar } from "notistack";
import { v4 as uuidv4 } from "uuid";
import {
  Grid,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState, useEffect } from "react";

interface HistoryCardProps {
  filteredExercises: ExerciseFormState[];
  exercises: ExerciseFormState[];
  addExercise: (newExercise: ExerciseFormState) => void;
  deleteExercise: (exerciseId: string) => void; // Make sure deleteExercise is declared here
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  exercises,
  filteredExercises,
  addExercise,
  deleteExercise,
}) => {
  const [openNewScore, setOpenNewScore] = useState<boolean>(false);
  const [newExercise, setNewExercise] = useState<ExerciseFormState>({
    id: "",
    intendedScore: 0,
    adjustedPerformance: 0,
    prescribedRPE: 1,
    actualRPE: 1,
    date: new Date().toLocaleDateString("en-GB"),
    notes: "",
  });

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    console.log("coming from History exeercise:", filteredExercises);
  }, [filteredExercises]);

  const currentDate = new Date().toLocaleDateString("en-GB");
  const parts = currentDate.split("/");
  const formattedCurrentDate = `${parts[2]}-${parts[1]}-${parts[0]}`; // Format it as "yyyy-MM-dd"

  const newScore = () => {
    setOpenNewScore(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    const { value } = e.target;
    setNewExercise((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDelete = (exerciseId: string) => {
    deleteExercise(exerciseId);
  };

  const handleSave = () => {
    const { exerciseName, unit } =
      filteredExercises.length > 0
        ? filteredExercises[0]
        : { exerciseName: "", unit: "" };

    // Generate a unique ID for the new exercise
    const newExerciseId = uuidv4();

    addExercise({
      ...newExercise,
      id: newExerciseId,
      exerciseName: exerciseName,
      unit: unit,
    });
    console.log("new exercise", addExercise);

    setNewExercise({
      id: "",
      intendedScore: 0,
      prescribedRPE: 1,
      actualRPE: 1,
      date: new Date().toLocaleDateString("en-GB"),
      notes: "",
      unit: unit,
    });
    setOpenNewScore(false);
    enqueueSnackbar("Exercise added successfully!", { variant: "success" });
  };

  // Modify handleChange to handle Select components
  const handleSelectChange = (
    e: SelectChangeEvent<number | string>,
    name: string
  ) => {
    const { value } = e.target;
    setNewExercise((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setNewExercise({
      id: "",
      intendedScore: 0,
      prescribedRPE: 1,
      actualRPE: 1,
      date: new Date().toLocaleDateString("en-GB"),
      notes: "",
    });
    setOpenNewScore(false);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Return null if there are no filtered exercises
  if (filteredExercises.length === 0) {
    return null;
  }
  return (
    <Grid
      item
      component="main"
      container
      sx={{
        width: isSmallScreen ? "100vw" : "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        mt: "40px",
        // gap: "10px",
        backgroundColor: "#fff",
        pb: "14px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        sx={{
          backgroundColor: "#F6F6F7",
          color: "#606161",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: "12px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        History
      </Typography>
      {/* card section to perform  crud operations  */}
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          padding: "0 40px",
          // gap: "15px",
        }}
      >
        {filteredExercises.map((exercise, index) => (
          <Grid
            key={exercise.id}
            style={{
              width: "100%",
            }}
          >
            <ListItem
              sx={{ color: "#56A278", fontWeight: "bold", display: "inline" }}
            >
              {exercise.intendedScore} {exercise.unit}
            </ListItem>

            <ListItem
              sx={{ color: "#56A278", fontWeight: "bold", display: "inline" }}
            >
              RPE {exercise.prescribedRPE}
            </ListItem>

            <ListItem
              sx={{ color: "#9B3519", fontWeight: "bold", display: "inline" }}
            >
              RPE {exercise.actualRPE}
            </ListItem>

            <ListItem
              sx={{ color: "#9B3519", fontWeight: "bold", display: "inline" }}
            >
              {exercise.intendedScore} {exercise.unit}
            </ListItem>

            <ListItem sx={{ fontWeight: "bold", display: "inline" }}>
              {exercise.date}
            </ListItem>

            <ListItem sx={{ color: "#4B4B4B", display: "inline" }}>
              {exercise.notes}
            </ListItem>

            <DeleteIcon
              sx={{
                marginTop: "18px",
                marginLeft: "80px",
                marginRight: "10px",
                cursor: "pointer",
                display: "inline",
              }}
              onClick={() => handleDelete(exercise.id)}
            />
          </Grid>
        ))}

        {/* adding new exercise score */}
        {openNewScore && (
          <Grid
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              Add new score
            </Typography>

            <Grid item sx={{ display: "flex", gap: "10px" }}>
              <TextField
                sx={{ width: "80px", bgColor: "#56A278" }}
                type="number"
                variant="outlined"
                onChange={(e) => handleChange(e, "intendedScore")}
                value={newExercise.intendedScore}
                placeholder="140 kg"
                size="small"
              />

              <Select
                label="Prescribed RPE"
                value={newExercise.prescribedRPE}
                size="small"
                onChange={(e) => handleSelectChange(e, "prescribedRPE")} // Use handleSelectChange here
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

              <Select
                label="Actual RPE"
                value={newExercise.actualRPE}
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

              {/* adjusted performace */}
              <TextField
                sx={{ width: "80px", bgColor: "#9B361A" }}
                type="number"
                variant="outlined"
                onChange={(e) => handleChange(e, "adjustedPerformance")}
                value={newExercise.adjustedPerformance}
                placeholder="140 kg"
                size="small"
              />

              <TextField
                type="date"
                variant="outlined"
                value={formattedCurrentDate}
                onChange={(e) => handleChange(e, "date")}
                size="small"
                sx={{
                  width: "130px",
                  outline: "none",
                  border: "none",
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

              <TextField
                sx={{ width: "100px" }}
                multiline
                rows={1}
                variant="outlined"
                value={newExercise.notes}
                onChange={(e) => handleChange(e, "notes")}
                fullWidth
                placeholder="Add note..."
                size="small"
              />
            </Grid>
          </Grid>
        )}

        {openNewScore && (
          <Grid
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              gap: "13px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                border: "2px solid #fff",
                color: "#6C4D7B",
                borderColor: "#6C4D7B",
                textTransform: "capitalize",
                bgcolor: "#fff",
                borderRadius: "7px",
                width: "50px",
                "&:hover": {
                  bgcolor: "#554364",
                  color: "#fff",
                },
              }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                border: "2px solid #fff",
                color: "#fff",
                borderColor: "#6C4D7B",
                textTransform: "capitalize",
                bgcolor: "#6C4D7B",
                borderRadius: "7px",
                width: "50px",
                "&:hover": {
                  bgcolor: "#554364",
                  color: "#fff",
                },
              }}
              onClick={handleSave}
            >
              Save
            </Button>
          </Grid>
        )}
      </Grid>

      {/* button is add new score  */}
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          bgcolor: "#6C4D7B",
          borderRadius: "7px",
          textTransform: "capitalize",
          mb: "12px",
          mt: "12px",
          width: "150px",
          "&:hover": {
            bgcolor: "#554364",
          },
        }}
        onClick={newScore}
      >
        New Score
      </Button>
    </Grid>
  );
};

export default HistoryCard;
