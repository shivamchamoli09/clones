import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@shivamchamoli1997/carousel/dist/index.css";
import { Box } from "@mui/material";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Box position={"relative"}>
      <Header />
      <Component {...pageProps} />
    </Box>
  );
}

export default MyApp;
