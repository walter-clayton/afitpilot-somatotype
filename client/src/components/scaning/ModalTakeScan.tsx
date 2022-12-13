import React, { FC, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: 400,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

interface IModal {
  openModalScan: boolean;
  setOpenModalScan: (bool: boolean) => void;
  getIdScan: () => void;
}

const ModalTakeScan: FC<IModal> = (props) => {
  const [age, setAge] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const [msgErrorAge, setMsgErrorAge] = useState<string>("Empty field");
  const [msgErrorWeight, setMsgErrorWeight] = useState<string>("Empty field");
  const [errorGender, setErrorGender] = useState<boolean>(true);

  const handleClose = () => {
    setAge("");
    setWeight("");
    setGender("");
    setMsgErrorAge("Empty field");
    setMsgErrorWeight("Empty field");
    setErrorGender(true);
    props.setOpenModalScan(false);
  };

  const handleAgeChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    msgErrorAge !== "" && setMsgErrorAge("");
    event.currentTarget.value === "" && setMsgErrorAge("Empty field");
    isNaN(Number(event.currentTarget.value)) &&
      setMsgErrorAge("Age must be a number");
    setAge(event.currentTarget.value);
  };

  const handleWeightChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    msgErrorWeight !== "" && setMsgErrorWeight("");
    event.currentTarget.value === "" && setMsgErrorWeight("Empty field");
    isNaN(Number(event.currentTarget.value)) &&
      setMsgErrorWeight("Weight must be a number");
    setWeight(event.currentTarget.value);
  };

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    errorGender && setErrorGender(false);
    event.target.value === "" && setErrorGender(true);
    setGender(event.target.value);
  };

  const handleClick = () => {
    props.getIdScan();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.openModalScan}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={props.openModalScan}>
        <Box sx={style}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              mb: 4,
            }}
          >
            Please, enter your
          </Typography>
          <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            sx={{ mb: 3 }}
            error={msgErrorAge !== ""}
            helperText={msgErrorAge}
            onChange={handleAgeChange}
          />
          <TextField
            id="outlined-basic"
            label="Weight in kg"
            variant="outlined"
            sx={{ mb: 3 }}
            error={msgErrorWeight !== ""}
            helperText={msgErrorWeight}
            onChange={handleWeightChange}
          />
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              error={errorGender}
              onChange={handleGenderChange}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
          <Button
            sx={{
              borderRadius: "40px",
              display: "flex",
              margin: "20px auto 0 auto",
              backgroundColor: "RGB(51, 164, 116)",
              padding: "20px 50px",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "30px",
              "&:hover": { bgcolor: "#28835c" },
            }}
            variant="contained"
            disabled={
              errorGender || msgErrorAge !== "" || msgErrorWeight !== ""
            }
            onClick={handleClick}
          >
            Start scanning !
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalTakeScan;
