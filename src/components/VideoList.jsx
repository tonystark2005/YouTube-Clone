import React from "react";
import { Grid } from "@mui/material";

import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const listOfVideos = videos.map(video => (
    <VideoItem
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
