import { Box, Typography, Grid, IconButton } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

interface IEpisodeSuggestions {
  episodes: Array<any>;
}

const EpisodeSuggestion: React.FC<IEpisodeSuggestions> = ({ episodes }) => {
  return (
    <Box>
      <Typography variant="h5" fontWeight={"bold"} color="#FFF">
        More Like This
      </Typography>

      <Grid container id="suggestion-container" spacing={3} mt={0}>
        {episodes.map((episode: any, i: number) => (
          <Grid key={i} item xs={6} md={4} sx={{ maxWidth: "240px" }}>
            <Box sx={{ backgroundColor: "#2f2f2f", borderRadius: "4px" }}>
              <img
                src={episode.imageUrl}
                style={{ width: "100%", borderRadius: "4px 4px 0 0" }}
              />
              <Box id="episode-description" p={2}>
                <Box id="rating-container" display="flex">
                  <Box id="ratings">
                    <Typography
                      variant="body1"
                      fontWeight={"bold"}
                      sx={{ color: "#46d369" }}
                    >{`${episode.matchRating}% Match`}</Typography>
                    <Box display="flex" sx={{ color: "#FFF" }}>
                      <Box
                        sx={{
                          border: "1px solid #d2d2d2",
                          padding: "1px 6px",
                          fontSize: "14px",
                          color: "#FFF",
                          mr: 1,
                        }}
                      >
                        U/A 16+
                      </Box>
                      {episode.releaseDate}
                    </Box>
                  </Box>

                  <IconButton
                    sx={{
                      ml: "auto",
                      border: "1px solid rgba(255, 255, 255, 0.7)",
                      maxWidth: "42px",
                      maxHeight: "42px",
                    }}
                  >
                    <AddIcon sx={{ color: "#FFF", fontSize: "24px" }} />
                  </IconButton>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#d2d2d2", mt: 2, letterSpacing: "0.4px" }}
                >
                  {episode.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EpisodeSuggestion;
