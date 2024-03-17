import React, { useState } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useNavigate } from "react-router-dom";
import RpeChart from "../../image/RPE-Chart.png";
import ClearIcon from "@mui/icons-material/Clear";

const Header = () => {
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(false);

  const handleViewImage = () => {
    setShowImage(true);
  };

  const handleCloseImage = () => {
    setShowImage(false);
  };

  const handleLinkClick = () => {
    navigate("/");
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginY: "60px",
        width: "100vw",
        backgroundColor: "",
      }}
    >
      <Typography
        variant="h4"
        alignItems="cenrer"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        RPE Training Diary
      </Typography>

      <Grid container spacing={2} direction="row" alignItems="center">
        {showImage && (
          <div
            style={{
              position: "relative",
              maxWidth: "100%",
              marginBottom: "10px",
            }}
          >
            <img src={RpeChart} alt="RPE Chart" style={{ maxWidth: "100%" }} />
            <ClearIcon
              onClick={handleCloseImage}
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                cursor: "pointer",
                color: "#fff",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "50%",
                margin: "10px",
              }}
            />
          </div>
        )}
        {!showImage && (
          <Grid item sx={{ marginLeft: "40px" }}>
            <Button
              variant="contained"
              startIcon={<ListAltIcon />}
              sx={{
                backgroundColor: "#B78260",
                borderRadius: "20px",
                textTransform: "capitalize",
                width: "150px",
                "&:hover": {
                  backgroundColor: "#965046", // Optional: hover state
                },
              }}
              onClick={handleViewImage}
            >
              RPE chart
            </Button>
          </Grid>
        )}
        {!showImage && (
          <Grid item>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                backgroundColor: "#6C4D7B",
                borderRadius: "20px",
                textTransform: "capitalize",
                width: "150px",
                "&:hover": {
                  backgroundColor: "#554364", // Optional: hover state
                },
              }}
              onClick={handleLinkClick}
            >
              New exercise
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid
        item
        sx={{
          backgroundColor: "lightgray",
          width: "100vw",
          height: "500px",
          marginTop: "60px",
        }}
      >
        hello
      </Grid>
    </Container>
  );
};

export default Header;
