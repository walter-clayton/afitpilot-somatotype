import {
  Box,
  Button,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
  createTheme,
  Select,
  MenuItem,
  SelectChangeEvent,
  ListItem,
} from "@mui/material";
import React, { useState } from "react";
import Athlete from "../../image/athlete.svg";
import AddIcon from "@mui/icons-material/Add";
import { ExerciseFormState } from "./FormModal/UtilTypes";
import FormPage from "./FormModal/Form";
import ClearIcon from "@mui/icons-material/Clear";
import Legends from "./legends/Legends";
import FeedbackCard from "./FeedbackCard/FeedbackCard";
import ChartContainer from "./Chart/ChartContainer";

interface UsersInterfaceProps {
  exercises: ExerciseFormState[];
  addExercise: (newExercise: ExerciseFormState) => void;
}

const UsersInterface: React.FC<UsersInterfaceProps> = ({
  exercises,
  addExercise,
}) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [selectedExerciseName, setSelectedExerciseName] = useState<string>("");

  const handleAddNewExercise = () => {
    setShowForm(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };

  const theme = createTheme({});
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Changed event handler name to handleExerciseNameChange
  const handleExerciseNameChange = (event: SelectChangeEvent<string>) => {
    setSelectedExerciseName(event.target.value);
    console.log("selected exercise name:", event.target.value);
  };

  // Filter exercises based on selectedExerciseName
  const filteredExercises = exercises.filter(
    (exercise) => exercise.exerciseName === selectedExerciseName
  );

  return (
    <Grid
      component="main"
      item
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        mt: "25px",
        bgcolor: "#D9D9D9",
      }}
    >
      {/* data for users  */}
      {exercises.length > 0 ? (
        <>
          <Grid item justifyContent="center">
            <Box sx={{ position: "relative", width: "100%" }}>
              <Select
                value={selectedExerciseName}
                onChange={handleExerciseNameChange}
                displayEmpty
                size="small"
                inputProps={{ "aria-label": "Select exercise" }}
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "#fff",
                  color: "#000",
                  border: "1px solid #554364",
                  borderRadius: "10px",
                  paddingX: "20px",
                  minWidth: "220px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  "& .MuiSelect-select": {
                    paddingRight: "30px",
                  },
                }}
              >
                <MenuItem
                  value=""
                  disabled
                  sx={{ textTransform: "capitalize" }}
                >
                  Select exercise
                </MenuItem>
                {exercises.map((exercise, index) => (
                  <MenuItem
                    value={exercise.exerciseName}
                    key={index}
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {exercise.exerciseName}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Grid>

          <Grid item justifyContent="center" sx={{ marginTop: "50px" }}>
            <Legends />
          </Grid>

          <Grid item justifyContent="center">
            <FeedbackCard filteredExercises={filteredExercises} />
          </Grid>

          <Grid item justifyContent="center">
            {/* <ChartContainer /> */}
          </Grid>

          <Grid item justifyContent="center">
            {filteredExercises.map((exercise, index) => (
              <Typography
                key={index}
                variant="h6"
                sx={{
                  marginY: "30px",
                  fontSize: "1rem",
                  backgroundColor: "#fff",
                  fontWeight: "bold",
                  border: "1px dashed black",
                }}
              >
                {/* testing */}
                <ListItem>exerciseName:{exercise.exerciseName}</ListItem>
                <ListItem>unit:{exercise.unit}</ListItem>
                <ListItem>intendedScore:{exercise.intendedScore}</ListItem>
                <ListItem>prescribedRPE:{exercise.prescribedRPE}</ListItem>
                <ListItem>actualRPE:{exercise.actualRPE}</ListItem>
                <ListItem>date:{exercise.date}</ListItem>
                <ListItem>notes:{exercise.notes}</ListItem>
              </Typography>
            ))}
          </Grid>
        </>
      ) : (
        //  no data for users
        <Grid container item justifyContent="center">
          <Grid
            item
            sx={{
              position: "relative",
              width: "100%",
              // small: isSmallScreen ? "100%" : "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginX: "25px",
            }}
            mb={12}
          >
            <Typography
              sx={{
                position: "absolute",
                // top: "50%",
                // left: "50%",
                // transform: "translate(-50%, -50%)",
                padding: "5px 9px",
                fontWeight: "bold",
                bgcolor: "#fff",
                color: "#000",
                border: "1px solid #554364",
                borderRadius: "4px",
                textTransform: "capitalize",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                // maxWidth: "100%",
              }}
            >
              There is no data, please add a new exercise.
            </Typography>
          </Grid>

          <Box
            mb={12}
            sx={{
              display: "flex",
              // width: "100%",
              justifyContent: "center",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            <img
              src={Athlete}
              alt="athlete avator"
              style={{ objectFit: "cover" }}
            />
            {!showForm && (
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                  bgcolor: "#6C4D7B",
                  borderRadius: "20px",
                  textTransform: "capitalize",
                  width: isSmallScreen ? "100%" : "150px",
                  mt: isSmallScreen ? 2 : 0,
                  "&:hover": {
                    bgcolor: "#554364",
                  },
                }}
                onClick={handleAddNewExercise}
              >
                New exercise
              </Button>
            )}
          </Box>

          <Modal
            open={showForm}
            onClose={handleCloseForm}
            aria-labelledby="form-modal"
            aria-describedby="form-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: isSmallScreen ? "90%" : "auto",
                maxWidth: "90%",
              }}
            >
              <FormPage addExercise={addExercise} />
              <ClearIcon
                onClick={handleCloseForm}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  cursor: "pointer",
                  color: "#fff",
                  margin: "15px",
                  zIndex: 99,
                }}
              />
            </Box>
          </Modal>
        </Grid>
      )}
    </Grid>
  );
};

export default UsersInterface;
