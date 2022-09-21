import { createTheme, Theme } from "@mui/material";

export const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    htmlFontSize: 16,
    fontWeightBold: 700,
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontFamily: "Poppins",
    h1: {
      fontSize: "26px",
      lineHeight: 1.167,
    },
    h2: {
      fontSize: "23px",
      lineHeight: 1.167,
    },
    h3: {
      fontSize: "20px",
      lineHeight: 1.167,
    },
    h4: {
      fontSize: "18px",
      lineHeight: 1.167,
    },
    h5: {
      fontSize: "16px",
      lineHeight: 1.167,
    },
    h6: {
      fontSize: "14px",
      lineHeight: 1.167,
    },
    subtitle1: {
      fontSize: "14px",
      lineHeight: 1.167,
      color: "rgb(142, 142, 142)",
    },
    subtitle2: {
      fontSize: "12px",
      lineHeight: 1.167,
      color: "rgb(142, 142, 142)",
    },
    body1: {
      fontSize: "14px",
      lineHeight: 1.167,
    },
    body2: {
      fontSize: "13px",
      lineHeight: 1.167,
    },
    caption: {
      fontSize: "10px",
      lineHeight: 1.167,
      color: "rgb(142, 142, 142)",
    },
  },
});
