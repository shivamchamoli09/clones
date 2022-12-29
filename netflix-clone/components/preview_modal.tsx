import React from "react";
import {
  Modal,
  Box,
  Fade,
  LinearProgress,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { LikeIcon } from "../static/svgs/like";
import EpisodesList from "./episodes_list";
import { seasonContent } from "../seeds/content";
import CloseIcon from "@mui/icons-material/Close";

const modalContainerStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -12%)",
  width: 900,
  backgroundColor: "#181818",
  boxShadow: 24,
  borderRadius: "6px",
  outline: "none",
  p: 0,
};

interface IPreviewModal {
  onClose?: () => void;
}

const PreviewModal: React.FC<IPreviewModal> = (props) => {
  const { onClose } = props;
  
  const handleClose = () => {};

  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      sx={{ overflow: "scroll" }}
    >
      <Fade in={true}>
        <Box sx={modalContainerStyle}>
          <Box id="banner-container" sx={{ position: "relative" }}>
            <Box
              sx={{
                background: "linear-gradient(0deg,#181818,transparent 50%)",
                position: "relative",
              }}
            >
              <img src="/content/preview/naruto_banner.webp" width={"100%"} />

              <IconButton
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  background: "#000",
                }}
                onClick={onClose && onClose}
              >
                <CloseIcon sx={{ fontSize: "24px", color: "#FFF" }} />
              </IconButton>
            </Box>

            <Box
              id="info-container"
              position={"absolute"}
              sx={{ bottom: "15%", left: "6%", width: "40%" }}
            >
              <img src="/content/preview/naruto.webp" width={"100%"} />

              <Box id="action-container">
                <Box id="progress" display="flex" alignItems="center">
                  <LinearProgress
                    value={40}
                    variant="determinate"
                    sx={{
                      backgroundColor: "hsla(0,0%,100%,.3)",
                      height: "2px",
                      width: "75%",
                      mr: "10px",
                      ".MuiLinearProgress-bar": {
                        backgroundColor: "#e50914",
                      },
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ color: "hsla(0,0%,100%,.7)" }}
                  >
                    9 of 23m
                  </Typography>
                </Box>

                <Box id="actions" display="flex" alignItems={"center"} mt={1}>
                  <Button variant="contained">Resume</Button>

                  <IconButton
                    sx={{
                      ml: 1,
                      border: "1px solid rgba(255, 255, 255, 0.7)",
                      borderRadius: "50%",
                      maxWidth: "32px",
                      maxHeight: "32px",
                    }}
                  >
                    <AddIcon sx={{ color: "#FFF", fontSize: "22px" }} />
                  </IconButton>
                  <IconButton
                    sx={{
                      ml: 1,
                      border: "1px solid rgba(255, 255, 255, 0.7)",
                      borderRadius: "50%",
                      maxWidth: "32px",
                      maxHeight: "32px",
                    }}
                  >
                    <ThumbUpOutlinedIcon
                      sx={{ color: "#FFF", fontSize: "16px" }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box id="detail-container" sx={{ padding: "10px 20px" }}>
            {/* <Box display="flex"> */}
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                color: "#FFF",
                fontSize: "16px",
                alignItems: "center",
              }}
            >
              2012
              <Box
                sx={{
                  border: "0.5px solid #FFF",
                  padding: "0 5px",
                  ml: 1,
                  mr: 1,
                }}
              >
                U/A 16+
              </Box>
              9 seasons
              <Box
                sx={{
                  border: "0.5px solid #FFF",
                  padding: "0 5px",
                  ml: 1,
                  mr: 1,
                  fontSize: "0.7em",
                  height: "19px",
                }}
              >
                HD
              </Box>
            </Typography>
            {/* </Box> */}

            <Box display="flex" alignItems={"end"}>
              <Typography variant="body1" color="#FFF" sx={{ mt: 2 }}>
                Seasons Coming on Monday
              </Typography>

              {/* </Box> */}
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "rgb(229, 9, 20)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  ml: 1,
                  borderRadius: "3px",
                }}
              >
                <LikeIcon />
              </Box>
              <Typography sx={{ color: "#FFFF", ml: 1 }}>Most Liked</Typography>
            </Box>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              sx={{ mt: 1, color: "#FFF" }}
            >
              S14:E301 Paradox
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 1, color: "#FFF", maxWidth: "500px" }}
            >
              Temari’s Wind Style unit doesn’t manage to do any damage to the
              Third Raikage which, according to Dodai, probably has the last
              armor and attack.
            </Typography>
          </Box>

          <Box sx={{ padding: "10px 20px" }}>
            <EpisodesList seasons={seasonContent} />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default PreviewModal;
