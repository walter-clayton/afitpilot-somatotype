import React from "react";
// import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Slider from "@mui/material/Slider";

const Box = styled("div")({
  width: "100%",
});

export const LiveSomatotypeCalculator: React.FC = () => {
  return (
    <Box>
      <div>
        <div>Live Somatotype</div>
        <form style={{ display: "flex" }}>
          <label>Age</label>
          <Slider max={10} min={0} size="medium" valueLabelDisplay="off" />
          <div>30 years</div>
        </form>
        <div> 1 - 2 - 2</div>
      </div>
    </Box>
  );
};
