import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ThemeProvider } from "@mui/material";
import { globalTheme } from "@core/theme";
import { ContainerStyles } from "@styles/common";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={globalTheme()}>
      <Box sx={ContainerStyles}>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
