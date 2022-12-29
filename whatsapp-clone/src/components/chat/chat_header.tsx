import { Box, IconButton, Typography } from "@mui/material";
import { ChatHeaderContainerStyles } from "@styles/chat";
import { UsergroupIcon } from "static";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function ChatHeader() {
  return (
    <Box sx={ChatHeaderContainerStyles}>
      <Box display="flex" alignItems={"center"}>
        <IconButton sx={{ borderRadius: "50%", background: "#eae6df" }}>
          <UsergroupIcon />
        </IconButton>
        <Box id="user-details" ml={2}>
          <Typography variant="h4">Data group</Typography>
          <Typography variant="subtitle1">You</Typography>
        </Box>
        <Box ml="auto">
          <SearchIcon />
          <MoreVertIcon sx={{ ml: 3, mr: 2 }} />
        </Box>
      </Box>
    </Box>
  );
}
