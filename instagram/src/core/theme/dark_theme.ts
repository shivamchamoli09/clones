import { createTheme, Theme } from "@mui/material";

export const darkTheme: Theme = createTheme({
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
      fotnSize: "26px",
      lineHeight: 1.167,
    },
    h2: {
      fotnSize: "23px",
      lineHeight: 1.167,
    },
    h3: {
      fotnSize: "20px",
      lineHeight: 1.167,
    },
    h4: {
      fotnSize: "18px",
      lineHeight: 1.167,
    },
    h5: {
      fotnSize: "16px",
      lineHeight: 1.167,
    },
    h6: {
      fotnSize: "14px",
      lineHeight: 1.167,
    },
    subtitle1: {
      fotnSize: "13px",
      lineHeight: 1.167,
    },
    subtitle2: {
      fotnSize: "12px",
      lineHeight: 1.167,
    },
    body1: {
      fotnSize: "15px",
      lineHeight: 1.167,
    },
    body2: {
      fotnSize: "13px",
      lineHeight: 1.167,
    },
    caption: {
      fotnSize: "12px",
      lineHeight: 1.167,
    },
  },
});
