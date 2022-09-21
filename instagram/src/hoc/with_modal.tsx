import React from "react";
import {
  Avatar,
  Backdrop,
  Box,
  Fade,
  Grid,
  Modal,
  Typography,
} from "@mui/material";

interface IWithModal {
  children: React.ReactNode;
  onClose?: () => void;
  modalWidth?: number;
  modalStyles?: object;
}

const ModalWrapper: React.FC<IWithModal> = (props) => {
  const { children, onClose, modalWidth = 1000, modalStyles } = props;

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: modalWidth,
    maxHeight: 700,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    ...modalStyles,
  };

  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropComponent={Backdrop}
      onClose={onClose}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={true}>
        <Box sx={style}>{children}</Box>
      </Fade>
    </Modal>
  );
};

export default ModalWrapper;
