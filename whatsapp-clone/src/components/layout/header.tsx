import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { MessageIcon, StatusIcon, UsergroupIcon } from "@static";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";

export default function Header({ onProfileClick }: any) {
  return (
    <Box display={"flex"} alignItems="center" sx={{ padding: "10px 14px" }}>
      <IconButton onClick={onProfileClick}>
        <Image
          src={"/assets/avatar1.jpg"}
          width={42}
          height={42}
          alt={""}
          style={{ borderRadius: "50%" }}
        />
      </IconButton>

      <Stack ml="auto" direction={"row"} alignItems="center" spacing={2}>
        <UsergroupIcon />
        <StatusIcon />
        <MessageIcon />
        <MoreVertIcon />
      </Stack>
    </Box>
  );
}
