import React, { FC } from "react";
import { Modal, useMediaQuery, Box, Fade, Backdrop } from "@mui/material";
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

  "& > video": {
    background: "black",
  },
};

const styleCancelIcon = {
  position: "absolute",
  top: "-50px",
  right: "0",
  fontSize: "50px",
  color: "#eeeeee",
  cursor: "pointer",
};

interface IModal {
  open: boolean;
  handleClose: () => void;
  img?: string;
  video?: string;
  poster?: string;
}

const ModalImg: FC<IModal> = (props) => {
  const sm = useMediaQuery("(max-width:600px)");
  const md = useMediaQuery("(max-width:900px)");

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

          {props.img ? (
            <img src={props.img} alt="img" />
          ) : (
            <video poster={props.poster} width="100%" height="500px" controls>
              <source src={props.video} type="video/mp4" />
            </video>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalImg;
