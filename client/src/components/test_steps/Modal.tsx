import React, { FC } from "react";
import { Modal, Typography, Box, Fade, Backdrop } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "800px",
  width: "100%",
  height: "min-content",
  boxShadow: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "unset",
  outline: "none",

  "& > img": {
    width: "100%",
  },
};

const styleCancelIcon = {
  position: "absolute",
  top: "10px",
  right: "10px",
  fontSize: "35px",
  color: "lightgray",
  cursor: "pointer",
};

interface IModal {
  open: boolean;
  handleClose: () => void;
  img: string;
}

const ModalImg: FC<IModal> = (props) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
    >
      <Fade in={props.open}>
        <Box sx={style}>
          <CancelIcon sx={styleCancelIcon} onClick={props.handleClose} />
          <img src={props.img} alt="modal image" />
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalImg;
