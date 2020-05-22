import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

export default ({ videos, onVideoSelect, handleDescription }) => {
  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      handleDescription={handleDescription}
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
