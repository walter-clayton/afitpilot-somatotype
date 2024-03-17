import React from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  createTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";

const Header: React.FC = () => {
  const handleViewImage = () => {
    console.log("handleViewImage");
  };

  const handleAddNewExercise = () => {
    console.log("toggleModal");
  };

  const theme = createTheme({});

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      component="header"
      maxWidth={isSmallScreen ? "xs" : "lg"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        my: 10,
        width: "100%",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        RPE Training Diary
      </Typography>

      <Grid
        container
        spacing={2}
        direction={isSmallScreen ? "column" : "row"}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Button
            variant="contained"
            startIcon={<ListAltIcon />}
            sx={{
              bgcolor: "#B78260",
              borderRadius: "20px",
              textTransform: "capitalize",
              width: isSmallScreen ? "100%" : "150px",
              "&:hover": {
                bgcolor: "#965046",
              },
            }}
            onClick={handleViewImage}
          >
            RPE chart
          </Button>
        </Grid>

        <Grid item>
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
