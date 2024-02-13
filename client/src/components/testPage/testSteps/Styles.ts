import { styled } from "@mui/system";
import { textAlign } from "html2canvas/dist/types/css/property-descriptors/text-align";

// to center the form container to the center of the page
export const Container = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "10rem",
  marginBottom: "10rem",
  padding: "0 20px", // Add some padding on smaller screens
});

export const MySlider: React.CSSProperties = {
  // width: "50%",
};

export const formStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  padding: "30px 30px",
  justifyContent: "space-between",
  width: "100%",
};

export const formInputs: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const Box = styled("div")({
  maxWidth: "700px", // Use maxWidth for scalability
  width: "100%", // Make it responsive
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // padding: "20px", // Add padding to ensure content does not touch the sides
});

export const topTitle: React.CSSProperties = {
  background: "#1875A3",
  width: "100%",
  maxWidth: "700px", // Ensure it spans the full width of its parent
  textAlign: "center",
  height: "56px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontWeight: "bold",
  fontSize: "20px", // Adjust font size for smaller screens
  borderRadius: "20px 20px 0 0", // Only round the top corners
};

export const results: React.CSSProperties = {
  background: "#6C4D7B",
  maxWidth: "700px",
  width: "100%",
  textAlign: "center",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontWeight: "bold",
  fontSize: "30px",
};

export const resultsDesc: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  padding: "20px 0",
};

export const resultsDescTitle: React.CSSProperties = {
  color: "#B78260",
  fontWeight: "bold",
  fontSize: "30px",
};
export const resultsDescName: React.CSSProperties = {
  color: "#FFC90B",
  fontWeight: "bold",
  fontSize: "25px",
};
export const buttonStyle: React.CSSProperties = {
  color: "#FFFF",
  fontWeight: "normal",
  fontSize: "25px",
  backgroundColor: "#1875A3",
  outline: "none",
  border: "none",
  borderRadius: "30px",
  padding: "15px 35px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  marginBottom: "40px",
};
