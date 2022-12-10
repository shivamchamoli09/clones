import React, { useEffect, useState } from "react";
import { Carousel, CarouselItem } from "@shivamchamoli1997/carousel";
import { Box, IconButton, SxProps, Typography } from "@mui/material";
import { CAROUSEL_ITEM_COUNT } from "../config/content.config";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { LikeIcon } from "../static/svgs/like";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface IContentCarousel {
  contents: Array<any>;
  title?: string;
  onContentClick?: (content: any) => void;
  containerStyles?: SxProps;
}

const ContentCarousel: React.FC<IContentCarousel> = (props) => {
  const { contents = [], title, onContentClick } = props;
  const [carouselContent, setCarouselContent] = useState<any>([]);

  // useEffect(() => {
  //   const listener = window.addEventListener(
  //     "resize",
  //     // this.updateWindowDimensions
  //   );
  //   return listener;
  // }, []);

  useEffect(() => {
    let tempArr = [];
    const newContent = [];
    for (let i = 0; i < contents.length; i++) {
      tempArr.push(contents[i]);
      if (tempArr.length === CAROUSEL_ITEM_COUNT) {
        newContent.push(tempArr);
        tempArr = [];
      }
    }
    setCarouselContent(newContent);
  }, [contents]);

  const handleMouseOver = (item: any) => {
    console.log(item);
  };

  return (
    <Box sx={props.containerStyles}>
      <Typography variant="h6" color={"#FFF"}>
        {title}
      </Typography>
      <Carousel
        infiniteSlide={false}
        autoSlide={false}
        autoSlideInterval={1000}
        pauseOnHover={true}
        showIndicators={true}
        // leftIndicator={<LeftIndicator />}
        // rightIndicator={<RightIndicator />}
        indicatorPosition={"1"}
        allowSwipe={true}
        rightIndicatorClass=""
        leftIndicatorClass=""
        tansition={0.5}
      >
        {carouselContent.map((carouselRow: any, index: number) => (
          <CarouselItem key={index}>
            {carouselRow?.map((content: any, i: number) => (
              <Box
                onClick={() => onContentClick && onContentClick(content)}
                key={i}
                // display="flex"
                m={1}
                sx={{ cursor: "pointer" }}
                onMouseOver={() => handleMouseOver(content)}
                className="item-container"
              >
                <img
                  src={content.imageUrl}
                  width={"100%"}
                  height={"100%"}
                  style={{ borderRadius: "3px", maxHeight: "170px" }}
                />
                <Box
                  sx={{
                    background: "#181818",
                    p: 2,
                    height: "100px",
                  }}
                  className="item-content"
                >
                  <Box display="flex">
                    <IconButton
                      sx={{
                        border: "1px solid rgba(255, 255, 255, 0.7)",
                        borderRadius: "50%",
                        maxWidth: "42px",
                        maxHeight: "42px",
                      }}
                    >
                      <AddIcon sx={{ color: "#FFF"}} />
                    </IconButton>
                    <IconButton
                      sx={{
                        ml: 1,
                        maxHeight: "42px",
                        maxWidth: "42px",
                        border: "1px solid rgba(255, 255, 255, 0.7)",
                        borderRadius: "50%",
                      }}
                    >
                      <ThumbUpOutlinedIcon sx={{ color: "#FFF" }} />
                    </IconButton>
                    <IconButton
                      sx={{
                        ml: 1,
                        maxHeight: "42px",
                        maxWidth: "42px",
                        border: "1px solid rgba(255, 255, 255, 0.7)",
                        borderRadius: "50%",
                      }}
                    >
                      <LikeIcon />
                    </IconButton>
                    <IconButton
                      sx={{
                        maxHeight: "42px",
                        maxWidth: "42px",
                        border: "1px solid rgba(255, 255, 255, 0.7)",
                        borderRadius: "50%",
                        ml: "auto",
                      }}
                    >
                      <KeyboardArrowDownIcon sx={{ color: "#FFF" }} />
                    </IconButton>
                  </Box>

                  <Box display="flex" mt={1}>
                    <Typography
                      variant="body1"
                      fontWeight={"bold"}
                      sx={{ color: "green" }}
                    >
                      97% Match
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight={"bold"}
                      sx={{ ml: 1, color: "#FFF" }}
                    >
                      3 Seasons
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </CarouselItem>
        ))}
      </Carousel>
    </Box>
  );
};

export default ContentCarousel;
