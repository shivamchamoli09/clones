import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ThemeProvider } from "@mui/material";
import Header from "@components/header";
import "@shivamchamoli1997/carousel/dist/index.css";
import { theme } from "../core/theme";
import { Provider } from "react-redux";
import store from "@core/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme("light")}>
        <Box>
          <Header />
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
