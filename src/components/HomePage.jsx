import React, { useState, createContext } from "react";
import { Grid, Box } from "@mui/material";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "./api/youtube";

export const VideoContext = createContext();
const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  return (
    <React.Fragment>
      <Box>
        <Grid container spacing={5} className="ui-grid">
          <Grid size={12} className="grid-item">
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <VideoContext.Provider value={{videos, setSelectedVideo, handleDescription}}>
            <Grid size={{ xs: 12, sm: 8, md: 8 }}>
              <VideoDetail video={selectedVideo}  />
            </Grid>
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <VideoList
                videos={videos}
                onVideoSelect={setSelectedVideo}
                handleDescription={handleDescription}
              />
            </Grid>
          </VideoContext.Provider>
        </Grid>
      </Box>
    </React.Fragment>
  );

  async function handleSubmit(searchTerm) {
    const {
      data: { items: videos }
    } = await youtube.get("search", {
      params: {
        q: searchTerm
        //type: "playlist"
      }
    });

    setVideos(videos);
    if (!selectedVideo) setSelectedVideo(videos[0]);
    handleDescription(videos[0]);
  }
  

  async function handleDescription(selectedVideo) {
    const {
      data: { items: newVideo }
    } = await youtube.get("videos", {
      params: {
        id: selectedVideo.id.videoId,
      }
    });
    setSelectedVideo(newVideo[0]);
  }
};

export default HomePage;
