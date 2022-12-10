import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Typography, Button } from "@mui/material";
import ContentCarousel from "../components/content_carousel";
import { contents } from "../seeds/content";
import Banner from "../components/banner";
import { generateContent } from "../services/generator";
import PreviewModal from "../components/preview_modal";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [activeItem, setActiveItem] = useState({} as any);

  return (
    <Box pb={3} sx={{ background: "#141414" }}>
      <Banner />

      {activeItem?.id && (
        <PreviewModal
          onClose={() => {
            setActiveItem({});
          }}
        />
      )}

      <Box id="series-body" p={5}>
        <ContentCarousel
          contents={generateContent(12)}
          title={"Recently Added"}
          onContentClick={setActiveItem}
        />

        <ContentCarousel
          contents={generateContent(12)}
          title={"Trending Now"}
          containerStyles={{ mt: 4 }}
          onContentClick={setActiveItem}
        />
        <ContentCarousel
          contents={generateContent(12)}
          title={"Imaginative Fantasy Anime"}
          onContentClick={setActiveItem}
          containerStyles={{ mt: 4 }}
        />

        <ContentCarousel
          contents={generateContent(12)}
          title={"Bingeworthy TV Thrillers"}
          containerStyles={{ mt: 4 }}
          onContentClick={setActiveItem}
        />
      </Box>
    </Box>
  );
};

export default Home;
