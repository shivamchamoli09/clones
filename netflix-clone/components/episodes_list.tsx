import {
  Box,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Select,
  Typography,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EpisodeSuggestion from "./episode_suggestions";
import { suggestionEpisides } from "../seeds/content";
import DividerComponent from "./divider";

type SeasonType = {
  name: string;
  contentName: string;
  cast?: string;
  genre?: string;
  type?: string;
  episodes: any;
};

interface IEpisodesList {
  seasons: Array<SeasonType>;
  title?: string;
}

const EpisodesList: React.FC<IEpisodesList> = (props) => {
  const { seasons, title = "Episodes" } = props;
  const [activeSeasonIndex, setActiveSeasonIndex] = useState<number>(0);
  const [episodes, setEpisodes] = useState<Array<any>>(seasons[0].episodes);

  useEffect(() => {
    setEpisodes(seasons[activeSeasonIndex].episodes);
  }, [activeSeasonIndex]);

  return (
    <Box>
      <Box id="heading-container" display="flex" alignItems={"center"}>
        <Typography variant="h5" sx={{ color: "#FFF" }}>
          {title}
        </Typography>
        <Box ml="auto">
          <Select
            fullWidth
            defaultValue={seasons[0].name}
            onChange={(val: any) => {
              console.log(val);
            }}
            sx={{
              width: "170px",
              color: "#FFF",
              "& .MuiSelect-select": {
                border: "0.1em solid rgb(77, 77, 77)",
              },
              "& .MuiSvgIcon-root": {
                color: "#FFF",
              },
            }}
          >
            {seasons.map((season: SeasonType, i: number) => (
              <MenuItem key={i}>{season.name}</MenuItem>
            ))}
          </Select>
        </Box>
      </Box>

      <List>
        {episodes.map((episode: any, i: number) => (
          <ListItem key={i} sx={{ p: 3 }}>
            <Box display={"flex"} alignItems="center">
              <Typography variant="h6" sx={{ color: "#FFF" }}>
                {i + 1}
              </Typography>
              <img
                src={episode.imageUrl}
                style={{
                  width: "130px",
                  height: "74px",
                  marginLeft: "16px",
                  borderRadius: "6px",
                }}
              />

              <Box ml={2}>
                <Typography
                  variant="body1"
                  fontSize={"1em"}
                  fontWeight={"bold"}
                  sx={{ color: "#FFF" }}
                >
                  {episode.name}
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={"14px"}
                  sx={{ color: "#d2d2d2" }}
                >
                  {episode.description}
                </Typography>
              </Box>
            </Box>
            <Divider orientation="horizontal" sx={{ color: "#FFF" }} />
          </ListItem>
        ))}
      </List>

      <Box id="divider-container">
        <DividerComponent />
      </Box>

      <Box id="suggestions" mt={3}>
        <EpisodeSuggestion episodes={suggestionEpisides} />

        <DividerComponent />
      </Box>

      <Box id="about-container" mt={5}>
        <Typography variant="h5" fontWeight="bold" sx={{ color: "#FFF" }}>
          About {seasons[activeSeasonIndex].contentName}
        </Typography>
        <Box id="about-wrapper" mt={2}>
          <Box display={"flex"} mt={1}>
            <Typography variant="body2" sx={{ color: "#777" }}>
              Cast:&nbsp;
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              {seasons[activeSeasonIndex].cast}
            </Typography>
          </Box>

          <Box display={"flex"} mt={1}>
            <Typography variant="body2" sx={{ color: "#777" }}>
              Genres:&nbsp;
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              {seasons[activeSeasonIndex].genre}
            </Typography>
          </Box>

          <Box display={"flex"} mt={1}>
            <Typography variant="body2" sx={{ color: "#777" }}>
              This show is:&nbsp;
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              {seasons[activeSeasonIndex].type}
            </Typography>
          </Box>

          <Box display={"flex"} mt={1}>
            <Typography variant="body2" sx={{ color: "#777" }}>
              Maturity Rating:
            </Typography>
            <Box>
              <Box
                sx={{
                  border: "1px solid #d2d2d2",
                  padding: "1px 6px",
                  fontSize: "14px",
                  color: "#FFF",
                  ml: 1,
                }}
              >
                U/A 16+
              </Box>
              {/* <Typography variant="caption" sx={{ color: "#fff" }}></Typography> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EpisodesList;
