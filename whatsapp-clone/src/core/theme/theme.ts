import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { typography } from "./typography";

export const globalTheme = (mode = "light") =>
  createTheme({
    palette,
    typography,
  });
