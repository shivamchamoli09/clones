import { Box, IconButton, Typography } from "@mui/material";
import { ProfileContainerStyles } from "@styles/components.styles";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { SlideHoc } from "@hoc";

interface IProfile {
  goBack: () => void;
}

const Profile = React.forwardRef((props: any, ref) => {
  const { goBack } = props;
  return (
    <SlideHoc ref={ref}>
      <Box sx={ProfileContainerStyles}>
        <Box mt={4} display="flex" p={2} alignItems="center">
          <IconButton onClick={goBack}>
            <ArrowBackIcon sx={{ color: "#FFF" }} />
          </IconButton>
          <Typography variant="h4" sx={{ color: "#FFF", ml: 2 }}>
            Profile
          </Typography>
        </Box>

        <Box
          sx={{
            background: "#eae6df",
            height: "200px",
            // mt: 1,
            "background-image": "linear-gradient(180deg,#eae6df,#d1d7db)",
          }}
        ></Box>

        <Box
          sx={{
            background: "#FFF",
            height: "80px",
            boxShadow: "0 1px 3px rgba(11,20,26,0.08)",
            p: 3,
          }}
        >
          <Typography variant="body1" sx={{ color: "#008069" }}>
            Your name
          </Typography>
          <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
            <Typography variant="body1">Shivam Chamoli</Typography>
            <EditIcon sx={{ color: "#8696a0" }} />
          </Box>
        </Box>

        <Box sx={{ background: "#eae6df" }}>
          <Typography variant="body1">
            This is not your username or pin. This name will be visible to your
            WhatsApp contacts.
          </Typography>
        </Box>

        <Box
          sx={{
            background: "#FFF",
            height: "200px",
            boxShadow: "0 1px 3px rgba(11,20,26,0.08)",
          }}
        >
          <Typography variant="body1" sx={{ color: "#008069" }}>
            About
          </Typography>
          <Box display={"flex"} sx={{ justifyContent: "space-between" }}>
            <Typography variant="body1">Status</Typography>
            <EditIcon sx={{ color: "#8696a0" }} />
          </Box>
        </Box>
      </Box>
    </SlideHoc>
  );
});

Profile.displayName = "Profile";
export default Profile;
