import { Avatar, Box, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import { Carousel, CarouselItem } from "@shivamchamoli1997/carousel";

interface IUserStories {}

const UserStories: React.FC<IUserStories> = (props) => {
  const [stories, setStories] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]);

  return (
    <Card sx={{ border: "1px solid rgb(219, 219, 219)" }}>
      <CardContent sx={{ padding: "16px 0px!important" }}>
        <Carousel
          infiniteSlide={false}
          autoSlide={false}
          autoSlideInterval={1000}
          pauseOnHover={true}
          indicatorPosition={"1"}
          allowSwipe={true}
          showIndicators={true}
          tansition={0.5}
          leftIndicatorContainerClass={"story-indicator-container"}
          rightIndicatorContainerClass={"story-indicator-container"}
        >
          <CarouselItem>
            {stories?.map((story, i) => (
              <Box
                key={i}
                sx={{
                  padding: "1px",
                  border: "2px solid #bc2a8d",
                  borderRadius: "50%",
                  margin: "auto",
                }}
              >
                <Avatar
                  sx={{ height: "56px", width: "56px" }}
                  src={"/avatar1.jpg"}
                />
              </Box>
            ))}
          </CarouselItem>
          <CarouselItem>
            {stories?.map((story, i) => (
              <Box
                key={i}
                sx={{
                  padding: "1px",
                  border: "2px solid #bc2a8d",
                  borderRadius: "50%",
                  margin: "auto",
                }}
              >
                <Avatar
                  sx={{ height: "56px", width: "56px" }}
                  src={"/avatar1.jpg"}
                />
              </Box>
            ))}
          </CarouselItem>
          <CarouselItem>
            {stories?.map((story, i) => (
              <Box
                key={i}
                sx={{
                  padding: "1px",
                  border: "2px solid #bc2a8d",
                  borderRadius: "50%",
                  margin: "auto",
                }}
              >
                <Avatar
                  sx={{ height: "56px", width: "56px" }}
                  src={"/avatar1.jpg"}
                />
              </Box>
            ))}
          </CarouselItem>
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default UserStories;
