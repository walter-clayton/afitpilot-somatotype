import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { ExerciseFormState } from "../FormModal/UtilTypes";
import { SelectChangeEvent } from "@mui/material/Select";
import { useSnackbar } from "notistack";
import { v4 as uuidv4 } from "uuid";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  TextField,
  Button,
  Select,
  MenuItem,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
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
  const [openDropdown, setOpenDropdown] = useState<Record<string, boolean>>({});
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

  useEffect(() => {
    // console.log("coming from History exeercise:", filteredExercises);
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

    // Calculate adjusted performance
    const adjustedPerformance = calculateAdjustedPerformance(
      newExercise.actualRPE || 0,
      typeof newExercise.intendedScore === "number"
        ? newExercise.intendedScore
        : parseFloat(newExercise.intendedScore)
    );

    // Add the new exercise
    addExercise({
      ...newExercise,
      id: newExerciseId,
      exerciseName: exerciseName,
      unit: unit,
      adjustedPerformance: adjustedPerformance, // Add adjusted performance here
    });

    // Reset newExercise state
    setNewExercise({
      id: "",
      intendedScore: 0,
      adjustedPerformance: 0,
      prescribedRPE: 1,
      actualRPE: 1,
      date: new Date().toLocaleDateString("en-GB"),
      notes: "",
      unit: unit,
    });

    // Close the new score form
    setOpenNewScore(false);

    // Show success message
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

  const toggleDropDownOpen = (exerciseId: string) => {
    setOpenDropdown((prevState) => ({
      ...prevState,
      [exerciseId]: !prevState[exerciseId], // Toggle the open state for the exercise
    }));
  };
  const toggleDropDownClose = (exerciseId: string) => {
    setOpenDropdown((prevState) => {
      //  copy of the previous state
      const updatedDropdown = { ...prevState };
      updatedDropdown[exerciseId] = false;
      // Return the updated state
      return updatedDropdown;
    });
  };
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
          // display: isSmallScreen ? "none" : "flex",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          paddingX: "10px",
          width: "100%",
          padding: "10px 10px",
        }}
      >
        <TableContainer
          sx={{ width: "100%", display: isSmallScreen ? "none" : "flex" }}
        >
          <TableBody>
            {filteredExercises.map((exercise) => (
              <TableRow key={exercise.id} sx={{ width: "100%" }}>
                <TableCell
                  sx={{
                    color: "#56A278",
                    fontWeight: "bold",
                    paddingX: "20px",
                  }}
                >
                  {exercise.intendedScore} {exercise.unit}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#56A278",
                    fontWeight: "bold",
                    paddingX: "20px",
                  }}
                >
                  RPE {exercise.prescribedRPE}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#9B3519",
                    fontWeight: "bold",
                    paddingX: "20px",
                  }}
                >
                  RPE {exercise.actualRPE}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#9B3519",
                    fontWeight: "bold",
                    paddingX: "20px",
                  }}
                >
                  {exercise.adjustedPerformance} {exercise.unit}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", paddingX: "20px" }}>
                  {exercise.date}
                </TableCell>
                <TableCell sx={{ width: "120px" }}>{exercise.notes}</TableCell>
                <TableCell>
                  <DeleteIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleDelete(exercise.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>

        {/* mobile view */}
        <Grid
          item
          sx={{
            display: isSmallScreen ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            // paddingX: "10px",
            width: "100%",
            padding: "10px 0",
          }}
        >
          <TableContainer
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TableBody style={{ display: "block" }}>
              {filteredExercises.map((exercise) => (
                <>
                  <TableRow
                    key={exercise.id}
                    sx={{ width: "100%", display: "block" }}
                  >
                    {/* false */}
                    <TableCell
                      sx={{
                        color: "#9B3519",
                        fontWeight: "bold",
                      }}
                    >
                      {exercise.adjustedPerformance} {exercise.unit}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#56A278",
                        fontWeight: "bold",
                      }}
                    >
                      RPE {exercise.prescribedRPE}
                    </TableCell>

                    <TableCell sx={{ fontWeight: "bold" }}>
                      {exercise.date}
                    </TableCell>
                    <TableCell>
                      <KeyboardArrowDownIcon
                        sx={{
                          bgcolor: "#000",
                          color: "#fff",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleDropDownOpen(exercise.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <DeleteIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => handleDelete(exercise.id)}
                      />
                    </TableCell>
                  </TableRow>
                  {/* true */}
                  {openDropdown[exercise.id] && (
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold", color: "#56A278" }}>
                        {exercise.intendedScore} {exercise.unit}
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", color: "#9B361A" }}>
                        RPE {exercise.actualRPE}
                      </TableCell>
                      <TableCell>{exercise.notes}</TableCell>
                      <TableCell>
                        <HighlightOffIcon
                          sx={{
                            fontSize: "30px",
                            marginLeft: "120px",
                            cursor: "pointer",
                          }}
                          onClick={() => toggleDropDownClose(exercise.id)}
                        />
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))}
            </TableBody>
          </TableContainer>
        </Grid>

        {/* adding new exercise score */}
        {openNewScore && (
          <Grid
            // container
            direction={isSmallScreen ? "column" : "row"}
            alignItems="flex-start"
            paddingLeft="20px"
          >
            <Typography
              sx={{
                fontWeight: "bold",
                paddingBottom: "10px",
                paddingTop: "15px",
              }}
            >
              Add new score
            </Typography>

            <Grid item container spacing={1} alignItems="center">
              <Grid item>
                <TextField
                  sx={{
                    width: isSmallScreen ? "100%" : "100px",
                    "& .MuiOutlinedInput-root": {
                      borderColor: "#56A278",
                      border: "12px",
                      color: "green",
                    },
                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#56A278",
                      },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#56A278  !important",
                    },
                  }}
                  type="number"
                  variant="outlined"
                  onChange={(e) => handleChange(e, "intendedScore")}
                  value={newExercise.intendedScore}
                  placeholder="----- kg"
                  size="small"
                />
              </Grid>
              <Grid item>
                <div style={{ position: "relative" }}>
                  <Select
                    sx={{
                      width: isSmallScreen ? "100%" : undefined,
                      backgroundColor: "#56A278",
                      marginLeft: isSmallScreen ? "0" : "30px",
                      color: "white",
                      height: "40px",
                      "& .MuiOutlinedInput-root": {
                        borderColor: "#56A278",
                        color: "green",
                      },
                      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#56A278",
                        },
                    }}
                    label="Prescribed RPE"
                    value={newExercise.prescribedRPE}
                    size="small"
                    onChange={(e) => handleSelectChange(e, "prescribedRPE")}
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "left",
                      },
                      PaperProps: {
                        style: {
                          marginTop: "8px",
                        },
                      },
                    }}
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((rpe) => (
                      <MenuItem key={rpe} value={rpe}>
                        {rpe}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </Grid>

              <Grid item>
                <Select
                  sx={{ marginLeft: isSmallScreen ? "0" : "20px" }}
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
              </Grid>

              {/* adjusted performance */}
              <Grid item>
                <TextField
                  sx={{
                    width: isSmallScreen ? "100%" : "90px",
                    marginLeft: isSmallScreen ? "0" : "10px",
                    "& .MuiOutlinedInput-root": {
                      borderColor: "#9B361A",
                      bgcolor: "#9B361A",
                      border: "12px",
                      color: "#fff",
                    },
                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#9B361A",
                      },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#9B361A  !important",
                    },
                  }}
                  type="number"
                  variant="outlined"
                  onChange={(e) => handleChange(e, "adjustedPerformance")}
                  value={newExercise.adjustedPerformance}
                  placeholder="----- kg"
                  size="small"
                />
              </Grid>

              <Grid item>
                <TextField
                  type="date"
                  variant="outlined"
                  value={formattedCurrentDate}
                  onChange={(e) => handleChange(e, "date")}
                  size="small"
                  sx={{
                    width: isSmallScreen ? "100%" : "120px",
                    marginLeft: isSmallScreen ? "0" : "20px",
                    fontSize: "10px",
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
              </Grid>

              <Grid item>
                <TextField
                  sx={{
                    width: isSmallScreen ? "100%" : "130px",
                    marginLeft: isSmallScreen ? "0" : "10px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none",
                      },
                      "&:hover fieldset": {
                        border: "none",
                      },
                      "&.Mui-focused fieldset": {
                        border: "none",
                      },
                      backgroundColor: "transparent",
                    },
                  }}
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
          </Grid>
        )}
        {/* saving and cancelling */}
        {openNewScore && (
          <Grid
            style={{
              display: "flex",
              justifyContent: isSmallScreen ? "center" : "flex-end",
              width: "100%",
              gap: "13px",
              marginTop: "29px",
              marginRight: isSmallScreen ? "0" : "50px",
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

      {/* button to add new score  */}
      {!openNewScore && (
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
      )}
    </Grid>
  );
};

export default HistoryCard;
