import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import {
  AttachmentIcon,
  CameraIcon,
  ContactIcon,
  DocumentIcon,
  GalleryIcon,
  PollIcon,
  StickerIcon,
} from "@static";

interface IAttachmentSpeedDial {}

const attahmentActions = [
  { icon: <GalleryIcon />, name: "Photos & Videos" },
  { icon: <StickerIcon />, name: "Sticker" },
  { icon: <CameraIcon />, name: "Camera" },
  { icon: <DocumentIcon />, name: "Document" },
  { icon: <ContactIcon />, name: "Contact" },
  { icon: <PollIcon />, name: "Poll" },
];

const AttachmentSpeedDial: React.FC<IAttachmentSpeedDial> = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{
          position: "absolute",
          bottom: "-26px",
          borderRadius: "0!important",
          background: "inherit",
          width: "40px",
          ".MuiButtonBase-root": {
            background: "inherit",
            boxShadow: "none!important",
            ":hover": {
              backgroundColor: "inherit!important",
            },
          },
        }}
        icon={<AttachmentIcon />}
        onClick={handleOpen}
        onClose={handleClose}
        open={open}
      >
        {attahmentActions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default AttachmentSpeedDial;
