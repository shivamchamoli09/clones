import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HEADER_LINK } from "../seeds/header.seeds";
import LogoIcon from "../static/svgs/logo";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

interface IHeader {}

const Header: React.FC<IHeader> = (props) => {
  const [headerStyles, setHeaderStyles] = useState({});
  useEffect(() => {
    initScrollEventListener();
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const initScrollEventListener = () => {
    window.addEventListener("scroll", listenScrollEvent);
  };
  const listenScrollEvent = (e: Event) => {
    if (window.scrollY > 100) {
      setHeaderStyles({ background: "rgb(20, 20, 20)" });
    } else {
      setHeaderStyles({ background: "inherit" });
    }
  };
  return (
    <Stack
      direction={"row"}
      sx={{
        // background: "rgb(20, 20, 20)",
        alignItems: "center",
        position: "fixed",
        top: 0,
        zIndex: "9",
        width: "100%",
        pl: 8,
        transition: "0.6s",
        ...headerStyles,
      }}
    >
      <LogoIcon />

      <Box display="flex" ml={2}>
        {HEADER_LINK.map((content, i: number) => (
          <Typography
            key={i}
            variant="body1"
            fontSize={"14px"}
            sx={{
              color: "#FFF",
              ml: 3,
              cursor: "pointer",
              "& :hover": { color: "#cccc" },
            }}
          >
            {content.label}
          </Typography>
        ))}
      </Box>

      <Box display="flex" ml="auto" mr={6} alignItems="center">
        <SearchIcon sx={{ color: "#FFF" }} />
        <Typography
          variant="body1"
          fontSize={"14px"}
          sx={{ color: "#FFF", ml: 2 }}
        >
          Children
        </Typography>

        <NotificationsOutlinedIcon sx={{ color: "#FFF", ml: 2 }} />

        <img
          src="/content/profileavatar.png"
          style={{ borderRadius: "3px", marginLeft: "16px" }}
        />
      </Box>
    </Stack>
  );
};

export default Header;
