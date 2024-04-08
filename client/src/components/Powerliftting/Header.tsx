import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  createTheme,
  Modal,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";
import RpeChart from "../../image/RPE-Chart.png";
import ClearIcon from "@mui/icons-material/Clear";
import FormPage, { FormPageProps } from "./FormModal/Form";

const Header: React.FC<FormPageProps> = ({ addExercise }) => {
  const [showImage, setShowImage] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleViewImage = () => {
    setShowImage(true);
  };

  const handleCloseImage = () => {
    setShowImage(false);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  const handleAddNewExercise = () => {
    setShowForm(true);
  };

  const theme = createTheme({});
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleExerciseAdded = () => {
    setShowForm(false); // Close the form after exercise is added
  };

  return (
    <Container
      component="header"
      maxWidth={isSmallScreen ? "xs" : "lg"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        my: 4,
        width: "100%",
      }}
    >
      <Typography
        variant="h4"
        alignItems="cenrer"
        sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
      >
        RPE Training Diary
      </Typography>

      <Grid
        container
        spacing={2}
        direction={isSmallScreen ? "column" : "row"}
        alignItems="center"
        justifyContent="center"
      >
        {!showImage && !showForm && (
          <Grid item>
            <Button
              variant="contained"
              startIcon={<ListAltIcon />}
              sx={{
                bgcolor: "#B78260",
                borderRadius: "20px",
                textTransform: "capitalize",
                width: isSmallScreen ? "100%" : "150px",
                paddingX: "20px",
                "&:hover": {
                  bgcolor: "#965046",
                },
              }}
              onClick={handleViewImage}
            >
              RPE chart
            </Button>
          </Grid>
        )}
        {!showImage && !showForm && (
          <Grid item>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                bgcolor: "#6C4D7B",
                borderRadius: "20px",
                textTransform: "capitalize",
                width: isSmallScreen ? "100%" : "150px",
                mt: isSmallScreen ? 1 : 0,

                "&:hover": {
                  bgcolor: "#554364",
                },
              }}
              onClick={handleAddNewExercise}
            >
              New exercise
            </Button>
          </Grid>
        )}
      </Grid>
      {/* modal for image */}
      <Modal
        open={showImage}
        onClose={handleCloseImage}
        aria-labelledby="image-modal"
        aria-describedby="image-modal-description"
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
          <img
            src={RpeChart}
            alt="RPE Chart"
            style={{ width: "100%", height: "auto" }}
          />
          <ClearIcon
            onClick={handleCloseImage}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              cursor: "pointer",
              color: "#fff",
              margin: "15px",
            }}
          />
        </Box>
      </Modal>
      {/* Modal for adding  new exeercise */}
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
          <FormPage
            addExercise={addExercise}
            onExerciseAdded={handleExerciseAdded}
          />
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
    </Container>
  );
};

export default Header;
