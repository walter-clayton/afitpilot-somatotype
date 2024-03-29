import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { ExerciseFormState } from "../FormModal/UtilTypes";

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

const HistoryCard: React.FC<{ filteredExercises: ExerciseFormState[] }> = ({
  filteredExercises,
}) => {
  const [openNewScore, setOpenNewScore] = useState<boolean>(false);

  useEffect(() => {
    console.log("coming from History exeercise:", filteredExercises);
  }, [filteredExercises]);

  const newScore = () => {
    setOpenNewScore(true);
  };

  const handleChange = () => {
    console.log("delete exercise");
  };

  const handleDelete = () => {
    console.log("delete exercise");
  };

  const handleSave = () => {
    console.log(" exercise saved");
    setOpenNewScore(false);
  };

  const handleCancel = () => {
    console.log(" exercise cancled");
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

      {/* card history to perfprm crud operations */}
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
        <Grid
          style={{
            width: "100%",
          }}
        >
          {/* intended score */}
          <ListItem
            sx={{ color: "#56A278", fontWeight: "bold", display: "inline" }}
          >
            160kg
          </ListItem>
          {/* prescribed RPE */}
          <ListItem
            sx={{ color: "#56A278", fontWeight: "bold", display: "inline" }}
          >
            RPE 8
          </ListItem>
          {/* actaul RPE  */}
          <ListItem
            sx={{ color: "#9B3519", fontWeight: "bold", display: "inline" }}
          >
            RPE 8
          </ListItem>
          {/* intended score */}
          <ListItem
            sx={{ color: "#9B3519", fontWeight: "bold", display: "inline" }}
          >
            160 kg
          </ListItem>
          {/* date */}
          <ListItem sx={{ fontWeight: "bold", display: "inline" }}>
            10/01/2024
          </ListItem>
          {/* notes */}
          <ListItem sx={{ color: "#4B4B4B", display: "inline" }}>
            4 X 10
          </ListItem>
          {/* delete exercies by id  */}
          <DeleteIcon
            sx={{
              marginTop: "12px",
              marginLeft: "80px",
              marginRight: "10px",
              cursor: "pointer",
              display: "inline",
            }}
            onClick={handleDelete}
          />
        </Grid>

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
                onChange={(e) => handleChange()}
                value={""}
                placeholder="140 kg"
                size="small"
              />
              <Select
                label="Prescribed RPE"
                value={1}
                size="small"
                onChange={(e) => handleChange()}
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
                value={1}
                onChange={(e) => handleChange()}
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
              <TextField
                sx={{ width: "80px", bgColor: "#9B361A" }}
                type="number"
                variant="outlined"
                onChange={(e) => handleChange()}
                value=""
                placeholder="140 kg"
                size="small"
              />
              <TextField
                type="date"
                variant="outlined"
                value={""}
                onChange={(e) => handleChange()}
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
                // value={formState.notes}
                onChange={(e) => handleChange()}
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
