import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Athlete from "../../image/athlete.svg";
import AddIcon from "@mui/icons-material/Add";
const UsersInterface: React.FC = () => {
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
      {/*  no data for users */}
      <Grid container item justifyContent="center">
        <Box sx={{ position: "relative", width: "100%" }} mb={12}>
          <Button
            variant="text"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "5px",
              fontWeight: "bold",
              bgcolor: "#fff",
              color: "#000",
              border: "1px solid #554364",
              borderRadius: "4px",
              textTransform: "capitalize",
              "&:hover": {
                bgcolor: "#ffff",
                color: "#000",
                cursor: "revert",
              },
            }}
          >
            There is no data, please add a new exercise.
          </Button>
        </Box>

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
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              bgcolor: "#6C4D7B",
              borderRadius: "20px",
              textTransform: "capitalize",
              "&:hover": {
                bgcolor: "#554364",
              },
            }}
          >
            New exercise
          </Button>
        </Box>
      </Grid>

      {/* data for users */}
      <Grid item justifyContent="center">
        {/* hello */}
      </Grid>
    </Grid>
  );
};

export default UsersInterface;
