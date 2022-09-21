import { darkTheme } from "./dark_theme";
import { lightTheme } from "./light_theme";

export const theme = (mode: "light" | "dark") =>
  mode === "light" ? lightTheme : darkTheme;
